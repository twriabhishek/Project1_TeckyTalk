import React from "react";
import "../Style/Contact.scss";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-page">
        <h1>Join with Us</h1>
        <main>
          <div className="main-div">
            <label htmlFor="">Name:</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <input type="email" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Message:</label>
            <textarea type="text" name="" id="" />
          </div>
        </main>
        <button className="button1">Join Us</button>
      </div>
    </div>
  );
};

export default Contact;
