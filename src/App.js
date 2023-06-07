import './App.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      
      <NavBar/>

      <ItemListContainer greeting = {"Hola gente"}/>

    </div>
  );
}

export default App;
