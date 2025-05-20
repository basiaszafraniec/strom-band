import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Music from './pages/Music';
import Shows from './pages/Shows';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';

function App() {
  return (
    <Router basename="/strom-band">
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
