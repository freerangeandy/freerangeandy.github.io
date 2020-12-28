import React from 'react'
import {
  Grid,
  Segment,
  Ref,
  Visibility
} from 'semantic-ui-react'
import Experience from './Experience'

const ExperienceSection = (props) => {
  const populateExperience = (mobile) => (item,idx) => (
    <Experience
      key={idx}
      name={item.name}
      location={item.location}
      title={item.title}
      degree={item.degree}
      date={{ start: item.date[0], end: item.date[1] }}
      mobile={mobile}
    />
  )

  const workExperience = (mobile) => props.items.work.map(populateExperience(mobile))
  const educationExperience = (mobile) => props.items.education.map(populateExperience(mobile))

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
              {workExperience(false)}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment
              basic
              style={{ marginLeft:'10%'}}
            >
              <h3>Education</h3>
              {educationExperience(false)}
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only='mobile' style={{ paddingBottom: "0" }}>
          <Grid.Column>
            <Segment
              basic
            >
              <h3>Work</h3>
              {workExperience(true)}
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only='mobile' style={{ paddingTop: "0" }}>
          <Grid.Column>
            <Segment
              basic
            >
              <h3>Education</h3>
              {educationExperience(true)}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Visibility>
    </Segment>
  )
}

export default ExperienceSection
