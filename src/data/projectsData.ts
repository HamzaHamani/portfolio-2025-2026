import { StaticImageData } from "next/image";
import Mimg_1 from "@/assets/images/projects/management/img1.webp";
import Mimg_2 from "@/assets/images/projects/management/img2.webp";
import Mimg_3 from "@/assets/images/projects/management/img3.webp";
import Mimg_4 from "@/assets/images/projects/management/img4.webp";

import Aimg_1 from "@/assets/images/projects/apex/img1.webp";
import Aimg_2 from "@/assets/images/projects/apex/img2.webp";
import Aimg_3 from "@/assets/images/projects/apex/img3.webp";
import Aimg_4 from "@/assets/images/projects/apex/img4.webp";

import MDimg_1 from "@/assets/images/projects/mdlux/img1.webp";
import MDimg_2 from "@/assets/images/projects/mdlux/img2.webp";
import MDimg_3 from "@/assets/images/projects/mdlux/img3.webp";
import MDimg_4 from "@/assets/images/projects/mdlux/img4.webp";

import HDimg_1 from "@/assets/images/projects/houda/img1.webp";
import HDimg_2 from "@/assets/images/projects/houda/img2.webp";
import HDimg_3 from "@/assets/images/projects/houda/img3.webp";
import HDimg_4 from "@/assets/images/projects/houda/img4.webp";

import MOimg_1 from "@/assets/images/projects/moon/img1.webp";
import MOimg_2 from "@/assets/images/projects/moon/img2.webp";
import MOimg_3 from "@/assets/images/projects/moon/img3.webp";
import MOimg_4 from "@/assets/images/projects/moon/img4.webp";
export interface ProjectData {
  id: string;
  title: string;
  heroImage: string;
  year: string;
  client: string;
  services: string;
  category: string;
  description: string[];
  projectImages: {
    id: number;
    image: StaticImageData;
  }[];
  url: string;
}

