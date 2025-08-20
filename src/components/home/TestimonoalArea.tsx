export default function TestimonoalArea() {
  // Define avatar styles for each testimonial
  const avatarStyles = {
    base: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      textTransform: "uppercase" as const,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    testimonial1: {
      background: "linear-gradient(45deg, #2c2c2c 0%, #000000 100%)",
    },
    testimonial2: {
      background: "linear-gradient(45deg, #1a1a1a 0%, #333333 100%)",
    },
    testimonial3: {
      background: "linear-gradient(45deg, #000000 0%, #404040 100%)",
    },
    testimonial4: {
      background: "linear-gradient(45deg, #2e2e2e 0%, #0d0d0d 100%)",
    },
    testimonial5: {
      background: "linear-gradient(45deg, #1c1c1c 0%, #2a2a2a 100%)",
    },
  };

  return (
    <>
      <section className="testimonials-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-2s">
                <div className="author">
                  <div
                    style={{
                      ...avatarStyles.base,
                      ...avatarStyles.testimonial1,
                    }}
                  >
                    H
                  </div>
                </div>
                <div className="text">
                  Working with this developer was exceptional. They delivered
                  our management audit platform with outstanding functionality
                  and clean design. The project was completed on time and
                  exceeded our expectations.
                </div>
                <div className="testi-des">
                  <h5>Hicham Ouakil</h5>
                  <span>Project Manager - FEGK</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-4s">
                <div className="author">
                  <div
                    style={{
                      ...avatarStyles.base,
                      ...avatarStyles.testimonial2,
                    }}
                  >
                    M
                  </div>
                </div>
                <div className="text">
                  The full-stack development for our production company website
                  was flawless. Great attention to detail, responsive design,
                  and smooth user experience. Highly recommended for any web
                  project.
                </div>
                <div className="testi-des">
                  <h5>Ahmed Bennani</h5>
                  <span>Director - Cigprod</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-6s">
                <div className="author">
                  <div
                    style={{
                      ...avatarStyles.base,
                      ...avatarStyles.testimonial3,
                    }}
                  >
                    A
                  </div>
                </div>
                <div className="text">
                  Amazing frontend development skills! Our UI/UX design was
                  brought to life perfectly. The developer understood our vision
                  and delivered a modern, interactive website that our users
                  love.
                </div>
                <div className="testi-des">
                  <h5>Ayoub Toumi</h5>
                  <span>Apex UIT</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-8s">
                <div className="author">
                  <div
                    style={{
                      ...avatarStyles.base,
                      ...avatarStyles.testimonial4,
                    }}
                  >
                    H
                  </div>
                </div>
                <div className="text">
                  Professional and reliable web developer. My personal portfolio
                  website looks stunning and represents my brand perfectly. The
                  booking system integration was seamless and user-friendly.
                </div>
                <div className="testi-des">
                  <h5>Houda Lechheb</h5>
                  <span>Doctor at ibn tofail</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-item wow fadeInUp delay-0-9s">
                <div className="author">
                  <div
                    style={{
                      ...avatarStyles.base,
                      ...avatarStyles.testimonial5,
                    }}
                  >
                    M
                  </div>
                </div>
                <div className="text">
                  Excellent work on our luxury travel website! The developer
                  created a sophisticated platform that showcases our premium
                  services beautifully. Great communication throughout the
                  project.
                </div>
                <div className="testi-des">
                  <h5>Marcus Davidson</h5>
                  <span>CEO - MD Lux Travel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
