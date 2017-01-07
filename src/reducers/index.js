import { ARTICLE_CHOSEN } from '../actions'
import words from './words.json'
import endings from './endings.json'

words.sort(() => Math.random() > 0.5)
words.reduce((acc, word) => {
  word.id = acc++
  word.random = Math.random()
  return acc
}, 0)

const articleChosen = (state, {id, article}) => (
  state.map(word => (
    word.id == id
      ? {...word, chosen: article, ok: word.article == article}
      : word
  ))
)

export default (state = {words, endings}, {type, payload}) => {
  switch (type) {
    case ARTICLE_CHOSEN:
      return {...state, words: articleChosen(state.words, payload)}
    default:
      return state
  }
}
