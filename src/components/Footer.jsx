import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} STRØM</p>
      <p>Contact: manager@stromband.com</p>
      <div className="footer-links">
        <a href="#">Instagram</a>
        <a href="#">Spotify</a>
        <a href="#">YouTube</a>
      </div>
    </footer>
  );
}

export default Footer;
