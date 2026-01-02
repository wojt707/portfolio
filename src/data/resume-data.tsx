import { GitHubIcon, LinkedInIcon } from '@/components/icons'

export const RESUME_DATA = {
  name: 'Wojciech Dolibóg',
  initials: 'WD',
  location: 'Radzionków, Poland, CET',
  locationLink: 'https://www.google.com/maps/place/Radzionków',
  about: 'I build software that works.',
  summary: (
    <>
      As a software developer exploring various technical fields,
      mainly full-stack development and machine learning, I focus on
      writing clean code. I don’t pretend to know everything, but I
      know how to find the answers and I work hard to solve the problems.
      I’m excited to keep learning and taking on new challenges.
    </>
  ),
  avatarUrl: 'https://avatars.githubusercontent.com/u/52101387?v=4',
  personalWebsiteUrl: '',
  pdfName: 'wojciech_dolibog_resume.pdf',
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
      school: 'University of Porto',
      location: 'Porto, Portugal, WET',
      locationLink: 'https://www.google.com/maps/place/Porto',
      link: 'https://www.up.pt/portal/en/',
      degree: 'International mobility program, Data Science',
      start: '2025',
      monthStart: 'Sep',
      end: '2026',
      monthEnd: 'Feb',
    },
    {
      school: 'Silesian University of Technology',
      location: 'Gliwice, Poland, CET',
      locationLink: 'https://www.google.com/maps/place/Gliwice',
      link: 'https://www.polsl.pl',
      degree: 'Master of Science in Data Science (conducted in English)',
      start: '2025',
      monthStart: 'Mar',
      end: '2026',
      monthEnd: 'Jun',
    },
    {
      school: 'Silesian University of Technology',
      location: 'Gliwice, Poland, CET',
      locationLink: 'https://www.google.com/maps/place/Gliwice',
      link: 'https://www.polsl.pl',
      degree:
        'Bachelor of Science in Informatics (conducted in English)',
      start: '2021',
      monthStart: 'Oct',
      end: '2025',
      monthEnd: 'Feb',
    },
  ],
  work: [
    {
      company: 'EY GDS',
      location: 'Katowice, Poland, CET',
      locationLink:
        'https://www.google.pl/maps/place/Katowice',
      link: 'https://www.ey.com/en_gl',
      type: 'Hybrid',
      badges: ['Angular', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes'],
      title: 'Software Developer',
      start: '2025',
      monthStart: 'May',
      end: '',
      monthEnd: '',
      description: (
        <>
          <ul className="list-inside list-disc text-justify">
            <li>
              Developing and maintaining full-stack applications using
              Angular, TypeScript, Python (FastAPI), and PostgreSQL,
              focusing on design patterns and clean architecture.
            </li>
            <li>
              Deploying and managing containerized services with
              Docker and Kubernetes, contributing across the stack to
              deliver production-ready solutions.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: 'Fagor Arrasate',
      location: 'Lawrenceburg, TN, US, CST',
      locationLink:
        'https://www.google.pl/maps/place/Lawrenceburg,+Tennessee,+Stany+Zjednoczone',
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
          <ul className="list-inside list-disc text-justify">
            <li>
              Installing and commissioning control systems at customer facility,
              ensuring smooth integration and functionality.
            </li>
            <li>
              Programming PLCs, HMIs and SCADA systems, supporting
              customers on-site and upgrading solutions.
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
          <ul className="list-inside list-disc text-justify">
            <li>
              Building core modules of an ERP web system using Java
              (Spring Boot), Angular, and MySQL.
            </li>
            <li>
              Collaborating in an agile team to deliver stable, maintainable software through iterative improvements.
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
          <ul className="list-inside list-disc text-justify">
            <li>
              Developing a production optimization web dashboard using Angular, TypeScript, HTML, and CSS, aimed at improving efficiency of manufacturing processes.
            </li>
            <li>
              Actively participating in code reviews, contributing to an
              improvement in overall code quality and maintainability.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    'Python (FastAPI, Flask, Django)',
    'Pytorch/Scikit-learn/NumPy/Pandas',
    'Angular',
    'React/Next.js/Vite',
    'TypeScript',
    'TailwindCSS/HTML/CSS',
    'Java (Spring Boot)',
    'SQL (PostgreSQL, MySQL)',
    'Cloud Computing (GCP, AWS)',
    'Docker/Kubernetes',
    'CI/CD',
    'Design Patterns/Clean Architecture',
    'Unit and Integration Testing',
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
        'PyTorch',
        'Flask',
      ],
      description:
        'AI-powered piano music generation tool. It utilizes a custom-trained LSTM model to generate MIDI compositions based on user-specified parameters such as genre, tempo, length and randomness.',
      link: {
        href: 'https://midiforge.onrender.com',
      },
    },
    {
      title: 'Clinic Management',
      techStack: [
        'React',
        'Typescript',
        'TailwindCSS',
        'Shadcn-ui',
        'Java',
        'JWT',
      ],
      description:
        'A role-based clinic management web app with authentication and dynamic UI based on user roles (receptionist, doctor, lab assistant, lab supervisor, admin). Features include among others patient registration, visit scheduling, physical examinations, lab test processing, and result validation.',

      link: {
        href: 'https://github.com/allmindproject',
      },
    },
    {
      title: 'Driver in the Loop',
      techStack: ['Python', 'ROS', 'Raspberry Pi', 'Carla Simulator', 'Ubuntu'],
      description:
        'A vehicle motion simulation system linking a physical test stand with a virtual environment. Uses Carla Simulator to capture vehicle dynamics and control a scaled model via servos and a DC motors, enabling real-time driver interaction.',
      link: {
        href: 'https://github.com/Kakub02/PBL_DriverInTheLoop',
      },
    },
    {
      title: 'Bipedal Walker TD3',
      techStack: ['Python', 'PyTorch', 'Gymnasium', 'TD3 (Twin Delayed DDPG)'],
      description:
        'Reinforcement learning project training a Bipedal Walker agent using the TD3 algorithm in the Gymnasium environment aimed at improving stability and motion of the agent.',
      link: {
        href: 'https://github.com/wojt707/bipedal-walker-td3',
      },
    },
    {
      title: 'Escape the Maze',
      techStack: ['C++', 'SFML', 'Finite State Machine'],
      description:
        'A maze escape game built with C++ and SFML, using a finite state machine for game logic. Players navigate increasingly larger mazes, solving challenges to advance through levels.',
      link: {
        href: 'https://github.com/wojt707/maze',
      },
    },
  ],
} as const
