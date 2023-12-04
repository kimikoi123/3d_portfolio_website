import { meta, shopify, starbucks, tesla } from "../assets/images"
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  solidity,
  goit,
  journey,
  onlinejobs,
  remotasks,
  upwork,
  wizbang,
} from "../assets/icons"

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: solidity,
    name: "Solidity",
    type: "Blockchain",
  },
]

export const experiences = [
  {
    title: "Fullstack Development Mentor/Teacher",
    company_name: "GoIT Philippines",
    icon: goit,
    iconBg: "#accbe1",
    date: "September 2023 - Present",
    points: [
      "Provided mentorship and guidance to students participating in an online boot camp as they embarked on their journey to becoming successful web developers.",
    ],
  },
  {
    title: "Fullstack/Blockchain Developer",
    company_name: "Wizbang Int",
    icon: wizbang,
    iconBg: "#fbc3bc",
    date: "May 2023 - Present",
    points: [
      "Created a play-to-earn game that uses blockchain tokens/coins for rewards, communicates with smart contracts using Ether.js and Firebase for database and server",
      "Created homepage for the overall application",
      "Created e-commerce like with smart contract integration",
      "Created Job market like with smart contract integration",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "OnlineJobs.PH",
    icon: onlinejobs,
    iconBg: "#b7e4c7",
    date: "April 2023 - May 2023",
    points: [
      "Deployed a real estate form site from scratch",
      "Used cPanel for database and other services",
      "Deployed using the provided domain and setting up server and the frontend UI of the site",
    ],
  },
  {
    title: "Web Application Developer",
    company_name: "Journey Better Business Group Inc",
    icon: journey,
    iconBg: "#a2d2ff",
    date: "Sept 2022 - Mar 2023",
    points: [
      "Makes and maintains websites. In charge of a site's overall look and feel. Also handle the technical aspects of a website, including its performance (website speed) and capacity (the maximum amount of traffic the site could handle at a given time).",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#a2d2ff",
    date: "Dec 2020 - Feb 2021",
    points: [
      "Created visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers",
    ],
  },
  {
    title: "Data Annotator",
    company_name: "Remotasks",
    icon: remotasks,
    iconBg: "#a2d2ff",
    date: "Jun 2020 - Jan 2021",
    points: [
      "Labels anatomical or structural points of interest to generate accurate datasets determining the shape of different sized objects, thus enabling machine learning algorithms to detect smaller images.",
    ],
  },
]

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/kimikoi123",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/kimuel-anqui/",
  },
]

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "AI Nft Minting App",
    description:
      "Developed a web application that uses artificial intelligent to create your own non-fungible token",
    link: "https://main--loquacious-bublanina-fea937.netlify.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Web3 Card Game",
    description:
      "Created a Card game web app that can create your characters, create and join live battles, choose your battleground, and battle other players in real-time!",
    link: "https://web3-nft-cardgame.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Real Estate Dashboard",
    description:
      "Developed a fully functional full-stack MERN dashboard application with complete CRUD functionalities, authentication, pagination, sorting, filtering, and more",
    link: "https://yariga-remake-nextjs.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Mobile NFT Marketplace",
    description:
      "Built a modern NFT Marketplace iOS and Android with also landing page showcasing the mobile features",
    link: "https://mobile-nft-marketplace-opal.vercel.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Campaign Funding",
    description:
      "Connected to the blockchain, metamask pairing, interaction with smart contracts, sending Ethereum through the blockchain network, writing solidity code, and, most importantly, the ability to create, view, and donate to crowdfunding campaigns directly through the blockchain",
    link: "https://project-campaign-funding.vercel.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Calculator App",
    description:
      "Created a calculator app for solving complex mathematical equations",
    link: "https://test-calculator-app.netlify.app/",
  },
]
