import React, { Component } from 'react'
import { AppContextProvider } from './context'
import Lista from './components/Lista'

class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <Lista />
      </AppContextProvider>
    )
  }
}

export default App;
