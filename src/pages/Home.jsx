import '../styles/Home.css';
import logoImage from '../assets/logo2.png';
import backgroundImage from '../assets/grass.jpg';
import Footer from '../components/Footer';
import bandPhoto from '../assets/band-home.JPG';
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
          <p>Come see us live in Herning on June 13th! See you there!</p>
          <a href="https://facebook.com/events/s/express-yourself/732118755816305/">Read more</a>
        </div>
        <div className="about-band" style={{ backgroundImage: `url(${bandPhoto})` }}>
          <div className="about-text">
            <h2>Who are we?</h2>
            <p>
            Strøm is a young musician band of 6 combined by the love for music. 
              <br />
              We are open to collaborate so if you are interested please contact us!
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