export const projectsData: Record<string, ProjectData> = {
  managementauditequalite: {
    id: "managementauditequalite",
    title: "FEGK - Management Audit et Qualite",
    heroImage: "/assets/images/projects/work1.webp",
    year: "2024",
    client: "FEGK",
    services: "Full Stack Development",
    category: "Management Platform",
    description: [
      "A comprehensive management audit and quality platform designed for FEGK. This full-stack web application provides advanced audit tracking, quality management tools, and real-time reporting capabilities.",
      "The platform features a modern interface built with React and Next.js, backed by a robust Node.js API. It includes user authentication, role-based access control, document management, and detailed analytics dashboards to help organizations streamline their audit processes.",
    ],
    projectImages: [
      { id: 1, image: Mimg_1 },
      { id: 2, image: Mimg_2 },
      { id: 3, image: Mimg_3 },
      { id: 4, image: Mimg_4 },
    ],
    url: "https://managementauditetqualite.com/",
  },
  cigprod: {
    id: "cigprod",
    title: "Cigprod",
    heroImage: "/assets/images/projects/work2.jpg",
    year: "2024",
    client: "Cigprod",
    services: "Full Stack Development",
    category: "Production Company",
    description: [
      "A dynamic website for Cigprod, a leading production company. The platform showcases their portfolio, services, and team with an engaging and professional design.",
      "Built with modern web technologies, the site features responsive design, smooth animations, portfolio galleries, and an integrated contact system. The CMS integration allows the client to easily update content and manage their project portfolio.",
    ],
    // projectImages: [
    //   { id: 1, image: img_2 },
    //   { id: 2, image: img_1 },
    //   { id: 3, image: img_3 },
    //   { id: 4, image: img_4 },
    // ],
    url: "https://cigprod.ma/",
  },
  apexuit: {
    id: "apexuit",
    title: "Apex UIT",
    heroImage: "/assets/images/projects/work3.webp",
    year: "2024",
    client: "Apex UIT",
    services: "Frontend Development",
    category: "UI/UX Design",
    description: [
      "A cutting-edge frontend solution for Apex UIT, focusing on exceptional user interface and user experience design. The project emphasizes modern design principles and interactive elements.",
      "Developed using the latest frontend technologies including React, TypeScript, and advanced CSS animations. The site features a clean, minimalist design with smooth transitions and micro-interactions that enhance user engagement.",
    ],
    projectImages: [
      { id: 1, image: Aimg_3 },
      { id: 2, image: Aimg_1 },
      { id: 3, image: Aimg_2 },
      { id: 4, image: Aimg_4 },
    ],
    url: "https://apexuit.com/",
  },
  houdalechheb: {
    id: "houdalechheb",
    title: "Houda Lechheb",
    heroImage: "/assets/images/projects/work4.webp",
    year: "2024",
    client: "Dr. Houda Lechheb",
    services: "Frontend Development",
    category: "Personal Portfolio",
    description: [
      "A professional personal portfolio website for Dr. Houda Lechheb, showcasing her expertise, achievements, and professional services in an elegant and accessible format.",
      "The site features a clean, academic design with integrated booking system, publication showcase, and contact forms. Built with accessibility in mind, ensuring the content is available to all users while maintaining a sophisticated visual appeal.",
    ],
    projectImages: [
      { id: 1, image: HDimg_1 },
      { id: 2, image: HDimg_2 },
      { id: 3, image: HDimg_3 },
      { id: 4, image: HDimg_4 },
    ],
    url: "https://houdalechheb.com/",
  },
  moonplay: {
    id: "moonplay",
    title: "Moonplay",
    heroImage: "/assets/images/projects/work5.webp",
    year: "2024",
    client: "Moonplay",
    services: "Frontend Development",
    category: "Entertainment Platform",
    description: [
      "An innovative entertainment platform for Moonplay, featuring interactive gaming elements and live streaming capabilities. The platform provides an immersive user experience with real-time features.",
      "Built with performance in mind, the platform uses advanced frontend optimization techniques, WebSocket integration for real-time communication, and responsive design that works seamlessly across all devices and screen sizes.",
    ],
    projectImages: [
      { id: 1, image: MOimg_1 },
      { id: 2, image: MOimg_2 },
      { id: 3, image: MOimg_3 },
      { id: 4, image: MOimg_4 },
    ],
    url: "https://moonplay.live/",
  },
  bookease: {
    id: "bookease",
    title: "Bookease",
    heroImage: "/assets/images/projects/work6.webp",
    year: "2024",
    client: "Bookease",
    services: "Full Stack Development",
    category: "Booking Platform",
    description: [
      "A comprehensive booking management system for Bookease, streamlining reservation processes and providing an intuitive interface for both customers and administrators.",
      "The full-stack application includes user authentication, payment integration, calendar management, automated notifications, and detailed reporting. Built with scalability in mind using modern cloud architecture and database optimization.",
    ],
    projectImages: [
      // { id: 1, image: img_6 },
      // { id: 2, image: img_1 },
      // { id: 3, image: img_2 },
      // { id: 4, image: img_3 },
    ],
    url: "https://bookeease.netlify.app/",
  },
  mdluxtravel: {
    id: "mdluxtravel",
    title: "MD Lux Travel",
    heroImage: "/assets/images/projects/work7.webp",
    year: "2024",
    client: "MD Lux Travel",
    services: "Frontend Development",
    category: "Luxury Travel",
    description: [
      "An elegant and sophisticated website for MD Lux Travel, showcasing premium travel services and luxury destinations with stunning visual design and seamless user experience.",
      "The site features high-quality image galleries, interactive destination maps, booking integration, and a content management system. Optimized for performance and SEO to ensure maximum visibility in search engines.",
    ],
    projectImages: [
      { id: 1, image: MDimg_1 },
      { id: 2, image: MDimg_2 },
      { id: 3, image: MDimg_3 },
      { id: 4, image: MDimg_4 },
    ],
    url: "https://mdluxtravel.com/",
  },
};
