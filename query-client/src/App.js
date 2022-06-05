import {React,useState} from 'react';
import './App.css';
import Adder from './Adder';
import Shower from './Shower';

function App() {

  const [update,setUpdate] = useState(0);
  return (
    <div className="App">
      <div className="header">User Query Checker</div>
      <div className="usersbox">
        <Adder updater={[update,setUpdate]} />
        <Shower updater={[update,setUpdate]} />
      </div>
    </div>
  );
}

export default App;
