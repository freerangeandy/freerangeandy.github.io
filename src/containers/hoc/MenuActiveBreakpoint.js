import React from 'react'
import { Visibility } from 'semantic-ui-react'

const MenuActiveBreakpoint = (props) => {
  const { setFixed, setActiveItem } = props

  const onBottomPassed = () => {
    setActiveItem("experience")
    setFixed(true)
  }

  const onBottomPassedReverse = () => {
    setActiveItem("aboutMe")
    setFixed(false)
  }

  return (
    <Visibility
      once={false}
      onBottomPassed={onBottomPassed}
      onBottomPassedReverse={onBottomPassedReverse}
    >
      {props.children}
    </Visibility>
  )
}

export default MenuActiveBreakpoint
