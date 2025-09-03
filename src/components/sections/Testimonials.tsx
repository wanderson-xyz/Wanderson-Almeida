import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Empresário",
    company: "TechStart Solutions",
    avatar: "/lovable-uploads/8af2f59b-8e14-43cc-8650-926bb14fe0f5.png",
    text: "O site elevou nossa presença online e trouxe mais contatos qualificados. O trabalho do Wanderson superou todas as expectativas.",
    rating: 5
  },
  {
    id: 2,
    name: "Juliana Rocha",
    role: "Consultora de Marketing",
    company: "Digital Growth",
    avatar: "/lovable-uploads/0cb3d6a0-0560-49b3-b8ec-f16d8e443990.png",
    text: "A landing page dobrou nossos leads nas primeiras semanas. Design impecável e funcionalidade perfeita.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcos Silva", 
    role: "Diretor de Startup",
    company: "InnovaTech",
    avatar: "/lovable-uploads/2367f2a3-92e6-41eb-8eb1-47dafc56c24c.png",
    text: "Execução ágil, design impecável e foco em conversão. Wanderson entendeu perfeitamente nossa visão.",
    rating: 5
  },
  {
    id: 4,
    name: "Ana Paula Costa",
    role: "Gerente de Produto", 
    company: "DevCorp",
    avatar: "/lovable-uploads/9212258d-42c2-4663-90a3-c5ae038485bc.png",
    text: "Profissional excepcional! Transformou nossa ideia em uma aplicação robusta e escalável.",
    rating: 5
  },
  {
    id: 5,
    name: "Roberto Santos",
    role: "CEO",
    company: "StartupX",
    avatar: "/lovable-uploads/8af2f59b-8e14-43cc-8650-926bb14fe0f5.png", 
    text: "Comunicação clara, entrega no prazo e qualidade superior. Recomendo sem hesitação.",
    rating: 5
  },
  {
    id: 6,
    name: "Fernanda Lima",
    role: "Product Owner",
    company: "TechSolutions",
    avatar: "/lovable-uploads/0cb3d6a0-0560-49b3-b8ec-f16d8e443990.png",
    text: "O aplicativo mobile que desenvolveu revolucionou nosso negócio. Interface intuitiva e performance excelente.",
    rating: 5
  }
]

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-blue">
            Depoimentos
          </h2>
          
          <p className="text-lg text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            O que meus clientes dizem sobre os projetos que desenvolvemos juntos.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="h-8 w-8 text-brand-blue flex-shrink-0 mt-1" />
                </div>
                
                <p className="text-text-secondary mb-6 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-brand-blue font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-text-secondary text-xs">
                      {testimonial.role}
                    </p>
                    <p className="text-brand-blue text-xs font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}