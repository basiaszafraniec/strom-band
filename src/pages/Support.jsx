import '../styles/Support.css';
import Footer from '../components/Footer';

function Support() {
  return (
    <>
    <div className="support-page">
      <div className="support-content">
        <h1>Support STRØM</h1>
        <p>
          We're poor students and we need your support to keep playing for you guys. 
          <br/>
          If you like our music please help us grow with a small donation.
        </p>
        <a 
          className="paybox-button" 
          href="https://www.mobilepay.dk/erhverv/betalingslink/your-paybox-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          MobilePay Box 💙
        </a>
      </div>

    </div>
      <Footer/>    
    </>
  );
}

export default Support;
