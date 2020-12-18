import React, { useState } from 'react'
import {
  Visibility,
  Segment,
  Container,
  Menu,
  Button
} from 'semantic-ui-react'

const HeaderSection = (props) => {
  const [fixed, setFixed] = useState(false)
  const pdfFile = require('../../assets/cv.pdf')

  return (
    <Visibility
      once={false}
      onBottomPassed={() => setFixed(true)}
      onBottomPassedReverse={() => setFixed(false)}
    >
      <Segment
        vertical
        inverted
        color="violet"
        style={{ minHeight: 400, padding: '0 0 1em 0'}}
      >
        <Menu
          fixed={fixed ? "top" : null}
          inverted={!fixed}
          secondary={!fixed}
          pointing={!fixed}
          size="large"
        >
          <Container>
            <Menu.Item as="a" active>About Me</Menu.Item>
            <Menu.Item as="a">Experience</Menu.Item>
            <Menu.Item as="a">Projects</Menu.Item>
            <Menu.Item position="right">
              <Button as="a" inverted={!fixed}>
                Resumé
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
        <Container text>
          <h1>Andy Lee</h1>
          <p>I'm a recent graduate of the Launch Academy boot camp with 7 years of prior software development experience - and a few years as a high school teacher sandwiched in-between. My favorite coding hobbies are building single-page web apps in JavaScript, trying out new 3rd-party APIs or libraries, and taking online courses in a new language.</p>
          <a href={pdfFile} target="blank">CV</a>
        </Container>
      </Segment>
    </Visibility>
  )
}

export default HeaderSection
