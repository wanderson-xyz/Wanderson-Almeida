import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useSendEmail } from '@/hooks/use-send-email'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const { sendEmail, isSubmitting } = useSendEmail()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const result = await sendEmail(formData)
    
    if (result.success) {
      setFormData({ name: '', email: '', message: '' })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de conversar sobre um projeto.")
    window.open(`https://wa.me/5585989069392?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Vamos <span className="text-gradient-blue">Conversar</span>
          </h1>
          
          <p className="text-xl text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Tem um projeto em mente? Adoraria ouvir suas ideias e descobrir como posso ajudar.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Entre em Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-brand-blue/10 rounded-lg">
                      <Mail className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:wandersonsa1110@gmail.com"
                        className="text-text-secondary hover:text-brand-blue transition-colors"
                      >
                        wandersonsa1110@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-brand-orange/10 rounded-lg">
                      <Phone className="h-5 w-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-medium">Telefone</p>
                      <a 
                        href="tel:+5585989069392"
                        className="text-text-secondary hover:text-brand-orange transition-colors"
                      >
                        +55 85 8906-9392
                      </a>
                    </div>
                  </div>
                  
                  <Button 
                    variant="accent" 
                    size="lg" 
                    onClick={openWhatsApp}
                    className="w-full sm:w-auto"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </div>
              </div>
              
              <div className="glass p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Resposta Rápida</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Normalmente respondo em até 24 horas. Para projetos urgentes,
                  recomendo entrar em contato via WhatsApp para uma resposta mais rápida.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="glass p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact