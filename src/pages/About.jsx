import { useEffect } from 'react';
import '../styles/About.css';
import bandImage from '../assets/band.jpg'; // replace with your actual image path

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <img src={bandImage} alt="The Band" />
      </div>

      <div className="about-content">
        <h1>About STRØM</h1>
        <p>
          STRØM is a raw blend of energy, emotion, and noise. Born in basements and grown on live stages,
          we are a group of friends making music that hits hard and stays loud. From underground shows to
          festival dreams, we’re just getting started. Whether you're here to scream the lyrics or just
          feel something real — we’re glad you're with us.
        </p>
      </div>
    </div>
  );
}

export default About;

