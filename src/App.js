import './App.css';
import React from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  const handle = useFullScreenHandle();

  return (
    <div className="App">

      <button onClick={handle.enter} className='floating-button'>
        ⛶
      </button>

      <FullScreen handle={handle}>
        <iframe src="https://drive.google.com/file/d/1D-6-XvSdEII76LW9O1iBLh4Iz2SrWHce/preview" 
        style={{height:"100vh",width:"100vw"}} title='PDF'/>
      </FullScreen>
    </div>
  );
}

export default App;