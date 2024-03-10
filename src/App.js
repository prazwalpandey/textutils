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
    <div className="flex flex-col justify-center" style={{width:"100vw",height:"auto",background:"#46444B"}}>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container h-full" style={{overflowY:"auto",height:"containerHeight"}}>
    <Textform title="Text Box" mode={mode} warning="Enter the text in the box below."/>
    </div>
    </div>
  );
}

export default App;
