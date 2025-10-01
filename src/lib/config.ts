export const siteConfig = {
  name: 'ZMS IT Hub',
  description:
    'Leading software development company specializing in custom solutions, mobile apps, web applications, and digital transformation services.',
  url: 'https://zmsithub.com',
  logo: '/images/logo.png',
  ogImage: 'https://zmsithub.com/og-image.jpg',
  company: {
    founded: 'August 14, 2025',
    experience: '3 Years',
    projects: 3,
    teamSize: 10,
  },
  links: {
    email: 'zmsithub@gmail.com',
    phone: '+92 370 9472900',
    linkedin: 'https://www.linkedin.com/company/109129279/admin/dashboard/',
    facebook: 'https://www.facebook.com/share/1JAdxRGyk9/',
    instagram: 'https://www.instagram.com/zmsithub/',
    github: 'https://github.com/zmsithub',
  },
  contact: {
    email: 'zmsithub@gmail.com',
    phone: '+92 370 9472900',
    address: 'Pakistan',
    timezone: 'Asia/Karachi',
  },
  social: {
    twitter: '@zmsithub',
    linkedin: 'zms-it-hub',
    facebook: 'zmsithub',
    instagram: 'zmsithub',
    github: 'zmsithub',
  },
  services: [
    {
      title: 'Custom Software Development',
      slug: 'custom-software-development',
      description:
        'Tailored software solutions built to meet your specific business requirements.',
      content:
        'Transform your business with custom software solutions designed specifically for your unique needs. Our expert development team creates scalable, secure, and efficient applications that drive growth and streamline operations.',
      features: [
        'Scalable architecture design',
        'Cross-platform compatibility',
        'API integration and development',
        'Database design and optimization',
        'Security implementation',
        'Performance optimization',
        'Third-party integrations',
        'Maintenance and support',
      ],
      benefits: [
        'Increased operational efficiency',
        'Reduced manual processes',
        'Better data management',
        'Enhanced security',
        'Scalable growth solutions',
        'Competitive advantage',
        'Cost-effective long-term solution',
        '24/7 technical support',
      ],
      process: [
        {
          step: 1,
          title: 'Discovery & Analysis',
          description:
            'We analyze your business requirements, existing systems, and goals to create a comprehensive project plan.',
        },
        {
          step: 2,
          title: 'Design & Architecture',
          description:
            'Our team designs the system architecture and creates detailed technical specifications and wireframes.',
        },
        {
          step: 3,
          title: 'Development & Testing',
          description:
            'We develop your custom solution using agile methodologies with continuous testing and quality assurance.',
        },
        {
          step: 4,
          title: 'Deployment & Support',
          description:
            'We deploy your solution and provide ongoing maintenance, updates, and technical support.',
        },
      ],
      pricing: {
        model: 'Project-based',
        startingFrom: '$5,000',
        description:
          'Pricing varies based on complexity, features, and timeline requirements.',
      },
    },
    {
      title: 'Mobile App Development',
      slug: 'mobile-app-development',
      description:
        'Native and cross-platform mobile applications for iOS and Android.',
      content:
        'Create engaging mobile experiences that connect with your users on their preferred devices. We develop both native and cross-platform mobile applications that deliver exceptional performance and user experience.',
      features: [
        'Native iOS and Android development',
        'Cross-platform React Native apps',
        'Flutter development',
        'Progressive Web Apps (PWA)',
        'App Store optimization',
        'Push notifications',
        'Offline functionality',
        'Real-time synchronization',
      ],
      benefits: [
        'Reach customers on mobile devices',
        'Enhanced user engagement',
        'Increased brand visibility',
        'Direct marketing channel',
        'Improved customer service',
        'Real-time data access',
        'Offline capabilities',
        'App store presence',
      ],
      process: [
        {
          step: 1,
          title: 'Strategy & Planning',
          description:
            'We define your app concept, target audience, and technical requirements through comprehensive planning.',
        },
        {
          step: 2,
          title: 'UI/UX Design',
          description:
            'Our designers create intuitive and engaging user interfaces that provide exceptional user experience.',
        },
        {
          step: 3,
          title: 'Development & Testing',
          description:
            'We build your mobile app using the latest technologies with rigorous testing across devices.',
        },
        {
          step: 4,
          title: 'Launch & Maintenance',
          description:
            'We help you launch your app on app stores and provide ongoing maintenance and updates.',
        },
      ],
      pricing: {
        model: 'Project-based',
        startingFrom: '$3,000',
        description:
          'Pricing depends on platform choice, features, and complexity of the application.',
      },
    },
    {
      title: 'Web Application Development',
      slug: 'web-application-development',
      description:
        'Modern, responsive web applications with cutting-edge technologies.',
      content:
        'Build powerful web applications that deliver exceptional user experiences across all devices. Our modern web development approach ensures your application is fast, secure, and scalable.',
      features: [
        'Responsive web design',
        'Progressive Web Apps (PWA)',
        'Single Page Applications (SPA)',
        'Server-side rendering (SSR)',
        'API development and integration',
        'Database design and optimization',
        'Cloud deployment',
        'Performance optimization',
      ],
      benefits: [
        'Cross-device compatibility',
        'Improved user experience',
        'Faster loading times',
        'Better SEO performance',
        'Enhanced security',
        'Scalable architecture',
        'Easy maintenance',
        'Cost-effective hosting',
      ],
      process: [
        {
          step: 1,
          title: 'Requirements Analysis',
          description:
            'We gather detailed requirements and create a comprehensive project specification document.',
        },
        {
          step: 2,
          title: 'Design & Prototyping',
          description:
            'Our team creates wireframes, mockups, and interactive prototypes for your web application.',
        },
        {
          step: 3,
          title: 'Development & Testing',
          description:
            'We develop your web application using modern frameworks with comprehensive testing.',
        },
        {
          step: 4,
          title: 'Deployment & Optimization',
          description:
            'We deploy your application and optimize it for performance, security, and SEO.',
        },
      ],
      pricing: {
        model: 'Project-based',
        startingFrom: '$2,500',
        description:
          'Pricing varies based on complexity, features, and integration requirements.',
      },
    },
    {
      title: 'Cloud & DevOps',
      slug: 'cloud-devops',
      description:
        'Cloud infrastructure setup, migration, and DevOps automation.',
      content:
        'Accelerate your digital transformation with our comprehensive cloud and DevOps services. We help you build, deploy, and manage scalable cloud infrastructure with automated CI/CD pipelines.',
      features: [
        'Cloud infrastructure setup',
        'Container orchestration (Docker, Kubernetes)',
        'CI/CD pipeline automation',
        'Infrastructure as Code (IaC)',
        'Cloud migration services',
        'Monitoring and logging',
        'Security and compliance',
        'Cost optimization',
      ],
      benefits: [
        'Improved deployment speed',
        'Enhanced scalability',
        'Reduced infrastructure costs',
        'Better reliability and uptime',
        'Automated processes',
        'Enhanced security',
        'Easy scaling',
        '24/7 monitoring',
      ],
      process: [
        {
          step: 1,
          title: 'Assessment & Planning',
          description:
            'We assess your current infrastructure and create a comprehensive cloud migration strategy.',
        },
        {
          step: 2,
          title: 'Infrastructure Design',
          description:
            'Our team designs a scalable and secure cloud architecture tailored to your needs.',
        },
        {
          step: 3,
          title: 'Migration & Automation',
          description:
            'We migrate your applications and set up automated CI/CD pipelines for continuous deployment.',
        },
        {
          step: 4,
          title: 'Monitoring & Optimization',
          description:
            'We implement monitoring solutions and continuously optimize your cloud infrastructure.',
        },
      ],
      pricing: {
        model: 'Project-based',
        startingFrom: '$4,000',
        description:
          'Pricing depends on infrastructure complexity and migration scope.',
      },
    },
    {
      title: 'QA & Testing',
      slug: 'qa-testing',
      description: 'Comprehensive quality assurance and testing services.',
      content:
        'Ensure your software meets the highest quality standards with our comprehensive testing services. We provide end-to-end quality assurance to deliver bug-free, reliable software solutions.',
      features: [
        'Manual testing services',
        'Automated testing setup',
        'Performance testing',
        'Security testing',
        'Mobile app testing',
        'Cross-browser testing',
        'API testing',
        'Load and stress testing',
      ],
      benefits: [
        'Improved software quality',
        'Reduced bugs and issues',
        'Enhanced user experience',
        'Better performance',
        'Increased reliability',
        'Cost savings',
        'Faster time to market',
        'Risk mitigation',
      ],
      process: [
        {
          step: 1,
          title: 'Test Planning',
          description:
            'We create comprehensive test plans and strategies based on your requirements and specifications.',
        },
        {
          step: 2,
          title: 'Test Case Development',
          description:
            'Our team develops detailed test cases covering all functional and non-functional requirements.',
        },
        {
          step: 3,
          title: 'Execution & Reporting',
          description:
            'We execute tests and provide detailed reports with bug tracking and resolution recommendations.',
        },
        {
          step: 4,
          title: 'Regression & Maintenance',
          description:
            'We perform regression testing and provide ongoing quality assurance support.',
        },
      ],
      pricing: {
        model: 'Project-based',
        startingFrom: '$1,500',
        description:
          'Pricing varies based on testing scope, complexity, and timeline requirements.',
      },
    },
    {
      title: 'UI/UX Design',
      slug: 'ui-ux-design',
      description:
        'User-centered design solutions for optimal user experience.',
      content:
        'Create exceptional user experiences with our comprehensive UI/UX design services. We combine user research, creative design, and technical expertise to deliver intuitive and engaging digital products.',
      features: [
        'User research and analysis',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Interactive prototypes',
        'Usability testing',
        'Design system creation',
        'Responsive design',
        'Accessibility compliance',
      ],
      benefits: [
        'Improved user satisfaction',
        'Increased user engagement',
        'Better conversion rates',
        'Reduced development costs',
        'Faster development cycles',
        'Enhanced brand perception',
        'Competitive advantage',
        'User-centered approach',
      ],
      process: [
        {
          step: 1,
          title: 'Research & Discovery',
          description:
            'We conduct user research and analyze your target audience to understand their needs and behaviors.',
        },
        {
          step: 2,
          title: 'Design & Prototyping',
          description:
            'Our designers create wireframes, mockups, and interactive prototypes based on user insights.',
        },
        {
          step: 3,
          title: 'Testing & Iteration',
          description:
            'We test designs with real users and iterate based on feedback to optimize the user experience.',
        },
        {
          step: 4,
          title: 'Handoff & Support',
          description:
            'We provide detailed design specifications and support your development team during implementation.',
        },
      ],
      pricing: {
        model: 'Project-based',
        startingFrom: '$2,000',
        description:
          'Pricing depends on project scope, complexity, and number of screens/features.',
      },
    },
    {
      title: 'Product Strategy',
      slug: 'product-strategy',
      description:
        'Strategic planning and consultation for digital product development.',
      content:
        'Transform your ideas into successful digital products with our strategic planning and consultation services. We help you define product vision, roadmap, and execution strategy for maximum market impact.',
      features: [
        'Product vision and strategy',
        'Market research and analysis',
        'Competitive analysis',
        'User persona development',
        'Product roadmap creation',
        'Feature prioritization',
        'Go-to-market strategy',
        'Performance metrics definition',
      ],
      benefits: [
        'Clear product direction',
        'Reduced development risks',
        'Better market positioning',
        'Improved user adoption',
        'Faster time to market',
        'Increased revenue potential',
        'Competitive advantage',
        'Data-driven decisions',
      ],
      process: [
        {
          step: 1,
          title: 'Discovery & Research',
          description:
            'We conduct market research and analyze your business goals to understand the product landscape.',
        },
        {
          step: 2,
          title: 'Strategy Development',
          description:
            'Our team creates a comprehensive product strategy including vision, roadmap, and success metrics.',
        },
        {
          step: 3,
          title: 'Planning & Prioritization',
          description:
            'We develop detailed implementation plans and prioritize features based on business value and user needs.',
        },
        {
          step: 4,
          title: 'Execution Support',
          description:
            'We provide ongoing consultation and support throughout the product development and launch process.',
        },
      ],
      pricing: {
        model: 'Project-based',
        startingFrom: '$3,500',
        description:
          'Pricing varies based on project complexity and consultation scope.',
      },
    },
    {
      title: 'Google Ads Marketing',
      slug: 'google-ads-marketing',
      description:
        'Professional Google Ads campaigns that drive targeted traffic, increase conversions, and maximize ROI.',
      content:
        'Maximize your online presence and drive qualified leads with our expert Google Ads marketing services. We create, manage, and optimize high-performing campaigns that deliver measurable results and exceptional ROI for your business.',
      features: [
        'Campaign strategy and planning',
        'Keyword research and analysis',
        'Ad copy creation and optimization',
        'Landing page optimization',
        'Bid management and optimization',
        'A/B testing and performance analysis',
        'Conversion tracking setup',
        'Monthly reporting and insights',
      ],
      benefits: [
        'Increased targeted traffic',
        'Higher conversion rates',
        'Better ROI on ad spend',
        'Improved brand visibility',
        'Faster lead generation',
        'Data-driven optimization',
        'Competitive advantage',
        'Scalable growth solutions',
      ],
      process: [
        {
          step: 1,
          title: 'Strategy & Research',
          description:
            'We analyze your business, target audience, and competitors to create a comprehensive Google Ads strategy.',
        },
        {
          step: 2,
          title: 'Campaign Setup',
          description:
            'We set up optimized campaigns with targeted keywords, compelling ad copy, and conversion tracking.',
        },
        {
          step: 3,
          title: 'Launch & Monitor',
          description:
            'We launch your campaigns and continuously monitor performance, making real-time optimizations.',
        },
        {
          step: 4,
          title: 'Optimize & Scale',
          description:
            'We analyze results, optimize campaigns, and scale successful strategies for maximum ROI.',
        },
      ],
      pricing: {
        model: 'Monthly retainer',
        startingFrom: '$1,200',
        description:
          'Pricing includes campaign management, optimization, and monthly reporting. Ad spend billed separately.',
      },
    },
  ],
  industries: [
    {
      title: 'FinTech',
      slug: 'fintech',
      description:
        'Financial technology solutions and digital banking platforms.',
    },
    {
      title: 'HealthTech',
      slug: 'healthtech',
      description: 'Healthcare technology solutions and medical software.',
    },
    {
      title: 'eCommerce',
      slug: 'ecommerce',
      description: 'Online marketplace and e-commerce platform development.',
    },
    {
      title: 'EdTech',
      slug: 'edtech',
      description:
        'Educational technology platforms and learning management systems.',
    },
  ],
};
