import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#00115E';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
    }
  }
  return (
    <>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <div className="container my-3">
       <TextForm heading="Enter the text to analyze: " mode={mode}/>
    </div>
     {/* <div className="container my-4">
     <About/>
     </div> */}
     
    </>
  );
}

export default App;