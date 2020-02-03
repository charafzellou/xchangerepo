import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";
import Body from "./components/Body";
import './App.css';

function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Header name={user}/>
        <Body trigger={setUser}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
