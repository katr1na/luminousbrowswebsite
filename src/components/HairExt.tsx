import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import hairextPriices from "../assets/hairext_prices.png";
import he_1 from "../assets/he_1.jpg";
import he_2 from "../assets/he_2.jpg";
import he_3 from "../assets/he_3.jpg";

const HairExt = () => {
  const images = [
    { src: he_1, alt: "Hair Extentions Image" },
    { src: he_2, alt: "Hair Extentions Image" },
    { src: he_3, alt: "Hair Extentions Image" },
  ];
  return (
    <div>
      <section className="microblading mt-5">
        <div className="container mb-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7 col-xxl-5">
              <h2 className="service-title">Hair Extensions</h2>
              <Link className="homepage-button" to="/aftercare">
                <p className="aftercare-button">What to Expect & Aftercare</p>
              </Link>
            </div>
            <div className="col-lg-4 px-4">
              <h3>
                Hair extensions are strands of hair, either natural or synthetic, 
                that are attached to a person’s existing hair to add length, volume, or thickness.
              </h3>
            </div>
          </div>
        </div>
        <div className="microblading-other container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-4 mx-4 mb-4">
              <h2 className="py-2">I-Tip</h2>
              <p className="microblading-other-desc p-4">
                Individual strands of hair attached using small beads that are 
                clamped onto small sections of natural hair.<br></br><br></br>

                <strong>Best For:</strong> Those who don’t want the use of adhesive.
                Those who wear their hair up and have active lifestyle.
              </p>
            </div>
            <div className="col-lg-4 mx-3 mb-4">
              <h2 className="py-2">K-Tip</h2>
              <p className="microblading-other-desc p-4">
                Individual strands of hair with keratin based adhesive tip 
                fused to the natural hair using a heat tool.<br></br><br></br>

                <strong>Best For:</strong> Those who like to wear up or style their hair.
                NOT the most suitable for active swimmers.
              </p>
            </div>
            <div className="col-lg-4 mx-3 mb-4">
              <h2 className="text-uppercase text-darkestgreen bg-lightestgreen py-2">Tape-In</h2>
              <div className="microblading-nano-desc p-4">
                <p>
                  Pre-taped wefts of hair adhered to sections of natural hair, 
                  creating a sandwich-like effect.<br></br><br></br>

                <strong>Best For:</strong> Fast application. Suitable for all hair types.
                NOT the most suitable for active swimmers.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mx-3 mb-4">
              <h2 className="text-uppercase text-darkestgreen bg-lightestgreen py-2">Wefts</h2>
              <div className="microblading-nano-desc p-4">
                <p>
                  A strip of hair (weft) sewn or bonded onto a track of 
                  braided or cornrowed natural hair.<br></br><br></br>

                <strong>Best For:</strong> Maximum density.
                NOT suitable for those who wear their hair up a lot.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-7 mb-5">
              <img
                className="img-fluid"
                src={hairextPriices}
                alt="Hair Extension prices"
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
      </section>
    </div>
  );
};

export default HairExt;
