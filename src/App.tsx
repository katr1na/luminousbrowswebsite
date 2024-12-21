import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import AfterCare from "./components/AfterCare";
import BookNow from "./components/BookNow";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Lashes from "./components/Lashes";
import Makeup from "./components/Makeup";
import Microblading from "./components/Microblading";
import TouchUps from "./components/TouchUps";
import Footer from "./components/Footer";
import "./styles.css"

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HomePage />
            </div>
          }
        />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/aftercare" element={<AfterCare />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lashes" element={<Lashes />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/microblading" element={<Microblading />} />
        <Route path="/touchups" element={<TouchUps />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App