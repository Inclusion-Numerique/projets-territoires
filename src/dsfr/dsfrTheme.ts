import { isBrowser } from '@pt/utils/isBrowser'

type Theme = 'dark' | 'light'

export const getThemeSystemPreference = (): Theme => {
  if (!isBrowser) {
    return 'dark'
  }
  if (
    window?.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }
  return 'light'
}

export const getHtmlTheme = (): Theme | null => {
  if (!isBrowser) {
    return null
  }
  return (
    (document.documentElement.getAttribute('data-fr-theme') as
      | Theme
      | undefined) ?? null
  )
}

export const getPersistedTheme = (): Theme | null => {
  if (!isBrowser) {
    return null
  }
  return (localStorage.getItem('scheme') as Theme | undefined) ?? null
}

export const changeTheme = (theme: Theme) => {
  if (!isBrowser) {
    return
  }
  document.documentElement.setAttribute('data-fr-theme', theme)
  document.documentElement.setAttribute('data-fr-scheme', theme)
  // Persist choice
  localStorage.setItem('scheme', theme)
}

export const initializeTheme = () => {
  if (!isBrowser) {
    return
  }
  if (document.documentElement.hasAttribute('data-fr-theme')) {
    return
  }
  changeTheme(getThemeSystemPreference())
}
