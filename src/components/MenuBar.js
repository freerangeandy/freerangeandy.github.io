import React from 'react'
import {
  Container,
  Menu,
  Button,
} from 'semantic-ui-react'

const MenuBar = (props) => {
  const { fixed, aboutMeRef, experienceRef, projectsRef } = props
  const pdfFile = require('../../assets/cv.pdf')

  const sectionRef = {
    "aboutMe": aboutMeRef,
    "experience": experienceRef,
    "projects": projectsRef
  }

  const handleMenuClick = (name) => {
    sectionRef[name].current.scrollIntoView()
    props.setActiveItem(name)
  }

  return (
    <Menu
      fixed={fixed ? "top" : null}
      inverted={!fixed}
      secondary={!fixed}
      pointing={!fixed}
      size="large"
    >
      <Container>
        <Menu.Item
          name="aboutMe"
          active={props.activeItem == "aboutMe"}
          onClick={() => handleMenuClick("aboutMe")}
        >
          About Me
        </Menu.Item>
        <Menu.Item
          name="experience"
          active={props.activeItem == "experience"}
          onClick={() => handleMenuClick("experience")}
        >
          Experience
        </Menu.Item>
        <Menu.Item
          name="projects"
          active={props.activeItem == "projects"}
          onClick={() => handleMenuClick("projects")}
        >
          Projects
        </Menu.Item>
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
