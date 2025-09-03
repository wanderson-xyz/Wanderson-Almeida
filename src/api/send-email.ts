import sgMail from '@sendgrid/mail'

// Configure SendGrid with proper error handling
const apiKey = process.env.SENDGRID_API_KEY
if (!apiKey || apiKey === 'your-sendgrid-api-key') {
  console.error('SENDGRID_API_KEY not properly configured')
}

sgMail.setApiKey(apiKey)

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    console.log('Attempting to send emails...')
    console.log('From:', 'wandersonsa1110@gmail.com')
    console.log('To (main):', 'wandersonsa1110@gmail.com')
    console.log('To (reply):', email)
    
    // Email para Wanderson
    const emailToWanderson = {
      to: 'wandersonsa1110@gmail.com',
      from: 'wandersonsa1110@gmail.com', // Use a verified sender
      subject: `Novo contato do portfólio - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            Novo Contato do Portfólio
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #6366f1; margin-bottom: 5px;">Nome:</h3>
            <p style="margin: 0; font-size: 16px;">${name}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #6366f1; margin-bottom: 5px;">Email:</h3>
            <p style="margin: 0; font-size: 16px;">${email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #6366f1; margin-bottom: 5px;">Mensagem:</h3>
            <p style="margin: 0; font-size: 16px; line-height: 1.5;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 5px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              Esta mensagem foi enviada através do formulário de contato do seu portfólio.
            </p>
          </div>
        </div>
      `
    }

    // Auto-resposta para o cliente
    const autoReply = {
      to: email,
      from: 'wandersonsa1110@gmail.com',
      subject: 'Obrigado pelo contato! - Wanderson Almeida',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1; margin-bottom: 20px;">Obrigado pelo contato, ${name}!</h2>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Recebi sua mensagem e entrarei em contato em breve. Normalmente respondo dentro de 24 horas durante dias úteis.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Sua mensagem:</h3>
            <p style="font-style: italic; color: #666;">"${message}"</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6;">
            Para projetos urgentes, você também pode me contatar via 
            <a href="https://wa.me/5585890669392" style="color: #6366f1;">WhatsApp</a>.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Atenciosamente,<br>
              <strong>Wanderson Almeida</strong><br>
              Engenheiro de Software
            </p>
          </div>
        </div>
      `
    }

    // Send both emails with detailed logging
    console.log('Sending email to Wanderson...')
    const result1 = await sgMail.send(emailToWanderson)
    console.log('Email to Wanderson sent successfully:', result1[0].statusCode)
    
    console.log('Sending auto-reply to client...')
    const result2 = await sgMail.send(autoReply)
    console.log('Auto-reply sent successfully:', result2[0].statusCode)

    console.log('All emails sent successfully!')
    res.status(200).json({ 
      message: 'Emails sent successfully',
      details: {
        mainEmailStatus: result1[0].statusCode,
        autoReplyStatus: result2[0].statusCode
      }
    })
  } catch (error: any) {
    console.error('Detailed error sending emails:')
    console.error('Error message:', error.message)
    console.error('Error code:', error.code)
    console.error('Error response body:', error.response?.body)
    console.error('Full error:', error)
    
    // More specific error messages based on SendGrid errors
    let errorMessage = 'Erro interno do servidor ao enviar e-mail'
    
    if (error.code === 401) {
      errorMessage = 'Erro de autenticação com SendGrid - verifique a API key'
      console.error('Authentication failed - check SendGrid API key')
    } else if (error.code === 403) {
      errorMessage = 'Permissão negada - verifique se o remetente está verificado no SendGrid'
      console.error('Permission denied - check if sender email is verified in SendGrid')
    } else if (error.code >= 400 && error.code < 500) {
      errorMessage = 'Erro nos dados enviados para SendGrid'
      console.error('Client error with SendGrid API')
    } else if (error.code >= 500) {
      errorMessage = 'Erro no servidor do SendGrid - tente novamente mais tarde'
      console.error('SendGrid server error')
    }
    
    res.status(500).json({ 
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
}