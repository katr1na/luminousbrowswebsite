import { Link } from "react-router-dom";
import lashesPrices from "../assets/lashes_prices.png";
import { Carousel } from "react-bootstrap";
import la_1 from "../assets/la_1.jpg";
import la_2 from "../assets/la_2.jpeg";
import la_3 from "../assets/la_3.jpeg";
import la_4 from "../assets/la_4.jpg";
import la_5 from "../assets/la_5.jpg";
import la_6 from "../assets/la_6.jpeg";
import la_7 from "../assets/la_7.jpg";
import la_8 from "../assets/la_8.jpg";
import la_9 from "../assets/la_9.jpg";

const Lashes = () => {
  const images = [
    { src: la_1, alt: "Lashes Image" },
    { src: la_2, alt: "Lashes Image" },
    { src: la_3, alt: "Lashes Image" },
    { src: la_4, alt: "Lashes Image" },
    { src: la_5, alt: "Lashes Image" },
    { src: la_6, alt: "Lashes Image" },
    { src: la_7, alt: "Lashes Image" },
    { src: la_8, alt: "Lashes Image" },
    { src: la_9, alt: "Lashes Image" },
  ];
  return (
    <div>
      <section className="lashes mt-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7 col-xxl-5">
              <h2 className="service-title">Lashes</h2>
              <Link className="homepage-button" to="/aftercare">
                <p className="aftercare-button">What to Expect & Aftercare</p>
              </Link>
            </div>
            <div className="col-lg-4 px-4">
              <h3>
                Semi-permanent mink lashes are applied with an adhesive giving a
                fuller, thicker, and longer appearance.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-4 pb-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-5 col-md-7 mb-5">
            <img
              className="img-fluid"
              src={lashesPrices}
              alt="Lashes prices"
              width="100%"
            />
            <br />
          </div>

          <div className="col-lg-4 col-md-5">
            <Carousel className="microblading-carousel">
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="microblading-carousel-images d-block w-100"
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lashes;
