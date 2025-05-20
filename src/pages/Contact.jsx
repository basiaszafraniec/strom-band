import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact STRØM</h1>
        <p>
          For bookings, press, or questions – hit us up.
        </p>
        <p>Email: <a href="mailto:manager@stromband.com">manager@stromband.com</a></p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
