import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>Pirate's Private LOVE</Link>
      <div style={styles.links}>
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
    flexWrap: "wrap",
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
    fontSize: "clamp(0.9rem, 3vw, 1.3rem)",  // ⬅️ Reduced for mobile
    marginBottom: "0.5rem",
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "#f2f2f2",
    marginLeft: "1rem",
    fontSize: "clamp(0.75rem, 2.5vw, 0.95rem)",  // ⬅️ Reduced for mobile
  },
};

export default Navbar;
