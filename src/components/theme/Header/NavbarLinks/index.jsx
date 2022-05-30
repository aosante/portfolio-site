import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Wrapper } from './styles'
import tinkSound from 'assets/audio/tink.wav'
import soundOn from 'assets/icons/sound-on.jpg'
import soundOff from 'assets/icons/sound-off.jpg'
import { useThemeToggle } from '../../ThemeToggleContext'

const NavbarLinks = ({ sidebar }) => {
  const [isDarkTheme, toggleTheme] = useThemeToggle()
  // @todo: remove after implementing theme switching
  const [mute, setMute] = useState(false)
  const [audio] = useState(
    typeof window !== 'undefined' ? new Audio(tinkSound) : null
  )

  const playAudio = () => {
    if (!mute) audio.play().catch((error) => console.log(error))
  }

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
        <AnchorLink onMouseEnter={() => playAudio()} href="#about">
          About
        </AnchorLink>
        <AnchorLink onMouseEnter={() => playAudio()} href="#projects">
          Projects
        </AnchorLink>
        <AnchorLink onMouseEnter={() => playAudio()} href="#contact">
          Contact
        </AnchorLink>
        <a
          onMouseEnter={() => playAudio()}
          href="andres-osante-resume.pdf"
          download
        >
          Resume
        </a>
      </div>
    </Wrapper>
  )
}

export default NavbarLinks
