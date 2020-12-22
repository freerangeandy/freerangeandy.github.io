import React from 'react'
import {
  Segment,
  Card
} from 'semantic-ui-react'
import Project from './Project'

const ProjectSection = (props) => {
  const cellBlocksPNG = require('../../assets/screenshots/cell_blocks.png')
  const flippiePNG = require('../../assets/screenshots/flippie_bird.png')
  const gameReviewPNG = require('../../assets/screenshots/game_review_hero.png')
  const mycalcPNG = require('../../assets/screenshots/mycalculator.png')
  const tabLoomPNG = require('../../assets/screenshots/tab_loom.png')
  const ffRealityPNG = require('../../assets/screenshots/ff_reality.png')
  const weatherPNG = require('../../assets/screenshots/many_city_weather.png')

  return (
    <Segment
      vertical
      inverted
      color="violet"
      style={{ padding: '0 10%' }}
    >
      <h2 style={{ textAlign:'center', paddingTop:'1em' }}>Projects</h2>
      <Card.Group itemsPerRow={3}>
        <Project
          name="Tab Loom"
          description="Virtual sketchbook for creating guitar tablature"
          screenshot={tabLoomPNG}
          siteurl="https://tab-loom.herokuapp.com/"
          gitrepo="https://github.com/freerangeandy/tab-loom"
          labels={["JavaScript","React","Ruby on Rails","PostgreSQL","Sass","API"]}
        />
        <Project
          name="Game Review Hero"
          description="Social website for users to post reviews for video games"
          screenshot={gameReviewPNG}
          siteurl="https://gamereviewhero.herokuapp.com/"
          gitrepo="https://github.com/freerangeandy/video-game-reviews"
          labels={["JavaScript","React","Ruby on Rails","PostgreSQL","Team project"]}
        />
        <Project
          name="MyCalculator"
          description="Scientific calculator with media-responsive layout"
          screenshot={mycalcPNG}
          siteurl="https://my-calculator-d4e79.firebaseapp.com/"
          gitrepo="https://github.com/freerangeandy/mycalculator"
          labels={["JavaScript","React","MaterialUI","Responsive"]}
        />
        <Project
          name="Many City Weather"
          description="Hourly weather forecast comparison between cities"
          screenshot={weatherPNG}
          siteurl="https://freerangeandy.github.io/many-city-weather/"
          gitrepo="https://github.com/freerangeandy/many-city-weather"
          labels={["JavaScript","React","API","Hackathon"]}
        />
        <Project
          name="Flippie Bird"
          description="Arcade game inspired by Flappy Bird"
          screenshot={flippiePNG}
          siteurl="https://freerangeandy.github.io/flippie-bird/"
          gitrepo="https://github.com/freerangeandy/flippie-bird/"
          labels={["JavaScript","PhaserJS","Game","Hackathon"]}
        />
        <Project
          name="Cell Blocks"
          description="Cellular automata sandbox (Conway's Game of Life)"
          screenshot={cellBlocksPNG}
          siteurl="https://freerangeandy.github.io/cell-blocks/"
          gitrepo="https://github.com/freerangeandy/cell-blocks"
          labels={["JavaScript","HTML5"]}
        />
        <Project
          name="Fantasy Football Reality 2020"
          description="Compare weekly fantasy football projections vs. actual results"
          screenshot={ffRealityPNG}
          siteurl="https://ff-reality.herokuapp.com/"
          gitrepo="https://github.com/freerangeandy/ff-reality"
          labels={["Python","Flask","pandas","Web-scraping"]}
        />
      </Card.Group>
    </Segment>
  )
}

export default ProjectSection
