import '../styles/Contact.css';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <div className="contact-page">
        <div className='contact-container'>
        <div className="contact-info">
          <h1>Contact STRØM</h1>
          <p>
            We are always open to collaboration and new opportunities. If you are interested in booking us for a show, or if you have any questions, feel free to reach out!
          </p>
          <p>Email: <a href="mailto:manager@stromband.com">basia.szafraniec@gmail.com</a></p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Contact;
