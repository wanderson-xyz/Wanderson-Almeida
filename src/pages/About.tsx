import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Sobre <span className="text-gradient-blue">Mim</span>
          </h1>
          
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Olá! Sou Wanderson Almeida, um Desenvolvedor de software apaixonado por criar
              experiências digitais que fazem a diferença. Com anos de experiência no
              desenvolvimento front-end e aplicações, tenho o prazer de transformar ideias
              complexas em soluções elegantes e funcionais.
            </p>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              Minha jornada na tecnologia começou com curiosidade e evoluiu para uma
              paixão por resolver problemas através do código. Especializo-me em
              React, TypeScript, e tecnologias modernas de desenvolvimento web,
              sempre mantendo o foco na experiência do usuário e performance.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About