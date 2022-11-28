import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Wrapper } from './styles'
import { useThemeToggle } from '../../ThemeToggleContext'

const NavbarLinks = ({ sidebar }) => {
  const [isDarkTheme, toggleTheme] = useThemeToggle()

  return (
    <Wrapper sidebar={sidebar}>
      <span
        onClick={toggleTheme}
        aria-label={`${isDarkTheme ? 'Dark' : 'Light'} mode`}
        role="img"
      >
        {isDarkTheme ? '🌞' : '🌜'}
      </span>
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
}

export default NavbarLinks
