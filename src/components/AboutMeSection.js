import React from 'react'
import { Container, Icon, List, Grid } from 'semantic-ui-react'

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
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <h3>Skills</h3>
            <List>
              <List.Item>JavaScript</List.Item>
              <List.Item>ReactJS</List.Item>
              <List.Item>Ruby</List.Item>
              <List.Item>Python</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <h3>Interests</h3>
            <List>
              <List.Item>STEM Education</List.Item>
              <List.Item>Sustainable Tech</List.Item>
              <List.Item>Economic Justice</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
export default AboutMeSection
