import React from 'react'
import { Container, Icon, List, Grid, Segment } from 'semantic-ui-react'

const AboutMeSection = (props) => {
  return (
    <Container textAlign='center'>
      <h1>Andy Lee</h1>
      <List horizontal>
        <List.Item>
          <List.Content>
            <Icon link name='linkedin' />
            <a href="https://www.linkedin.com/in/andrew-lee-1701d/">LinkedIn</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <Icon link name='github' />
            <a href="https://www.github.com/freerangeandy">GitHub</a>
          </List.Content>
        </List.Item>
      </List>
      <p>
        I'm a recent graduate of the Launch Academy boot camp with 7 years of
        prior software development experience - and a few years as a high school
        teacher sandwiched in-between. My favorite coding hobbies are building
        single-page web apps in JavaScript, trying out new 3rd-party APIs or
        libraries, and taking online courses in a new language.
      </p>
      <Grid centered relaxed>
        <Grid.Row>
<<<<<<< HEAD
          <Grid.Column width={4}>
            <Segment
              inverted
              color='violet'
              style={{ textAlign:'left', marginLeft:'15%'}}
            >
=======
          <Grid.Column floated='center' width={4}>
            <Segment inverted color='violet' style={{ textAlign:'left', marginLeft:'15%'}}>
>>>>>>> 06f4c2fccdef5268fbf93789d80857745e7d09ab
            <h3>Skills</h3>
            <List bulleted>
              <List.Item>
                <List.Content>JavaScript</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>ReactJS</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>Ruby</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>Python</List.Content>
              </List.Item>
            </List>
            </Segment>
          </Grid.Column>
<<<<<<< HEAD
          <Grid.Column width={4}>
            <Segment
              inverted
              color='violet'
              style={{ textAlign:'left',  marginLeft:'15%'}}
            >
=======
          <Grid.Column floated='center' width={4}>
            <Segment inverted color='violet' style={{ textAlign:'left',  marginLeft:'15%'}}>
>>>>>>> 06f4c2fccdef5268fbf93789d80857745e7d09ab
            <h3>Interests</h3>
            <List bulleted>
              <List.Item>
                <List.Content>STEM Education</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>Sustainable Tech</List.Content>
              </List.Item>
              <List.Item>
                <List.Content>Economic Justice</List.Content>
              </List.Item>
            </List>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
export default AboutMeSection
