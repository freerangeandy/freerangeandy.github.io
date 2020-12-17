import React, { Fragment } from 'react'
import {
  Segment,
  Grid
} from 'semantic-ui-react'

const App = (props) => {
  const pdfFile = require('../assets/cv.pdf')

  return (
    <Fragment>
    <Segment vertical>
      <section id="about">
        <h1>Andy Lee</h1>
        <p>I'm a recent graduate of the Launch Academy boot camp with 7 years of prior software development experience - and a few years as a high school teacher sandwiched in-between. My favorite coding hobbies are building single-page web apps in JavaScript, trying out new 3rd-party APIs or libraries, and taking online courses in a new language.</p>
        <a href={pdfFile} target="blank">CV</a>
      </section>
    </Segment>
    <Segment vertical>
      <section id="experience">
        <h3>Experience</h3>
      </section>
    </Segment>
    <Segment vertical>
      <section id="projects">
        <h3>Projects</h3>
        <article>
          <h4>Tab Loom</h4>
          <p>Virtual sketchbook for creating guitar tablature</p>
          <a href="https://tab-loom.herokuapp.com/">Live</a>&nbsp;
          <a href="https://github.com/freerangeandy/tab-loom">GitHub</a>
        </article>
        <article>
          <h4>MyCalculator</h4>
          <p>Scientific Calculator with media-responsive layout</p>
          <a href="https://my-calculator-d4e79.firebaseapp.com/">Live</a>&nbsp;
          <a href="https://github.com/freerangeandy/mycalculator">GitHub</a>
        </article>
        <article>
          <h4>Many City Weather</h4>
          <p>Hourly weather forecast comparison between cities</p>
          <a href="https://freerangeandy.github.io/many-city-weather/">Live</a>&nbsp;
          <a href="https://github.com/freerangeandy/many-city-weather">GitHub</a>
        </article>
        <article>
          <h4>Flippie Bird</h4>
          <p>Arcade game inspired by Flappy Bird</p>
          <a href="https://freerangeandy.github.io/flippie-bird/">Live</a>&nbsp;
          <a href="https://github.com/freerangeandy/flippie-bird/">GitHub</a>
        </article>
        <article>
          <h4>Cell Blocks</h4>
          <p>Cellular automata sandbox (Conway's Game of Life)</p>
          <a href="https://freerangeandy.github.io/cell-blocks/">Live</a>&nbsp;
          <a href="https://github.com/freerangeandy/cell-blocks">GitHub</a>
        </article>
        <article>
          <h4>Fantasy Football Reality 2020</h4>
          <p>Compare weekly fantasy football projections vs. actual results</p>
          <a href="https://ff-reality.herokuapp.com/">Live</a>&nbsp;
          <a href="https://github.com/freerangeandy/ff-reality">GitHub</a>
        </article>
      </section>
    </Segment>
    <Segment vertical>
      <address id="contact">
        <h3>Contact</h3>
        <a href="mailto:andy_lee@alum.mit.edu">Email</a><br />
        <a href="https://www.linkedin.com/in/andrew-lee-1701d/">LinkedIn</a>
      </address>
    </Segment>
    </Fragment>
  )
}

export default App
