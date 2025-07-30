import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>☠️ Pirate's LOVE</Link>
      <div>
        <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    fontFamily: "Georgia, serif",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1.3rem",
  },
  link: {
    textDecoration: "none",
    color: "#f2f2f2",
    marginLeft: "1rem",
  },
};

export default Navbar;
