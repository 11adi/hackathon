import React from 'react';
import './App.css';
import Faq from './components/Faq';
import Timeline from './components/Timeline';
function App() {
  return (
    <div className="App" style={{backgroundColor:'black'}}>
     <Timeline/>
     <Faq/>
    </div>
  );
}

export default App;
