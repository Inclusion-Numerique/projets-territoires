'use client'

import { signIn } from 'next-auth/react'

export const GoogleSigninButton = () => {
  return (
    <div className="fr-btns-group">
      <button
        type="button"
        className="fr-btn fr-btn--secondary "
        onClick={() => {
          signIn('google')
        }}
      >
        <span>Se connecter avec&nbsp;</span>
        <span className="fr-connect__brand">Google</span>
      </button>
    </div>
  )
}
