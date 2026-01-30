# replit.md

## Overview

jasX Space Hotel is a luxury space tourism marketing website built as an NSS (National Service Scheme) educational project. It showcases a fictional orbital space hotel experience with rooms, amenities, pricing packages, and testimonials. The site is purely demonstrational and does not process real transactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Routing**: React Router DOM with HashRouter (for static hosting compatibility)
- **State Management**: TanStack React Query for server state, React useState for local state

### Styling System
- **CSS Framework**: Tailwind CSS with custom dark theme design tokens
- **Component Library**: shadcn/ui (Radix UI primitives with Tailwind styling)
- **Animations**: Framer Motion for scroll animations, hover effects, and page transitions
- **Theme**: Dark-first design with CSS variables for space hotel aesthetic

### Component Organization
- `/src/components/ui/` - shadcn/ui base components (Button, Card, Accordion, etc.)
- `/src/components/` - Custom animated components (AnimatedCard, AnimatedSection, ParticleStars, LoadingScreen)
- `/src/pages/` - Route-level page components (Home, ComingSoon, NotFound)
- `/src/data/` - Mock data for rooms, amenities, testimonials, FAQs, pricing

### Key Design Patterns
- **Compound Components**: Used throughout shadcn/ui components
- **Animation Wrappers**: Reusable motion components for consistent animations
- **CSS Variables**: Theme tokens defined in index.css for consistent theming
- **Path Aliases**: `@/` maps to `./src/` for clean imports

### Testing
- **Framework**: Vitest with jsdom environment
- **Setup**: Testing Library with jest-dom matchers

## External Dependencies

### UI Component Libraries
- **Radix UI**: Accessible, unstyled component primitives (dialogs, accordions, dropdowns, etc.)
- **shadcn/ui**: Pre-styled Radix components with Tailwind CSS
- **Lucide React**: Icon library

### Animation & Interaction
- **Framer Motion**: Animation library for React
- **Embla Carousel**: Carousel/slider functionality
- **Vaul**: Drawer component

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation (via @hookform/resolvers)

### Utilities
- **date-fns**: Date manipulation
- **class-variance-authority**: Component variant management
- **clsx/tailwind-merge**: Conditional className utilities
- **cmdk**: Command palette component
- **sonner**: Toast notifications

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type checking
- **ESLint**: Code linting
- **Vite React SWC**: Fast React compilation with SWC