import React, { Fragment } from 'react'
import { Container, Menu, Button, Icon } from 'semantic-ui-react'
import PDFViewPortal from './PDFViewPortal'
import PdfFile from '../../assets/cv.pdf'

const TopMenu = (props) => {
  const { fixed, aboutMeRef, experienceRef, projectsRef, isMobile, handleSidebarToggle } = props

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
        className="no-close"
      >
        <Icon className="no-close" name='sidebar' />
      </Menu.Item>
    ) : (
      <Fragment>
        <Menu.Item disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Menu.Item>
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

  const resumeButton = isMobile ? (
    <Button as="a" href={PdfFile} rel="noopener noreferrer" target="_blank" inverted={!fixed}>
      Resumé
    </Button>
  ) : (<PDFViewPortal fixed={fixed} isMobile={isMobile} />)

  return (
    <Menu
      fixed={fixed ? "top" : null}
      inverted={!fixed}
      secondary={!fixed}
      pointing={!fixed}
      size="large"
    >
      {sectionMenuItems}
      <Menu.Menu position="right">
        <Menu.Header
          as='h3'
          hidden={!fixed}
          style={{ color: 'rgb(5,5,5,0.5)', margin: '0em', padding: '0.8em 0.8em 0 0' }}
        >
          Andy Lee
        </Menu.Header>
        <Menu.Item>
          {resumeButton}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default TopMenu
