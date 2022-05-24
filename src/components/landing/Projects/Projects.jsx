import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Container, Card, Title } from 'components/common'
import {
  Wrapper,
  OuterContainer,
  Grid,
  Item,
  Content,
  Header,
  Stack,
  Links,
} from './styles'

const folderIconPath = '../../../assets/icons/folder.svg'
const githubIconPath = '../../../assets/icons/github.svg'
const crossedeyeIconPath = '../../../assets/icons/crossedeye.svg'
const eyeIconPath = '../../../assets/icons/eye.svg'

export const Projects = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                technologies
                sourcelink
                sitelink
                description
                title
                shouldDisable
              }
            }
          }
        }
      }
    `
  )

  return (
    <OuterContainer>
      <Wrapper as={Container} id="projects">
        <Title>Projects</Title>
        <Grid>
          {edges.map(({ node: { frontmatter, id } }) => (
            <Item key={id} className="item">
              <Card>
                <Header>
                  <div className="icon">
                    <StaticImage src={folderIconPath} alt="Folder Icon" />
                  </div>
                  <Links>
                    <a href={frontmatter.sourcelink} target="_blank">
                      <StaticImage src={githubIconPath} alt="Github Icon" />
                    </a>
                    {frontmatter.shouldDisable ? (
                      <div
                        href={frontmatter.sitelink}
                        className="disabled"
                        target="_blank"
                      >
                        <StaticImage src={crossedeyeIconPath} alt="Eye Icon" />
                      </div>
                    ) : (
                      <a
                        href={frontmatter.sitelink}
                        disabled={true}
                        target="_blank"
                      >
                        <StaticImage src={eyeIconPath} alt="Eye Icon" />
                      </a>
                    )}
                  </Links>
                </Header>
                <Content>
                  <h4>{frontmatter.title}</h4>
                  <p>{frontmatter.description}</p>
                </Content>
                <Stack>
                  {frontmatter.technologies.split(',').map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </Stack>
              </Card>
            </Item>
          ))}
        </Grid>
      </Wrapper>
    </OuterContainer>
  )
}
