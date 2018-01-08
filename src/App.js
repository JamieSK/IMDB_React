import React, { Component } from 'react';
import ShowtimesContainer from './components/showtimesContainer';
import './App.css';

class App extends Component {
  render() {
    const films = ['Sausage Party', 'Café Society', 'Morgan',
    'The 9th Life of Louis Drax', 'Naa Hal Akira', 'Equity', 'Things to Come'];
    return (
      <ShowtimesContainer data={films}/>
    );
  }
}

export default App;
