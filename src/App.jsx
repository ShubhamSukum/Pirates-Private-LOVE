import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import "./App.css";

function App() {
  const onlineLink = import.meta.env.VITE_GOOGLE_DRIVE_PPL;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    ReactGA.initialize("G-96PQNX1NNN");
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });

    // 🔥 Route-based body class for mobile navbar behavior
    document.body.classList.remove("mobile-story", "mobile-privacy");

    if (location.pathname === "/") {
      document.body.classList.add("mobile-story");
    } else if (location.pathname === "/privacy") {
      document.body.classList.add("mobile-privacy");
    }
  }, [location]);

  const isStory = location.pathname === "/";
  const isPrivacy = location.pathname === "/privacy";

  return (
    <div className="ppl-container">
      {/* NAVBAR */}
      <div className="ppl-buttons">
        <button
          className={isStory ? "active" : ""}
          onClick={() => navigate("/")}
        >
          Story
        </button>

        <button
          className={isPrivacy ? "active" : ""}
          onClick={() => navigate("/privacy")}
        >
          Privacy Policy
        </button>
      </div>

      {/* CONTENT */}
      <div className="pdf-container">
        <Routes>
          {/* STORY */}
          <Route
            path="/"
            element={
              <iframe
                src={onlineLink}
                className="pdf-iframe"
                title="Pirate’s Private LOVE"
                sandbox="allow-same-origin allow-scripts allow-forms"
                allow="fullscreen"
              />
            }
          />

          {/* PRIVACY */}
          <Route
            path="/privacy"
            element={
              <div className="privacy-page-container">
                <div className="privacy-content">
                  <h1>Privacy Policy for Pirate’s Private LOVE</h1>

                  <p className="intro-text">
                    <strong>Last Updated:</strong> January 2025
                  </p>

                  <h2>1. Information We Collect</h2>

                  <h3>1.1 Personal Information</h3>
                  <p>
                    Pirate’s Private Love (“PPL”) does not collect personal
                    information such as your name, email, phone number,
                    contacts, or stored files.
                  </p>

                  <h3>1.2 Automatically Collected Information</h3>
                  <ul>
                    <li>Device & OS info</li>
                    <li>Browser details</li>
                    <li>Usage analytics</li>
                    <li>Crash logs</li>
                  </ul>

                  <h2>2. Third-Party Services</h2>
                  <p>Google Analytics (GA4), Google Drive Viewer</p>

                  <h2>3. How We Use Information</h2>
                  <ul>
                    <li>Improve app performance</li>
                    <li>Fix bugs</li>
                    <li>Enhance user experience</li>
                    <li>Ensure stability and security</li>
                  </ul>

                  <h2>4. Contact Us</h2>
                  <p>
                    Email: shubziverse@gmail.com <br />
                    Website: bit.ly/shubzPPL1
                  </p>

                  <p className="footer-text">
                    © {new Date().getFullYear()} Pirate’s Private LOVE.
                  </p>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
