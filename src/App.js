import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  console.log(data.length);
  useEffect(() => {
    axios.get("http://localhost:2121/todo").then(res => res.data).then((result) => {
      setData(result);
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
      {/* </header> */}
      {data.length > 0 && data.map(item => (
        <div>Todo: {item.todo}</div>
      ))}
    </div>
  );
}

export default App;
