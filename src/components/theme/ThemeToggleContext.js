import { createContext, useContext } from 'react'

export const ThemeToggleContext = createContext()
ThemeToggleContext.displayName = 'ThemeToggleContext'

export const useThemeToggle = () => {
  const context = useContext(ThemeToggleContext)
  if (!context)
    throw Error('useThemeToggle should be used inside a ThemeToggleProvider')
  return context
}
