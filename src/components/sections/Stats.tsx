import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const stats = [
  {
    number: "50+",
    label: "Projetos Entregues",
    description: "Soluções completas desenvolvidas"
  },
  {
    number: "100%",
    label: "Clientes Satisfeitos", 
    description: "Taxa de satisfação dos clientes"
  },
  {
    number: "5",
    label: "Avaliação Média",
    description: "Baseada em feedback dos projetos",
    icon: Star
  }
]

export const Stats = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl md:text-6xl font-bold text-brand-blue">
                    {stat.number}
                  </span>
                  {stat.icon && <stat.icon className="h-8 w-8 text-yellow-400 fill-current" />}
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {stat.label}
                </h3>
                
                <p className="text-text-secondary">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}