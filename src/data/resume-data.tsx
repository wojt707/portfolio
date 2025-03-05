import { GitHubIcon, LinkedInIcon } from '@/components/icons'

export const RESUME_DATA = {
  name: 'Wojciech Dolibóg',
  initials: 'WD',
  location: 'Radzionków, Poland, CET',
  locationLink: 'https://www.google.com/maps/place/Radzionków',
  about: 'I build software that works.',
  summary: (
    <>
      As a software developer exploring various technical fields - mainly
      full-stack development, machine learning and data engineering - I focus on
      writing clean code. I don’t pretend to know everything, but I know how to
      find the answers and I work hard to solve the problems. I’m excited to
      keep learning and taking on new challenges.
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
      degree: 'Master of Science (MSc) in Data Science (conducted in English)',
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
        'Bachelor of Science (BSc) in Informatics (Computer Science conducted in English)',
      start: '2021',
      monthStart: 'Oct',
      end: '2025',
      monthEnd: 'Feb',
    },
  ],
  work: [
    {
      company: 'Fagor Arrasate',
      location: 'Lawrenceburg, TN, United States, CST',
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
