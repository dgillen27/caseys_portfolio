import React from 'react';

const ContactForm = (props) => {
  return (
    <div>
      <form className="contact-form" method="POST" action="https://formspree.io/danielbgillen@gmail.com">
        <label>Email Address</label>
        <input type="email" name="email" placeholder=""/>
        <label className="">Message</label>
        <textarea name="message" placeholder=""></textarea>
        <input className="submit-button" type="submit"/>
      </form>
    </div>
  )
}

export default ContactForm;
