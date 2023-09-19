// src/App.js
import React from 'react';
import './App.css';
import PollForm from './TopicForm';
import logo from './topicladder.png'; // Import the logo image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" /> {/* Display the logo */}
        
        <PollForm />
      </header>
    </div>
  );
}

export default App;
