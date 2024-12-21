import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const contactDetails = {
    phone: "+99309 80228",
    email: "tandon@imprintsinc.in",
    address:
      "C-Annexe, Hind Saurashtra Industrial Estate, Andheri-Kurla Road, Near Marol Naka Metro Station,Marol, Andheri (East), Mumbai 400059",
  };

  const socialLinks = [
    { id: 1, name: "Instagram", url: "https://instagram.com/imprintsinc" },
    { id: 2, name: "Facebook", url: "https://facebook.com/imprintsinc" },
    { id: 3, name: "WhatsApp", url: "https://wa.me/1234567890" },
    {
      id: 4,
      name: "LinkedIn",
      url: "https://linkedin.com/company/imprintsinc",
    },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/about">ABOUT US</a>
              </li>
              <li>
                <a href="/categories">CATEGORIES</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Details</h3>
            <p className="footer-contact">
              <span role="img" aria-label="phone">
                <FaPhoneAlt />
              </span>{" "}
              {contactDetails.phone}
            </p>
            <p className="footer-contact">
              <span role="img" aria-label="email">
                <FaEnvelope />
              </span>{" "}
              {contactDetails.email}
            </p>
            <p className="footer-contact">
              <span role="img" aria-label="address">
                <IoLocationSharp />
              </span>{" "}
              {contactDetails.address}
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <ul className="social-links">
              {socialLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.name === "Instagram" && <FaInstagram />}
                    {social.name === "Facebook" && <FaFacebook />}
                    {social.name === "WhatsApp" && <FaWhatsapp />}
                    {social.name === "LinkedIn" && <FaLinkedin />}
                  </a>
                </li>
              ))}
            </ul>
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.9193236854294!2d72.87898507430629!3d19.103939682106375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8bd850fe24b%3A0xc190a88be735d0b5!2sImprints%20INC!5e1!3m2!1sen!2sin!4v1726071394981!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>Imprints INC © 2024 | All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
