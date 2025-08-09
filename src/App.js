import './App.css';
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import Navbar from './Navbar';
import { useEffect } from 'react';

function ScrollControl({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [location]);

  return children;
}

function App() {
  return (
    <Router>
      <ScrollControl>
        <div className="App">
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <iframe
                    src="https://drive.google.com/file/d/1UmhdNlNSTZbpZ4v-Z6l4gMWL68eGZvtu/preview"
                    style={{ height: "93vh", width: "100vw", border: "none" }}
                    title="Pirate Private LOVE [ bit.ly/shubzPPL1 ]"
                  />
                }
              />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </div>

          {/* Navbar now at the bottom */}
          <Navbar />
        </div>
      </ScrollControl>
    </Router>
  );
}

export default App;
