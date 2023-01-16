// import images
import Hero_person from "./assets/images/Hero/person.png";
import profileimage from "./assets/Home/IMG-20191222-WA0005.jpg"
import android  from "./assets/images/Skills/android.png";
import figma from "./assets/images/Skills/figma.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import Sass from "./assets/images/Skills/Sass.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";

import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web/Android Developer",
    firstName: "MOHAMMAD",
    LastName: "IKRAM",
    btnText: "GET RESUME",
    image: Hero_person,
    hero_content: [
      {
        count: "6+",
        text: "Month of Experience in Web development and 1 year in android ",
      },
      {
        count: "15+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      
      {
        name: "React js",
        para: "I have 6 month of experience ",
        logo: reactjs,
        l1:"I am working FrontEnd in Tailwind,CSS,SASS,html",
        l2:"working on Redux ,Redux toolkit and advacne concept in redux ",
        l3:"Working on context API ",
        l4:"working on both  functional base  and class base component",
        l5:"working on Hooks and advacne concept of Props,States",
        l6:"Handle Api's",
      
      },
      {
        name: "Tailwind CSS",
        para: "Best FrontEnd Design using Tailwind",
        logo: tailwind,
        l1:"Make FrontEnd using tailwind ",
        l2:"working in advance level of tailwind classes",
        l3:"Add build tailwind",
        l4:"Cards,Navbar,Dropdwond etc",
        l5:"Other Components",
        l6:"Will Fulfill Requrments",
      },
      {
        name: "SASS",
        para: "Best FrontEnd Design using SASS",
        logo: Sass,
        l1:"Make FrontEnd using  SASS",
        l2:"working in advance level of SASS",
        l3:"Variable base",
        l4:"Function base",
        l5:"Other components",
        l6:"Will Fulfill Requrments",
      }, 
       {
        name: "Android",
        para: "I have 1+ year of expericene",
        logo: android,
        l1:"I am working in android Java,Kotline",
        l2:"API's Handling ",
        l3:"third party labrary ,api injection,Activity lifecycle,Services",
        l4:"well knowledeg of Database,Firebase,Sqlite,Room",
        l5:"Design FrontEnd for every screen",
        l6:" Firebase data is used,FCM for pushnotification and GoogleMap is use for direction",
       
      },
     
      {
        name: "Figma",
        para: "Design frontend from figma and also make design in figma",
        logo: figma,
        l1:"Make FrontEnd from Figma ",
        l2:"All Type of figma design i make it from figma",
        l3:"Make assets in figma ",
        l4:"Make icons",
        l5:"Make curve Materials ",
        l6:"Other looking design ",
      },
     
    
    
      {
        name: "Python",
        para: "Basic knowledge of python",
        logo: python,
        l1:"Basic knowledge of python",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Modern and mobile-ready website that will help you reach all of your marketing",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Talented and understanding UI / UX designer when it comes to requirements and technical specifications. Understands clients very well and works intertwined with the team",
        logo: services_logo2,
      },
     
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“I mentored M.ikram through him online training program. I found him intelligent and eager to learn. I would highly recommend him for any web development opportunity”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“Ikram is always participating in class and problem solves well. He is a team player, always ready to help his classmates in whatever way he can. I'm confident he will be a good addition to any team!”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“I mentored M.ikram through him android  development program. I found him intelligent and eager to developed. I would highly recommend him for any Android  development”",
        img: avatar3,
        name: "Johnny",
      },
    
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Hi,I am WEB/ANDROID Developer with background knowledge of Reactjs,Redux,Hooks and other advance concept of react and android platform ",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "mohammadikram20001@gmail.com",
        icon: GrMail,
        link: "mailto:mohammadikram20001@gmail.com",
      },
      {
        text: "+92 3120571580",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/mohammad-ikram-16b098208",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};