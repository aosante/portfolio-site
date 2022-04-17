import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useTransition, a } from 'react-spring'
import shuffle from 'lodash.shuffle'
import useMeasure from 'react-use-measure'
import { ResizeObserver } from '@juggle/resize-observer'
import { InView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'

import { Wrapper, Content, SkillGrid } from './styles'
import { Title } from 'components/common'
import useMedia from './hooks/useMedia'
import skillImages from './images'

export const Skills = () => {
  const {
    allSite: { edges },
  } = useStaticQuery(graphql`
    {
      allSite {
        edges {
          node {
            siteMetadata {
              skillData {
                css
                height
                name
                isDark
              }
            }
          }
        }
      }
    }
  `)

  // Text animation
  const [showP, setShowP] = useState(false)
  const textProps = useSpring({
    opacity: showP ? 1 : 0,
    transform: showP ? 'translateX(0)' : 'translateX(-200px)',
    from: { opacity: 0 },
    config: { duration: 700 },
    delay: 700,
  })

  const {
    node: {
      siteMetadata: { skillData },
    },
  } = edges[0]

  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(
    ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'],
    [4, 4, 4],
    2
  )
  // Hook2: Measure the width of the container element
  const [ref, { width }] = useMeasure({ polyfill: ResizeObserver })
  // Hook3: Hold items
  const [items, set] = useState(skillData)
  // Hook4: shuffle data every 2 seconds
  useEffect(() => void setInterval(() => set(shuffle), 2000), [])
  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
  let gridItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    const xy = [
      (width / columns) * column,
      (heights[column] += child.height / 2) - child.height / 2,
    ] // X = container width / number of columns * column index, Y = it's just the height of the current column
    return { ...child, xy, width: width / columns, height: child.height / 2 }
  })
  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, (item) => item.css, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })

  // Fades in skills description when in view
  const onViewChange = (inview) => {
    if (!showP && inview) setShowP(true)
  }

  return (
    <Wrapper>
      <Content>
        <Title>Skills & Experience</Title>
        <InView tag="div" onChange={onViewChange}>
          <animated.div style={textProps}>
            <p>
              I'm a software developer, focusing on web applications, using
              JavaScript as my main language.
            </p>
            <p>
              On the front end side of things, I have experience utilizing
              modern frameworks such as Vue and React, with a variety of
              architectures, styling and state management tools, and data
              fetching techniques.
            </p>
            <p>
              As to server side code, my main experience lies in writing Node JS
              (in both JavaScript and TypeScript). I also have hands-on
              experience with testing (Jest, Enzyme, Mocha), and database
              querying and design (SQL and Mongo).
            </p>
          </animated.div>
        </InView>
      </Content>
      <SkillGrid
        ref={ref}
        className="list"
        style={{ height: Math.max(...heights) }}
      >
        {transitions.map(({ item, props: { xy, ...rest }, key }) => (
          <a.div
            key={key}
            style={{
              transform: xy.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
              ...rest,
            }}
          >
            <img
              className={item.isDark && 'dark'}
              style={{ maxWidth: 73 }}
              src={skillImages[item.name]}
              alt={item.name}
            />
          </a.div>
        ))}
      </SkillGrid>
    </Wrapper>
  )
}
