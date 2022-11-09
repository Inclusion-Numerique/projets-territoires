'use client'

import Link from 'next/link'
import { SessionUser } from '@pt/auth/sessionUser'
import { getUserDisplayName } from '@pt/utils/user'

export const UserMenu = ({ user }: { user: SessionUser }) => {
  return (
    <Link
      href="/projets"
      target="_self"
      className="fr-btn fr-btn--sm fr-btn--icon-left fr-icon-account-line"
    >
      {getUserDisplayName(user)}
    </Link>
  )
}
