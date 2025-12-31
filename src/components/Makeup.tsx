import { Link } from "react-router-dom";
import makeupPrices from "../assets/makeup_prices.png";
import { Carousel } from "react-bootstrap";
import pm_1 from "../assets/pm_1.jpeg";
import pm_2 from "../assets/pm_2.jpeg";
import pm_3 from "../assets/pm_3.jpeg";
import pm_4 from "../assets/pm_4.jpeg";
import pm_5 from "../assets/pm_5.jpeg";
import pm_6 from "../assets/pm_6.jpg";
import pm_7 from "../assets/pm_7.jpg";
import pm_8 from "../assets/pm_8.jpg";

const Makeup = () => {
    const images = [
        { src: pm_1, alt: "Makeup Image" },
        { src: pm_2, alt: "Makeup Image" },
        { src: pm_3, alt: "Makeup Image" },
        { src: pm_4, alt: "Makeup Image" },
        { src: pm_5, alt: "Makeup Image" },
        { src: pm_6, alt: "Makeup Image" },
        { src: pm_7, alt: "Makeup Image" },
        { src: pm_8, alt: "Makeup Image" },
      ];
  return (
    <div>
      <section className="makeup mt-5">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7 col-xxl-5">
              <h2 className="service-title">Permanent Makeup</h2>
              <Link className="homepage-button" to="/aftercare">
                <p className="aftercare-button">What to Expect & Aftercare</p>
              </Link>
            </div>
            <div className="col-lg-4 px-4">
              <h3>
                A semi-permanent drawing of eyelids or lips using pigment to
                correct natural defects and also highlight contours.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid my-4 pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7 mb-5">
            <img
              className="img-fluid"
              src={makeupPrices}
              alt="Makeup prices"
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

export default Makeup;
