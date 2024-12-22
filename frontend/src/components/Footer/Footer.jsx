import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "./Footer.css";
const ContactOption = ({ icon, mailto }) => (
  <article className="contact__option">
    <a href={mailto} target="_blank" rel="noopener noreferrer">
      {icon && React.createElement(icon, { className: "contact__option-icon" })}
    </a>
  </article>
);

const Footer = () => {
  return (
    <div className="maindiv">
      <div className="leftdiv">
        <footer>
          <a href="#" className="footer__logo">
            FASHION BITES
          </a>
          <ul className="permalinks">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="contact__options">
            <ContactOption
              icon={MdOutlineEmail}
              mailto="mailto:zeeshanahmed860443@gmail.com"
            />
            <ContactOption
              icon={ImWhatsapp}
              mailto="https://wa.me/+918604435248"
            />
            <ContactOption
              icon={FaInstagram}
              mailto="https://wa.me/+918604435248"
            />
            <ContactOption
              icon={BsTwitterX}
              mailto="https://wa.me/+918604435248"
            />
          </div>
          <div className="footer__copyright">
            <small>&copy; fashionbites.pvt.ltd All rights reserved.</small>
          </div>
        </footer>
      </div>
      {/* <div className="rightdiv">
        <section id="contact">
          <div className="container contact__container">
            <h2>GIVE FEEDBACK</h2>
            <Emailsend />
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default Footer;
