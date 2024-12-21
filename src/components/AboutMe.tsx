import aboutmeimage from "../assets/aboutme_2.png";
import phibrowslogo from "../assets/phibrows_logo.png";
import phicontourlogo from "../assets/phicontour_logo.png";

const AboutMe = () => {
  return (
    <div>
      <section className="about-me-page mt-4">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-5 px-3">
              <div className="about-me-desc p-4">
                <h3 className="pt-3">
                  About Me
                </h3>
                <p>
                  My name is Khanh Phan, and I am an artist with a passion for
                  permanent makeup services that provide anyone who wishes to
                  cover natural defects or simply enhance their features. My
                  purpose is to support my clients with special care to satisfy
                  their needs of undergoing a permanent makeup procedure for
                  their own personal reasons. Regardless of what a client
                  requests, I will fulfill them with my utmost respect and
                  effort.
                  <br></br>
                  <br></br>I strive to learn more with each and every client
                  that approaches me and expand my experience working with a
                  variety of different individuals. I am always excited to meet
                  new customers and even more excited to provide a smile to
                  their faces
                </p>
              </div>
              <div className="container p-3">
                <div className="row justify-content-center">
                  <div className="col-5">
                    <img
                      src={phibrowslogo}
                      alt="PhiBrows"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="col-5">
                    <img
                      src={phicontourlogo}
                      alt="PhiContour"
                      height="100%"
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="about-me-main-image col-lg-5">
              <img
                src={aboutmeimage}
                alt="Khanh Phan"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
