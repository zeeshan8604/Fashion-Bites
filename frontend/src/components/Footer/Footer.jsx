// import React from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { ImWhatsapp } from "react-icons/im";
// import "./Footer.css";
// import { BsGithub } from "react-icons/bs";
// import { SiLeetcode } from "react-icons/si";
// import { FaLinkedin } from "react-icons/fa6";
// import Emailsend from "../Emailsend/Emailsend";

// const Footer = () => {
//   return (
//     <div className="maindiv">
//       <div className="leftdiv">
//         <footer>
//           <a href="#" className="footer__logo">
//             ZEESHAN AHMED
//           </a>
//           <ul className="permalinks">
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#about">About</a>
//             </li>
//             <li>
//               <a href="#contact">Contact</a>
//             </li>
//           </ul>

//           <div className="footer__socials">
//             <a href="https://github.com/zeeshan8604">
//               <BsGithub />
//             </a>
//             <a href="https://leetcode.com/Zeeshan_ahmed/">
//               <SiLeetcode />
//             </a>
//             <a href="https://www.linkedin.com/in/zeeshan-ahmed-b87a48227/">
//               <FaLinkedin />
//             </a>
//           </div>
//           <div className="footer__copyright">
//             <small>&copy; Zeeshan Ahmed. All rights reserved.</small>
//           </div>
//         </footer>
//       </div>
//       <div className="rightdiv">
//         <section id="contact">
//           <div className="container contact__container">
//             <div className="contact__options">
//               <article className="contact__option">
//                 <MdOutlineEmail className="contact__option-icon" />
//                 <h4>Email</h4>
//                 <h5>zeeshanahmed860443@gmail.com</h5>
//                 <a href="mailto:zeeshanahmed860443@gmail.com" target="_blank">
//                   Send a Message
//                 </a>
//               </article>
//               <article className="contact__option">
//                 <ImWhatsapp className="contact__option-icon" />
//                 <h4>WhatsApp</h4>
//                 <h5>Zeeshan Ahmed</h5>
//                 <a href="https://wa.me/+918604435248" target="_blank">
//                   Send a Message
//                 </a>
//               </article>
//             </div>
//             <Emailsend />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import Emailsend from "../Emailsend/Emailsend";
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
      <div className="rightdiv">
        <section id="contact">
          <div className="container contact__container">
            <h2>GIVE FEEDBACK</h2>
            <Emailsend />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
