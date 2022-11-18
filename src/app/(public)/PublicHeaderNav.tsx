'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const PublicHeaderNav = () => {
  const pathname = usePathname()

  return (
    <ul className="fr-nav__list">
      <li className="fr-nav__item">
        <Link
          className="fr-nav__link"
          aria-current={pathname === '/' ? 'page' : undefined}
          href="/"
          prefetch
        >
          Accueil
        </Link>
      </li>
      <li className="fr-nav__item">
        <Link
          className="fr-nav__link"
          aria-current={pathname === '/projet' ? 'page' : undefined}
          href="/projet"
          prefetch
        >
          Partager
        </Link>
      </li>
      <li className="fr-nav__item">
        <Link className="fr-nav__link" href="/projets" prefetch>
          Voir les projets
        </Link>
      </li>
    </ul>
  )
}
