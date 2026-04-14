import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/events", label: "Events" },
    { to: "/team", label: "Team" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="nav">
      
      <Link to="/" className="logo">
        <img src={logo} alt="ACM-W Logo" />
      </Link>

      {/* HAMBURGER */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* LINKS */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        {navItems.map((item) => (
          <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>

    </nav>
  );
}
