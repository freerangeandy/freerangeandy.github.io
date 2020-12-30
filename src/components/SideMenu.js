import React from 'react'
import { Sidebar, Menu } from 'semantic-ui-react'

const SideMenu = (props) => {
  const sectionRef = {
    "aboutMe": props.aboutMeRef,
    "experience": props.experienceRef,
    "projects": props.projectsRef
  }

  const handleMenuClick = (name) => {
    sectionRef[name].current.scrollIntoView()
    props.setActiveItem(name)
  }

  return (
    <Sidebar
      as={Menu}
      animation='overlay'
      inverted
      color='teal'
      onHide={props.handleSidebarHide}
      vertical
      width='thin'
      visible={props.opened}
    >
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
    </Sidebar>
  )
}

export default SideMenu
