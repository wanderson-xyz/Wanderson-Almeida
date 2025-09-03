import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp } from 'lucide-react'

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
  {
    name: 'Email',
    href: 'mailto:wandersonsa1110@gmail.com',
    icon: Mail,
  }
]

const quickLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Contato', href: '#contato' }
]

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gradient-subtle border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Wanderson <span className="text-brand-blue">Almeida</span>
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Desenvolvedor de Software especializado em criar experiências digitais 
              excepcionais que combinam design elegante com código limpo.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="p-2 bg-background/50 rounded-lg hover:bg-card-hover transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4 text-text-secondary hover:text-brand-blue transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-blue">Links Rápidos</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-text-secondary hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-blue">Contato</h4>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>wandersonsa1110@gmail.com</p>
              <p>+55 (85) 8906-9392</p>
              <p>Fortaleza-CE, Brasil</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            © 2025 Wanderson Almeida. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <p className="text-sm text-text-secondary flex items-center gap-1">
              Desenvolvido com <Heart className="h-3 w-3 text-red-400 fill-current" /> e ☕
            </p>
            
            <button
              onClick={scrollToTop}
              className="p-2 bg-brand-blue/10 hover:bg-brand-blue/20 rounded-lg transition-colors group"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4 text-brand-blue group-hover:translate-y-[-2px] transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}