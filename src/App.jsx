import { useState } from "react";
import './App.css'

function App() {
  const [viewMode, setViewMode] = useState("online"); // "online" | "local"

  const onlineLink = import.meta.env.VITE_GOOGLE_DRIVE_PPL;

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
  )
}

export default App
