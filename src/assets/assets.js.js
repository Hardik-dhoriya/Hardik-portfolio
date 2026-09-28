import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaLock, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.jpeg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/hotel.png';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/car.jpg';
import projectImg6 from '../assets/auth.jpg';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces using React and modern frontend technologies.',
    tags: ["HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS"]
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Developing server-side applications and RESTful APIs using Node.js and Express.js.',
    tags: ["Node.js",
      "Express.js",
      "REST APIs",
      "CRUD Operations"]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Managing application data, designing schemas, and performing database operations using MongoDB.',
    tags: ["MongoDB",
      "Mongoose",
      "CRUD",
      "Aggregation"]
  },
  {
    title: 'Authentication & Security',
    icon: FaLock,
    description: 'Implementing user authentication and protected routes using JWT and password hashing.',
    tags: ["JWT",
      "Bcrypt",
      "Authentication",
      "Authorization"]
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Using development tools to write, test, manage, and maintain full-stack applications.',
    tags: ["Git",
      "GitHub",
      "VS Code",
      "Postman",
      "npm",]
  }
];



export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Hotel Management System",
    description: "A full-stack hotel management application with room management, user authentication, room booking, search, filtering, and check-in/check-out functionality.",
    image: projectImg3,
    tech: ["React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Car Rental System",
    description: "A car rental application where users can browse available cars, view details, book vehicles, and manage rental listings with an admin dashboard.",
    image: projectImg5,
    tech: ["React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "User Authentication System",
    description: "A secure authentication application with user signup, login, password hashing using bcrypt, JWT token authentication, and protected routes.",
    image: projectImg6,
    tech: ["React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bcrypt",],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
