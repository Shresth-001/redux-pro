import React from 'react'
import { TodoApp } from './components'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
function App() {
  return (
    <Provider store={store}>
      <TodoApp/>
    </Provider>
    
  )
}

export default App