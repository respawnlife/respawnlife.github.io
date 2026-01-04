import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      cases: 'Case Studies',
      tech: 'Technologies',
      about: 'About Us',
      contact: 'Contact',
      team: 'Team'
    },
    hero: {
      title: 'Professional Software Development Services',
      slogan: 'Reshape Digital Life, Create Infinite Possibilities',
      description: 'We provide high-quality custom software solutions, combining cutting-edge technologies to help clients achieve digital transformation',
      getStarted: 'Get Started',
      learnMore: 'Learn More'
    },
    services: {
      title: 'Our Services',
      description: 'We provide comprehensive software development services to meet your business needs',
      items: [
        {
          title: 'Web Development',
          description: 'From corporate websites to e-commerce platforms, we provide responsive, high-performance web development services ensuring great user experience and SEO optimization.'
        },
        {
          title: 'Mobile App Development',
          description: 'Professional iOS and Android app development to help your business reach mobile users with smooth mobile experiences.'
        },
        {
          title: 'Enterprise Software',
          description: 'Custom development of management systems, CRM, ERP and other software tailored to your business needs to improve efficiency.'
        },
        {
          title: 'Cloud Services',
          description: 'Cloud server configuration, application deployment, load balancing to ensure stable and efficient operation.'
        },
        {
          title: 'Cyber Security',
          description: 'Comprehensive security solutions to protect your business data and user information.'
        },
        {
          title: 'Technical Support',
          description: 'Long-term technical support and system maintenance to ensure continuous stable operation.'
        }
      ]
    },
    team: {
      title: 'Our Team',
      description: 'Meet the talented professionals behind our success',
      frontend: {
        role: 'Frontend Developer',
        experience: '9 years experience',
        description: 'Specializes in modern frontend technologies like Vue.js, React, and TypeScript. Expert in creating responsive, intuitive user interfaces with focus on performance and accessibility. Skilled in state management, component architecture, and cross-browser compatibility.'
      },
      backend: {
        role: 'Backend Developer',
        experience: '16 years experience',
        description: 'Expert in Node.js, Python, Java, and database design with deep knowledge of server architecture and security. Experienced in building scalable APIs, implementing microservices, and optimizing system performance. Specializes in cloud infrastructure and DevOps practices.'
      },
      design: {
        role: 'UI/UX Designer',
        experience: '12 years experience',
        description: 'Creates beautiful and functional designs with a focus on user experience and accessibility. Skilled in user research, wireframing, prototyping, and design system creation. Combines aesthetic sensibility with deep understanding of user behavior and interaction patterns.'
      }
    },
    cases: {
      title: 'Case Studies',
      description: 'Explore our successful projects and solutions',
      contactButton: 'Contact Us',
      ai: {
        title: 'AI-Powered Analytics Platform',
        description: 'A comprehensive AI analytics platform that helps businesses make data-driven decisions. The platform processes large volumes of data in real-time and provides actionable insights through intuitive visualizations.'
      },
      app: {
        title: 'Mobile Health & Fitness App',
        description: 'A cross-platform mobile application that helps users track fitness goals, nutrition, and provides personalized workout plans. Features include social sharing, progress tracking, and AI-powered recommendations.'
      },
      website: {
        title: 'E-commerce Website Solution',
        description: 'A fully responsive e-commerce platform with advanced search, filtering, and recommendation features. The solution includes inventory management, payment processing, and customer support integration.'
      }
    },
    about: {
      title: 'About Our Team',
      description: 'Respawn Life is a passionate team of three dedicated to providing high-quality custom software solutions. Our team consists of experienced developers, designers, and project managers who are passionate about technology and committed to helping clients achieve success through innovative solutions.',
      mission: 'Our Mission',
      missionDesc: 'To reshape digital life by creating innovative, reliable, and scalable software solutions that help businesses thrive in the digital age.'
    },
    contact: {
      title: 'Ready to start your project?',
      description: 'Contact us today to discuss your software development needs',
      email: 'Email',
      button: 'Contact Us'
    },
    ai: {
      title: 'AI-Powered Solutions',
      description: 'Leverage the power of artificial intelligence to transform your business processes and gain competitive advantage.'
    },
    footer: {
      description: 'We are a passionate team providing high-quality custom software solutions, combining cutting-edge technologies to help clients achieve digital transformation.',
      navigation: 'Navigation',
      contact: 'Contact',
      rights: 'All rights reserved.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      services: '服务',
      cases: '案例',
      tech: '技术',
      about: '关于我们',
      contact: '联系',
      team: '团队'
    },
    hero: {
      title: '专业软件开发服务',
      slogan: '重塑数字生活，创造无限可能',
      description: '我们提供高质量的定制软件解决方案，结合前沿技术帮助客户实现数字化转型',
      getStarted: '开始了解',
      learnMore: '了解更多'
    },
    services: {
      title: '我们的服务',
      description: '我们提供全方位的软件开发服务，满足您的各种业务需求',
      items: [
        {
          title: '网站开发',
          description: '从企业官网到电子商务平台，我们提供响应式、高性能的网站开发服务，确保良好的用户体验和搜索引擎优化。'
        },
        {
          title: '移动应用开发',
          description: '专业的iOS和Android应用开发，帮助您的业务触达移动用户，提供流畅的移动体验。'
        },
        {
          title: '企业软件定制',
          description: '根据您的业务需求，定制开发企业管理系统、CRM、ERP等软件，提升业务效率和管理水平。'
        },
        {
          title: '云服务与部署',
          description: '提供云服务器配置、应用部署、负载均衡等服务，确保您的应用稳定高效运行。'
        },
        {
          title: '网络安全',
          description: '提供全面的网络安全解决方案，保护您的业务数据和用户信息安全。'
        },
        {
          title: '技术支持与维护',
          description: '提供长期的技术支持和系统维护服务，确保您的软件系统持续稳定运行。'
        }
      ]
    },
    team: {
      title: '我们的团队',
      description: '认识我们成功的幕后人才',
      frontend: {
        role: '前端开发工程师',
        experience: '9年经验',
        description: '专精于Vue.js、React和TypeScript等现代前端技术。专注于创建响应式、直观的用户界面，注重性能和无障碍访问。擅长状态管理、组件架构和跨浏览器兼容性。'
      },
      backend: {
        role: '后端开发工程师',
        experience: '16年经验',
        description: '精通Node.js、Python、Java和数据库设计，具有深厚的服务器架构和安全知识。在构建可扩展API、实现微服务和优化系统性能方面经验丰富。专精于云基础设施和DevOps实践。'
      },
      design: {
        role: 'UI/UX设计师',
        experience: '12年经验',
        description: '专注于用户体验和可访问性，创造美观且功能强大的设计。精通用户研究、线框图、原型设计和设计系统创建。将美学感知与对用户行为和交互模式的深入理解相结合。'
      }
    },
    cases: {
      title: '案例研究',
      description: '探索我们成功的项目和解决方案',
      contactButton: '联系我们',
      ai: {
        title: 'AI驱动分析平台',
        description: '一个综合的AI分析平台，帮助企业做出数据驱动的决策。该平台实时处理大量数据，并通过直观的可视化界面提供可操作的见解。'
      },
      app: {
        title: '移动健康与健身应用',
        description: '一款跨平台移动应用，帮助用户跟踪健身目标、营养摄入，并提供个性化锻炼计划。功能包括社交分享、进度跟踪和AI推荐。'
      },
      website: {
        title: '电子商务网站解决方案',
        description: '一个完全响应式的电子商务平台，具有高级搜索、筛选和推荐功能。解决方案包括库存管理、支付处理和客户支持集成。'
      }
    },
    about: {
      title: '关于我们的团队',
      description: 'Respawn Life 是一个由三人组成的充满热情的团队，致力于提供高质量的定制软件解决方案。我们的团队由经验丰富的开发人员、设计师和项目经理组成，他们对技术充满热情，致力于通过创新的解决方案帮助客户取得成功。',
      mission: '我们的使命',
      missionDesc: '通过创新、可靠和可扩展的软件解决方案来重塑数字生活，帮助企业在数字时代蓬勃发展。'
    },
    contact: {
      title: '准备开始您的项目？',
      description: '今天就联系我们讨论您的软件开发需求',
      email: '邮箱',
      button: '联系我们'
    },
    ai: {
      title: 'AI驱动解决方案',
      description: '利用人工智能的力量来转变您的业务流程并获得竞争优势。'
    },
    footer: {
      description: '我们是一个充满热情的团队，提供高质量的定制软件解决方案，结合前沿技术帮助客户实现数字化转型。',
      navigation: '导航',
      contact: '联系',
      rights: '版权所有。'
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n