import React from 'react';
import './Words.css';

function mapOkToClassName (ok) {
  if (ok === true)
    return 'Words-word is-right'
  if (ok === false)
    return 'Words-word is-wrong'
  return ''
}

function chosenClass (chosen, article) {
  if (chosen == article)
    return 'Words-article is-chosen'
  else
    return 'Words-article'
}

const renderWord = onChosen => word => {
  return (
    <tr key={word.id} className={mapOkToClassName(word.ok)}>
    <td>{word.text}</td>
    <td className={chosenClass(word.chosen, 'der')} onClick={onChosen({id: word.id, article: 'der'})}>der</td>
    <td className={chosenClass(word.chosen, 'die')} onClick={onChosen({id: word.id, article: 'die'})}>die</td>
    <td className={chosenClass(word.chosen, 'das')} onClick={onChosen({id: word.id, article: 'das'})}>das</td>
    </tr>
  )
}

// 1. окончания
// 2. штук по двадцать
// 3. галочка для выделения окончаний

export const Words = ({onChosen, words}) => (
  <table className="Words"><tbody>
  <tr>
    <th>Word</th>
    <th>der</th>
    <th>die</th>
    <th>das</th>
  </tr>
  { words.map(renderWord(onChosen)) }
  </tbody></table>
)
