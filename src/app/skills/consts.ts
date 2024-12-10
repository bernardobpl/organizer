import { CATEGORIES, SkillT } from "./types"

export const CATEGORIES_OPTIONS = Object.values(CATEGORIES).map((category) => ({
  label: category,
  value: category,
}))

export const HARD_SKILLS_CATEGORIES: CATEGORIES[] = Object.values(CATEGORIES).filter(
  (category) => category !== CATEGORIES.SOFT_SKILLS
)

export const SOFT_SKILLS: SkillT[] = [
  { name: 'Communication', category: CATEGORIES.SOFT_SKILLS },
  { name: 'Teamwork', category: CATEGORIES.SOFT_SKILLS },
  { name: 'Problem-Solving', category: CATEGORIES.SOFT_SKILLS },
  { name: 'Adaptability', category: CATEGORIES.SOFT_SKILLS },
  { name: 'Leadership', category: CATEGORIES.SOFT_SKILLS },
  { name: 'Creativity', category: CATEGORIES.SOFT_SKILLS },
  { name: 'Mentor', category: CATEGORIES.SOFT_SKILLS },
  { name: 'Improvment Mindset', category: CATEGORIES.SOFT_SKILLS },
]

export const HARD_SKILLS: SkillT[] = [
  // Styling
  { name: 'CSS3', category: CATEGORIES.STYLING },
  { name: 'Styled Components', category: CATEGORIES.STYLING },
  { name: 'Tailwind', category: CATEGORIES.STYLING },
  { name: 'Sass', category: CATEGORIES.STYLING },
  { name: 'Less', category: CATEGORIES.STYLING },

  // Components
  { name: 'Design System', category: CATEGORIES.COMPONENTS },
  { name: 'StoryBook', category: CATEGORIES.COMPONENTS },
  { name: 'Material UI', category: CATEGORIES.COMPONENTS },
  { name: 'Shadcn UI', category: CATEGORIES.COMPONENTS },
  { name: 'Chakra UI', category: CATEGORIES.COMPONENTS },

  // State Management
  { name: 'Redux', category: CATEGORIES.STATE_MANAGEMENT },
  { name: 'Zustand', category: CATEGORIES.STATE_MANAGEMENT },
  { name: 'React Context API', category: CATEGORIES.STATE_MANAGEMENT },

  // Async Requests and Cache
  { name: 'React Query', category: CATEGORIES.ASYNC_REQUESTS },
  { name: 'Axios', category: CATEGORIES.ASYNC_REQUESTS },
  { name: 'RTK Query', category: CATEGORIES.ASYNC_REQUESTS },
  { name: 'Redux Saga', category: CATEGORIES.ASYNC_REQUESTS },
  { name: 'Redux Thunk', category: CATEGORIES.ASYNC_REQUESTS },

  // Testing
  { name: 'Jest', category: CATEGORIES.TESTING },
  { name: 'React Testing Library', category: CATEGORIES.TESTING },
  { name: 'Cypress', category: CATEGORIES.TESTING },

  // API Communications
  { name: 'SocketIO', category: CATEGORIES.API_COMMUNICATIONS },
  { name: 'RabbitMQ', category: CATEGORIES.API_COMMUNICATIONS },
  { name: 'RestAPI', category: CATEGORIES.API_COMMUNICATIONS },

  // Databases
  { name: 'SQL', category: CATEGORIES.DATABASES },
  { name: 'NoSQL', category: CATEGORIES.DATABASES },
  { name: 'MongoDB', category: CATEGORIES.DATABASES },
  { name: 'CosmosDB', category: CATEGORIES.DATABASES },
  { name: 'Redis', category: CATEGORIES.DATABASES },
  { name: 'PostgreSQL', category: CATEGORIES.DATABASES },
  { name: 'MySQL', category: CATEGORIES.DATABASES },
  { name: 'Elastic Search', category: CATEGORIES.DATABASES },

  // Version Control
  { name: 'Git', category: CATEGORIES.VERSION_CONTROL },
  { name: 'GitHub', category: CATEGORIES.VERSION_CONTROL },
  { name: 'GitLab', category: CATEGORIES.VERSION_CONTROL },

  // Frontend
  { name: 'HTML5', category: CATEGORIES.FRONTEND },
  { name: 'ReactJS', category: CATEGORIES.FRONTEND },
  { name: 'NextJS', category: CATEGORIES.FRONTEND },
  { name: 'SvelteJS', category: CATEGORIES.FRONTEND },
  { name: 'VueJS', category: CATEGORIES.FRONTEND },

  // Languages
  { name: 'Javascript', category: CATEGORIES.LANGUAGES },
  { name: 'Typescript', category: CATEGORIES.LANGUAGES },
  { name: 'Java', category: CATEGORIES.LANGUAGES },
  { name: 'C#', category: CATEGORIES.LANGUAGES },

  // JS Backend
  { name: 'NodeJS', category: CATEGORIES.JS_BACKEND },
  { name: 'ExpressJS', category: CATEGORIES.JS_BACKEND },
  { name: 'NestJS', category: CATEGORIES.JS_BACKEND },
  { name: 'HonoJS', category: CATEGORIES.JS_BACKEND },
  { name: 'TypeORM', category: CATEGORIES.JS_BACKEND },
  { name: 'Prisma', category: CATEGORIES.JS_BACKEND },
  { name: 'Drizzle', category: CATEGORIES.JS_BACKEND },

  // Java
  { name: 'Java', category: CATEGORIES.JAVA },
  { name: 'Springboot', category: CATEGORIES.JAVA },
  { name: 'Hybernation', category: CATEGORIES.JAVA },

  // C#
  { name: 'C#', category: CATEGORIES.DOTNET },
  { name: '.NET3', category: CATEGORIES.DOTNET },

  // Architecture
  { name: 'Micro Services', category: CATEGORIES.ARCHITECTURE },
  { name: 'Micro Frontend', category: CATEGORIES.ARCHITECTURE },
  { name: 'Azure Functions', category: CATEGORIES.ARCHITECTURE },

  // Agile Management Tools
  { name: 'Jira', category: CATEGORIES.AGILE_MANAGEMENT },
  { name: 'Microsoft Azure', category: CATEGORIES.AGILE_MANAGEMENT },
  { name: 'Click Up', category: CATEGORIES.AGILE_MANAGEMENT },
  { name: 'Trello', category: CATEGORIES.AGILE_MANAGEMENT },
  { name: 'Confluence', category: CATEGORIES.AGILE_MANAGEMENT },

  // Agile Styles
  { name: 'Scrum', category: CATEGORIES.AGILE_STYLES },
  { name: 'Kanban', category: CATEGORIES.AGILE_STYLES },

  // DevOps
  { name: 'AWS', category: CATEGORIES.DEVOPS },
  { name: 'Heroku', category: CATEGORIES.DEVOPS },
  { name: 'Docker', category: CATEGORIES.DEVOPS },

  // Monitoring
  { name: 'Kibana', category: CATEGORIES.MONITORING },
  { name: 'Sentry', category: CATEGORIES.MONITORING },
]

export const ALL_SKILLS = [...SOFT_SKILLS, ...HARD_SKILLS]