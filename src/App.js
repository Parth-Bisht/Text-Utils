import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform'
import React from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode]=React.useState('light');
  const [d,setD]=React.useState('Enable Dark Mode');
  const [alert,setalert]=React.useState(null)

  const showalert = (message,state)=>{
      setalert({
        msg:message,
        state:state
      })

      setTimeout(() => {
        setalert(null)
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='dark'){
      setMode('light');
      setD('Enable Dark Mode');
      showalert('Light mode enabled',"success")
      document.body.style.backgroundColor="white";
      document.body.style.color="#212529";
    }
    else{
      setMode('dark');
      setD('Enable Light Mode')
      showalert('Dark mode enabled',"success")
      document.body.style.backgroundColor="#343a40";
      document.body.style.color="white";
    }
  }
  return (
 <>
 <Router>
    <Navbar title="TxtUtils" mode={mode} toggleMode={toggleMode} dark={d} />
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Textform mode={mode} showalert={showalert} heading="Enter Text for analize below"/>} />
        <Route exact path="about/" element={<About mode={mode} />} />
      </Routes>          
    </div>
    </Router>
 </>
  );
}

export default App;
