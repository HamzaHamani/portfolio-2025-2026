"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImagePopup from "@/modals/ImagePopup";
import { ProjectData } from "@/data/projectsData";

interface SingleProjectAreaProps {
  projectData: ProjectData;
}

export default function SingleProjectArea({ projectData }: SingleProjectAreaProps) {
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
  const image = projectData.projectImages.slice(0, 5).map((item) => item.image.src);

  return (
    <>
      <div className="single-project-page-design">
        <div className="single-project-image">
          <img src={projectData.heroImage} alt={projectData.title} />
        </div>
        <div className="container pt-60 pb-40">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-project-page-left wow fadeInUp delay-0-2s">
                <div className="single-info">
                  <p>Year</p>
                  <h3>{projectData.year}</h3>
                </div>
                <div className="single-info">
                  <p>Client</p>
                  <h3>{projectData.client}</h3>
                </div>
                <div className="single-info">
                  <p>Services</p>
                  <h3>{projectData.services}</h3>
                </div>
                <div className="single-info">
                  <p>Project</p>
                  <h3>{projectData.category}</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>Description</h2>
                {projectData.description.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="row pt-60">
            {projectData.projectImages.map((item, i) => (
              <div key={item.id} className="col-lg-6">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)}
                  className="work-popup"
                >
                  <div className="single-image wow fadeInUp delay-0-2s">
                    <Image
                      src={item.image}
                      style={{ height: "auto" }}
                      alt="gallery"
                    />
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
