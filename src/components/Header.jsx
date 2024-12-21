import React, { useState, useEffect } from "react";
import logo from "/assets/imprintslogo.png";
import { RiArrowRightUpLine, RiCloseLine, RiMenuLine } from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track navbar visibility
  let lastScrollY = 0; // Track last scroll position

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and beyond 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    const debouncedScroll = debounce(handleScroll, 100); // Debounce for performance
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  // Debounce function for improved scroll performance
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`header ${isVisible ? "show" : "hide"}`} // Toggle visibility
      id="header"
    >
      <nav className="nav container">
        <img className="nav__logo" src={logo} alt="Logo" />

        <div
          className={`nav__menu ${menuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {[
              { name: "Home", id: "home" },
              { name: "Our Categories", id: "categories" },
              { name: "Our Clients", id: "clients" },
              { name: "About Us", id: "about" },
              { name: "Contact for Bulk Orders", id: "contact" },
            ].map((item, index) => (
              <li className="nav__item" key={index}>
                <a
                  className="nav__link"
                  href={`#${item.id}`}
                  onClick={handleClose}
                >
                  <RiArrowRightUpLine />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__close" id="nav-close" onClick={handleClose}>
            <RiCloseLine />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleToggle}>
          <RiMenuLine />
        </div>
      </nav>
    </header>
  );
};

export default Header;
