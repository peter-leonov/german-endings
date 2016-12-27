import { ARTICLE_CHOSEN } from '../actions'
import words from './words.json'

words.sort(() => Math.random() > 0.5)
words.reduce((acc, word) => ((word.id = acc++, acc)), 0)

const articleChosen = (state, {id, article}) => (
  state.map(word => (
    word.id == id
      ? {...word, chosen: article, ok: word.article == article}
      : word
  ))
)

export default (state = words, {type, payload}) => {
  switch (type) {
    case ARTICLE_CHOSEN:
      return articleChosen(state, payload)
    default:
      return state
  }
}
