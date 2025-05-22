import { useState } from 'react';
import '../styles/Shows.css';
import show1 from '../assets/band-herning.JPG';
import show2 from '../assets/band-sun.JPG';
import show3 from '../assets/band-bar.JPG';
import past1 from '../assets/band-domen.jpg';
import past2 from '../assets/markus-dorm.JPG';
import past3 from '../assets/band-gaya.jpg';
import past4 from '../assets/band-cpn.jpg';
import backgroundImage from '../assets/show.JPG';
import Footer from '../components/Footer';

function Shows() {
  const [showPast, setShowPast] = useState(false);

  const upcoming = [
    {
      img: show1,
      title: 'Herning Kulturfest',
      date: 'June 13, 2025',
      desc: "We're performing during Kulturfest in erning, come see us Live!",
      link: '#'
    },
    {
      img: show2,
      title: 'Amazing Future Concert',
      date: 'June 20, 2025',
      desc: "Outdoor summer vibes and new songs like you've never seen before.",
      link: '#'
    },
    {
      img: show3,
      title: 'Anoter Epic Endeavour',
      date: 'July 10, 2025',
      desc: 'Come see us dilly dally and get absolutely silly.',
      link: '#'
    }
  ];

  const past = [
    {
      img: past1,
      title: 'Strøm X Domen',
      date: 'May 5th, 2025',
      desc: 'Getting hot and sweaty in this glass ball.',
      link: 'https://facebook.com/events/s/str%C3%B8m-x-domen/1660741231219089/'
    },
    {
      img: past2,
      title: 'Ravnsbjerg Bar',
      date: 'March 19th, 2025',
      desc: 'Let us feed you all beer like a mother bird',
      link: 'https://facebook.com/events/s/str%C3%B8m-x-natteravnen/1400643757589152/'
    },
    {
      img: past3,
      title: 'Koncert på Café Gaya',
      date: 'Jan 18, 2025',
      desc: 'Very cozy good vibes chill omg.',
      link: 'https://www.instagram.com/reel/C6jEKhzMAio/?igsh=Zmh6ODRsem5hcGht'
    },
    {
      img: past4,
      title: 'Copenhagen Festival',
      date: 'Dec 12, 2024',
      desc: 'First big concert hell yeah',
      link: 'https://www.instagram.com/p/C6W3_UHs_97/?igsh=NjNrMWNtODVla204'
    }
  ];

  return (
    <div className="shows-page bg-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="page-title">Shows</h1>

      <section className="shows-section">
        <h2>Upcoming Shows</h2>
        <div className="shows-grid">
          {upcoming.map((show, idx) => (
            <div className="show-card" key={idx}>
              <img src={show.img} alt={show.title} />
              <h3>{show.title}</h3>
              <p>{show.date}</p>
              <p>{show.desc}</p>
              <a href={show.link} target="_blank" rel="noopener noreferrer">View Event</a>
            </div>
          ))}
        </div>
      </section>

      <button className="toggle-btn" onClick={() => setShowPast(!showPast)}>
        {showPast ? 'Hide Past Shows' : 'View Past Shows'}
      </button>

      {showPast && (
        <section className="shows-section past">
          <h2>Past Shows</h2>
          <div className="shows-grid">
            {past.map((show, idx) => (
              <div className="show-card" key={idx}>
                <img src={show.img} alt={show.title} />
                <h3>{show.title}</h3>
                <p>{show.date}</p>
                <p>{show.desc}</p>
                <a href={show.link} target="_blank" rel="noopener noreferrer">View Event</a>
              </div>
            ))}
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}

export default Shows;
