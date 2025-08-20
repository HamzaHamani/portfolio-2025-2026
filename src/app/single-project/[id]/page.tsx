import SingleProject from "@/components/single-project";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";
import { projectsData } from "@/data/projectsData";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Single Project Nino - Modern Portfolio Next JS Template",
  description:
    "Nino - Personal Portfolio Next JS Template fresh and clean Design. You can use this portfolio template for: agency, personal portfolio, architect agency, photography studios, sound and music, musician, painter portfolio, artworks, art, artist portfolio, web design works, illustrators, trainer, projects, freelance designer. Just take the best Template of your choice, change the text, add your images and done! we have a strong support team which 24/7 days available to support you.",
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function index({ params }: PageProps) {
  const projectData = projectsData[params.id];

  if (!projectData) {
    notFound();
  }

  return (
    <Wrapper>
      <SingleProject projectData={projectData} />
    </Wrapper>
  );
}
