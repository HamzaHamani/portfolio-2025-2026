import React from "react";

import type { Metadata } from "next";
import Home from "@/components/home";
import Wrapper from "@/layouts/Wrapper";
export const metadata: Metadata = {
  title: "Hamza Hamani - Full Stack Developer based in Kenitra",
  description:
    "Full Stack Developer, UI/UX Designer & SEO Specialist based in Kenitra. 4 years' experience creating user-focused digital solutions.",
};

export default function index() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
