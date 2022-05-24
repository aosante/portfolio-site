import React from 'react'

import { Container } from 'components/common'
import logo from 'assets/illustrations/logo.png'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Navbar = () => (
  <Wrapper as={Container}>
    <img src={logo} alt="Website logo" />
    <NavbarLinks />
  </Wrapper>
)

export default Navbar
