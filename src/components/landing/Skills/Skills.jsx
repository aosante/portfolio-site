import React, { useEffect, useMemo, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useTransition, a } from 'react-spring'
import shuffle from 'lodash.shuffle'
import useMeasure from 'react-use-measure'
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
  const [ref, { width }] = useMeasure()
  // Hook3: Hold items
  const [items, set] = useState(skillData)
  // Hook4: shuffle data every 2 seconds
  useEffect(() => {
    const t = setInterval(() => set(shuffle), 2000)
    return () => clearInterval(t)
  }, [])
  // Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const [gridHeights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
    let gridItems = items.map((child) => {
      const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const x = (width / columns) * column // x = container width / number of columns * column index,
      const y = (heights[column] += child.height / 2) - child.height / 2 // y = it's just the height of the current column
      return {
        ...child,
        x,
        y,
        width: width / columns,
        height: child.height / 2,
      }
    })
    return [heights, gridItems]
  }, [columns, items, width])
  // Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated.
  const transition = useTransition(gridItems, {
    key: (item) => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })

  const fragment = transition((style, item) => (
    <a.div style={style}>
      <img
        className={item.isDark && 'dark'}
        style={{ maxWidth: 73 }}
        src={skillImages[item.name]}
        alt={item.name}
      />
    </a.div>
  ))

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
              <strong> JavaScript</strong> as my main language.
            </p>
            <p>
              On the front end side of things, I have experience utilizing
              modern frameworks such as <strong>Vue and React</strong>, with a
              variety of architectural approaches, styling and state management
              tools, and data fetching techniques.
            </p>
            <p>
              As to server side code, my main experience lies in writing{' '}
              <strong>Node JS </strong>
              (in both JavaScript and TypeScript), and I've also had some
              exposure to <strong>Golang</strong>. I also have hands-on
              experience with testing{' '}
              <strong>(Jest, Enzyme, Mocha, React Testing Library)</strong>, and
              database querying and design <strong>(SQL and MongoDB)</strong>.
            </p>
          </animated.div>
        </InView>
      </Content>
      <SkillGrid
        ref={ref}
        className="list"
        style={{ height: Math.max(...gridHeights) }}
      >
        {fragment}
      </SkillGrid>
    </Wrapper>
  )
}
