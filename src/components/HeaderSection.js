import React from 'react'
import {
  Segment,
  Container,
  Menu,
  Button
} from 'semantic-ui-react'

const HeaderSection = (props) => {
  const pdfFile = require('../../assets/cv.pdf')

  return (
    <Segment vertical inverted color="violet">
      <Menu inverted color="violet" size="large">
        <Container>
          <Menu.Item as="a">About Me</Menu.Item>
          <Menu.Item as="a">Experience</Menu.Item>
          <Menu.Item as="a">Projects</Menu.Item>
          <Menu.Item position="right">
            <Button as="a">
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
  )
}

export default HeaderSection
