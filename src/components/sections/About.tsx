import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Sobre <span className="text-gradient-blue">Mim</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Sou um Desenvolvedor de Software apaixonado por criar experiências digitais excepcionais 
                que combinam design elegante com código limpo e eficiente.
              </p>
              
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Com formação sólida e experiência prática, desenvolvo soluções inovadoras que 
                fazem a diferença na vida das pessoas e no sucesso dos negócios.
              </p>
            </div>
            
            <div className="glass p-8 rounded-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-blue/20 rounded-lg flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-brand-blue" />
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-brand-blue text-white text-sm font-semibold rounded-full">
                      2025
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">
                    Graduação em Ciência da Computação
                  </h3>
                  
                  <p className="text-brand-blue font-medium mb-3">
                    Universidade Federal do Ceará
                  </p>
                  
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Formação sólida em fundamentos de programação, algoritmos e 
                    arquitetura de software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}