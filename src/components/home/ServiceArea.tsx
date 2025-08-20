import React from "react";

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>01</h5>
                <h4>Full Stack Development</h4>
                <p>
                  End-to-end web application development using modern
                  technologies like React, Next.js, Node.js, and databases. From
                  frontend interfaces to backend APIs and database design.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>02</h5>
                <h4>UI/UX Design</h4>
                <p>
                  Designing intuitive, accessible interfaces focused on great
                  user experience.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-5">
              <div className="service-item wow fadeInUp delay-0-6s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>03</h5>
                <h4>Site Improvement</h4>
                <p>
                  Refreshing websites with a modern look, faster performance,
                  and navigation.
                </p>
              </div>
            </div>

            <div className="col-lg-8 col-md-7">
              <div className="service-item wow fadeInUp delay-0-8s">
                <i className="ri-arrow-right-up-line"></i>
                <h5>04</h5>
                <h4>SEO Optimization</h4>
                <p>
                  Search engine optimization to improve website visibility,
                  performance, and ranking through technical SEO, content
                  strategy, and performance improvements for better search
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
