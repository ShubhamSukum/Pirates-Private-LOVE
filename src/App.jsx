import { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import "./App.css";

function App() {
  const [viewMode, setViewMode] = useState("online"); // "online" | "local"
  const onlineLink = import.meta.env.VITE_GOOGLE_DRIVE_PPL;

  useEffect(() => {
    ReactGA.initialize("G-96PQNX1NNN");
    ReactGA.send("pageview");
  }, []);

  return (
    <>
      <div className="ppl-container">
        <div className="ppl-buttons">
          <button
            onClick={() => setViewMode("online")}
            className={viewMode === "online" ? "active" : ""}
          >
            Story
          </button>
        </div>

        <div className="pdf-container">
          <iframe
            src={onlineLink}
            className="pdf-iframe"
            title="Pirate Private LOVE [ bit.ly/shubzPPL1 ]"
            sandbox="allow-same-origin allow-scripts allow-forms"
            allow="fullscreen"
          />
        </div>
      </div>
    </>
  );
}

export default App;
