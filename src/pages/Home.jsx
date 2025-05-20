import '../styles/Home.css';
import logoImage from '../assets/logo2.png';
import backgroundImage from '../assets/grass.jpg';
import Footer from '../components/Footer';
import bandPhoto from '../assets/band.jpg';
import recordImage from '../assets/band-record.png';
import Logo from '../components/Logo';



function Home() {
  return (

    <div className="home-container">
      <Logo />
      {/* <div className="hero bg-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <img src={logoImage} alt="STRØM logo" className="logo" />
        <img src={recordImage} alt="Record" className="spinning-record" />

      </div> */}

      <div className="announcement">
        <h2>Upcoming Concert</h2>
        <p>We're playing live soon – stay tuned for more details!</p>
      </div>

      {/* <div className="announcement-section">
        <div className="announcement funky-box">
          <h2 className="funky-title">🎸 upcoming concert!</h2>
          <p className="funky-text">
            catch us live soon — we’re bringing the noise! <br />
            tap below for details ↓
          </p>
          <a href="/contact" className="funky-btn">Contact us!</a>
        </div>
      </div>  
                */}
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
  );
}

export default Home;

// import '../styles/Home.css';
// import logoImage from '../assets/logo1.png';
// import backgroundImage from '../assets/grass.jpg';
// import bandPhoto from '../assets/band.jpg'; // make sure you add a band image in assets

// function Home() {
//   return (
//     <div className="home-container">
//       <div className="shared-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
//         <div className="hero-section">
//           <img src={logoImage} alt="STRØM logo" className="logo" />
//         </div>

//         <div className="announcement-section">
//           <div className="announcement">
//             <h2>Upcoming Concert</h2>
//             <p>We're playing live soon – stay tuned for more details!</p>
//           </div>
//         </div>
//       </div>

//       {/* New About Band Section */}
//       <div className="about-band" style={{ backgroundImage: `url(${bandPhoto})` }}>
//         <div className="about-text">
//           <h2>Who are we?</h2>
//           <p>
//             STRØM is a stormy blend of dark alt rock and raw live energy.
//             <br />
//             We’re booking shows now — reach out and let’s make noise.
//           </p>
//           <a href="/contact">Contact us to book</a>
//         </div>
//       </div>

//       <footer className="footer">
//         <p>© {new Date().getFullYear()} STRØM</p>
//         <p>Contact: manager@stromband.com</p>
//         <div className="footer-links">
//           <a href="#">Instagram</a>
//           <a href="#">Spotify</a>
//           <a href="#">YouTube</a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;

