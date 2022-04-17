import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { InView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

import { Container, Button, Title } from 'components/common'
import surfer from 'assets/illustrations/surfer.svg'
import { AboutWrapper, Details, Thumbnail } from './styles'

export const About = () => {
  const [showP, setShowP] = useState(false)
  const aboutProps = useSpring({
    opacity: showP ? 1 : 0,
    transform: showP ? 'translateX(0)' : 'translateX(200px)',
    from: { opacity: 0 },
    config: { duration: 700 },
    delay: 700,
  })

  // Fades in about text when in view
  const onViewChange = (inview) => {
    if (!showP && inview) setShowP(true)
  }

  return (
    <div id="about">
      <AboutWrapper as={Container}>
        <Thumbnail>
          <img src={surfer} alt="Surfer illustration" />
        </Thumbnail>
        <Details>
          <InView tag="div">
            <Title>About Me</Title>
          </InView>
          <InView tag="div" className="text" onChange={onViewChange}>
            <animated.div style={aboutProps}>
              <p>
                I'm a business graduate from{' '}
                <a href="https://www.ucr.ac.cr/" target="_blank">
                  Universidad de Costa Rica
                </a>
                , with a technical degree in Software Engineering from{' '}
                <a href="https://www.ucenfotec.ac.cr/" target="_blank">
                  Universidad Cenfotec
                </a>
                .
              </p>
              <p>
                I discovered software development 4 years ago, and I've been
                building apps as a hobby and professionally ever since.
              </p>
              <p>
                Surfing, guitar and programming are the three things I enjoy the
                most, and one of my biggest goals is to excercise my passion for
                the latter by being part of enriching and impactful projects.
              </p>
            </animated.div>
          </InView>
          <Button as={AnchorLink} href="#contact">
            Let's Talk
          </Button>
        </Details>
      </AboutWrapper>
    </div>
  )
}
