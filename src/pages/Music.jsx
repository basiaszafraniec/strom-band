import '../styles/Music.css';
import backgroundImage from '../assets/band-running.jpg';

function Music() {
  return (
    <div className="music-page bg-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="music-overlay">
        <h1 className="music-heading funky-title">songs dropping on spotify this july</h1>
        <p className="music-sub">stay tuned and follow us for the release!</p>
      </div>
    </div>
  );
}

export default Music;
