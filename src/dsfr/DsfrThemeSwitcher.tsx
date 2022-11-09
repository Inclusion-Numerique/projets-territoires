'use client'
import 'client-only'
import { useState } from 'react'
import { changeTheme, getHtmlTheme } from '@pt/dsfr/dsfrTheme'

export const DsfrThemeSwitcher = () => {
  const [theme, setTheme] = useState(getHtmlTheme())

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    changeTheme(newTheme)
  }

  return (
    <button
      onClick={switchTheme}
      type="button"
      aria-label="Changer de theme"
      className="fr-link fr-p-1v"
    >
      {theme === 'dark' ? (
        <>
          <span className="fr-icon-sun-line fr-icon--sm" />
          &nbsp;&nbsp;
          <span className="fr-icon-moon-fill fr-icon--sm" />
        </>
      ) : (
        <>
          <span className="fr-icon-sun-fill fr-icon--sm" />
          &nbsp;&nbsp;
          <span className="fr-icon-moon-line fr-icon--sm" />
        </>
      )}
    </button>
  )
}
