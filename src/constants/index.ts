// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "Map",
    title: "Map",
    link: "/map",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Zone 1",
    company_name: "Haz Aware",
    icon: tesla,
    iconBg: "#383E56",
    date: "FIRST STEP",
    points: [
      "Zone 1 is classified as an area where flammable gases, vapors, or liquids are likely to occur under normal operating conditions ",
      "Oil and gas refineries are divided into different hazardous zones based on the frequency",
      "Duration of the presence of flammable substances",
      ,
    ],
  },
  {
    title: "Zone 2",
    company_name: "Haz Aware",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "SECOND STEP",
    points: [
      "Zone 2, these substances are not expected to be present under normal operating conditions or only intermittently and for short durations",
      "The risk of a flammable atmosphere igniting in Zone 2 is lower due to the lower frequency and duration of flammable substance presence.  ",
      "The risk is lower in Zone 2, safety measures are still required to ensure the protection of personnel and assets.",
    ],
  },
  {
    title: "Zone 3",
    company_name: "Haz Aware",
    icon: tesla,
    iconBg: "#383E56",
    date: "THIRD STEP",
    points: [
      "Zone 3 is designated based on the lowest likelihood of the presence of flammable gases, vapors, or liquids. ",
      "These substances, if present, would only occur under abnormal conditions and for short durations.",
      "The risk of a flammable atmosphere igniting in Zone 3 is significantly lower. ",
    ],
  },
  {
    title: "Zone 4",
    company_name: "Haz Aware",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "LAST STEP",
    points: [
      "Zone 4 is the least hazardous classification in terms of the potential presence of flammable gases, vapors, or liquids. ",
      "It indicates that the occurrence of such substances is highly unlikely or practically non-existent under normal operating conditions.",
      "Due to the extremely low risk, Zone 4 areas typically require minimal or no specific precautions related to hazardous area management.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
    'Real-Time Alerts: Receive immediate notifications about disaster warnings, evacuation orders, and safety updates in your area. Stay informed and take action quickly to ensure your safety and well-being.',
    fontWidth: 'bold',
    image: user1,
  },
  {
    testimonial:
    "Emergency Resources: Find essential resources such as emergency shelters, medical facilities, and community support services. Get access to important contact information and learn about available assistance during and after disasters.",
    fontWidth: 'bold',
    image: user2,
  },
  {
    
    testimonial:
    "Evacuation Route: Access detailed maps and information about designated evacuation routes in your area. Plan your evacuation route in advance and find the safest path to reach shelter or higher ground during emergencies.",
    fontWidth:'bold',
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
 
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
   
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "",
    live_site_link: "",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com",
    live_site_link: "",
  },
] as const;

export const SOCIALS = [
  
] as const;
