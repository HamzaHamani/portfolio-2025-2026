import React from "react";
import Image from "next/image";

export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2>Hamza Hamani</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <ul className="clienti-profile">
                    <li>
                      <Image
                        className="img-fluid"
                        src="/assets/images/avatar/01.jpg"
                        alt="client"
                        width={50}
                        height={50}
                        loading="lazy"
                      />
                    </li>
                    <li>
                      <Image
                        className="img-fluid"
                        src="/assets/images/avatar/02.jpg"
                        alt="client"
                        width={50}
                        height={50}
                        loading="lazy"
                      />
                    </li>
                    <li>
                      <Image
                        className="img-fluid"
                        src="/assets/images/avatar/03.jpg"
                        alt="client"
                        width={50}
                        height={50}
                        loading="lazy"
                      />
                    </li>
                  </ul>
                  <div className="reviews">
                    100+ reviews <span>(4.96 of 5)</span>
                    <p>Five-star reviews from my esteemed clients.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <Image
                  src="/assets/images/about/photo.webp"
                  alt="Hamza Hamani"
                  width={400}
                  height={500}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>
                  Hi, I’m Hamza, a passionate Full stack developer / ui-ux
                  designer dedicated to building high-quality web applications.
                </p>
                <a className="theme-btn" href="">
                  Get In touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
