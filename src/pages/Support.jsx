import '../styles/Support.css';

function Support() {
  return (
    <div className="support-page">
      <div className="support-content">
        <h1>Support STRØM</h1>
        <p>
          Love what we do? Help us keep making music by supporting us directly 💸
        </p>
        <a 
          className="paybox-button" 
          href="https://www.mobilepay.dk/erhverv/betalingslink/your-paybox-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Send us a MobilePay 💙
        </a>
      </div>
    </div>
  );
}

export default Support;
