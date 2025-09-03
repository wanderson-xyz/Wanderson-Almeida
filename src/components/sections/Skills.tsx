import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Code, Smartphone, Database, Cloud, Palette, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "bg-brand-blue/10 text-brand-blue",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"]
  },
  {
    title: "Mobile Development", 
    icon: Smartphone,
    color: "bg-brand-purple/10 text-brand-purple",
    skills: ["React Native", "Flutter", "Expo", "iOS", "Android", "PWA"]
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "bg-brand-cyan/10 text-brand-cyan",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "bg-brand-orange/10 text-brand-orange",
    skills: ["AWS", "Vercel", "Docker", "CI/CD", "Kubernetes", "Nginx"]
  },
  {
    title: "Design & UX",
    icon: Palette,
    color: "bg-pink-500/10 text-pink-400",
    skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Prototyping", "Wireframing"]
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    color: "bg-green-500/10 text-green-400",
    skills: ["Git", "GitHub", "VS Code", "Slack", "Jira", "Notion"]
  }
]

const expertise = [
  { name: "Frontend Development", level: 95 },
  { name: "Mobile Development", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Backend Development", level: 80 },
  { name: "DevOps & Cloud", level: 75 },
  { name: "Project Management", level: 88 }
]

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-blue">
            Skills & Ferramentas
          </h2>
          
          <p className="text-lg text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções digitais inovadoras e eficientes.
          </p>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass p-6 rounded-xl hover:shadow-glow transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-lg mb-4 w-fit ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs bg-background/50 border border-border rounded-full text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Expertise Levels */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-12 text-brand-blue">
              Níveis de Expertise
            </h3>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {expertise.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-brand-blue font-semibold text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}