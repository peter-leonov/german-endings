import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import './index.css'
import reducer from './reducers'

const store = createStore(reducer)
const dispatch = type => payload => () => store.dispatch({type, payload})
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <App state={store.getState()} dispatch={dispatch} />,
  rootEl
)

render()
store.subscribe(render)
