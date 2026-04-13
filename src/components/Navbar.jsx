import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <nav className="nav">
 <Link to="/" className="logo">
  <img src={logo} alt="ACM-W Logo" />
</Link>

  <div className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/events">Events</Link>
    <Link to="/team">Team</Link>
    <Link to="/gallery">Gallery</Link>
    <Link to="/contact">Contact</Link>
  </div>
</nav>
  );
}
