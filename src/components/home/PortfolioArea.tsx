"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { ExternalLink } from "lucide-react";

import portfolio_img_1 from "@/assets/images/projects/work1.jpg";
import portfolio_img_2 from "@/assets/images/projects/work2.jpg";
import portfolio_img_3 from "@/assets/images/projects/work3.jpg";
import portfolio_img_4 from "@/assets/images/projects/work4.jpg";
import portfolio_img_5 from "@/assets/images/projects/work5.jpg";
import portfolio_img_6 from "@/assets/images/projects/work6.jpg";
import portfolio_img_7 from "@/assets/images/projects/work7.jpg";

interface DataType {
  id: number;
  col: string;
  image: StaticImageData;
  title: string;
  category: string;
  link: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    col: "6",
    image: portfolio_img_1,
    title: "FEGK - Management audit et qualite",
    category: "Full stack development",
    link: "https://managementauditetqualite.com/",
  },
  {
    id: 2,
    col: "6",
    image: portfolio_img_2,
    title: "Cigprod",
    category: "Full stack development",
    link: "https://cigprod.ma/",
  },
  {
    id: 3,
    col: "4",
    image: portfolio_img_3,
    title: "Apex uit",
    category: "Front end development",
    link: "https://apexuit.com/",
  },
  {
    id: 4,
    col: "4",
    image: portfolio_img_4,
    title: "Houda lechheb",
    category: "Front end development",
    link: "https://houdalechheb.com/",
  },
  {
    id: 5,
    col: "4",
    image: portfolio_img_5,
    title: "Moonplay",
    category: "Front end development",
    link: "https://moonplay.live/",
  },
  {
    id: 6,
    col: "6",
    image: portfolio_img_6,
    title: "Bookease",
    category: "Full stack development",
    link: "https://bookeease.netlify.app/",
  },
  {
    id: 7,
    col: "6",
    image: portfolio_img_7,
    title: "mdluxtravel",
    category: "Front end development",
    link: "https://mdluxtravel.com/",
  },
];

export default function PortfolioArea() {
  const handleProjectClick = (link: string) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="custom-icon">
          <img src="/assets/images/custom/work-scribble.svg" alt="custom" />
        </div>
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid ">
            {portfolio_data.map((item, i) => (
              <div
                key={i}
                className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}
              >
                <div
                  style={{ cursor: "pointer", position: "relative" }}
                  onClick={() => handleProjectClick(item.link)}
                  className="work-popup"
                >
                  <div className="portfolio-box">
                    <Image
                      src={item.image}
                      alt=""
                      style={{ height: "auto" }}
                      data-rjs="2"
                    />
                    <span className="portfolio-category">{item.category}</span>
                    <div className="portfolio-caption">
                      <h1>{item.title}</h1>
                    </div>
                    {/* External Link Icon */}
                    <div
                      className="external-link-icon"
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        right: "20px",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        color: "#fff",
                        zIndex: 10,
                        pointerEvents: "none",
                        marginBottom: "10px",
                      }}
                    >
                      <ExternalLink className="responsive-icon" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .portfolio-box:hover .external-link-icon {
          opacity: 1 !important;
        }
        .portfolio-box {
          position: relative;
          overflow: hidden;
        }

        .responsive-icon {
          width: 24px;
          height: 24px;
        }

        /* Responsive styles for mobile and tablets */
        @media (max-width: 768px) {
          .portfolio-caption h1 {
            font-size: 1.2rem !important;
            line-height: 1.3 !important;
          }

          .portfolio-category {
            font-size: 0.85rem !important;
          }

          .external-link-icon {
            bottom: 15px !important;
            right: 15px !important;
          }

          .responsive-icon {
            width: 20px !important;
            height: 20px !important;
          }
        }

        @media (max-width: 576px) {
          .portfolio-caption h1 {
            font-size: 1rem !important;
            line-height: 1.2 !important;
          }

          .portfolio-category {
            font-size: 0.8rem !important;
          }

          .external-link-icon {
            bottom: 12px !important;
            right: 12px !important;
          }

          .responsive-icon {
            width: 18px !important;
            height: 18px !important;
          }
        }
      `}</style>
    </>
  );
}
