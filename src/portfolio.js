const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://daryfmn.github.io',
  title: 'MDF.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Muhammad Dary Fadhlurrohman',
  role: 'Full Stack Developer',
  picture: 'profile.jpeg',

  description:
    'Motivated ICT student pursuing a Bachelor of Information and Communication Technology (Honours) at Asia e University, specializing in Full Stack Development through an Associate Degree at Universitas Indonesia (CEP-CCIT-FTUI). Passionate about building responsive, user-focused web applications and eager to contribute to real-world projects.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/muhammad-fadhlurrohman-566b8840b',
    github: 'https://github.com/daryfmn',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Imagix - Flutter Mobile App',
    description:
      'A mobile application built with Flutter and Dart, featuring a Supabase backend for authentication, database, and storage integration.',
    stack: ['Flutter', 'Dart', 'Supabase'],
    sourceCode: 'https://github.com/korehitone/imagix.git',
    livePreview: 'https://github.com/korehitone/imagix/releases/tag/imagix-1.0.1-rc',
  },
  {
    name: 'Online Book Store - Web App',
    description:
      'A web-based bookstore frontend built with CodeIgniter 4 and PHP, featuring a book catalog, shopping cart, and user profile pages.',
    stack: ['CodeIgniter 4', 'PHP', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/daryfmn/bookstoreCI.git',
    livePreview: 'https://github.com/daryfmn/bookstoreCI.git',
  },
  {
    name: 'Online Book Store - RESTful API',
    description:
      'A RESTful API for an online bookstore built with Spring Boot and Java, with full CRUD endpoints for books, categories, customers, and cart.',
    stack: ['Spring Boot', 'Java', 'MySQL', 'Postman'],
    sourceCode: 'https://github.com/korehitone/bookstore',
    livePreview: 'https://github.com/korehitone/bookstore',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'SQL',
  'Java',
  'PHP',
  'Dart',
  'MySQL',
  'MongoDB',
  'Spring Boot',
  'CodeIgniter 4',
  'Flutter',
  'Figma',
  'Git',
  'GitHub',
  'DevOps',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'd.fadhlurrohman.id@gmail.com',
}

export { header, about, projects, skills, contact }
