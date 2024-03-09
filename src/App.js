import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container">
    <Textform title="Text Box" warning="Enter the text in the box below."/>
    </div>
    </>
  );
}

export default App;
