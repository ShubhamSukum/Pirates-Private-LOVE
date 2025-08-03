const PrivacyPolicy = () => {
  return (
    <div className="privacy-container" style={styles.container}>
      <h1 style={styles.title}>
        <span style={styles.emoji}>🏴‍☠️</span> Pirate's Private LOVE{" "}
        <span style={styles.emoji}>🏴‍☠️</span>
      </h1>
      <h2 style={styles.title}>Privacy Policy</h2>
      <p style={styles.date}>Last Updated: July 30, 2025</p>

      <section>
        <h2 style={styles.heading}>1. About the Story</h2>
        <p style={styles.text}>
          Pirate's Private LOVE is a fictional tale about MABH, a pirate navigating emotional tides. While the journey is deep and imaginative, your privacy in the real world remains safe.
        </p>
      </section>

      <section>
        <h2 style={styles.heading}>2. Information We Collect</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>✅ Device information (browser, OS, resolution)</li>
          <li style={styles.listItem}>✅ Anonymous usage stats (page visits, time, clicks)</li>
          <li style={styles.listItem}>✅ Voluntary feedback or form inputs</li>
        </ul>
        <p style={styles.text}>
          We don’t ask for personal info unless you choose to share it.
        </p>
      </section>

      <section>
        <h2 style={styles.heading}>3. How We Use Your Data</h2>
        <p style={styles.text}>
          Data helps us improve the storytelling and fix bugs. We never sell or share your data with anyone.
        </p>
      </section>

      <section>
        <h2 style={styles.heading}>4. Cookies</h2>
        <p style={styles.text}>
          We use cookies to personalize your reading experience. You can disable them in your browser settings.
        </p>
      </section>

      <section>
        <h2 style={styles.heading}>5. Children’s Privacy</h2>
        <p style={styles.text}>
          This content is recommended for users aged 13+. We don’t knowingly collect data from children.
        </p>
      </section>

      <section>
        <h2 style={styles.heading}>6. Security</h2>
        <p style={styles.text}>
          All data is secured using modern protocols. While no system is perfect, we strive to keep your information safe—just like MABH guarding his treasure.
        </p>
      </section>

      <section>
        <h2 style={styles.heading}>7. Third-Party Links</h2>
        <p style={styles.text}>
          Our story may reference or link to external content. We are not responsible for their practices.
        </p>
      </section>

      <section>
        <h2 style={styles.heading}>8. Policy Changes</h2>
        <p style={styles.text}>
          Our privacy approach may evolve—just like MABH. Updates will be posted here with the latest date.
        </p>
      </section>

      <section>
        <h2 style={styles.heading}>9. Contact Us</h2>
        <p style={styles.text}>
          Have feedback or privacy concerns? Contact us at:{" "}
          <a href="mailto:shubziverse@gmail.com">shubziverse@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "1.5rem",
    fontFamily: "Georgia, serif",
    background: "#fff8f2",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    color: "#333",
    lineHeight: 1.6,
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  emoji: {
    margin: "0 0.25rem",
  },
  date: {
    color: "#666",
    fontSize: "0.9rem",
    marginBottom: "1rem",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.25rem",
    marginTop: "1.5rem",
    color: "#222",
  },
  text: {
    marginBottom: "1rem",
  },
  list: {
    paddingLeft: "0",
    listStyleType: "none",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  listItem: {
    marginBottom: "0.5rem",
  },
};

export default PrivacyPolicy;
