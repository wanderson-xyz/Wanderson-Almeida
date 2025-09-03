import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'heading': ['var(--font-heading)'],
				'body': ['var(--font-body)'],
				'mono': ['var(--font-mono)'],
			},
			colors: {
				// Base colors
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'text-secondary': 'hsl(var(--text-secondary))',
				
				// Brand colors
				'brand-blue': 'hsl(var(--brand-blue))',
				'brand-orange': 'hsl(var(--brand-orange))',
				'brand-purple': 'hsl(var(--brand-purple))',
				'brand-cyan': 'hsl(var(--brand-cyan))',
				
				// Interactive elements
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					hover: 'hsl(var(--card-hover))',
				},
				border: {
					DEFAULT: 'hsl(var(--border))',
					hover: 'hsl(var(--border-hover))',
				},
				input: {
					DEFAULT: 'hsl(var(--input))',
					foreground: 'hsl(var(--input-foreground))',
				},
				
				// Button variants
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					hover: 'hsl(var(--accent-hover))',
				},
				
				// Status colors
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-subtle': 'var(--gradient-subtle)',
				'gradient-hero': 'var(--gradient-hero)',
			},
			boxShadow: {
				'sm': 'var(--shadow-sm)',
				'md': 'var(--shadow-md)',
				'lg': 'var(--shadow-lg)',
				'glow': 'var(--shadow-glow)',
				'glow-orange': 'var(--shadow-glow-orange)',
			},
			borderRadius: {
				DEFAULT: 'var(--radius)',
				sm: 'var(--radius-sm)',
				lg: 'var(--radius-lg)',
				xl: 'var(--radius-xl)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--bezier-smooth)',
				'bounce': 'var(--bezier-bounce)',
			},
			transitionDuration: {
				'fast': 'var(--transition-fast)',
				'normal': 'var(--transition-normal)',
				'slow': 'var(--transition-slow)',
			},
			keyframes: {
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(2rem)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.6)' },
				},
				'rotate-slow': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' },
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'fade-up': 'fade-up 0.8s var(--bezier-smooth)',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
