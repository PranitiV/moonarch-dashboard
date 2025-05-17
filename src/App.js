import React, {useState} from 'react';
import './App.css';
import '../src/components/Charts'
import Charts from '../src/components/Charts';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {

  const [isOpen, setIsOpen] = useState(null); 

  const toggle = () => {
    setIsOpen(!isOpen); 
  }
  return (
    <div className="App">
      <Header toggle={toggle}/> 
      <Sidebar isOpen ={isOpen} /> 
      <Charts /> 
    </div>
  );
}

export default App;
