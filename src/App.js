import React from 'react';
import logo from './logo.svg';
import './App.css';
// import components below this comment
import Tweet from './components/Tweet';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>The Power of Props and States in React</h1>
      <p>This React application is using 3 states withen a single component on three buttons. 
          Props are also being used while mapping through an array of objects and rendering its information onto another component.</p>
      <h3 className='subtitle_white'>White = increment by 1 <br></br>Red = increment by 5</h3>
      <Tweet/>
       
        
      </header>
    </div>
  );
}

export default App;
