import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/music">Music</Link>
      <Link to="/shows">Shows</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/support">Support Us</Link>
    </nav>
  );
}

export default Navbar;
