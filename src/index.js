import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import words from './words.json'

words.sort(() => Math.random() > 0.5)

words.reduce((acc, word) => ((word.id = acc++, acc)), 0)

function chosen (id, article) {
  const word = words[id]
  word.ok = word.article == article
  render(words)
}
render(words)

function render (words) {
  ReactDOM.render(
    <App words={words} chosen={chosen} />,
    document.getElementById('root')
  )
}
