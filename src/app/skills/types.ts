export enum CATEGORIES {
  SOFT_SKILLS = 'Soft Skills',
  STYLING = 'Styling',
  COMPONENTS = 'Components',
  STATE_MANAGEMENT = 'State Management',
  ASYNC_REQUESTS = 'Async Requests and Cache',
  TESTING = 'Testing',
  API_COMMUNICATIONS = 'API Communications',
  DATABASES = 'Databases',
  VERSION_CONTROL = 'Version Control',
  FRONTEND = 'Frontend',
  LANGUAGES = 'Languages',
  JS_BACKEND = 'JS Backend',
  JAVA = 'Java',
  DOTNET = '.NET',
  ARCHITECTURE = 'Architecture',
  AGILE_MANAGEMENT = 'Agile Management Tools',
  AGILE_STYLES = 'Agile Styles',
  DEVOPS = 'DevOps',
  MONITORING = 'Monitoring'
}

export interface SkillT {
  name: string
  category: CATEGORIES
}