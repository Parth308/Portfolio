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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Bukkit Developer",
    icon: backend,
  },
  {
    title: "AI Model Trainer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: "https://img.icons8.com/color/452/python.png"
  },
  {
    name: "Java",
    icon: "https://img.icons8.com/color/452/java-coffee-cup-logo.png"
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "AI Developer",
    company_name: "",
    icon: "https://img.icons8.com/color/452/python.png",
    iconBg: "#383E56",
    date: "August 2021 - current",
    points: [
      "Developing and maintaining AI models using machine learning algorithms.",
      "Collaborating with data scientists and engineers to implement AI solutions.",
      "Optimizing and fine-tuning AI models for improved performance.",
      "Participating in research and development of new AI technologies.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "",
    icon: "https://img.icons8.com/color/452/react-native.png",
    iconBg: "#383E56",
    date: "June 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Minecraft Plugin Developer",
    company_name: "",
    icon: "https://img.icons8.com/color/452/java-coffee-cup-logo.png",
    iconBg: "#383E56",
    date: "May 2020 - May 2022",
    points: [
      "Developing and maintaining Minecraft plugins using Java and the Bukkit API.",
      "Collaborating with server administrators and other developers to create custom gameplay features.",
      "Optimizing plugin performance and troubleshooting issues.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Attendance Record",
    description:
      "AI model that uses facial recognition to record attendance for students and employees. ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },  
    ],
    image: "https://techstory.in/wp-content/uploads/2020/10/image1-4.jpg",
    source_code_link: "https://github.com/Parth308/attendanceSystem",
  },
  {
    name: "Pickup Line Generator 😁",
    description:
      "A fun web app that generates random pickup lines for users to share with their friends and loved ones.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      }
    ],
    image: "https://i.pinimg.com/736x/ec/f7/c4/ecf7c48fa2c343bab925e7d05f049a5d.jpg",
    source_code_link: "https://github.com/Parth308/pickupLine/",
  },
  {
    name: "Photo Generation Site",
    description:
      "A web app based on MERN that generates random photos based on user preferences and allows users to download them.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.pinimg.com/736x/08/1f/dd/081fdd217019fbe061ef0044432aef11.jpg",
    source_code_link: "https://github.com/Parth308/photoGenOpenAiApi",
  },
];

export { services, technologies, experiences, testimonials, projects };
