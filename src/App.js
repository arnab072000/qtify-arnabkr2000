//import logo from './logo.svg';
import React from 'react';
import axios from 'axios';
//import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from "./components/HeroSection/Hero";
import Section from "./components/Section/Section";
import { useState,useEffect } from 'react';

const ENDPOINT = 'https://qtify-backend-labs.crio.do/';

function App() {

  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`)
    .then(({data}) =>{
       setTopAlbums(data)
    })
    axios.get(`${ENDPOINT}albums/new`)
    .then(({data}) =>{
       setNewAlbums(data)
    })
  }, [])

  return (
     <div className="App">
       <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React AkM 2000
    //     </a> */}
         <Navbar />
         <HeroSection />
         <Section  title='Top Albums' data={topAlbums}/>
         <Section  title='New Albums' data={newAlbums}/>
       </header>
     </div>
    // <>
    // <Navbar />
    // <HeroSection />
    // <Section  title='Top Albums' data={topAlbums}/>
    // <Section  title='New Albums' data={newAlbums}/>
    // </>
  );
}

export default App;
