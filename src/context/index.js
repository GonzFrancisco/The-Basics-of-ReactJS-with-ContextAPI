import React, { Component } from 'react'
import { initialState } from './InitialState'

export const AppContext = React.createContext();

export class AppContextProvider extends Component {
  render() {
    return (
      <AppContext.Provider value={initialState}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export const AppContextConsumer = AppContext.Consumer;
