import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    title: "Barber Pro",
    description: "Site completo com funções de agendamento e seo otimizado para barbearias.",
    category: "Web",
    image: "/lovable-uploads/1.png",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "MongoDB"],
    likes: "+2",
    featured: true
  },
  {
    id: 2,
    title: "Escritório Maciel & Associados", 
    description: "Langing Page para um escritório de advogados moderno e otimizado.",
    category: "Mobile",
    image: "/lovable-uploads/4.png",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    likes: "+1",
    featured: true
  },
  {
    id: 3,
    title: "Langing Page para Psicóloga Dra. Fontenelle",
    description: "Langing Page para divulgação dos trabalhos da psicóloga Fontenelle.",
    category: "Web", 
    image: "/lovable-uploads/3.png",
    technologies: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    likes: "+1",
    featured: false
  },
  {
    id: 4,
    title: "Institucional Tio Márcio",
    description: "Site criado para promover os serviços do Transporte escolar Tio Márcio.",
    category: "Web",
    image: "/lovable-uploads/2.png", 
    technologies: ["Vue.js", "D3.js", "Node.js"],
    likes: "+1",
    featured: false
  },
  {
    id: 5,
    title: "Autoescola Plus",
    description: "Site institucional criado com foco em SEO e desempenho.",
    category: "Mobile",
    image: "/lovable-uploads/5.png",
    technologies: ["Flutter", "Firebase", "WebRTC"],
    likes: "+1", 
    featured: false
  },
  {
    id: 6,
    title: "Portifólio",
    description: "Projeto da criação de um portifólio moderno e responsivo.",
    category: "Web",
    image: "/lovable-uploads/9b7b01c0-d3e4-4860-b2e3-5ec77642d910.png",
    technologies: ["Next.js", "OpenAI API", "Prisma"],
    likes: "+1",
    featured: false
  }
]

const categories = ["Todos", "Web", "Mobile"]

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos")
  
  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)
  
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="portfolio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-blue">
            Portfólio
          </h2>
          
          <p className="text-lg text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando diferentes tecnologias e abordagens.
          </p>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-12">
              Projetos em Destaque
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group glass rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={project.category === "Web" ? "default" : "secondary"}
                        className="font-medium"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-brand-blue/20 text-brand-blue rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-background/50 rounded-lg transition-colors">
                          <Github className="h-4 w-4" />
                        </button>
                        <button className="p-2 hover:bg-background/50 rounded-lg transition-colors">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="text-sm text-text-secondary">
                        {project.likes}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-2 p-1 bg-background/50 rounded-lg">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "hero" : "ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="px-6"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.category === "Web" ? "default" : "secondary"}
                      className="font-medium"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-brand-blue/20 text-brand-blue rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-background/50 text-text-secondary rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-background/50 rounded-lg transition-colors">
                        <Github className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-background/50 rounded-lg transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-sm text-text-secondary">
                      {project.likes}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* See All Projects Button */}
          <div className="text-center">
            <Button variant="outline" className="group">
              Ver Todos os Projetos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}