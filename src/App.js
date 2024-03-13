import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode,setMode] = useState(true);
  const toggleMode=()=>{
    setMode(!mode)
  }
  return (
    <div id="root" style={{ background: !mode ? "#5c5b5e" : "#ffffff" }}>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container" mode={mode}>
    <Textform title="Text Box" mode={mode} warning="Enter the text in the box below."/>
    </div>
    </div>
  );
}

export default App;
