export const profile = {
  name: 'Bhone Pyae Hmuee',
  role: 'Junior Java Developer',
  tagline:
    'Fullstack and microservices apps with Spring Boot, MySQL, React, and Docker.',
  location: 'Sanchaung Township, Yangon',
  email: 'bhonepyaehmuee33@gmail.com',
  phone: '+95 9 250 182 268',
  resumeUrl: encodeURI("/Bhone Pyae Hmuee's Resume.pdf"),
  resumeLabel: "Bhone Pyae Hmuee's Resume",
  resumeFileName: "Bhone Pyae Hmuee's Resume.pdf",
  github: 'https://github.com/bhonepyaehmuee',
  linkedin: 'https://www.linkedin.com/in/bhone-pyae-hmuee-87479934b',
  languages: [
    { name: 'Burmese', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
  ],
}

export const about = [
  'Junior Java developer with hands-on experience building full-stack and microservices applications using Spring Boot, MySQL, React, and Docker. Skilled in designing REST APIs, securing them with Spring Security, and testing with JUnit and JMeter.',
  'Familiar with CI/CD using Jenkins and Kubernetes basics. Seeking a junior backend role where I can learn from a team and write clean, maintainable code.',
]

export const skills = [
  { group: 'Languages', items: ['Java', 'JavaScript', 'SQL'] },
  {
    group: 'Backend',
    items: [
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'REST APIs',
      'Microservices',
    ],
  },
  {
    group: 'Frontend',
    items: ['React', 'Thymeleaf', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  { group: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { group: 'API Docs', items: ['Swagger UI', 'OpenAPI'] },
  {
    group: 'DevOps & Tools',
    items: [
      'Docker',
      'Kubernetes (Basic)',
      'Jenkins (CI/CD)',
      'Git',
      'GitHub',
      'Postman',
    ],
  },
  {
    group: 'Testing',
    items: ['JUnit', 'JMeter', 'Cucumber', 'Mockito', 'Acceptance Testing'],
  },
]

export const education = [
  {
    degree: 'Bachelor of Science (Mathematics)',
    school: 'Yangon University of Distance Education',
    detail: '',
    period: '2019 — 2025',
  },
  {
    
    degree: 'Advanced Certificate in Information Technology',
    school: 'Software Engineering · NIIT India',
    detail: 'GPA 3.75',
    period: '2020',
  },
  {
    degree: 'Honors Diploma in Information Technology',
    school: 'Software Engineering · NIIT India',
    detail: 'GPA 4.0',
    period: '2023',
  },
  {
    degree: 'Advanced Diploma in Information Technology',
    school: 'Software Engineering · NIIT India',
    detail: 'GPA 3.75',
    period: '2024',
  },
]
 

export const projects = [
  {
    title: 'Consultant Booking System',
    meta: 'In Progress · Backend Developer',
    summary:
      'Microservices booking platform with User, Consultant, Booking, and Notification services — each with its own MySQL database — secured with JWT and deployed on Kubernetes.',
    points: [
      'REST APIs for registration, consultant search, availability, and booking',
      'Double-booking prevention with time-slot validation',
      'Spring Security + JWT authentication',
      'Docker + local Kubernetes deployment; Jenkins CI pipeline; JMeter load tests',
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'Kubernetes', 'Jenkins'],
    link: '',
  },
  {
    title: 'Online Bookstore Management System',
    meta: '2025 · Fullstack Developer',
    summary:
      'Full-stack Spring Boot MVC bookstore with Thymeleaf, Spring Security, search and reporting, and Docker on Java 21.',
    points: [
      'Controller–Service–Repository architecture with Spring Data JPA / MySQL',
      'Entity relations (@ManyToMany, @OneToMany) and BCrypt session login',
      'JPQL / SQL search, filters, sales reports, pagination, and Excel exports',
      'Maven build and Docker packaging',
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Docker'],
    link: 'https://github.com/bhonepyaehmuee/bookstore-spring-boot',
  },
]
