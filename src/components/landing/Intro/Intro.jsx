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
          <p>Hi there! I'm</p>
          <animated.h1 style={props}>
            Andrés<span>.</span>
          </animated.h1>
          <animated.h4 style={headingProps}>
            A developer from{' '}
            <span>
              Costa Rica<span className="hide">.</span>
            </span>
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
