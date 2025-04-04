import React, { useEffect, useState } from "react";
import AOS from "aos";
import brand from "../assets/data/brand.json";

const About = () => {
  const [brands, setBrands] = useState([]);

  //scroll animations
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  //read brand.json file and set into array
  useEffect(() => {
    setBrands(brand);
  }, []);

    useEffect(() => {
        document.title = "About Us | Green Next";
      }, []);


  return (
    <>
      <main className="main">
        <div className="page-title accent-background">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">About Us</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="current">About Us</li>
              </ol>
            </nav>
          </div>
        </div>

        <section id="about" className="about section">
          <div className="container">
            <div className="row position-relative">
              <div
                className="col-lg-7 about-img"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src="assets/img/about.jpg" />
              </div>

              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                <h2 className="inner-title">Consequatur eius et magnam</h2>
                <div className="our-story">
                  <h4>Est 2010</h4>
                  <h3>Our Story</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle"></i>{" "}
                      <span>Ullamco laboris nisi ut aliquip ex ea commo</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>{" "}
                      <span>Duis aute irure dolor in reprehenderit in</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>{" "}
                      <span>Ullamco laboris nisi ut aliquip ex ea</span>
                    </li>
                  </ul>
                  <p>
                    Vitae autem velit excepturi fugit. Animi ad non. Eligendi et
                    non nesciunt suscipit repellendus porro in quo eveniet.
                    Molestias in maxime doloremque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Our Skills</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row skills-content skills-animation">
              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    <span>Renewable Energy System Design & Integration</span>{" "}
                    <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    <span>Energy Efficiency & Optimization</span>{" "}
                    <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    <span>
                      Regulatory Compliance & Environmental Impact Assessment
                    </span>{" "}
                    <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    <span>Sustainable Product Development</span>{" "}
                    <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="clients section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Brands</h2>
            <p>
              Partnering with top brands to ensure innovation, reliability, and
              customer satisfaction.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="10">
            <div className="row g-0 clients-wrap">
              {brands.map((item, index) => (
                <div className="col-xl-3 col-md-4 client-logo" key={index}>
                  <img src={item.image} className="img-fluid" alt="logo" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" class="testimonials section">
        <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div class="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    class="testimonial-img"
                    alt=""
                  />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                    </span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div class="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    class="testimonial-img"
                    alt=""
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                    </span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div class="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-3.jpg"
                    class="testimonial-img"
                    alt=""
                  />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                    </span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>

              <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div class="testimonial-item">
                  <img
                    src="assets/img/testimonials/testimonials-4.jpg"
                    class="testimonial-img"
                    alt=""
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <div class="stars">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p>
                    <i class="bi bi-quote quote-icon-left"></i>
                    <span>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                    </span>
                    <i class="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>



            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
