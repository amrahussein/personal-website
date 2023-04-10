import { highlights } from './constants/projects-highlights';
import { priorities } from './constants/projects-priorities';

export const projects = [
  {
    id: 1,
    url_live: 'https://amromoorie.github.io/apple-varieties/',
    url_repo: 'https://github.com/amromoorie/apple-varieties',
    name: 'Apple Varieties',
    description:
      'fully responsive landing page up to XL screens made with Tailwind',
    features: null,
    technologies: ['React', 'TailwindCSS', 'Node.js', 'Cheerio'],
    notes:
      'experimenting with web scraping with cheerio! based on a real article',
    isFeatured: true,
    hasCoreFeatDone: true,
    highlights: {
      names: [highlights.RESPONSIVE.name, highlights.TAILWIND.name],
      icons: [highlights.RESPONSIVE.icon, highlights.TAILWIND.icon],
    },
    priority: priorities.NORMAL,
  },
  {
    id: 2,
    url_live: 'https://amromoorie.github.io/taskify-mantine/',
    url_repo: 'https://github.com/amromoorie/taskify-mantine',
    name: 'Taskify',
    description: 'a todo app to experiment with mantine styling lib',
    features: [
      'add, delete, mark complete, filter out completed & show total number of todos',
      'todos has titles with content',
      'data saved in browser local storage',
    ],
    technologies: ['TypeScript', 'React', 'Mantine', 'react-hook-form'],
    notes: '',
    isFeatured: true,
    hasCoreFeatDone: true,
    highlights: {
      names: [highlights.REACT.name, highlights.TYPESCRIPT.name],
      icons: [highlights.REACT.icon, highlights.TYPESCRIPT.icon],
    },
    priority: priorities.HIGH,
  },
  {
    id: 3,
    url_live: 'https://amromoorie.github.io/Fido/',
    url_repo: 'https://github.com/amromoorie/Fido',
    name: 'Fido',
    description:
      'fido is a collection of dogs images using the dog api; the aim for this project is to experiment with pagination & modern redux toolkitt',
    features: [
      'pagination to different pages; enables users to specify a limit per page',
    ],
    technologies: ['React', 'Redux', 'TailwindCSS'],
    notes: '',
    isFeatured: true,
    hasCoreFeatDone: true,
    highlights: {
      names: [highlights.REACT.name, highlights.REDUX.name],
      icons: [highlights.REACT.icon, highlights.REDUX.icon],
    },
    priority: priorities.HIGH,
  },
  {
    id: 4,
    url_live: '',
    url_repo:
      'https://github.com/amromoorie/average-world-temperature.VanillaJS',
    name: 'Historical Zonal annual Means',
    description:
      'simple project working with chartJS tool, transforming csv data (global weather info) into tabulating data which can be visualized',
    features: null,
    technologies: ['JavaScript', 'ChartJS', 'Webpack'],
    notes: '',
    isFeatured: false,
    hasCoreFeatDone: true,
    highlights: {
      names: [highlights.JAVASCRIPT.name],
      icons: [highlights.JAVASCRIPT.icon],
    },
    priority: priorities.NORMAL,
  },
  {
    id: 5,
    url_live: '',
    url_repo: 'https://github.com/amromoorie/banking-system',
    name: 'Backend Banking System',
    description: 'simple banking app made with mongodb and nodeJS',
    features: null,
    technologies: null,
    notes: '',
    hasCoreFeatDone: false,
    isFeatured: false,
    highlights: {
      names: [highlights.NODE.name],
      icons: [highlights.NODE.icon],
    },
    priority: priorities.NORMAL,
  },
  {
    id: 6,
    url_live: '',
    url_repo: 'https://github.com/amromoorie/blog',
    name: 'Simple Blog With Sanity',
    description:
      'project orginally developed for exploring strapi as a content first class model',
    features: null,
    technologies: ['React', 'NextJS', 'Strapi', 'Groq', 'TailwindCSS'],
    notes: '',
    hasCoreFeatDone: true,
    isFeatured: false,
    highlights: {
      names: [highlights.STRAPI.name],
      icons: [highlights.STRAPI.icon],
    },
    priority: priorities.NORMAL,
  },
  {
    id: 7,
    url_live: '',
    url_repo: 'https://github.com/amromoorie/Article-Sentiment-Analysis',
    name: 'Article Sentiment Analysis',
    description:
      'Evaluate News Article with Natural Language Processing. It shows sentiment and analysis based on the article submitted based on meaningcloud API',
    features: null,
    technologies: ['JavaScript', 'Node.js', 'Webpack'],
    notes: '',
    hasCoreFeatDone: true,
    isFeatured: false,
    highlights: {
      names: [highlights.WEBPACK.name],
      icons: [highlights.WEBPACK.icon],
    },
    priority: priorities.NORMAL,
  },

  {
    id: 8,
    url_live: '',
    url_repo: 'https://github.com/amromoorie/my-starter',
    name: 'My Starter',
    description:
      "ITI Team Project; a SPA app using JavaScript meant for a simple applet targetting those who want a quick starter on his/her day. It's a type of app that can be converted into a future web extension with possible reprioritization of these features. My Starter is a web app that provides a collection of useful tools and features for everyday use.",
    features: null,
    technologies: ['JavaScript'],
    notes:
      'Main Contribution: Implemented SPA structure using vite, developed simple weather app, integrated team members code into the website',
    isFeatured: true,
    hasCoreFeatDone: true,
    highlights: {
      names: [highlights.JAVASCRIPT.name],
      icons: [highlights.JAVASCRIPT.icon],
    },
    priority: priorities.HIGH,
  },

  {
    id: 9,
    url_live: '',
    url_repo: 'https://github.com/amromoorie/taskify-full-stack',
    name: 'taskify-full-stack',
    description: 'taskify',
    features: null,
    technologies: ['NestJS', 'React', 'TailwindCSS'],
    notes: 'more details soon',
    isFeatured: true,
    hasCoreFeatDone: false,
    highlights: {
      names: [highlights.NEST.name],
      icons: [highlights.NEST.icon],
    },
    priority: priorities.HIGH,
  },

  {
    id: 10,
    url_live: '',
    url_repo: 'https://github.com/amromoorie/people-chat',
    name: 'People Chat',
    description: 'exprimenting with Node.js Socket IO',
    features: ['Send, Recieve chats', 'Reactive UI', 'More to come'],
    technologies: ['Node.js', 'React', 'TailwindCSS'],
    notes: '',
    isFeatured: false,
    hasCoreFeatDone: false,
    highlights: {
      names: [highlights.NODE.name, highlights.REACT.name],
      icons: [highlights.NODE.icon, highlights.REACT.icon],
    },
    priority: priorities.NORMAL,
  },

  {
    id: 11,
    url_live: '',
    url_repo: 'https://github.com/amromoorie/practice-english-quizly',
    name: 'practice-english-quizly',
    description: 'Interactive quiz app built with Nodo.js & React',
    features: null,
    technologies: ['Node.js', 'React', 'TailwindCSS'],
    notes: '',
    isFeatured: true,
    hasCoreFeatDone: false,
    highlights: {
      names: [highlights.NODE.name, highlights.REACT.name],
      icons: [highlights.NODE.icon, highlights.REACT.icon],
    },
    priority: priorities.HIGH,
  },

  {
    id: 12,
    url_live: '',
    url_repo: 'https://github.com/mamin98/BookStoreApp',
    name: 'Bookstore App',
    description:
      'ITI graduation project; a bookstore app where users to discover/shop their favorite books with a heavy focus on user experience & reactive UI',
    features: null,
    technologies: [
      'C#',
      '.NET API',
      'Entity Framework Core',
      'Angular',
      'TypeScript',
    ],
    notes:
      'Main Contribuations: Developed responsive cart feature from back to front meant for user experience, Implemented related features such as adding, removing, updating products in the cart',
    isFeatured: true,
    hasCoreFeatDone: true,
    highlights: {
      names: [
        highlights.CSHARP.name,
        highlights.DOTNET.name,
        highlights.ANGULAR.name,
        highlights.TYPESCRIPT.name,
      ],
      icons: [
        highlights.CSHARP.icon,
        highlights.DOTNET.icon,
        highlights.ANGULAR.icon,
        highlights.TYPESCRIPT.icon,
      ],
    },
    priority: priorities.IMPORTANT,
  },

  {
    id: 13,
    url_live: '',
    url_repo: 'https://github.com/KareemEL-Dessouky/Restaurant',
    name: 'Restaurant App',
    description:
      "ITI Team Project; .Net MVC web application; a simulation to a restaurant system: for users to do shopping, and for admins for managing users' data.",
    features: null,
    technologies: [
      'C#',
      '.NET MVC',
      'Entity Framework Core',
      'Razor',
      'Bootstrap',
    ],
    notes:
      'Main Contribuations: Implemented CRUD operations to manage admin data such as products & categories.',
    isFeatured: true,
    hasCoreFeatDone: true,
    highlights: {
      names: [highlights.CSHARP.name, highlights.DOTNET.name],
      icons: [highlights.CSHARP.icon, highlights.DOTNET.icon],
    },
    priority: priorities.HIGH,
  },

  {
    id: 14,
    url_live: '',
    url_repo: 'https://github.com/amromoorie/ILearn-school-app-api',
    name: 'ILearn School App',
    description: '',
    features: null,
    technologies: [
      'C#',
      '.NET API',
      'Entity Framework Core',
      'React',
      'TypeScript',
      'TailwindCSS',
    ],
    notes: 'more details soon',
    isFeatured: true,
    hasCoreFeatDone: false,
    highlights: {
      names: [
        highlights.CSHARP.name,
        highlights.DOTNET.name,
        highlights.REACT.name,
      ],
      icons: [
        highlights.CSHARP.icon,
        highlights.DOTNET.icon,
        highlights.REACT.icon,
      ],
    },
    priority: priorities.NORMAL,
  },

  {
    id: 16,
    url_live: '',
    url_repo: 'https://github.com/amromoorie/webstore-api',
    name: 'Webstore (e-commerce)',
    description: '',
    features: null,
    technologies: [
      'C#',
      '.NET MVC',
      'Entity Framework Core',
      'Angular',
      'TypeScript',
      'TailwindCSS',
    ],
    notes: 'more details soon',
    isFeatured: true,
    hasCoreFeatDone: false,
    highlights: {
      names: [
        highlights.CSHARP.name,
        highlights.DOTNET.name,
        highlights.ANGULAR.name,
        highlights.TYPESCRIPT.name,
      ],
      icons: [
        highlights.CSHARP.icon,
        highlights.DOTNET.icon,
        highlights.ANGULAR.icon,
        highlights.TYPESCRIPT.icon,
      ],
    },
    priority: priorities.HIGH,
  },

  {
    id: 17,
    url_live: '',
    url_repo: 'https://github.com/amromoorie/personal-website',
    name: 'Portfolio Site',
    description: 'As it may already be shown; a simple portfolio site, meant for self-expression & motivation towards DEV world. It\'s built with NextJs due to its dynamic capabilities; with potential scalability and strong SEO qualities',
    features: null,
    technologies: ['JavaScript', 'React', 'NextJs', 'TailwindCSS'],
    notes: '',
    isFeatured: false,
    hasCoreFeatDone: true,
    highlights: {
      names: [
        highlights.JAVASCRIPT.name,
        highlights.REACT.name,
        highlights.NEXT.name,
        highlights.TAILWIND.name,
      ],
      icons: [
        highlights.JAVASCRIPT.icon,
        highlights.REACT.icon,
        highlights.NEXT.icon,
        highlights.TAILWIND.icon,
      ],
    },
    priority: priorities.HIGH,
  },
];
