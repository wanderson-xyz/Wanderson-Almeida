import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Hero button - main CTA
        hero: "bg-gradient-primary text-white hover:shadow-glow hover:-translate-y-0.5 btn-glow font-semibold",
        
        // Primary button - brand blue
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover hover:shadow-glow",
        
        // Secondary button - subtle dark
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover border border-border-hover",
        
        // Accent button - orange gradient
        accent: "bg-gradient-accent text-accent-foreground hover:shadow-glow-orange hover:-translate-y-0.5",
        
        // Glass effect button
        glass: "glass text-foreground hover:bg-card-hover border-border-hover",
        
        // Outline button - border only
        outline: "border border-border text-foreground hover:bg-card hover:border-border-hover",
        
        // Ghost button - minimal
        ghost: "text-text-secondary hover:text-foreground hover:bg-card",
        
        // Link style
        link: "text-brand-blue hover:text-brand-cyan underline-offset-4 hover:underline",
        
        // Destructive
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        default: "h-10 px-6 py-2",
        lg: "h-12 px-8 text-base rounded-xl",
        xl: "h-14 px-10 text-lg rounded-xl",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
