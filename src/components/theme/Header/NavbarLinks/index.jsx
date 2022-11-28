import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { ThemeToggleButton } from 'components/theme'

import { Wrapper } from './styles'

const NavbarLinks = ({ sidebar }) => (
  <Wrapper sidebar={sidebar}>
    <ThemeToggleButton />
    <div>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      <a href="andres-osante-resume.pdf" download>
        Resume
      </a>
    </div>
  </Wrapper>
)

export default NavbarLinks
