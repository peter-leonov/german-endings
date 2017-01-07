import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { splitEvery, sortBy, prop, map, addIndex } from 'ramda'
import App from './components/App'
import './index.css'
import reducer from './reducers'

const store = createStore(reducer)
const dispatch = type => payload => () => store.dispatch({type, payload})
const rootEl = document.getElementById('root')

const sortByRandom = sortBy(prop('random'))
const sliceToGroup = (slice, id) => ({words: sortByRandom(slice), id})
const wordsToGroups = words => addIndex(map)(sliceToGroup, splitEvery(20, words))

const stateToViewModel = ({words, endings}) => ({
  groups: wordsToGroups(words),
  endings
})

const render = () => ReactDOM.render(
  <App model={stateToViewModel(store.getState())} dispatch={dispatch} />,
  rootEl
)

render()
store.subscribe(render)
