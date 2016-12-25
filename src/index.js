import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const words = [
  {article: 'die', text: 'Uhrzeit'},
  {article: 'die', text: 'Sekunde'},
  {article: 'die', text: 'Minute'},
  {article: 'die', text: 'Stunde'},
  {article: 'der', text: 'Tag'},
  {article: 'die', text: 'Woche'},
  {article: 'das', text: 'Jahr'},
  {article: 'der', text: 'Wochentag'},
  {article: 'der', text: 'Sonntag'},
  {article: 'der', text: 'Montag'},
  {article: 'der', text: 'Dienstag'},
  {article: 'der', text: 'Mittwoch'},
  {article: 'der', text: 'Donnerstag'},
]

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
