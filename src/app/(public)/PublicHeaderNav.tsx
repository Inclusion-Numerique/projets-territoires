'use client'
import Link from 'next/link'
import { allProjectsLink } from '@pt/anctProjects'
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
          target="_self"
        >
          Accueil
        </Link>
      </li>
      <li className="fr-nav__item">
        <Link
          className="fr-nav__link"
          aria-current={pathname === '/projet' ? 'page' : undefined}
          href="/projet"
          target="_self"
        >
          Participer
        </Link>
      </li>
      <li className="fr-nav__item">
        <a
          className="fr-nav__link"
          href={allProjectsLink}
          target="_blank"
          rel="noreferrer"
        >
          Voir les projets
        </a>
      </li>
    </ul>
  )
}
