import React from 'react'
import {
  Segment,
  Card
} from 'semantic-ui-react'
import Project from './Project'

const ProjectSection = (props) => {
  return (
    <Segment
      vertical
      style={{ margin: '0 10%' }}
    >
      <h3>Projects</h3>
      <Card.Group itemsPerRow={3}>
        <Project
          name="Tab Loom"
          description="Virtual sketchbook for creating guitar tablature"
          siteurl="https://tab-loom.herokuapp.com/"
          gitrepo="https://github.com/freerangeandy/tab-loom"
        />
        <Project
          name="MyCalculator"
          description="Scientific Calculator with media-responsive layout"
          siteurl="https://my-calculator-d4e79.firebaseapp.com/"
          gitrepo="https://github.com/freerangeandy/mycalculator"
        />
        <Project
          name="Many City Weather"
          description="Hourly weather forecast comparison between cities"
          siteurl="https://freerangeandy.github.io/many-city-weather/"
          gitrepo="https://github.com/freerangeandy/many-city-weather"
        />
        <Project
          name="Flippie Bird"
          description="Arcade game inspired by Flappy Bird"
          siteurl="https://freerangeandy.github.io/flippie-bird/"
          gitrepo="https://github.com/freerangeandy/flippie-bird/"
        />
        <Project
          name="Cell Blocks"
          description="Cellular automata sandbox (Conway's Game of Life)"
          siteurl="https://freerangeandy.github.io/cell-blocks/"
          gitrepo="https://github.com/freerangeandy/cell-blocks"
        />
        <Project
          name="Fantasy Football Reality 2020"
          description="Compare weekly fantasy football projections vs. actual results"
          siteurl="https://ff-reality.herokuapp.com/"
          gitrepo="https://github.com/freerangeandy/ff-reality"
        />
      </Card.Group>
    </Segment>
  )
}

export default ProjectSection
