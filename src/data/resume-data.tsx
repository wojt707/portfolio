import { GitHubIcon, LinkedInIcon } from '@/components/icons'

export const RESUME_DATA = {
  name: 'Wojciech Dolibóg',
  initials: 'WD',
  location: 'Radzionków, Poland, CET',
  locationLink: 'https://www.google.com/maps/place/Radzionków',
  about:
    'Passionate software developer eager to build innovative full-stack applications, AI models, and data-driven solutions while continuously learning and growing.',
  summary: (
    <>
      I’m a curious and driven developer who’s still gathering the experience in
      full-stack development, AI, and data engineering. I’m honest about what I
      don’t know, but I’m great at finding answers and working hard to solve
      problems. I’m excited to keep learning and taking on new challenges.
    </>
  ),
  avatarUrl: 'https://avatars.githubusercontent.com/u/52101387?v=4',
  personalWebsiteUrl: '',
  contact: {
    email: 'dolibog.wojtek@gmail.com',
    tel: '+48534336807',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/wojt707',
        icon: GitHubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/wdolibog/',
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: 'Silesian University of Technology',
      location: 'Gliwice, Poland, CET',
      locationLink: 'https://www.google.com/maps/place/Gliwice',
      link: 'https://www.polsl.pl',
      degree:
        'Bachelor of Engineering in Informatics (Computer Science conducted in English)',
      start: '2021',
      monthStart: 'Oct',
      end: '2025',
      monthEnd: 'Feb',
    },
  ],
  work: [
    {
      company: 'Fagor Arrasate',
      location: 'Ethridge, TN, United States, CST',
      locationLink: 'https://www.google.com/maps/place/Ethridge,+TN+38456,+USA',
      link: 'https://fagorarrasate.com',
      type: 'On-site',
      badges: ['SCADA', 'Siemens TIA Portal', 'Beckhoff TwinCAT'],
      title: 'Automation Engineer',
      start: '2024',
      monthStart: 'Jul',
      end: '2024',
      monthEnd: 'Sep',
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Installing and commissioning control systems at customer facility,
              ensuring smooth integration and functionality.
            </li>
            <li>
              Programming PLCs, HMIs, and SCADA systems for enhanced
              performance.
            </li>
            <li>
              Supporting customers on-site, upgrading systems, and modifying
              control solutions to meet evolving operational needs.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: 'O&S Computer-Soft',
      location: 'Radzionków, Poland, CET',
      locationLink: 'https://www.google.com/maps/place/Radzionków',
      link: 'https://oands.com.pl',
      type: 'On-site',
      badges: ['Java', 'Spring', 'MySQL', 'Angular', 'TypeScript'],
      title: 'Software Developer',
      start: '2023',
      monthStart: 'Jul',
      end: '2023',
      monthEnd: 'Jul',
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developing a comprehensive ERP web application using Java, Spring,
              MySQL, Angular 11 and RESTful APIs.
            </li>
            <li>
              Working in agile methodology, participating in daily meetings to
              address problems, showcase progress, and discuss future
              improvements.
            </li>
            <li>
              Closely collaborating with other developers, fostering quicker
              development of soft skills and software engineering best
              practices.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: 'Queris',
      location: 'Piekary Śląskie, Poland, CET',
      locationLink: 'https://www.google.com/maps/place/Piekary+Śląskie',
      link: 'https://queris.pl',
      type: 'On-site',
      badges: ['Angular', 'TypeScript', 'CSS', 'HTML'],
      title: 'Frontend Developer',
      start: '2019',
      monthStart: 'Jul',
      end: '2019',
      monthEnd: 'Aug',
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developing a production optimization web application using
              Angular, Typescript, CSS, and HTML, aimed at streamlining
              manufacturing processes and improving efficiency.
            </li>
            <li>
              Working closely with peers to identify issues and provide suitable
              resolutions.
            </li>
            <li>
              Actively participating in code reviews and providing constructive
              feedback, contributing to an improvement in overall code quality
              and maintainability.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    'Python (Flask, Django, Pytorch)',
    'React/Next.js/Vite',
    'TypeScript',
    'TailwindCSS/HTML/CSS',
    'SQL (PostgreSQL, MySQL)',
    'C++ (STL, SFML)',
    'Java (Spring)',
    'Linux, ROS',
    'Cloud Computing (GCP)',
    'CI/CD',
    'Agile Methodologies (Scrum)',
  ],
  projects: [
    {
      title: 'MidiForge',
      techStack: [
        'React',
        'Typescript',
        'TailwindCSS',
        'Shadcn-ui',
        'Python',
        'Pythorch',
        'Flask',
      ],
      description:
        'AI-powered piano music generation tool. It utilizes a custom-trained LSTM model to generate MIDI compositions based on user-specified parameters such as genre, tempo, length and randomness.',
      link: {
        href: 'https://midiforge.onrender.com',
      },
    },
  ],
} as const
