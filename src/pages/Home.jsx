import '../styles/Home.css';
import logoImage from '../assets/logo2.png';
import backgroundImage from '../assets/grass.jpg';
import Footer from '../components/Footer';
import bandPhoto from '../assets/band.jpg';
import recordImage from '../assets/band-record.png';
import Logo from '../components/Logo';

function Home() {
  return (
    <>
      <div className="home-container">
        <Logo />
        <div className='spinning-record'>
          <img src={recordImage} alt="Record" />
        </div>

        <div className="announcement">
          <h2>Upcoming Concert</h2>
          <p>We're playing live soon – stay tuned for more details!</p>
        </div>
        <div className="about-band" style={{ backgroundImage: `url(${bandPhoto})` }}>
          <div className="about-text">
            <h2>Who are we?</h2>
            <p>
              STRØM is a stormy blend of dark alt rock and raw live energy.
              <br />
              We’re booking shows now — reach out and let’s make noise.
            </p>
            <a href="/contact">Contact us to book</a>
          </div>
        </div>




        <Footer />
      </div>
    </>
  );
}

export default Home;
