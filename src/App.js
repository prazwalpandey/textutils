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
    {/* <div className="container" mode={mode}>
    <Textform title="Text Box" mode={mode} warning="Enter the text in the box below."/>
    </div> */}
    <div className="container" style={{flex:"1"}}>
      <Aboutus/>
    </div>
    </div>
  );
}

export default App;
