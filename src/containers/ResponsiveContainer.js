import React from 'react'
import { createMedia } from '@artsy/fresnel'
import MobileContainer from './MobileContainer'
import DesktopContainer from './DesktopContainer'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    table: 768,
    computer: 1024
  }
})

const ResponsiveContainer = ({ children }) => {
  <MediaContextProvider>
    <MobileContainer>{children}</MobileContainer>
    <DesktopContainer>{children}</DesktopContainer>
  </MediaContextProvider>
}

export default ResponsiveContainer
