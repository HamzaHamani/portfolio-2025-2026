"use client";
import React, { useState } from "react";

export default function ContactArea() {
  const [result, setResult] = useState("");

  // Following the exact Web3Forms documentation pattern
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "7acc6507-bed9-41d1-9d2e-f776a3df57b2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <>
      <section id="contact" className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Contact Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-content-part  wow fadeInUp delay-0-2s">
                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <span className="circle-btn">
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <h2>office:</h2>
                  <p>My home</p>
                </div>

                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <span className="circle-btn">
                    <i className="ri-headphone-line"></i>
                  </span>
                  <h2>contact number:</h2>
                  <p>+212693517484</p>
                </div>

                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <span className="circle-btn">
                    <i className="ri-mail-line"></i>
                  </span>
                  <h2>Email me:</h2>
                  <p>haamzahaamani@gmail.com</p>
                </div>

                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h2>Socials</h2>
                  <div className="about-social">
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/hamzahamani/"
                        >
                          <i className="ri-linkedin-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          href="https://github.com/HamzaHamani/"
                        >
                          <i className="ri-github-line"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form
                  id="contactForm"
                  className="contact-form"
                  onSubmit={onSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Steve Milner"
                          required
                          data-error="Please enter your Name"
                        />
                        <label htmlFor="name" className="for-icon">
                          <i className="far fa-user"></i>
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="hello@websitename.com"
                          required
                          data-error="Please enter your Email"
                        />
                        <label htmlFor="email" className="for-icon">
                          <i className="far fa-envelope"></i>
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="Your Subject"
                          required
                          data-error="Please enter your Subject"
                        />
                        <label htmlFor="subject" className="for-icon">
                          <i className="far fa-user"></i>
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Write Your message"
                          required
                          data-error="Please Write your Message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn"
                          disabled={result === "Sending...."}
                        >
                          {result === "Sending...."
                            ? "Sending..."
                            : "Send Me Message"}{" "}
                          <i className="ri-mail-line"></i>
                        </button>
                        <div id="msgSubmit" className="hidden"></div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      {result && (
                        <p
                          className="form-result"
                          style={{
                            display: "block",
                            backgroundColor: result.includes("Successfully")
                              ? "#16a34a"
                              : result === "Sending...."
                              ? "#2563eb"
                              : "#dc2626",
                            color: "white",
                            padding: "12px 20px",
                            margin: "15px 0",
                            border: "none",
                            borderRadius: "4px",
                          }}
                        >
                          {result === "Form Submitted Successfully"
                            ? "Message sent successfully! I'll get back to you soon."
                            : result === "Error"
                            ? "Sorry, message could not be sent. Please try again."
                            : result}
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
