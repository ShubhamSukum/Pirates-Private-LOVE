import './App.css';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import Navbar from './Navbar';

function App() {
  const handle = useFullScreenHandle();

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <button onClick={handle.enter} className="floating-button">⛶</button>
                <FullScreen handle={handle}>
                  <iframe
                    src="https://drive.google.com/file/d/1UmhdNlNSTZbpZ4v-Z6l4gMWL68eGZvtu/preview"
                    style={{ height: "99vh", width: "100vw", border: "none" }}
                    title="Pirate Private LOVE [ bit.ly/shubzPPL1 ]"
                  />
                </FullScreen>
              </>
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;