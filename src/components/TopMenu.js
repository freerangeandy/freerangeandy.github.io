import React, { Fragment } from 'react'
import {
  Container,
  Menu,
  Button,
  Icon
} from 'semantic-ui-react'

const TopMenu = (props) => {
  const { fixed, aboutMeRef, experienceRef, projectsRef, isMobile, handleSidebarToggle } = props
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

  const sectionMenuItems = isMobile ? (
      <Menu.Item
        position="left"
        onClick={handleSidebarToggle}
      >
        <Icon name='sidebar' />
      </Menu.Item>
    ) : (
      <Fragment>
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
      </Fragment>
    )

  return (
    <Menu
      fixed={fixed ? "top" : null}
      inverted={!fixed}
      secondary={!fixed}
      pointing={!fixed}
      size="large"
    >
      {sectionMenuItems}
      <Menu.Item position="right">
        <Button as="a" href={pdfFile} target="blank" inverted={!fixed}>
          Resumé
        </Button>
      </Menu.Item>
    </Menu>
  )
}

export default TopMenu
