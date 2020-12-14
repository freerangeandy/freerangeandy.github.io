import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h2>Hi</h2>
      </Fragment>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
