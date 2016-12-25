import React from 'react';
import './App.css';


function mapOkToClassName (ok) {
  if (ok === true)
    return 'Words-word is-right'
  if (ok === false)
    return 'Words-word is-wrong'
  return ''
}

const renderWord = chosen => word => {
  return (
    <tr key={word.id} className={mapOkToClassName(word.ok)}>
    <td>{word.text}</td>
    <td className="Words-article" onClick={() => chosen(word.id, 'der')}>der</td>
    <td className="Words-article" onClick={() => chosen(word.id, 'die')}>die</td>
    <td className="Words-article" onClick={() => chosen(word.id, 'das')}>das</td>
    </tr>
  )
}

const App = ({words, chosen}) => (
  <div className="App">
    <h2 className="App-header">German endings trainer</h2>
    <div className="Content">
      <table className="Words"><tbody>
      <tr>
        <th>Word</th>
        <th>der</th>
        <th>die</th>
        <th>das</th>
      </tr>
      { words.map(renderWord(chosen)) }
      </tbody></table>
    </div>
  </div>
)

export default App;
