import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './src/reducers'
import Screen from './src/screen1'

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
))

const App = () => {
  return (
    <Provider store={store}>
      <Screen/>
    </Provider>
  )
}

export default App;