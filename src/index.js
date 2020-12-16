import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <h1>Andy Lee</h1>
          <p>I'm a recent graduate of the Launch Academy boot camp with 7 years of prior software development experience - and a few years as a high school teacher sandwiched in-between. My favorite coding hobbies are building single-page web apps in JavaScript, trying out new 3rd-party APIs or libraries, and taking online courses in a new language.</p>
        </section>
        <address>
          <a href="mailto:andy_lee@alum.mit.edu">Email</a><br />
          <a href="https://www.linkedin.com/in/andrew-lee-1701d/">LinkedIn</a>
        </address>
      </Fragment>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
