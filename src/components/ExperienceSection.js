import React from 'react'
import {
  Grid,
  Segment,
  Ref,
  Visibility
} from 'semantic-ui-react'
import Experience from './Experience'

const ExperienceSection = (props) => {
  const populateExperience = (item,idx) => (
    <Experience
      key={idx}
      name={item.name}
      location={item.location}
      title={item.title}
      degree={item.degree}
      date={{ start: item.date[0], end: item.date[1] }}
    />
  )

  const workExperience = props.items.work.map(populateExperience)
  const educationExperience = props.items.education.map(populateExperience)
  
  return (
    <Segment vertical style={{ paddingTop: '0'}}>
      <Segment vertical inverted color="violet">
        <Ref innerRef={props.experienceRef}>
          <h2 style={{ height:'0.3em' }}></h2>
        </Ref>
      </Segment>
      <h2 style={{ textAlign:'center', marginTop:'1.5em' }}>
        Experience
      </h2>
      <Visibility
        once={false}
        onTopPassedReverse={()=>props.setActiveItem("experience")}
        onTopPassed={()=>props.setActiveItem("projects")}
      >
      <Grid columns='equal' centered divided>
        <Grid.Row only='tablet computer'>
          <Grid.Column>
            <Segment
              basic
              style={{ float:'right'}}
            >
              <h3>Work</h3>
              {workExperience}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment
              basic
              style={{ marginLeft:'10%'}}
            >
              <h3>Education</h3>
              {educationExperience}
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only='mobile'>
          <Grid.Column>
            <Segment
              basic
            >
              <h3>Work</h3>
              {workExperience}
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only='mobile'>
          <Grid.Column>
            <Segment
              basic
            >
              <h3>Education</h3>
              {educationExperience}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Visibility>
    </Segment>
  )
}

export default ExperienceSection
