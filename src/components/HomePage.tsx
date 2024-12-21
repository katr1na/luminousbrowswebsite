import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <section className="specials my-5">
        <div className="seasonal-container">
          <h3 className="my-4">SEASONAL</h3>
          <div className="specials-text p-4">
            <p>$50 Off All Permanent Makeup &amp; Microblading Services</p>
            <p id="exclusion">*excluding touch-ups</p>
          </div>
          <Link className="homepage-button" to="/book-now">
            <p className="specials-book-now">Book Now</p>
          </Link>
        </div>
      </section>

      <section className="about-me">
        <h3 className="my-5">ABOUT</h3>
        <p>
          I started off as a nail tech doing many different nail services for 17
          years. I have a license for cosmetology and certified for permanent
          makeup tattoos for eyebrows, eyeliners, and lips. I was trained for
          microblading and tattoos doing new techniques and earning my
          PhiContour, PhiBrows and PhiRemoval diplomas. I am happy to work with
          my fellow coworkers and communicate with my customers providing them
          the satisfaction they need.
        </p>
        <Link className="homepage-button" to="/about-me">
          <p id="specials-read-more">Read More</p>
        </Link>
      </section>

      <section className="testimonials">
        <div className="testimonial-container my-4">
          <h3 className="mt-5">TESTIMONIALS</h3>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-4">
                <p>
                  I was one of the first few people that Khanh/Kelly had started
                  her microblading experiences on and I've got to say, after
                  almost 4 years now, they're still looking fine as hell. I
                  absolutely recommend her and I love her job, her work is
                  amazing and it's only getting better! She's very accurate and
                  precise when it comes to her microblading skills, and I'm
                  really glad that she did my eyebrows!
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  Kelly is amazing. I had horribly shaped blonde eyebrows before
                  and my friend Rachael got microbladed by Kelly so I decided to
                  see her as well. I feel the best I’ve ever felt now that I
                  have beautiful eyebrows and I recommend her to everyone. Thank
                  you so much for making me look like a real human Kelly!
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  Omg Kelly is amazing. She is a god-sent to me and a true
                  artist. My already microbladed eyebrows needed correcting,
                  they were uneven, patchy, and one was thicker than the other,
                  and she was able to give me new eyebrows that I have always
                  wanted. She was able to fix them and create new ones that look
                  fabulous. Believe me when I say she knows what she is doing.
                  It is very obvious that she has gone through the proper
                  training to do these services. I would never step foot in
                  another salon except hers. I highly recommend her for
                  microblading and creating something fabulous for you. I cant
                  thank you enough Kelly.
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://g.page/r/CaF4VDm8r2KyEBE/review"
            className="leave-review-button"
          >
            Leave a Review
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
