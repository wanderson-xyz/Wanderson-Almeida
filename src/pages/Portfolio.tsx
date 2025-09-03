import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'

const Portfolio = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Meu <span className="text-gradient-blue">Portfólio</span>
          </h1>
          
          <p className="text-xl text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Projetos que demonstram minha paixão por criar soluções inovadoras
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover-lift group"
              >
                <div className="aspect-video bg-gradient-subtle relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-text-secondary text-sm">Project Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-brand-blue font-medium bg-brand-blue/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="hero" size="sm" className="flex-1" asChild>
                      <Link to={`/portfolio/${project.slug}`}>
                        Ver Projeto
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                    
                    <Button variant="outline" size="icon-sm">
                      <Github className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio