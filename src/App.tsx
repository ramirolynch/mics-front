import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { Venues } from './Components/Venues';
import { MicsContext } from './Context/MicsContext';
import { LogIn } from './Components/LogIn';

function App() {
  const { loggedusers } = useContext(MicsContext)

  
  return (
    <div className="App">

      {loggedusers === true ? <Venues></Venues> : <LogIn></LogIn>} 

    </div>
  );
}

export default App;
