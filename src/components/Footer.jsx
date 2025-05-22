import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} STRØM</p>
      <p>Contact: basia.szafraniec@gmail.com</p>
      <div className="footer-links">
        <a href="https://www.instagram.com/_strom_official?igsh=Z3g4NWEyNW10dDdm">Instagram</a>
        <Link to="/music">Spotify</Link>
        <a href="https://youtube.com/shorts/nI8aTpdmv3A?si=Iddx8_BrKZpeRtej">YouTube</a>
      </div>
    </footer>
  );
}

export default Footer;
