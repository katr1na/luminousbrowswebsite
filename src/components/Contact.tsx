import map from "../assets/map.png"

const Contact = () => {
  return (
    <div>
      <section className="contact mt-4 p-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="map col-md-6 p-3 mx-3">
              <img src={map} alt="Map" height="100%" width="100%" />
            </div>
            <div className="contact-info col-md-5 p-5">
              <h3 className="mb-3">Directions</h3>
              <p>
                745 N US Hwy 287
                <br />
                Lafayette, CO 80026
              </p>
              <p>
                Located at Da-Vi Nails inside Walmart
              </p>
              <h3 className="mb-3">Stay in Touch</h3>
              <p>tel: 303-204-8245</p>
              <a className="navbar-link" href="mailto:luminousbrowss@gmail.com">
              <p>mail: luminousbrowss@gmail.com</p>
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
