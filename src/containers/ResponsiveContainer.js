import React from 'react'
import { createMedia } from '@artsy/fresnel'
import MobileContainer from './MobileContainer'
import DesktopContainer from './DesktopContainer'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
})

const ResponsiveContainer = (props) => {
  return (
    <MediaContextProvider>
      <DesktopContainer
        mediaWrapper={Media}
        aboutMeRef={props.aboutMeRef}
        experienceRef={props.experienceRef}
        projectsRef={props.projectsRef}
        activeItem={props.activeItem}
        setActiveItem={props.setActiveItem}
      >
        {props.children}
      </DesktopContainer>
      <MobileContainer
        mediaWrapper={Media}
        aboutMeRef={props.aboutMeRef}
        experienceRef={props.experienceRef}
        projectsRef={props.projectsRef}
        activeItem={props.activeItem}
        setActiveItem={props.setActiveItem}
      >
        {props.children}
      </MobileContainer>
    </MediaContextProvider>
  )
}

export default ResponsiveContainer
