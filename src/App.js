import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import MyContainer from './components/MyContainer.js';
import MyList from './components/MyList.js';

function App() {

  return (
    <div className="App">
      <h1>Hello world</h1>
      <MyContainer/>
    </div>
  );
}

export default App;
