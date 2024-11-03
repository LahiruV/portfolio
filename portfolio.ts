import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Lahiru Vimukthi",
  title: "Hi all, I'm Lahiru Vimukthi",
  description:
    "I am a Full Stack developer with over two years of experience in the software industry. I have expertise in a variety of technologies, including React, Angular, Node.js, C#, Python, SQL, and MongoDB. Additionally, I am proficient in using Azure and GitHub for cloud services and version control.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "LahiruV",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: "https://www.linkedin.com/in/lahiru-vimukthi-19b4a4290/",
  github: "https://github.com/LahiruV",
  gitlab: 'https://gitlab.com/lahiru__V',
  instagram: "https://www.instagram.com/lahiru___v/profilecard/?igsh=MTduZmRvNXQ5dTY0bA==",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "Passionate Full Stack Developer on a Tech Exploration Journey",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Developing dynamic full-stack applications with React and Node"),
        emoji("⚡ Creating robust backend solutions with C# and ASP.NET Core"),
        emoji("⚡ Implementing scalable databases using SQL and MongoDB"),
        emoji("⚡ Designing and building engaging user interfaces with Angular"),
        emoji("⚡ Leveraging cloud services with Azure for scalable applications"),
        emoji("⚡ Utilizing version control systems like GitHub and GitLab"),
      ],

      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "C",
          iconifyTag: "logos:c-sharp",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Azure",
          iconifyTag: "logos:azure",
        },
        {
          skillName: "SQL",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Netlify",
          iconifyTag: "logos:netlify",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend Development (React, Angular)", // Your front-end technologies
    progressPercentage: "90", // Adjusted proficiency
  },
  {
    Stack: "Backend Development (.NET, Node.js)", // Your back-end technologies
    progressPercentage: "85", // Adjusted proficiency
  },
  {
    Stack: "Database Management (SQL, MongoDB)", // Your database technologies
    progressPercentage: "80", // Adjusted proficiency
  },
  {
    Stack: "Programming Languages (JavaScript, TypeScript, C#, Python)", // Your programming languages
    progressPercentage: "95", // Adjusted proficiency
  },
  {
    Stack: "Cloud Technologies (Azure)", // Your cloud technology
    progressPercentage: "75", // Adjusted proficiency
  },
  {
    Stack: "Version Control (Git, GitHub)", // Your version control tools
    progressPercentage: "85", // Adjusted proficiency
  },
];


export const educationInfo: EducationType[] = [
  {
    schoolName: "Sri Lanka Institute of Information Technology (SLIIT)",
    subHeader: "Bachelor of Science (Hons) in Information Technology, Specializing in Software Engineering",
    duration: "February 2020 - November 2023",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Taxila Central College, Horana",
    subHeader: "G.C.E Advanced Level - Engineering Technology Stream",
    duration: "August 2019",
    desc: "",
    grade: "3C's",
  },
];


export const experience: ExperienceType[] = [
  {
    role: "Software Engineer",
    company: "Peercore IT",
    companyLogo: "/img/icons/common/1631331950495.jpg",
    date: "Apr 2024 - Present",
    desc: "Developing industry-specific CRM systems, particularly for the Food Distribution Industry, utilizing React, .NET, SQL, and C#. Engineered Peercore CRM to enhance customer relationship management through lead generation, customer retention, and detailed sales analytics, integrating seamlessly with various applications for real-time KPIs.",
  },
  {
    role: "Software Engineer",
    company: "Evicio (Pvt) Ltd",
    companyLogo: "/img/icons/common/1631315074525.jpg",
    date: "Apr 2023 - Mar 2024",
    desc: "Worked on the Cloud-based Online Parking System (PERCS), a multi-tenant SaaS product for parking permit management. Developed backend solutions using C#/Dotnet Core and LINQ, and frontend interfaces with React and Kendo UI, ensuring robust functionality and user experience.",
  },
  {
    role: "Intern Software Engineer",
    company: "John Keells Holdings PLC",
    companyLogo: "/img/icons/common/john_keells_holdings_logo.jpg",
    date: "Mar 2022 - Mar 2023",
    desc: "Created APIs for third-party datasets and developed the Keells Intranet platform for administrative use, featuring data import/export functionalities and dashboards for data management, all using SQL, .NET, and React.",
  },
];


export const projects: ProjectType[] = [
  {
    name: "Event by OSH",
    desc: "The Largest Event Management Hub in Sri Lanka. Event by OSH (Pvt) Ltd is dedicated to crafting unforgettable weddings, parties, and celebrity events. With a focus on perfection, they bring dreams to life through meticulously planned and executed events.",
    github: "https://github.com/LahiruV/Eventm_Front.git",
    link: "https://evtosh.netlify.app/",
  },
  {
    name: "UniBodim-Finder",
    desc: "A Boarding Listings Management System designed for property owners to simplify the listing and management of boarding properties. It offers an easy-to-use interface to input, update, and display essential property details such as location, amenities, pricing, and availability, making it effortless to attract potential renters.",
    link: "https://unibordim-finder.netlify.app/",
    github: "https://github.com/LahiruV/New_ITP_Frontend",
  },
  {
    name: "Caravan Fresh",
    desc: "A gourmet destination for cake and pastry lovers! Caravan Fresh offers a delightful assortment of handcrafted cakes, pastries, and confections, each crafted with passion and designed to provide a sensational experience with every bite. Step into a world where every treat is a journey of flavor and happiness.",
    link: "https://cafetarians.netlify.app/",
    github: "https://gitlab.com/lahiru__V/cafeteria_front",
  },
  {
    name: "Teachers Student Management System for Finance",
    desc: "A comprehensive management system designed for educators and finance departments to streamline student data, financial records, and payment tracking. This platform simplifies record-keeping, billing, and reporting, ensuring that teachers and administrators can efficiently manage student finances with ease and accuracy.",
    link: "https://zenratexh.netlify.app/",
    github: "https://github.com/LahiruV/Zenra-Front-V2",
  },
  {
    name: 'Phishing Voice Detection',
    desc: 'A machine learning model to detect phishing attempts in audio files using MFCC features. [Python, Librosa, Scikit - learn, Joblib]',
    github: 'https://github.com/LahiruV/PhishingVoiceDetection',
  },
];

export const seoData: SEODataType = {
  title: "Lahiru Vimukthi | Full Stack Developer",
  description: greetings.description,
  author: "Lahiru Vimukthi",
  keywords: [
    "Lahiru Vimukthi",
    "Full Stack Developer",
    "React Developer",
    "Angular Developer",
    "Node.js Developer",
    "C# Developer",
    "SQL Developer",
    "MongoDB Developer",
    "Azure Developer",
    "GitHub Developer",
    "GitLab Developer",
  ],
};
