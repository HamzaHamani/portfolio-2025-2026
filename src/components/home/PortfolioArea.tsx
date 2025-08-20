"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import ImagePopup from "@/modals/ImagePopup";

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
    image: portfolio_img_5,
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
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const image = portfolio_data.slice(0, 5).map((item) => item.image.src);

  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="custom-icon">
          <img src="assets/images/custom/work-scribble.svg" alt="custom" />
        </div>
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid ">
            {portfolio_data.map((item, i) => (
              <div
                key={i}
                className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}
              >
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)}
                  className="work-popup"
                >
                  <div className="portfolio-box ">
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
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
}
