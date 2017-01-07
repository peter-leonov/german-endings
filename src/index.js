import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import './index.css'
import reducer from './reducers'

const store = createStore(reducer)
const dispatch = type => payload => () => store.dispatch({type, payload})
const rootEl = document.getElementById('root')
const stateToViewModel = state => state

const render = () => ReactDOM.render(
  <App model={stateToViewModel(store.getState())} dispatch={dispatch} />,
  rootEl
)

render()
store.subscribe(render)
