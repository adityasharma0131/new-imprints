import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // For notifications
import { MdDesignServices } from "react-icons/md";
import { IoRibbon } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";

import corporategifting from "/assets/Corporategifting.png";
import aboutus from "/assets/aboutus.png";
import Corporate from "/assets/Corporategifting.png";
import OfficeEssentials from "/assets/OfficeEssentials.png";
import Electronics from "/assets/Electronics.png";
import Apparels from "/assets/Apparels.png";
import Signages from "/assets/Signages.png";
import LeatherProducts from "/assets/LeatherProducts.png";

import client1 from "/assets/client1.png";
import client4 from "/assets/client4.png";
import client5 from "/assets/client5.png";
import client6 from "/assets/client6.png";
import client7 from "/assets/client7.png";
import client8 from "/assets/client8.png";
import client9 from "/assets/client9.png";
import client10 from "/assets/client10.png";
import client11 from "/assets/client11.png";
import client12 from "/assets/client12.png";
import client13 from "/assets/client13.png";
import client14 from "/assets/client14.png";
import client15 from "/assets/client15.png";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    companyName: "",
    email: "",
    budget: "",
    giftsNeeded: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const categories = [
    { name: "Corporate Gifts", image: Corporate },
    { name: "Office Essentials", image: OfficeEssentials },
    { name: "Electronics", image: Electronics },
    { name: "Apparels", image: Apparels },
    { name: "Signages", image: Signages },
    { name: "Leather Products", image: LeatherProducts },
  ];

  const clientImages = [
    client1,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
    client13,
    client14,
    client15,
  ];

  return (
    <>
      {/* HOME SECTION */}
      <div className="homepage" id="home"></div>

      {/* WHY CHOOSE US SECTION */}
      <div className="whyus">
        <h1 className="heading1">Why Choose Us</h1>
        <div className="pointers">
          {[
            {
              icon: <MdDesignServices className="hero-icon" />,
              title: "Unmatched Customization",
            },
            {
              icon: <IoRibbon className="hero-icon" />,
              title: "High-Quality Products",
            },
            {
              icon: <FaTruckFast className="hero-icon" />,
              title: "Timely & PAN India Delivery",
            },
            {
              icon: <RiDiscountPercentFill className="hero-icon" />,
              title: "Discount on Bulk Orders",
            },
          ].map((item, index) => (
            <div className="sec" key={index}>
              {item.icon}
              <h2>{item.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES SECTION */}
      <div className="categories-container" id="categories">
        <h1 className="heading1">Our Categories</h1>
        <div className="categories-flex">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <div className="category-border">
                <img src={category.image} alt={category.name} />
                <p>{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CLIENTS SECTION */}
      <div className="clients" id="clients">
        <h1 className="heading1">Clients That Trust Us</h1>
        <div className="slider">
          <div className="logos">
            <div className="logos-slide">
              {clientImages.concat(clientImages).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="item"
                  alt={`Client ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <div className="about-section" id="about">
        <h2 className="heading1">About Us</h2>
        <div className="about-container">
          <div className="about-content">
            <h1 className="about-title">We have 15+ Years of Experience</h1>
            <p className="about-description">
              Imprints INC is engaged in the business of corporate gifting,
              known for supplying unbeatable business promotional products that
              have made an indelible impact across industry verticals. Our
              commitment to excellence & passion for quality products have shown
              us the way to growth & prosperity. Our huge range of products
              includes stationery items, corporate gifts, clothing, signages,
              electronics, etc.
            </p>
          </div>
          <div className="about-image">
            <img
              src={aboutus}
              alt="A gift box with Imprints INC branding"
              className="about-img"
            />
          </div>
        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <div className="contact" id="contact">
        <Toaster />
        <div className="contact-container">
          <h2 className="contact-heading">Let's Talk</h2>
          <p className="contact-subheading">
            Fill out the form below to request a custom gift design.
          </p>
          <form className="contact-form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone No."
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="form-input"
                value={formData.companyName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="budget"
              placeholder="Approx. Budget Per Hamper"
              className="form-input full-width"
              value={formData.budget}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="giftsNeeded"
              placeholder="Estimated Number of Gifts Needed"
              className="form-input full-width"
              value={formData.giftsNeeded}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="form-input full-width"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="contact-button">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
