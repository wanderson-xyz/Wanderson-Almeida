import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import emailjs from 'emailjs-com'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
    try {
  // 1️⃣ Envia para você (notificação interna)
  const result1 = await emailjs.send(
    'service_portfolio',  // seu service_id
    'template_dp3vufa',   // template para VOCÊ
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    'NC0mQFC3AQ7PkgcJS'   // sua public key
  )

  // 2️⃣ Envia resposta automática para o cliente
  const result2 = await emailjs.send(
    'service_portfolio',  // mesmo service_id
    'template_6whl4pd',   // template de resposta automática
    {
      name: formData.name,         // usado no "Olá {{name}},"
      email: formData.email,       // usado no "To email" do template
      message: formData.message,   // usado no bloco de mensagem
    },
    'NC0mQFC3AQ7PkgcJS'
  )

  // ✅ Verifica se deu tudo certo
  if (result1.status === 200 && result2.status === 200) {
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Você receberá um e-mail de confirmação em instantes.",
    })
    setFormData({ name: '', email: '', message: '' })
  } else {
    throw new Error('Erro ao enviar mensagem')
  }
} catch (error) {
  toast({
    title: "Erro ao enviar",
    description: "Tente novamente ou entre em contato via WhatsApp.",
    variant: "destructive",
  })
} finally {
  setIsSubmitting(false)
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
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Stats Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">
              Entre em Contato
            </h2>
            <p className="text-lg text-text-secondary mb-16 max-w-3xl mx-auto">
              Tem um projeto em mente? Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-8">
                  Vamos trabalhar juntos!
                </h3>
                
                <p className="text-text-secondary mb-8 leading-relaxed">
                  Estou sempre aberto a discutir novos projetos, oportunidades criativas ou 
                  parcerias. Se você tem uma ideia interessante, vamos conversar!
                </p>

                <div className="space-y-6">
                  <div className="glass p-4 rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-brand-blue/20 rounded-lg">
                      <Mail className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-text-secondary text-sm">wandersonsa1110@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="glass p-4 rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-brand-blue/20 rounded-lg">
                      <Phone className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Telefone</p>
                      <p className="text-text-secondary text-sm">+55 (11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="glass p-4 rounded-lg flex items-center gap-4">
                    <div className="p-3 bg-brand-blue/20 rounded-lg">
                      <MapPin className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Localização</p>
                      <p className="text-text-secondary text-sm">Fortaleza-CE, Brasil</p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={openWhatsApp}
                  className="w-full sm:w-auto mt-8 bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                  <span className="ml-2 text-xs bg-green-700/50 px-2 py-1 rounded">
                    Resposta rápida
                  </span>
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="glass p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-6">Envie uma mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-me sobre seu projeto..."
                    className="bg-background/50 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-blue hover:bg-brand-blue/90"
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
              
              <div className="mt-6 p-4 bg-brand-blue/10 rounded-lg flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-brand-blue">
                    Resposta garantida em 24h
                  </p>
                  <p className="text-xs text-text-secondary mt-1">
                    Respondo todas as mensagens em até 24 horas durante dias úteis.
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