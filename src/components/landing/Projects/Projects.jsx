import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Container, Card, Title } from 'components/common'
import folderIcon from 'assets/icons/folder.svg'
import githubIcon from 'assets/icons/github.svg'
import crossedeyeIcon from 'assets/icons/crossedeye.svg'
import eyeIcon from 'assets/icons/eye.svg'
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

export const Projects = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark {
          edges {
            node {
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
          {edges.map(({ node: { frontmatter } }, i) => (
            <Item key={i} className="item">
              <Card>
                <Header>
                  <div className="icon">
                    <img src={folderIcon} alt="Folder Icon" />
                  </div>
                  <Links>
                    <a href={frontmatter.sourcelink} target="_blank">
                      <img src={githubIcon} alt="Github Icon" />
                    </a>
                    {frontmatter.shouldDisable ? (
                      <div
                        href={frontmatter.sitelink}
                        className="disabled"
                        target="_blank"
                      >
                        <img src={crossedeyeIcon} alt="Eye Icon" />
                      </div>
                    ) : (
                      <a
                        href={frontmatter.sitelink}
                        disabled={true}
                        target="_blank"
                      >
                        <img src={eyeIcon} alt="Eye Icon" />
                      </a>
                    )}
                  </Links>
                </Header>
                <Content>
                  <h4>{frontmatter.title}</h4>
                  <p>{frontmatter.description}</p>
                </Content>
                <Stack>
                  {frontmatter.technologies.split(',').map((item, index) => (
                    <li key={index}>{item}</li>
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
