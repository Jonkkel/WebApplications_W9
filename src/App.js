import logo from './logo.svg';
import './App.css';
import MyContainer from './components/MyContainer.js';
import MyList from "./components/MyList";

function App() {
  return (
    <div className="App">
      <MyList 
      header="Really epic list component"
      items = {[ 
        {id: "1", text: "this is an item"},
        {id: "2", text: "this is also an item"},
      ]}/>
    </div>
  );
}

export default App;
