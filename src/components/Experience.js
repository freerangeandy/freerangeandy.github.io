import React, { Fragment } from 'react'
import { List } from 'semantic-ui-react'

const Experience = (props) => {
  const degree = props.degree ? (<i>{props.degree}</i>) : null
  const title = props.title ? (<i>{props.title}</i>) : null

  const experienceEntry = props.mobile
  ? (<Fragment>
      <h5 style={{ margin:'0.8em 0 0.2em 0' }}>{props.name}</h5>
      <List
        horizontal
        style={{ display: "flex", justifyContent:"space-between" }}
      >
        <List.Item>
          {title}{degree}
          <List.Description style={{marginTop: "0.3em"}}>{props.location}</List.Description>
        </List.Item>
        <List.Item >
          {props.date.start} &mdash; {props.date.end}
        </List.Item>
      </List>
    </Fragment>)
  : (<Fragment>
      <h5 style={{ margin:'0.8em 0 0.2em 0' }}>{props.name}</h5>
      <List style={{ margin:'0 0 0 1.4em' }}>
        <List.Item>
          {title}{degree}
        </List.Item>
        <List.Item>
          {props.date.start} &mdash; {props.date.end}
          <List.Description style={{marginTop: "0.3em"}}>{props.location}</List.Description>
        </List.Item>
      </List>
    </Fragment>)

  return experienceEntry
}

export default Experience
