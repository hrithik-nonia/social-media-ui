import Logo from "../assets/logo/logo-img-code";
import { useState } from "react";
import AboutComponent from "../headerComponent/about";
import Faq from "../headerComponent/faq";
import Feature from "../headerComponent/feature";
import SignUp from "../headerComponent/signup";
import Login from "../headerComponent/login";
Login;

const Header = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [showFeature, setShowFeature] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <Logo size={40} />
              <span className="ms-2 text-white fw-500">Socialify</span>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-2 text-white"
                  onClick={() => setShowFeature(true)}
                >
                  Features
                </a>
                {showFeature && (
                  <Feature onClose={() => setShowFeature(false)}></Feature>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-2 text-white"
                  onClick={() => setShowFaq(true)}
                >
                  FAQs
                </a>
                {showFaq && <Faq onClose={() => setShowFaq(false)}></Faq>}
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link px-2 text-white"
                  onClick={() => setShowAbout(true)}
                >
                  About
                </a>
                {showAbout && (
                  <AboutComponent onClose={() => setShowAbout(false)} />
                )}
              </li>
            </ul>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="text-end">
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={() => setShowLogin(true)}
              >
                Login
                {showLogin && (
                  <Login onClose={() => setShowLogin(false)}></Login>
                )}
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => setShowSignUp(true)}
              >
                Sign-up
                {showSignUp && (
                  <SignUp onClose={() => setShowSignUp(false)}></SignUp>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
