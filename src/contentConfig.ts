import { MenuItem } from "./types";

const externalPages: { [key: string]: string } = {
  'odin-blog-client-service':      'https://odin-blog-client-service-production.up.railway.app',
  'odin-blog-admin-service':       'https://odin-blog-admin-service-production.up.railway.app',
  'odin-blog-api-service':         'https://odin-blog-api-service-production.up.railway.app/api/posts/',
  'odin-members-only':             'https://odin-members-only-production.up.railway.app',
  'odin-inventory-application':    'https://odin-inventory-application-prod-production.up.railway.app',
  'chat-layers':                   'https://chat-layers-production.up.railway.app/',

  'odin-hangman':                  'https://replit.com/@ted_jones671/odin-hangman#hangman.rb',
  'odin-mastermind':               'https://replit.com/@ted_jones671/odin-mastermind#mastermind.rb',
  'odin-tic-tac-toe':              'https://replit.com/@ted_jones671/odin-tic-tac-toe#tic_tac_toe.rb',
  'odin-basic-informational-site': 'https://replit.com/@ted_jones671/odin-basic-informational-site',
}

const ignoredRepos = [ 'nextjs-approuter-shadcn' ];

const backEndProjectNames = [
  'chat-layers',
  'odin-blog-api-service',
  'odin-blog-admin-service',
  'odin-blog-client-service',
  'odin-members-only',
  'odin-inventory-application',
];

const frontEndProjectNames = [
  'html-to-pdf',
  'instagram-history-finder',
  'odin-shopping-cart',
  'odin-memory-card',
];

const cliRepos: { [key: string]: string[] } = {
  'Algorithms': [
    'odin-knights-travails',
    'odin-binary-search-trees',
    'odin-linked-lists',
    'odin-recursion',
    'odin-bubble-sort',
    'odin-substring',
    'odin-caesar-cipher',
    'odin-stock-picker',
    'advent-of-code-2023',
  ],
  'Command Line Games': [
    'odin-mastermind',
    'odin-hangman',
    'odin-tic-tac-toe',
  ],
}

const techExp: { [key: string]: string[] }[] = [{
  'Primary Language: TypeScript': [],
  // "Languages I've Experimented with:": [
  'Less experienced languages': [
    'Python',
    'Bash',
    'Ruby',
  ],
  // 'Frameworks/Libraries': [
  //   'React & NextJS',
  //   'ExpressJS',
  //   "NodeJS (technically, it's a runtime)",
  //   'Tailwind CSS',
  // ]
  'My Stack': [
    'Runtime: Bun',
    'Database: Turso (SQLite)',
    'Back-End: NextJS',
    'Front-End: React',
    'Styling: Tailwind',
  ]
}, {
    'Other Technologies & Skills:': [
      'Solid understanding of git',
      'Knowledge of basic testing practices',
      'Experience working with APIs',
      'Experience with SQL and NoSQL databases',
      'Familiarity with Linux',
      'Previous tech support experience',
    ],
    'Interested in learning': [
      'SolidJS framework',
      'Functional programming',
      'A compiled language',
    ],
  }
];

const devicons: { [key: string]: string } = {
  'TypeScript': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" ,
  'JavaScript': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" ,
  'NextJS':     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" ,
  'React':      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" ,
  'Tailwind':   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  // 'Express':    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
  'Bun':        "https://api.iconify.design/devicon/bun.svg",
  'NodeJS':     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  'Bash':       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" ,
  'MongoDB':    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
  // 'MySQL':      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" ,
  'SQLite':     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  'HTML':       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" ,
  'CSS':        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
  'Git':        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
  'Ruby':       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg",
  'Python':     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
}

const contactMenu: MenuItem[] = [
  { href: require('./assets/documents/resume.pdf'), content: 'Resume', icon: 'fa-solid fa-file-invoice', isLink: true },
  { href: 'https://github.com/tediferJones', content: 'GitHub', icon: 'fa-brands fa-github', isLink: true },
  { href: 'mailto:theo_drz@live.com', content: 'Email', icon: 'fa-solid fa-envelope-open-text', isLink: true, },
  { href: 'tel:+14128891992', content: 'Phone', icon: 'fa-solid fa-phone-volume', isLink: true },
];

const subsectionMenu: MenuItem[] = [
  { href: '#AboutMe', content: 'About Me' },
  { href: '#TechnicalExperience', content: 'Technical Experience' },
  { href: '#BackEndProjects', content: 'Back-End Projects' },
  { href: '#FrontEndProjects', content: 'Front-End Projects' },
  { href: '#CliProjects', content: 'CLI Projects' },
  { href: '#AllProjects', content: 'All Projects' },
];

export {
  externalPages,
  ignoredRepos,
  backEndProjectNames,
  frontEndProjectNames,
  cliRepos,
  techExp,
  devicons,
  contactMenu,
  subsectionMenu,
}
