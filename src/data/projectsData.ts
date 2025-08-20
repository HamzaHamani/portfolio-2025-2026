import { StaticImageData } from "next/image";
import img_1 from "@/assets/images/projects/work1.jpg";
import img_2 from "@/assets/images/projects/work2.jpg";
import img_3 from "@/assets/images/projects/work3.jpg";
import img_4 from "@/assets/images/projects/work4.jpg";
import img_5 from "@/assets/images/projects/work5.jpg";
import img_6 from "@/assets/images/projects/work6.jpg";
import img_7 from "@/assets/images/projects/work7.jpg";

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
    heroImage: "/assets/images/projects/work1.jpg",
    year: "2024",
    client: "FEGK",
    services: "Full Stack Development",
    category: "Management Platform",
    description: [
      "A comprehensive management audit and quality platform designed for FEGK. This full-stack web application provides advanced audit tracking, quality management tools, and real-time reporting capabilities.",
      "The platform features a modern interface built with React and Next.js, backed by a robust Node.js API. It includes user authentication, role-based access control, document management, and detailed analytics dashboards to help organizations streamline their audit processes."
    ],
    projectImages: [
      { id: 1, image: img_1 },
      { id: 2, image: img_2 },
      { id: 3, image: img_3 },
      { id: 4, image: img_4 }
    ],
    url: "https://managementauditetqualite.com/"
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
      "Built with modern web technologies, the site features responsive design, smooth animations, portfolio galleries, and an integrated contact system. The CMS integration allows the client to easily update content and manage their project portfolio."
    ],
    projectImages: [
      { id: 1, image: img_2 },
      { id: 2, image: img_1 },
      { id: 3, image: img_3 },
      { id: 4, image: img_4 }
    ],
    url: "https://cigprod.ma/"
  },
  apexuit: {
    id: "apexuit",
    title: "Apex UIT",
    heroImage: "/assets/images/projects/work3.jpg",
    year: "2024",
    client: "Apex UIT",
    services: "Frontend Development",
    category: "UI/UX Design",
    description: [
      "A cutting-edge frontend solution for Apex UIT, focusing on exceptional user interface and user experience design. The project emphasizes modern design principles and interactive elements.",
      "Developed using the latest frontend technologies including React, TypeScript, and advanced CSS animations. The site features a clean, minimalist design with smooth transitions and micro-interactions that enhance user engagement."
    ],
    projectImages: [
      { id: 1, image: img_3 },
      { id: 2, image: img_1 },
      { id: 3, image: img_2 },
      { id: 4, image: img_4 }
    ],
    url: "https://apexuit.com/"
  },
  houdalechheb: {
    id: "houdalechheb",
    title: "Houda Lechheb",
    heroImage: "/assets/images/projects/work4.jpg",
    year: "2024",
    client: "Dr. Houda Lechheb",
    services: "Frontend Development",
    category: "Personal Portfolio",
    description: [
      "A professional personal portfolio website for Dr. Houda Lechheb, showcasing her expertise, achievements, and professional services in an elegant and accessible format.",
      "The site features a clean, academic design with integrated booking system, publication showcase, and contact forms. Built with accessibility in mind, ensuring the content is available to all users while maintaining a sophisticated visual appeal."
    ],
    projectImages: [
      { id: 1, image: img_4 },
      { id: 2, image: img_1 },
      { id: 3, image: img_2 },
      { id: 4, image: img_3 }
    ],
    url: "https://houdalechheb.com/"
  },
  moonplay: {
    id: "moonplay",
    title: "Moonplay",
    heroImage: "/assets/images/projects/work5.jpg",
    year: "2024",
    client: "Moonplay",
    services: "Frontend Development",
    category: "Entertainment Platform",
    description: [
      "An innovative entertainment platform for Moonplay, featuring interactive gaming elements and live streaming capabilities. The platform provides an immersive user experience with real-time features.",
      "Built with performance in mind, the platform uses advanced frontend optimization techniques, WebSocket integration for real-time communication, and responsive design that works seamlessly across all devices and screen sizes."
    ],
    projectImages: [
      { id: 1, image: img_5 },
      { id: 2, image: img_1 },
      { id: 3, image: img_2 },
      { id: 4, image: img_3 }
    ],
    url: "https://moonplay.live/"
  },
  bookease: {
    id: "bookease",
    title: "Bookease",
    heroImage: "/assets/images/projects/work6.jpg",
    year: "2024",
    client: "Bookease",
    services: "Full Stack Development",
    category: "Booking Platform",
    description: [
      "A comprehensive booking management system for Bookease, streamlining reservation processes and providing an intuitive interface for both customers and administrators.",
      "The full-stack application includes user authentication, payment integration, calendar management, automated notifications, and detailed reporting. Built with scalability in mind using modern cloud architecture and database optimization."
    ],
    projectImages: [
      { id: 1, image: img_6 },
      { id: 2, image: img_1 },
      { id: 3, image: img_2 },
      { id: 4, image: img_3 }
    ],
    url: "https://bookeease.netlify.app/"
  },
  mdluxtravel: {
    id: "mdluxtravel",
    title: "MD Lux Travel",
    heroImage: "/assets/images/projects/work7.jpg",
    year: "2024",
    client: "MD Lux Travel",
    services: "Frontend Development",
    category: "Luxury Travel",
    description: [
      "An elegant and sophisticated website for MD Lux Travel, showcasing premium travel services and luxury destinations with stunning visual design and seamless user experience.",
      "The site features high-quality image galleries, interactive destination maps, booking integration, and a content management system. Optimized for performance and SEO to ensure maximum visibility in search engines."
    ],
    projectImages: [
      { id: 1, image: img_7 },
      { id: 2, image: img_1 },
      { id: 3, image: img_2 },
      { id: 4, image: img_3 }
    ],
    url: "https://mdluxtravel.com/"
  }
};
