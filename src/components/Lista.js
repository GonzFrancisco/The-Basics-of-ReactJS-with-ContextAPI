import React, { Component, Fragment } from 'react'
import { AppContext } from '../context'

class Lista extends Component {
  render() {

    const { titulo, usuarios } = this.context;

    return (
      <Fragment>
        <h2>{ titulo }</h2>
        <ul>
          {usuarios.map(u => <li> {u} </li>)}
        </ul>              
      </Fragment>
    );
  }
}

Lista.contextType = AppContext;
export default Lista;