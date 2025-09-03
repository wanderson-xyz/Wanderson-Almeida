import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    role: 'CEO, TechStart',
    company: 'TechStart Solutions',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Wanderson entregou um trabalho excepcional. Sua atenção aos detalhes e habilidade técnica superaram nossas expectativas.',
  },
  {
    id: 2,
    name: 'Carlos Santos',
    role: 'CTO, InnovaCorp',
    company: 'InnovaCorp',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Profissional extremamente competente e dedicado. O projeto foi entregue no prazo e com qualidade superior.',
  },
  {
    id: 3,
    name: 'Marina Costa',
    role: 'Product Manager',
    company: 'DigitalFlow',
    avatar: '👩‍🚀',
    rating: 5,
    text: 'Comunicação excelente e resultado final incrível. Definitivamente recomendaria seus serviços.',
  },
  {
    id: 4,
    name: 'Pedro Oliveira',
    role: 'Founder',
    company: 'StartupHub',
    avatar: '👨‍🎨',
    rating: 5,
    text: 'Wanderson transformou nossa visão em realidade. Seu conhecimento técnico é impressionante.',
  },
  {
    id: 5,
    name: 'Lucia Fernandes',
    role: 'Diretora de TI',
    company: 'Enterprise Solutions',
    avatar: '👩‍🔬',
    rating: 5,
    text: 'Soluções inovadoras e implementação impecável. Um parceiro confiável para projetos complexos.',
  },
  {
    id: 6,
    name: 'Rafael Mendes',
    role: 'Lead Developer',
    company: 'CodeLab',
    avatar: '👨‍🚀',
    rating: 5,
    text: 'Código limpo, arquitetura sólida e performance excepcional. Um verdadeiro profissional.',
  },
]

const Testimonials = () => {
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
            <span className="text-gradient-blue">Depoimentos</span>
          </h1>
          
          <p className="text-xl text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            O que clientes e parceiros dizem sobre meu trabalho
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover-lift"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-text-secondary">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-brand-blue">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand-orange text-brand-orange"
                    />
                  ))}
                </div>
                
                <p className="text-text-secondary leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonials