import React from 'react'
import {
  Container,
  Menu,
  Button,
} from 'semantic-ui-react'

const MenuBar = (props) => {
  const { fixed, aboutMeRef, experienceRef, projectsRef } = props
  const pdfFile = require('../../assets/cv.pdf')

  return (
    <Menu
      fixed={fixed ? "top" : null}
      inverted={!fixed}
      secondary={!fixed}
      pointing={!fixed}
      size="large"
    >
      <Container>
        <Menu.Item onClick={()=>aboutMeRef.current.scrollIntoView()}>About Me</Menu.Item>
        <Menu.Item onClick={()=>experienceRef.current.scrollIntoView()}>Experience</Menu.Item>
        <Menu.Item onClick={()=>projectsRef.current.scrollIntoView()}>Projects</Menu.Item>
        <Menu.Item position="right">
          <Button as="a" href={pdfFile} target="blank" inverted={!fixed}>
            Resumé
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default MenuBar
