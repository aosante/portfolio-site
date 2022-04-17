import React from 'react'
import Footer from '../../theme/Footer'
import { Global } from './styles'
import './fonts.css'
import './variables.css'

const Layout = ({ children }) => (
  <>
    <Global />
    {children}
    <Footer />
  </>
)

export default Layout
