import { useEffect } from 'react';
import '../styles/About.css';
import bandImage from '../assets/band.png';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <img src={bandImage} alt="The Band" />
      </div>

      <div className="about-content">
        <h1>About STRØM</h1>
        <p>
          Strøm - is a cool band of six musicians. They are:
          <br/>
          Bongi when se plays the piano you feel your soul leaving your body.
          <br/>
          Markus and his honey sweet voice.
          <br/>
          Estella - the goosebump giving base guitarist.
          <br/>
          Sebastian on his guitar making you want to scream.
          <br/>
          Izana with the sexiest voice in this universe.
          <br/>
          and the magician Nick drumming like you've never eard before.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;

