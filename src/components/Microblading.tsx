import { Accordion, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import microbladingPrices from "../assets/microblading_prices.png";
import mb_1 from "../assets/mb_1.jpg";
import mb_2 from "../assets/mb_2.jpeg";
import mb_3 from "../assets/mb_3.jpeg";
import mb_4 from "../assets/mb_4.jpeg";
import mb_5 from "../assets/mb_5.jpeg";
import mb_6 from "../assets/mb_6.jpeg";
import mb_7 from "../assets/mb_7.jpeg";
import mb_8 from "../assets/mb_8.jpg";
import mb_9 from "../assets/mb_9.jpeg";
import mb_10 from "../assets/mb_10.jpg";

const Microblading = () => {
  const images = [
    { src: mb_1, alt: "Microblading Image" },
    { src: mb_2, alt: "Microblading Image" },
    { src: mb_3, alt: "Microblading Image" },
    { src: mb_4, alt: "Microblading Image" },
    { src: mb_5, alt: "Microblading Image" },
    { src: mb_6, alt: "Microblading Image" },
    { src: mb_7, alt: "Microblading Image" },
    { src: mb_8, alt: "Microblading Image" },
    { src: mb_9, alt: "Microblading Image" },
    { src: mb_10, alt: "Microblading Image" },
  ];
  return (
    <div>
      <section className="microblading mt-5">
        <div className="container mb-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7 col-xxl-5">
              <h2 className="service-title">Microblading</h2>
              <Link className="homepage-button" to="/aftercare">
                <p className="aftercare-button">What to Expect & Aftercare</p>
              </Link>
            </div>
            <div className="col-lg-4 px-4">
              <h3>
                A semi-permanent tattooing technique to represent real hair
                strokes using pigment, creating a more natural look to your
                brows.
              </h3>
            </div>
          </div>
        </div>
        <div className="microblading-other container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-4 mx-4 mb-4">
              <h2 className="py-2">Microshading</h2>
              <p className="microblading-other-desc p-4">
                A semi-permanent tattoo technique used to create the illusion of
                more lush, natural-looking brows. A combined technique of
                microblading and shading that does not tattoo full strokes along
                the browline
              </p>
            </div>
            <div className="col-lg-5 mx-3 mb-4">
              <h2 className="py-2">Powderbrows</h2>
              <p className="microblading-other-desc p-4">
                A semi permanent makeup technique designed to create eyebrows
                with soft powder effect, very similar to powder makeup and
                completely different from microblading, giving your brows an
                ombre look rather than individual hair strokes.
              </p>
            </div>
            <div className="col-lg-5 mx-3">
              <h2 className="text-uppercase text-darkestgreen bg-lightestgreen py-2">
                Nano Realistic Hair Stroke
              </h2>
              <div className="microblading-nano-desc p-4">
                <p>
                  A technique that involves tattooing lines that mimic natural
                  eyebrow hair using a permanent makeup tattoo machine and
                  needle to implant pigment into the epidermis.
                </p>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Advantages of Nano Realistic Hair Stroke
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          <strong>No Cutting or Open Wounds:</strong> Unlike
                          some other techniques, Nano Realistic Hair Stroke does
                          not involve cutting the skin.
                        </li>
                        <li>
                          <strong>Immediate Cleaning:</strong> Eyebrows can get
                          wet and be cleaned immediately after the appointment.
                        </li>
                        <li>
                          <strong>Realistic Appearance:</strong> This technique
                          creates natural-looking, realistic brow hair.
                        </li>
                        <li>
                          <strong>3D Effect:</strong> The strokes can have a 3D
                          effect, enhancing the natural look.
                        </li>
                        <li>
                          <strong>Less Migration:</strong> The pigment is less
                          likely to migrate after healing.
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Why this might be a better option than Microblading
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Microblading is a hot trend in the beauty industry, and
                        for good reason. It allows individuals to wake up with
                        beautiful brows every morning without the daily hassle.
                        However, Nano Brow Machine Hair Strokes offer
                        longer-lasting results and have less risk of pigment
                        migration after healing.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Microblading vs. Nano Machine Hair Strokes
                    </Accordion.Header>
                    <Accordion.Body>
                      <h3 className="text-uppercase text-darkestgreen">
                        Microblading
                      </h3>
                      <p>
                        This process involves using a small handheld tool to
                        implant pigment into the upper dermal layer of the skin
                        in hair-like strokes that mimic natural eyebrows.
                      </p>
                      <h3 className="text-uppercase text-darkestgreen">
                        Nano Brow Machine Hair Strokes
                      </h3>
                      <p>
                        This process is accomplished through the work of a
                        highly skilled artist utilizing a high-performing
                        permanent makeup machine. Nano Machine Hair Strokes
                        offer longer-lasting results and have less risk of
                        pigment migration after healing.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-5 col-md-7 mb-5">
              <img
                className="img-fluid"
                src={microbladingPrices}
                alt="Microblading prices"
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

export default Microblading;
