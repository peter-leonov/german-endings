import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { splitEvery, sortBy, prop, map } from 'ramda'
import App from './components/App'
import './index.css'
import reducer from './reducers'

const store = createStore(reducer)
const dispatch = type => payload => () => store.dispatch({type, payload})
const rootEl = document.getElementById('root')
const stateToViewModel = words => {
  const groups = map(sortBy(prop('random')), splitEvery(20, words))
  groups.forEach((group, i) => group.id = i)
  return groups
}

const render = () => ReactDOM.render(
  <App groups={stateToViewModel(store.getState())} dispatch={dispatch} />,
  rootEl
)

render()
store.subscribe(render)
