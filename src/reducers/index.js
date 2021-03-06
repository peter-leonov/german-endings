import { groupBy, prop, any } from 'ramda'
import md5 from 'js-md5'
import { endsWith } from '../lib/endsWith'
import { ARTICLE_CHOSEN } from '../actions'
import srcWords from './words.json'
import endings from './endings.json'

const byArticle = groupBy(prop('article'), endings)

const words = srcWords.filter(word => any(ending => endsWith(word.text, ending.text), byArticle[word.article]))

words.sort(word => md5(word.text))
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
