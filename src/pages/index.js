import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { About, Contact, Intro, Projects, Skills } from 'components/landing'
import { Layout, SEO } from 'components/common'
import { darkTheme, lightTheme } from 'components/common/Layout/styles'
import { ThemeToggleContext } from 'components/theme/ThemeToggleContext'

const Index = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )
  const isDarkTheme = theme === 'dark'

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark'
    setTheme(updatedTheme)
    localStorage.setItem('theme', updatedTheme)
  }
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme('dark')
    }
  }, [])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Layout>
        <SEO />
        <ThemeToggleContext.Provider value={[isDarkTheme, toggleTheme]}>
          <Intro />
        </ThemeToggleContext.Provider>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Layout>
    </ThemeProvider>
  )
}

export default Index
