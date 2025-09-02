# Shrig Solutions Website Clone

A modern, responsive website clone of [Shrig Solutions](https://shrigsolutions.com/) built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, following **SOLID principles** and **Clean Architecture** patterns.

## 🏗️ Architecture Overview

This project implements **Domain-Driven Design (DDD)** and **SOLID principles** to create a maintainable, scalable, and testable codebase.

### 🎯 SOLID Principles Implementation

#### 1. **Single Responsibility Principle (SRP)**

- Each class/component has one reason to change
- Services handle specific business logic
- Components focus on presentation
- Utilities handle specific operations

#### 2. **Open/Closed Principle (OCP)**

- Components are open for extension, closed for modification
- Reusable UI components with variant props
- Animation service with extensible configurations
- Validation rules can be extended without modifying core logic

#### 3. **Liskov Substitution Principle (LSP)**

- Interfaces define contracts that implementations follow
- Service interfaces ensure consistent behavior
- Component props interfaces guarantee compatibility

#### 4. **Interface Segregation Principle (ISP)**

- Small, focused interfaces
- `IApiService` for HTTP operations
- `IContactService` for contact-specific operations
- Component-specific prop interfaces

#### 5. **Dependency Inversion Principle (DIP)**

- High-level modules don't depend on low-level modules
- Dependencies are injected through interfaces
- Service factory pattern for dependency management
- Context providers for state management

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.542.0
- **UI Components**: Headless UI 2.2.7
- **Package Manager**: pnpm
- **Architecture**: Clean Architecture + DDD

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx      # Button component
│   │   └── Card.tsx        # Card component
│   ├── Navigation.tsx      # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── sections/           # Page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── CarShowcaseSection.tsx
│       ├── TeamSection.tsx
│       ├── SuccessStoriesSection.tsx
│       └── ContactSection.tsx
├── hooks/                  # Custom React hooks
│   ├── useNavigation.ts    # Navigation state management
│   ├── useScrollAnimation.ts # Scroll animation logic
│   └── useFormValidation.ts # Form validation logic
├── services/               # Business logic layer
│   └── api.ts              # API service layer
├── contexts/               # React contexts
│   └── ThemeContext.tsx    # Theme management
├── types/                  # TypeScript type definitions
│   └── index.ts            # Core domain types
├── utils/                  # Utility functions
│   ├── validation.ts       # Validation utilities
│   └── animations.ts       # Animation utilities
├── constants/              # Application constants
│   ├── navigation.ts       # Navigation constants
│   ├── team.ts             # Team data
│   └── services.ts         # Services data
└── lib/                    # Third-party library configurations
```

## 🎨 Design Patterns Implemented

### 1. **Component Composition Pattern**

- Reusable UI components with variant props
- Compound components for complex interactions
- Higher-order components for cross-cutting concerns

### 2. **Custom Hooks Pattern**

- `useNavigation`: Navigation state and scroll tracking
- `useScrollAnimation`: Intersection Observer logic
- `useFormValidation`: Form validation with error handling

### 3. **Service Layer Pattern**

- `ApiService`: HTTP operations abstraction
- `ContactService`: Contact-specific business logic
- `ServiceFactory`: Dependency injection container

### 4. **Context Pattern**

- `ThemeContext`: Global theme state management
- Provider pattern for dependency injection

### 5. **Factory Pattern**

- `ServiceFactory`: Service instance creation
- Centralized dependency management

## 🔧 Key Features

### **Type Safety**

- Comprehensive TypeScript interfaces
- Domain-driven type definitions
- Strict type checking throughout

### **Performance Optimization**

- Custom hooks for efficient state management
- Intersection Observer for scroll animations
- Lazy loading and code splitting
- Optimized re-renders with useCallback/useMemo

### **Accessibility**

- ARIA labels and semantic HTML
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### **Responsive Design**

- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

### **Animation System**

- Centralized animation configurations
- Performance-optimized animations
- Scroll-triggered animations
- Staggered animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- Docker (optional, for containerized deployment)

### Installation

#### Option 1: Traditional Installation

```bash
# Clone the repository
git clone https://github.com/shrigkishor/shrig-solutions-web-app.git
cd shrig-solutions-web-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

#### Option 2: Docker Installation (Recommended)

##### Development Mode (with hot reloading)

```bash
# Build and run in development mode
docker-compose -f docker-compose.dev.yml up --build

# Or run in background
docker-compose -f docker-compose.dev.yml up -d --build
```

##### Production Mode

```bash
# Build and run in production mode
docker-compose up --build

# Or run in background
docker-compose up -d --build
```

##### Using Docker directly

```bash
# Development
docker build -f Dockerfile.dev -t shrig-solutions-dev .
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules shrig-solutions-dev

# Production
docker build -t shrig-solutions .
docker run -p 3000:3000 shrig-solutions
```

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 🧪 Testing Strategy

### Unit Testing

- Component testing with React Testing Library
- Hook testing with custom test utilities
- Service layer testing with mocked dependencies

### Integration Testing

- API integration tests
- Form validation tests
- Navigation flow tests

### E2E Testing

- Playwright for end-to-end testing
- Critical user journey validation

## 📊 Code Quality

### Linting & Formatting

- ESLint with TypeScript rules
- Prettier for code formatting
- Husky for pre-commit hooks

### Type Safety

- Strict TypeScript configuration
- No implicit any types
- Comprehensive interface definitions

### Performance Monitoring

- Bundle size analysis
- Lighthouse CI integration
- Core Web Vitals tracking

## 🐳 Docker

### Docker Configuration

The project includes multiple Docker configurations for different use cases:

#### **Production Dockerfile**

- Optimized for production deployment
- Multi-stage build for smaller image size
- Uses pnpm for faster dependency installation
- Exposes port 3000

#### **Development Dockerfile**

- Includes development dependencies
- Volume mounting for hot reloading
- Faster build times for development

#### **Docker Compose Files**

- `docker-compose.yml`: Production setup
- `docker-compose.dev.yml`: Development setup with hot reloading

### Docker Commands

```bash
# Development with hot reloading
docker-compose -f docker-compose.dev.yml up --build

# Production build
docker-compose up --build

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# Clean up
docker-compose down -v --remove-orphans
```

### Docker Benefits

- **Consistent Environment**: Same environment across development and production
- **Easy Deployment**: Simple deployment to any container platform
- **Isolation**: Application runs in isolated environment
- **Scalability**: Easy to scale horizontally
- **Portability**: Runs anywhere Docker is supported

## 🚀 Deployment

### Vercel (Recommended)

```bash
pnpm build
# Deploy to Vercel with automatic CI/CD
```

### Docker Deployment

```bash
# Build production image
docker build -t shrig-solutions .

# Run in production
docker run -d -p 3000:3000 --name shrig-solutions-app shrig-solutions

# Or use docker-compose
docker-compose up -d
```

### Kubernetes Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: shrig-solutions
spec:
  replicas: 3
  selector:
    matchLabels:
      app: shrig-solutions
  template:
    metadata:
      labels:
        app: shrig-solutions
    spec:
      containers:
        - name: shrig-solutions
          image: shrig-solutions:latest
          ports:
            - containerPort: 3000
```

## 🤝 Contributing

### Development Workflow

1. Create feature branch from `main`
2. Implement changes following SOLID principles
3. Add comprehensive tests
4. Update documentation
5. Submit pull request

### Code Review Checklist

- [ ] SOLID principles followed
- [ ] TypeScript types properly defined
- [ ] Tests added for new functionality
- [ ] Performance impact considered
- [ ] Accessibility requirements met

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: < 500KB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Security

- Input validation and sanitization
- XSS protection
- CSRF protection
- Secure headers configuration
- Dependency vulnerability scanning

## 📄 License

This project is created for educational purposes as a clone of the Shrig Solutions website.

---

**Built with ❤️ following SOLID principles and modern React patterns**
