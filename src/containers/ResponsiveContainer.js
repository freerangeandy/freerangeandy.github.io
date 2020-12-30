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
      <DesktopContainer mediaWrapper={Media} {...props} >
        {props.children}
      </DesktopContainer>
      <MobileContainer mediaWrapper={Media} {...props} >
        {props.children}
      </MobileContainer>
    </MediaContextProvider>
  )
}

export default ResponsiveContainer
