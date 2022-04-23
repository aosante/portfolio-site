import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useSpring, animated } from 'react-spring'

import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/developer.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

const titleAnimation = (animationDuration, animationDelay) => {
  return {
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-200px)' },
    config: { duration: animationDuration },
    delay: animationDelay && animationDelay,
  }
}

export const Intro = () => {
  const props = useSpring(titleAnimation(800))
  const headingProps = useSpring(titleAnimation(1000, 700))
  const buttonProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1050 },
    delay: 1500,
  })

  // redefine button to be able to animate
  const AnimatedButton = animated(Button)

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <animated.h1 style={props}>
            Hello! I'm <div>Andrés.</div>
          </animated.h1>
          {/* I'm a passionate developer based in the tropical land of Costa Rica. I enjoy architecturing and building sofware that impacts our modern world and that is delivered to end users in the form of beatufil and performant user interfaces. */}
          <animated.h4 style={headingProps}>
            I'm a passionate developer from <strong>Costa Rica.</strong> I enjoy{' '}
            <strong>designing and building</strong> software that impacts our
            modern world and that is delivered to end users in the form of{' '}
            <strong>beautiful and performant user interfaces.</strong>
          </animated.h4>
          <div>
            <AnimatedButton style={buttonProps} as={AnchorLink} href="#about">
              Learn More
            </AnimatedButton>
          </div>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  )
}
