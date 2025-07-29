import './App.css';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  const handle = useFullScreenHandle();
                                                                                            
  return (
    <div className="App">

      <button onClick={handle.enter} className='floating-button'>
        ⛶
      </button>

      <FullScreen handle={handle}>
        <iframe src="https://drive.google.com/file/d/1UmhdNlNSTZbpZ4v-Z6l4gMWL68eGZvtu/preview" 
        style={{height:"99.47vh",width:"100vw"}} title='Pirate Private LOVE [ bit.ly/shubzPPL1 ]'/>
      </FullScreen>
    </div>
  );
}

export default App;