import React from 'react';
import { Words } from './Words';
import './App.css';

const App = ({state, chosen}) => (
  <div className="App">
    <h2 className="App-header">German grammar A1 trainer</h2>
    <div className="Content">
    <Words words={state.words} chosen={chosen}/>
    </div>
  </div>
)

export default App;
