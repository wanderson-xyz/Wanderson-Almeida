export interface Project {
  id: number
  slug: string
  title: string
  description: string
  tagline: string
  objective: string
  challenges: string
  solutions: string
  process: string
  results: string
  liveUrl?: string
  githubUrl?: string
  image: string
  images: string[]
  technologies: {
    name: string
    icon?: string
  }[]
  category: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'ecommerce-dashboard',
    title: 'E-commerce Dashboard',
    description: 'Dashboard completo para gestão de e-commerce com analytics em tempo real',
    tagline: 'Transformando dados em insights acionáveis para e-commerce',
    objective: 'Criar um sistema completo de gestão que permitisse visualizar vendas, estoque e métricas em tempo real, fornecendo insights valiosos para tomada de decisão.',
    challenges: 'Integrar múltiplas fontes de dados, criar visualizações interativas em tempo real e garantir performance com grandes volumes de informações.',
    solutions: 'Implementação de arquitetura escalável com cache inteligente, WebSockets para atualizações em tempo real e dashboard responsivo com charts interativos.',
    process: 'Iniciamos com pesquisa de usuário e análise de concorrentes, seguido de prototipagem iterativa e desenvolvimento ágil com foco na experiência do usuário.',
    results: '40% aumento na eficiência operacional, redução de 60% no tempo de análise de dados e 95% de satisfação dos usuários.',
    liveUrl: 'https://ecommerce-dashboard-demo.com',
    githubUrl: 'https://github.com/wanderson/ecommerce-dashboard',
    image: '/api/placeholder/800/500',
    images: [
      '/api/placeholder/800/500',
      '/api/placeholder/800/500',
      '/api/placeholder/800/500',
      '/api/placeholder/800/500'
    ],
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Next.js', icon: '▲' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Chart.js', icon: '📊' },
      { name: 'WebSocket', icon: '🔌' }
    ],
    category: 'Web App',
    featured: true
  },
  {
    id: 2,
    slug: 'mobile-fitness-app',
    title: 'Fitness Mobile App',
    description: 'Aplicativo mobile para acompanhamento de exercícios e nutrição',
    tagline: 'Seu personal trainer digital no bolso',
    objective: 'Desenvolver um aplicativo móvel intuitivo que ajude usuários a manter rotinas de exercícios e acompanhar progresso nutricional.',
    challenges: 'Sincronização offline-online, integração com wearables e criação de interface motivacional que engaje usuários a longo prazo.',
    solutions: 'Arquitetura híbrida com sincronização inteligente, gamificação através de conquistas e integração nativa com dispositivos de fitness.',
    process: 'Pesquisa com personal trainers e atletas, prototipagem em Figma, desenvolvimento nativo para iOS e Android com foco em performance.',
    results: '85% de retenção mensal, mais de 50.000 downloads e nota 4.8 nas lojas de aplicativos.',
    liveUrl: 'https://apps.apple.com/fitness-app',
    githubUrl: 'https://github.com/wanderson/fitness-app',
    image: '/api/placeholder/800/500',
    images: [
      '/api/placeholder/800/500',
      '/api/placeholder/800/500',
      '/api/placeholder/800/500'
    ],
    technologies: [
      { name: 'React Native', icon: '📱' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'HealthKit', icon: '❤️' },
      { name: 'Redux', icon: '🏪' }
    ],
    category: 'Mobile App',
    featured: true
  },
  {
    id: 3,
    slug: 'ai-content-platform',
    title: 'AI Content Platform',
    description: 'Plataforma de geração de conteúdo usando inteligência artificial',
    tagline: 'Criatividade impulsionada por IA para criadores de conteúdo',
    objective: 'Criar uma plataforma que utiliza IA para ajudar criadores de conteúdo a gerar textos, imagens e vídeos de alta qualidade de forma eficiente.',
    challenges: 'Integração de múltiplos modelos de IA, gerenciamento de custos de API e criação de interface intuitiva para usuários não-técnicos.',
    solutions: 'Sistema de cache inteligente para reduzir custos, interface drag-and-drop e pipeline de processamento otimizado para diferentes tipos de conteúdo.',
    process: 'Análise de mercado, prototipagem de fluxos de IA, desenvolvimento iterativo com feedback contínuo de criadores de conteúdo.',
    results: 'Redução de 70% no tempo de criação de conteúdo, mais de 10.000 usuários ativos e receita recorrente de $50k/mês.',
    liveUrl: 'https://ai-content-platform.com',
    githubUrl: 'https://github.com/wanderson/ai-content-platform',
    image: '/api/placeholder/800/500',
    images: [
      '/api/placeholder/800/500',
      '/api/placeholder/800/500',
      '/api/placeholder/800/500',
      '/api/placeholder/800/500',
      '/api/placeholder/800/500'
    ],
    technologies: [
      { name: 'Next.js', icon: '▲' },
      { name: 'OpenAI', icon: '🤖' },
      { name: 'Prisma', icon: '⚡' },
      { name: 'Stripe', icon: '💳' },
      { name: 'TailwindCSS', icon: '🎨' },
      { name: 'Vercel', icon: '🔺' }
    ],
    category: 'AI/ML',
    featured: false
  }
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getNextProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projects.findIndex(project => project.slug === currentSlug)
  if (currentIndex === -1) return undefined
  
  const nextIndex = (currentIndex + 1) % projects.length
  return projects[nextIndex]
}

export const getPreviousProject = (currentSlug: string): Project | undefined => {
  const currentIndex = projects.findIndex(project => project.slug === currentSlug)
  if (currentIndex === -1) return undefined
  
  const previousIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
  return projects[previousIndex]
}