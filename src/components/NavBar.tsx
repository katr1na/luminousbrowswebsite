import { Link } from "react-router-dom";
import "../styles.css";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  const toggleServicesMenu = () => {
    setServicesOpen(!isServicesOpen);
  };

  const closeServicesMenu = () => {
    setServicesOpen(false);
  };

  const closeMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav>
        <div className="navbar-container">
          <div className="row align-items-center w-100">
            <div className="hamburger" onClick={toggleMenu}>
              &#9776;
            </div>
            <div className={`navbar-links ${isOpen ? "open" : ""}`}>
              <Link className="navbar-link" to="/" onClick={closeMenu}>
                <p>Home</p>
              </Link>
              <div
                className="navbar-link dropdown"
                onClick={toggleServicesMenu}
                onMouseEnter={() =>
                  window.innerWidth > 575 && toggleServicesMenu()
                }
                onMouseLeave={() =>
                  window.innerWidth > 575 && closeServicesMenu()
                }
              >
                <p>Services ▼</p>
                <div
                  className={`dropdown-menu ${isServicesOpen ? "show" : ""}`} onClick={toggleServicesMenu}
                >
                  <Link to="/microblading" onClick={closeMenus}>
                    Microblading
                  </Link>
                  <Link to="/makeup" onClick={closeMenus}>
                    Makeup
                  </Link>
                  <Link to="/lashes" onClick={closeMenus}>
                    Lashes
                  </Link>
                  <Link to="/touchups" onClick={closeMenus}>
                    Touchups
                  </Link>
                  <Link to="/aftercare" onClick={closeMenus}>
                    Aftercare
                  </Link>
                </div>
              </div>

              <Link className="navbar-link" to="/about-me" onClick={closeMenu}>
                <p>About Me</p>
              </Link>
              <Link className="navbar-link" to="/gallery" onClick={closeMenu}>
                <p>Gallery</p>
              </Link>
              <Link className="navbar-link" to="/contact" onClick={closeMenu}>
                <p>Contact</p>
              </Link>
              <Link className="navbar-link" to="/book-now" onClick={closeMenu}>
                <p>Book Now</p>
              </Link>
            </div>
          </div>
          <section className="intro">
            <div className="mt-4">
              <h1>
                <Link className="nav-title" to="/">
                  <h1>LUMINOUS BROWS</h1>
                  <p className="nav-subtitle">Permanent Makeup Clinic</p>
                </Link>
              </h1>
            </div>
          </section>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
