import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { BiChevronDown } from "react-icons/bi";
import dsLogo from "../../Assets/Images/Logo/Logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  const [navToggler, setNavToggler] = useState(false);
  const [navbackClr, setNavbackClr] = useState("");
  // let navClas = "Kashif";
  const navback = () => {
    if (window.pageYOffset === 0) {
      // navClas = "";
      setNavbackClr("");
      console.log("0");
    } else {
      // navClas = "activeNav";
      setNavbackClr("activeNav");
      console.log("Not 0");
    }
  };

  window.onscroll = () => {
    navback();
  };
  return (
    <>
      <header
        className={`fixed-top d-flex align-items-center header ${navbackClr}`}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <h1 className="text-light">
                <a href="index.html">
                  <div className="DSlogo">
                    <img src={dsLogo} alt="" />
                  </div>
                </a>
              </h1>
            </Link>
          </div>

          <nav className={`${navToggler ? "navbar navbar-mobile" : "navbar"}`}>
            <ul>
              <li>
                <a className="nav-link scrollto">
                  Templates
                  <i>
                    <BiChevronDown className="chevronDown" />
                  </i>
                </a>
              </li>
              <li>
                <a className="nav-link scrollto">
                  Makers
                  <i>
                    <BiChevronDown className="chevronDown" />
                  </i>
                </a>
              </li>
            </ul>
          </nav>
          {navToggler ? (
            <ImCross
              className="mobile-nav-toggle crossImIcon"
              onClick={() => {
                setNavToggler(!navToggler);
              }}
            />
          ) : (
            <GiHamburgerMenu
              className="mobile-nav-toggle"
              onClick={() => {
                setNavToggler(!navToggler);
              }}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Nav;
