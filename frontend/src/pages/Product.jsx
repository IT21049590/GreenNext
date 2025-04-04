import React, { useEffect, useState } from "react";
import AOS from "aos";
import productJson from "../assets/data/product.json";
import { Link } from 'react-router-dom';
const Product = () => {
  let [currentCategory, setCurrentCategory] = useState("All");
  const [products, setProducts] = useState([]);

  //scroll animations
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    document.title = "Products | Green Next";
  }, []);

  //product categoty function
  function categoryClicked(data) {
    setCurrentCategory(data);
  }

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
        <div className="page-title accent-background">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">Products</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="current">Products</li>
              </ol>
            </nav>
          </div>
        </div>
        <section id="team" className="team section">
          <div className="container">
            <div id="portfolio" className="portfolio section">
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
                    Category 1
                  </li>
                  <li
                    onClick={() => categoryClicked("Category 2")}
                    className={
                      currentCategory === "Category 2" ? "filter-active" : ""
                    }
                  >
                    Category 2
                  </li>
                  <li
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
                  </li>
                </ul>
              </div>
            </div>
            <div className="row gy-4">
              {products.map((data, index) => (
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  key={index}
                >
                  <div className="team-member">
                    <div className="member-img">
                      <img src={data.thumbnail} className="img-fluid" alt="" />
                      <div className="social">
                        <Link to={`/products-details/${data.id}`}>
                          <i className="bi bi-arrow-right-circle-fill"></i> See
                          More
                        </Link>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>{data.title}</h4>
                      <span>{data.Description_1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Product;
