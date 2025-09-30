# ZMS IT Hub Website

A production-ready, SEO-first, highly-performant Next.js website for ZMS IT Hub - a leading software development company specializing in custom solutions, mobile apps, web applications, and digital transformation services.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, sitemap generation, Open Graph
- **Performance Focused**: Lighthouse score 90+, optimized images, lazy loading
- **Accessibility**: WCAG AA compliant, semantic markup, keyboard navigation
- **Analytics**: Google Analytics 4, Google Tag Manager integration
- **CMS Integration**: Contentful headless CMS with example content
- **Testing**: Jest, React Testing Library, Playwright E2E tests
- **CI/CD**: GitHub Actions workflow with automated deployment
- **Security**: HTTPS, CSP headers, rate limiting, input validation
- **Responsive**: Mobile-first design with modern UI/UX

## 🎨 Design System

### Color Palette

- **Primary**: `#751A1A` (Dark Maroon)
- **Secondary**: `#000000` (Black)
- **Accent**: `#FFFFFF` (White)

### Typography

- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

## 📁 Project Structure

```
zms-it-hub-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/
│   │   ├── services/
│   │   ├── contact/
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── robots.ts          # Robots.txt
│   │   └── sitemap.ts         # Sitemap generation
│   ├── components/            # Reusable components
│   │   ├── analytics/         # Analytics components
│   │   ├── layout/           # Header, Footer, Layout
│   │   ├── seo/              # SEO components
│   │   └── ui/               # UI components
│   ├── lib/                   # Utilities and configurations
│   │   ├── config.ts         # Site configuration
│   │   ├── contentful.ts     # CMS integration
│   │   └── utils.ts          # Helper functions
│   └── types/                 # TypeScript type definitions
├── e2e/                      # End-to-end tests
├── public/                   # Static assets
├── .github/workflows/        # GitHub Actions
├── jest.config.js            # Jest configuration
├── playwright.config.ts      # Playwright configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vercel.json               # Vercel deployment config
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+
- npm 8+
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/zms-it-hub-website.git
cd zms-it-hub-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the example environment file and configure your variables:

```bash
cp env.example .env.local
```

Update `.env.local` with your actual values:

```env
# Contentful CMS Configuration
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_contentful_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_contentful_preview_token

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=zmsithub@gmail.com
SMTP_PASS=your_app_password

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://zmsithub.com
NEXT_PUBLIC_SITE_NAME=ZMS IT Hub
```

### 4. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint errors
npm run format          # Format code with Prettier
npm run format:check    # Check code formatting
npm run type-check      # Run TypeScript type checking

# Testing
npm run test            # Run unit tests
npm run test:watch      # Run tests in watch mode
npm run test:e2e        # Run E2E tests
npm run test:e2e:ui     # Run E2E tests with UI

# Analysis
npm run analyze         # Analyze bundle size
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**
   - Add all environment variables from `.env.local`
   - Set production values for all required variables

3. **Deploy**
   - Vercel will automatically deploy on every push to main branch
   - Preview deployments are created for pull requests

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Contentful CMS Setup

1. **Create Contentful Account**
   - Sign up at [Contentful](https://www.contentful.com)
   - Create a new space

2. **Content Types**
   Create the following content types in Contentful:
   - **Blog Post**: title, slug, excerpt, content, featuredImage, author, publishedAt, tags, category
   - **Case Study**: title, slug, excerpt, content, featuredImage, client, project, publishedAt
   - **Service**: title, slug, description, content, icon, features, benefits, process, pricing
   - **Team Member**: name, position, bio, avatar, social, skills, experience
   - **Job Posting**: title, slug, department, location, type, experience, description, requirements, benefits

3. **API Keys**
   - Get Space ID and Access Token from Contentful
   - Add to environment variables

### Google Analytics Setup

1. **Create GA4 Property**
   - Go to [Google Analytics](https://analytics.google.com)
   - Create a new GA4 property
   - Get your Measurement ID (G-XXXXXXXXXX)

2. **Google Tag Manager** (Optional)
   - Create GTM container
   - Get Container ID (GTM-XXXXXXX)
   - Configure GA4 through GTM

### Email Configuration

1. **Gmail SMTP**
   - Enable 2-factor authentication
   - Generate App Password
   - Use App Password in `SMTP_PASS`

2. **Alternative SMTP Providers**
   - Update `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
   - Test configuration with contact form

## 🧪 Testing

### Unit Tests

```bash
npm run test
```

Tests are located in `src/components/**/__tests__/` directories.

### E2E Tests

```bash
npm run test:e2e
```

E2E tests cover:

- Page navigation
- Contact form submission
- Mobile responsiveness
- SEO elements
- Performance metrics

## 📊 Performance Optimization

### Lighthouse Scores Target

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Optimization Features

- Image optimization with `next/image`
- Code splitting and lazy loading
- Static generation where possible
- CDN integration
- Compression and minification

## 🔒 Security Features

- HTTPS enforcement
- Content Security Policy headers
- X-Frame-Options protection
- Input validation and sanitization
- Rate limiting on API routes
- Secure environment variable handling

## 🌐 SEO Features

- Dynamic meta tags
- Open Graph and Twitter Cards
- Structured data (JSON-LD)
- XML sitemap generation
- Robots.txt configuration
- Canonical URLs
- Breadcrumb navigation

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized for all device sizes

## 🎯 Analytics & Tracking

- Google Analytics 4 integration
- Custom event tracking
- Conversion tracking
- Performance monitoring
- User behavior analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Ensure accessibility compliance
- Maintain performance standards
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Email**: zmsithub@gmail.com
- **Phone**: +92 370 9472900
- **Website**: [zmsithub.com](https://zmsithub.com)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Contentful for headless CMS capabilities
- Vercel for seamless deployment platform

---

**Built with ❤️ by ZMS IT Hub**

# ZMS-IT-Hub
