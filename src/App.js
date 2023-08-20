// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [isFullScreen, setIsFullScreen] = useState(false);

//   const toggleFullScreen = () => {
//     if (!document.fullscreenElement) {
//       document.documentElement.requestFullscreen().catch(err => {
//         console.log(`Error attempting to enable full-screen mode: ${err.message}`);
//       });
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       }
//     }
//     setIsFullScreen(!isFullScreen);
//   };

//   return (
//     <div className="App">
//       <div className="content">
//       <iframe src="https://drive.google.com/file/d/1D-6-XvSdEII76LW9O1iBLh4Iz2SrWHce/preview" 
//          style={{height:"100vh",width:"100vw"}}/>
//       </div>
//       <button className="floating-button" onClick={toggleFullScreen}>
//         {isFullScreen ? '+' : '⛶'}
//       </button>
//     </div>
//   );
// }

// export default App;

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