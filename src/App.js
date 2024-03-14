import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Aboutus from './components/Aboutus';

function App() {
  const [mode,setMode] = useState(true);
  const toggleMode=()=>{
    setMode(!mode)
  }
  return (
    <div id="root" style={{ background: !mode ? "#5c5b5e" : "#ffffff" }}>
    <Navbar title="TextUtils" style={{flex:"0 0 20%"}} mode={mode} toggleMode={toggleMode}/>
    {/* <div className="container">
    <Textform title="Text Box" mode={mode} warning="Enter the text in the box below."/>
    </div> */}
    <div className="container" style={{ display: "flex", justifyContent: "center",flex:"1",marginTop:"7vh" }}>
      <Aboutus mode={mode}/>
    </div>
    </div>
  );
}

export default App;
