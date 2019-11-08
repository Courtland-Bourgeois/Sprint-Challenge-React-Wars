import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import People from './components/People';
import Styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        // console.log(response);
        setData(response.data.results)
      })
      .catch(error => {
        console.log('Oops', error);
      })
  },[]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map(person => <People key={person.name} person={person} />)}
    </div>
  );
}

export default App;
