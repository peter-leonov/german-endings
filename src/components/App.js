import React from 'react';
import { ARTICLE_CHOSEN } from '../actions'
import { Words } from './Words';
import './App.css';

const App = ({state, dispatch}) => (
  <div className="App">
    <h2 className="App-header">German grammar A1 trainer</h2>
    <div className="Content">
    <Words words={state} onChosen={dispatch(ARTICLE_CHOSEN)}/>
    </div>
  </div>
)

export default App;
