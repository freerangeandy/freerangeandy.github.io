import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Andy Lee</h1>
      </Fragment>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
