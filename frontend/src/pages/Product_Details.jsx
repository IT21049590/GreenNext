import React, { useEffect, useState } from "react";
import AOS from "aos";
import { useParams } from "react-router-dom";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import productData from "../assets/data/product.json";

const Product_Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Initialize scroll animations
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  // Update document title when product is loaded
  useEffect(() => {
    if (product) {
      document.title = `${product.title} | Product Details | Green Next`;
    }
  }, [product]);

  // Find and set the product based on the URL parameter id
  useEffect(() => {
    const productId = parseInt(id, 10);
    const foundProduct = productData.find((item) => item.id === productId);
    setProduct(foundProduct);
  }, [id]);

  console.log(product);

  // Display a loading indicator if the product hasn't loaded yet
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="main">
        <div className="page-title accent-background">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">Product Details</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="current">Product Details of ID - {product?.id}</li>
              </ol>
            </nav>
          </div>
        </div>
        <section id="portfolio-details" className="portfolio-details section">
          <div className="container" data-aos="fade-up">
            <div className="portfolio-details-slider">
              <Swiper
                modules={[Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                speed={2000}
              >
                {product.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img.url} alt={`Image ${img.img_ID}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="row justify-content-between gy-4 mt-4">
              <div className="col-lg-8" data-aos="fade-up">
                <div className="portfolio-description">
                  <h2>{product.title}</h2>
                  <p>{product.Description_1}</p>
                  <p>{product.Main_Description}</p>
                </div>
              </div>

              <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                <div className="portfolio-info">
                  <h3>Product Information</h3>
                  <ul>
                    <li>
                      <strong>Category:</strong> {product.Category}
                    </li>
                    <li>
                      <strong>Model No:</strong> {product.ModelNo}
                    </li>
                    <li>
                      <strong>Brand:</strong> {product.Brand}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Product_Details;
