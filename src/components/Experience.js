import React, { Fragment } from 'react'
import { List } from 'semantic-ui-react'

const Experience = (props) => {
  const degree = props.degree ? (<List.Item ><i>{props.degree}</i></List.Item>) : null
  const title = props.title ? (<List.Item ><i>{props.title}</i></List.Item>) : null

  return (
    <Fragment>
      <h5 style={{ margin:'0.8em 0 0.2em 0' }}>{props.name}</h5>
      <List style={{ margin:'0 0 0 1.4em' }}>
        {title}
        {degree}
        <List.Item >
          {props.date.start} &mdash; {props.date.end}
        </List.Item>
        <List.Item >{props.location}</List.Item>
      </List>
    </Fragment>
  )
}

export default Experience
