import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Wrapper } from './styles'
import tinkSound from 'assets/audio/tink.wav'
import soundOn from 'assets/icons/sound-on.jpg'
import soundOff from 'assets/icons/sound-off.jpg'

const NavbarLinks = ({ sidebar }) => {
  const [mute, setMute] = useState(false)
  const [audio] = useState(
    typeof window !== 'undefined' ? new Audio(tinkSound) : null
  )

  const playAudio = () => {
    if (!mute) audio.play().catch((error) => console.log(error))
  }

  return (
    <Wrapper sidebar={sidebar}>
      <img
        onClick={() => setMute(!mute)}
        src={mute ? soundOff : soundOn}
        alt="Sound off or on icon"
      />
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
      </div>
    </Wrapper>
  )
}

export default NavbarLinks
