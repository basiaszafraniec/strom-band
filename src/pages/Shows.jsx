import { useState } from 'react';
import '../styles/Shows.css';
import show1 from '../assets/grass.jpg';
import show2 from '../assets/grass.jpg';
import show3 from '../assets/grass.jpg';
import past1 from '../assets/grass.jpg';
import past2 from '../assets/grass.jpg';
import past3 from '../assets/grass.jpg';
import past4 from '../assets/grass.jpg';
import backgroundImage from '../assets/show.JPG';

function Shows() {
  const [showPast, setShowPast] = useState(false);

  const upcoming = [
    {
      img: show1,
      title: 'STRØM x Vega',
      date: 'June 5, 2025',
      desc: 'Live at Vega, Copenhagen – our biggest show yet!',
      link: '#'
    },
    {
      img: show2,
      title: 'Råhuset Summer Jam',
      date: 'June 20, 2025',
      desc: 'Outdoor summer vibes and new songs.',
      link: '#'
    },
    {
      img: show3,
      title: 'Backyard Festival',
      date: 'July 10, 2025',
      desc: 'Festival gig with other local bands.',
      link: '#'
    }
  ];

  const past = [
    {
      img: past1,
      title: 'Loppen Debut',
      date: 'March 15, 2025',
      desc: 'First ever show – magical night.',
      link: '#'
    },
    {
      img: past2,
      title: 'Studenthuset Aalborg',
      date: 'Feb 22, 2025',
      desc: 'Packed student energy!',
      link: '#'
    },
    {
      img: past3,
      title: 'Open Mic Tivoli',
      date: 'Jan 18, 2025',
      desc: 'Played surprise set for 300 people.',
      link: '#'
    },
    {
      img: past4,
      title: 'Underground Jam',
      date: 'Dec 12, 2024',
      desc: 'Late night basement gig with friends.',
      link: '#'
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
    </div>
  );
}

export default Shows;
