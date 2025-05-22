import '../styles/Music.css';
import Footer from '../components/Footer';
import backgroundImage from '../assets/band-running.jpg';

function Music() {
  return (
    <>
      <div className="music-page bg-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="music-overlay">
          <h1 className="music-heading funky-title">songs dropping on spotify this july</h1>
          <p className="music-sub">In the meantime follow us on Instagram!</p>
          <a href="https://www.instagram.com/_strom_official?igsh=Z3g4NWEyNW10dDdm">Instagram</a>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Music;
