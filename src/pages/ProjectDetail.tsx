import { motion } from 'framer-motion'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getProjectBySlug, getNextProject } from '@/data/projects'
import { useState } from 'react'

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  if (!slug) {
    return <Navigate to="/portfolio" replace />
  }
  
  const project = getProjectBySlug(slug)
  const nextProject = getNextProject(slug)

  if (!project) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Button asChild>
            <Link to="/portfolio">Voltar ao Portfólio</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Back button */}
            <Button variant="ghost" className="mb-8" asChild>
              <Link to="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Portfólio
              </Link>
            </Button>

            {/* Project hero image */}
            <div className="aspect-video bg-gradient-subtle rounded-xl mb-8 relative overflow-hidden group hover-lift">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-text-secondary">Project Hero Image</span>
              </div>
              <div className="absolute inset-0 bg-gradient-hero opacity-50" />
            </div>

            {/* Project title and actions */}
            <div className="flex flex-col lg:flex-row gap-8 mb-12">
              <div className="flex-1">
                <Badge className="mb-4 bg-brand-blue/10 text-brand-blue border-brand-blue/20">
                  {project.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                  {project.tagline}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 lg:flex-col">
                {project.liveUrl && (
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="group" 
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Open Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" size="lg" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Ver Código
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Objective, Challenges, Solutions Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-8 mb-16"
            >
              <div className="glass p-8 rounded-xl hover-lift" id="objective">
                <h2 className="text-2xl font-semibold mb-4 text-brand-blue">Objetivo</h2>
                <p className="text-text-secondary leading-relaxed">
                  {project.objective}
                </p>
              </div>
              
              <div className="glass p-8 rounded-xl hover-lift" id="challenges">
                <h2 className="text-2xl font-semibold mb-4 text-brand-orange">Desafios</h2>
                <p className="text-text-secondary leading-relaxed">
                  {project.challenges}
                </p>
              </div>
              
              <div className="glass p-8 rounded-xl hover-lift" id="solutions">
                <h2 className="text-2xl font-semibold mb-4 text-brand-purple">Soluções</h2>
                <p className="text-text-secondary leading-relaxed">
                  {project.solutions}
                </p>
              </div>
            </motion.div>

            {/* Process Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl mb-16" id="process"
            >
              <h2 className="text-2xl font-semibold mb-6 text-brand-cyan">Processo Visual</h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                {project.process}
              </p>
            </motion.div>

            {/* Technologies Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-16" id="technologies"
            >
              <h2 className="text-2xl font-semibold mb-8 text-center">Tecnologias Utilizadas</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-4 rounded-xl text-center group hover-lift cursor-pointer"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <p className="text-sm font-medium group-hover:text-brand-blue transition-colors">
                      {tech.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-16" id="gallery"
            >
              <h2 className="text-2xl font-semibold mb-8 text-center">Galeria do Projeto</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="aspect-video bg-gradient-subtle rounded-xl relative overflow-hidden group cursor-pointer hover-lift"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-text-secondary text-sm">Project Image {index + 1}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-30 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-xl text-center mb-16" id="results"
            >
              <h2 className="text-2xl font-semibold mb-6">Resultados e Impacto</h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                {project.results}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Project Navigation */}
      {nextProject && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            variant="hero"
            size="lg"
            className="group shadow-2xl"
            asChild
          >
            <Link to={`/portfolio/${nextProject.slug}`}>
              <span className="hidden sm:inline mr-2">Próximo Projeto</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="max-w-4xl max-h-[80vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-gradient-subtle rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-text-secondary">Selected Project Image</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default ProjectDetail