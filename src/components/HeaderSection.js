import React, { useState } from 'react'
import {
  Visibility,
  Segment,
  Container,
  Menu,
  Button,
  Ref
} from 'semantic-ui-react'
import AboutMeSection from './AboutMeSection'

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
        style={{ minHeight: 350, padding: '0 0 1em 0'}}
      >
        <Menu
          fixed={fixed ? "top" : null}
          inverted={!fixed}
          secondary={!fixed}
          pointing={!fixed}
          size="large"
        >
          <Container>
            <Menu.Item onClick={()=>props.aboutMeRef.current.scrollIntoView()}>About Me</Menu.Item>
            <Menu.Item onClick={()=>props.experienceRef.current.scrollIntoView()}>Experience</Menu.Item>
            <Menu.Item onClick={()=>props.projectsRef.current.scrollIntoView()}>Projects</Menu.Item>
            <Menu.Item position="right">
              <Button as="a" href={pdfFile} target="blank" inverted={!fixed}>
                Resumé
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
        <Ref innerRef={props.aboutMeRef}>
          <AboutMeSection />
        </Ref>
      </Segment>
    </Visibility>
  )
}

export default HeaderSection
