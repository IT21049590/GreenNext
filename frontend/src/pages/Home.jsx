import React, { useEffect, useState } from "react";
import AOS from "aos";
import brand from "../assets/data/brand.json";
import productJson from "../assets/data/product.json";
import { Link } from "react-router-dom";

const Home = () => {
  const [current, setCurrent] = useState(1);
  const totalSlides = 3;
  let [currentCategory, setCurrentCategory] = useState("All");
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  //scroll animations
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  //title changed
  useEffect(() => {
    document.title = "Home | Green Next";
  }, []);

  //read brand.json file and set into array
  useEffect(() => {
    setBrands(brand);
  }, []);

  //product categoty function
  function categoryClicked(data) {
    setCurrentCategory(data);
  }

  //carousal functions
  const nextSlide = () => {
    setCurrent((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  //read product.json file and set into array
  useEffect(() => {
    if (currentCategory === "All") {
      setProducts(productJson);
    } else {
      const filteredProducts = productJson.filter(
        (product) => product.Category === currentCategory
      );
      setProducts(filteredProducts);
    }
  }, [currentCategory]);

  return (
    <>
      <main className="main">
        <section id="hero" className="hero section white-background">
          <div
            id="hero-carousel"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div class={`carousel-item ${current === 1 ? "active" : ""}`}>
              <img src="assets/img/hero-carousel/s4.jpeg" alt="" />
              <div className="container">
                <h2>Power Your Future with Solar Energy</h2>
                <p>
                  Harness the limitless power of the sun with cutting-edge solar
                  panel solutions. Reduce energy costs, lower your carbon
                  footprint, and enjoy sustainable, renewable energy for your
                  home or business. Join the green revolution today🌞!
                </p>
              </div>
            </div>

            <div class={`carousel-item ${current === 2 ? "active" : ""}`}>
              <img src="assets/img/hero-carousel/Solar.jpg" alt="" />
              <div class="container">
                <h2>Which Solar Solution is Right for You?</h2>
                <p>
                  Choosing the right solar solution depends on your energy
                  needs, property type, and budget. Whether you’re looking for a
                  small-scale residential setup or a large commercial
                  installation, our team is here to help you assess your energy
                  consumption and recommend the best solar system for your
                  specific requirements. From grid-tied systems to off-grid
                  options, we provide tailored solutions that maximize
                  efficiency, minimize costs, and ensure long-term reliability.
                </p>
              </div>
            </div>

            <div class={`carousel-item ${current === 3 ? "active" : ""}`}>
              <img src="assets/img/hero-carousel/solar-panel2.jpg" alt="" />
              <div class="container">
                <h2>Smart Solar Battery Storage</h2>
                <p>
                  Store excess solar energy with advanced battery solutions.
                  Ensure power availability even during the night or cloudy
                  days. Maximize energy efficiency and savings!
                </p>
              </div>
            </div>

            <div class={`carousel-item ${current === 4 ? "active" : ""}`}>
              <img src="assets/img/hero-carousel/solar5.jpg" alt="" />
              <div class="container">
                <h2>Smart Solar Battery Storage</h2>
                <p>
                  Store excess solar energy with advanced battery solutions.
                  Ensure power availability even during the night or cloudy
                  days. Maximize energy efficiency and savings!
                </p>
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#hero-carousel"
              role="button"
              data-bs-slide="prev"
              onClick={prevSlide}
            >
              <span
                class="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a>
            <a
              class="carousel-control-next"
              href="#hero-carousel"
              role="button"
              data-bs-slide="next"
              onClick={nextSlide}
            >
              <span
                class="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a>

            <ol class="carousel-indicators"></ol>
          </div>
        </section>

        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Products</h2>
            <p>
              High-quality solar panels, energy-efficient batteries, and
              reliable renewable energy solutions for a greener future.
            </p>
          </div>

          <div className="container">
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <li
                  onClick={() => categoryClicked("All")}
                  className={currentCategory === "All" ? "filter-active" : ""}
                >
                  All
                </li>
                <li
                  onClick={() => categoryClicked("Category 1")}
                  className={
                    currentCategory === "Category 1" ? "filter-active" : ""
                  }
                >
                  Solar
                </li>
                <li
                  onClick={() => categoryClicked("Category 2")}
                  className={
                    currentCategory === "Category 2" ? "filter-active" : ""
                  }
                >
                  Batteries
                </li>
                {/* <li
                  onClick={() => categoryClicked("Category 3")}
                  className={
                    currentCategory === "Category 3" ? "filter-active" : ""
                  }
                >
                  Category 3
                </li>
                <li
                  onClick={() => categoryClicked("Category 4")}
                  className={
                    currentCategory === "Category 4" ? "filter-active" : ""
                  }
                >
                  Category 4
                </li> */}
              </ul>

              <div
                className="row gy-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {products.length === 0 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "50px",
                      marginBottom: "50px",
                    }}
                  >
                    No items available for this category.
                  </div>
                ) : (
                  products.map((data, index) => (
                    <div
                      className="col-lg-4 col-md-6 portfolio-item isotope-item"
                      key={index}
                    >
                      <img
                        src={data.thumbnail}
                        className="img-fluid"
                        alt={data.title}
                      />
                      <div className="portfolio-info">
                        <h4>{data.title}</h4>
                        <p>{data.Description_1}</p>
                        <Link
                          to={`/products-details/${data.id}`}
                          title="More Details"
                          className="details-link"
                        >
                          <i className="bi bi-arrow-right-circle-fill"></i>
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Blog</h2>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-item item-cyan position-relative">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                      ></path>
                    </svg>
                    <i className="bi bi-activity"></i>
                  </div>
                  <a
                    href="/blogs/Blue-Carbon.pdf"
                    className="stretched-link"
                    download
                  >
                    <h3>Blue Carbon Blog</h3>
                  </a>
                  <p>Charging, storage and inversion integration.</p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-item item-orange position-relative">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                      ></path>
                    </svg>
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <a
                    href="/blogs/blue-carbon-pannel.pdf"
                    className="stretched-link"
                    download
                  >
                    <h3>Blue Carbon Blog 2</h3>
                  </a>
                  <p>SOLAR PANEL MONO-CRYSTALLINE</p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-item item-teal position-relative">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                      ></path>
                    </svg>
                    <i className="bi bi-easel"></i>
                  </div>
                  <a
                    href="/blogs/Solar-pump-box.pdf"
                    className="stretched-link"
                    download
                  >
                    <h3>Blue Carbon Blog 3</h3>
                  </a>
                  <p>Solar Pump BOX.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="clients" className="clients section">
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
        </section> */}
      </main>
    </>
  );
};

export default Home;
