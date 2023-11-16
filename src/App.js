//import logo from './logo.svg';
import React from 'react';
//import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from "./components/HeroSection/Hero";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React AkM 2000
        </a> */}
        <Navbar />
        <HeroSection />
      </header>
    </div>
    // <>
    // <Navbar />
    // </>
  );
}

export default App;
