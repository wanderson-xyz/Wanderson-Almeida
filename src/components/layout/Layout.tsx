import { ReactNode } from 'react'
import { Navigation } from './Navigation'
import { Background3D } from '../3d/Background3D'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen">
      <Background3D />
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}