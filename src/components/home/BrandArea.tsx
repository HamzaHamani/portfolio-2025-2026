"use client";
import React, { useEffect } from "react";

export default function BrandArea() {
  useEffect(() => {
    console.log("BrandArea useEffect triggered");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      console.log("Adding animation...");
      const scrollers = document.querySelectorAll(".scroller");
      console.log("Found scrollers:", scrollers.length);
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        console.log("Scroller content items:", scrollerContent.length);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
        console.log("Animation setup complete");
      });
    }
  }, []);

  return (
    <>
      <div className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Technologies I Use</h2>
              <div className="company-list">
                <div
                  className="scroller"
                  data-direction="left"
                  data-speed="slow"
                >
                  <div className="scroller__inner">
                    <img
                      src="/assets/images/tech-logos/nextjs.svg"
                      alt="Next.js"
                      style={{
                        width: "60px",
                        height: "60px",
                        filter: "brightness(0) invert(1)",
                      }}
                    />
                    <img
                      src="/assets/images/tech-logos/react.svg"
                      alt="React"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <img
                      src="/assets/images/tech-logos/tailwind.svg"
                      alt="Tailwind CSS"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <img
                      src="/assets/images/tech-logos/javascript.svg"
                      alt="JavaScript"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <img
                      src="/assets/images/tech-logos/nodejs.svg"
                      alt="Node.js"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <img
                      src="/assets/images/tech-logos/typescript.svg"
                      alt="TypeScript"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <img
                      src="/assets/images/tech-logos/figma.svg"
                      alt="Figma"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <img
                      src="/assets/images/tech-logos/mongodb.svg"
                      alt="MongoDB"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <img
                      src="/assets/images/tech-logos/express.svg"
                      alt="Express.js"
                      style={{
                        width: "60px",
                        height: "60px",
                        filter: "brightness(0) invert(1)",
                      }}
                    />
                    <img
                      src="/assets/images/tech-logos/git.svg"
                      alt="Git"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <img
                      src="/assets/images/tech-logos/nextjs.svg"
                      alt="Next.js"
                      style={{
                        width: "60px",
                        height: "60px",
                        filter: "brightness(0) invert(1)",
                      }}
                    />
                    <img
                      src="/assets/images/tech-logos/react.svg"
                      alt="React"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
