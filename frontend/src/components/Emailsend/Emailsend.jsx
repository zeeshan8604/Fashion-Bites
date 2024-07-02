import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Emailsend.css";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dr6aiwb",
        "template_283d8wq",
        form.current,
        "2HwgGkBA_O30lW9VP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <button className="btn">Send Message</button>
    </form>
  );
};
export default ContactUs;
