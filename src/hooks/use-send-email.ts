import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import emailjs from '@emailjs/browser'

interface EmailData {
  name: string
  email: string
  message: string
}

// EmailJS configuration - você precisa configurar essas variáveis no seu account EmailJS
const EMAILJS_SERVICE_ID = 'service_portfolio'
const EMAILJS_TEMPLATE_ID = 'template_6whl4pd'
const EMAILJS_PUBLIC_KEY = 'NC0mQFC3AQ7PkgcJS'

export const useSendEmail = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const sendEmail = async (emailData: EmailData) => {
    setIsSubmitting(true)
    
    try {
      // Initialize EmailJS (só precisa fazer uma vez)
      emailjs.init(EMAILJS_PUBLIC_KEY)
      
      // Prepare template parameters
      const templateParams = {
        from_name: emailData.name,
        from_email: emailData.email,
        message: emailData.message,
        to_name: 'Wanderson Almeida',
        to_email: 'wandersonsa1110@gmail.com',
        reply_to: emailData.email
      }

      console.log('Enviando email via EmailJS...')
      console.log('Dados:', templateParams)

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      console.log('Email enviado com sucesso:', result)

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      })
      return { success: true }
      
    } catch (error: any) {
      console.error('Erro detalhado ao enviar email:', error)
      
      let errorMessage = "Ocorreu um problema ao enviar sua mensagem. Tente novamente ou entre em contato via WhatsApp."
      
      if (error.status === 400) {
        errorMessage = "Erro nos dados do formulário. Verifique se todos os campos estão preenchidos corretamente."
      } else if (error.status === 401) {
        errorMessage = "Erro de configuração do serviço de e-mail. Tente novamente mais tarde."
      } else if (error.status === 403) {
        errorMessage = "Limite de envio atingido. Tente novamente mais tarde ou entre em contato via WhatsApp."
      } else if (error.status >= 500) {
        errorMessage = "Erro no servidor. Tente novamente em alguns minutos."
      }
      
      toast({
        title: "Erro ao enviar mensagem",
        description: errorMessage,
        variant: "destructive",
      })
      return { success: false }
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    sendEmail,
    isSubmitting
  }
}