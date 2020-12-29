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

const ResponsiveContainer = ({ children }) => {
  return (
    <MediaContextProvider>
      <DesktopContainer>
        <Media greaterThan='mobile'>{children}</Media>
      </DesktopContainer>
      <MobileContainer>
        <Media at='mobile'>{children}</Media>
      </MobileContainer>
    </MediaContextProvider>
  )
}

export default ResponsiveContainer
