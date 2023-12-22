import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Iween,
  DXC,
  scottishShop,
  tripPlanner,
  risk_assessment,
  reva,
  st_andrews,
  st_andrews1,
  wip,
  catGame,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: " Java Backend Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Msc Computer Science ",
    job_type: "Masters",
    company_name: "University of St Andrews, UK ",
    icon: st_andrews1,
    iconBg: "#FFFFFF",
    date: "September 2022 - September 2023",
    points: [
      "Developing and maintaining web applications using multiple and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
 
  {
    title: "Shopify Developer ",
    job_type: "- Part Time (During Master's)",
    company_name: "The Scottish Shop, St Andrews ",
    icon: scottishShop,
    iconBg: "#FFFFFF",
    date: "June 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using multiple and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Software Enginneer",
    company_name: "DXC Technologies",
    icon: DXC,
    iconBg: "#FFFFFF",
    date: "Sep 2021 - July 2022",
    points: [
      "Developing and maintaining web applications using multiple and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "IWEEN Software Solutions",
    icon: Iween,
    iconBg: "#FFFFFF",
    date: "March 2021 - September 2021",
    points: [
      "Developing and maintaining web applications using multiple and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "B.Tech in Computer Science and Engineering",
    company_name: "Reva University",
    job_type:"Bachelors",
    icon: reva,
    iconBg: "#FFFFFF",
    date: "July 2021",
    points: [
      "Developing and maintaining web applications using multiple and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  
  {
    name: "Travel Planner",
    description:
      "An application for holiday planning, consists of various web pages split up by function and purpose and utilizes a database for persistent data storage and a RESTful API written in the Express framework.",
    tags: [
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: tripPlanner,
    source_code_link: "https://github.com/YashMadenenni/trip-Planner",
  },
  {
    name: "Room Booking System",
    description:
      "An MVC model based Java code for booking a room. A comprehensive room booking platform that allows users to book rooms.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Swing",
        color: "green-text-gradient",
      },
      {
        name: "JUnit",
        color: "pink-text-gradient",
      },
      {
        name: "CMD",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/YashMadenenni",
  },
  {
    name: "Risk Assessment System",
    description:
      "A system to provide a centralised application to create, manage and store risk assessments after performing risk assessments on different activities or events that require risk assessments. ",
    tags: [
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Open AI",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      }
    ],
    image: risk_assessment,
    source_code_link: "https://github.com/YashMadenenni/risk-assessment",
  },
  {
    name: "Yash | Portfolio",
    description:
      "An complete source code to my portfolio. Explore my portfolio to get a glimpse of my skills and my journey.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Email.Js",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Wordle Source Code",
    description:
      "An implementation of the Wordle game where the player must guess the computer-chosen five-letter word within 6 or fewer tries.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JUnit",
        color: "pink-text-gradient",
      },
      {
        name: "Maven",
        color: "green-text-gradient",
      },
      {
        name: "TDD",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/YashMadenenni/Wordle",
  },
  {
    name: "Chat Server",
    description:
      "A comprehensive room booking platform that allows users to book rooms.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Threads",
        color: "green-text-gradient",
      },
      
    ],
    image: tripguide,
    source_code_link: "https://github.com/YashMadenenni/ChatServer",
  },

  {
    name: "Version-control for storywriters",
    description:
      "An collaborative version control system for story writers with access controls etc.., ",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Veu.js",
        color: "pink-text-gradient",
      },
      {
        name: "Agile",
        color: "orange-text-gradient",
      },
      
    ],
    image: wip,
    source_code_link: "https://github.com/YashMadenenni/ChatServer",
  },

  {
    name: "Emojitar",
    description:
      "This system is designed to allow registered users to create emojis and share across the platform ",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      
    ],
    image: wip,
    source_code_link: "https://github.com/YashMadenenni/Guess-the-Cat-Game",
  },

  {
    name: "Guess-the-Cat-Game",
    description:
      "This project is a one-player, web-based game, in which the player attempts to guess the breed of cat the computer has selected. ",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      
    ],
    image: catGame,
    source_code_link: "https://github.com/YashMadenenni/Guess-the-Cat-Game",
  },

  {
    name: "Ecommerce website",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wip,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };