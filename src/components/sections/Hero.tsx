'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Instagram, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/wanderson-xyz',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/wandersonalmeidadev/',
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/yo.almeidaxyz/',
    icon: Instagram,
  },
]

export const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('sobre')
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-blue text-lg font-medium mb-4"
          >
            Olá, eu sou
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-title mb-6"
          >
            <span className="md:inline block">Wanderson</span>
            <span className="md:inline block md:ml-4">
              <span className="name-animation">Almeida</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-subtitle mb-8"
          >
            Desenvolvedor de Sites e Aplicativos
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-description mx-auto mb-12 leading-relaxed"
          >
            Transformo ideias em experiências digitais excepcionais. Especializado em criar
            soluções inovadoras que combinam design elegante com código limpo e
            performance otimizada.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="#portfolio">
                Ver Projetos
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="#contato">Entre em Contato</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass hover:bg-card-hover transition-all duration-300 hover:-translate-y-1"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5 text-text-secondary hover:text-brand-blue transition-colors" />
              </a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 text-text-secondary hover:text-brand-blue transition-colors animate-float"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="h-6 w-6" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}