import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import { loadState, saveState } from './reducers/localStorage'

const persistedState = loadState()

const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
  saveState({
    posts: store.getState().posts
  })
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

serviceWorker.unregister()

