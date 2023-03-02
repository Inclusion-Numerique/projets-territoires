'use client'

import { CSSProperties, forwardRef } from 'react'
import styles from '@pt/app/(public)/Showcase.module.scss'
import { useShowcase } from '@pt/app/(public)/useShowcase'
import Link from 'next/link'
import {
  legacyProjectImageUrl,
  legacyProjectUrl,
} from '@pt/projethoteque/legacyProjects'
import { useSwipeable } from 'react-swipeable'
import { ShowcaseProject } from '@pt/legacyProject/showcaseProjects'

export const Showcase = ({ projects }: { projects: ShowcaseProject[] }) => {
  const { containerRef, firstCardRef, offsetString, next, previous } =
    useShowcase({ count: projects.length })

  // https://formidable.com/open-source/react-swipeable/
  const { ref: swipeRef } = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: previous,
    // preventScrollOnSwipe: true,
    delta: 10,
    trackTouch: true,
    // swipeDuration: 1000,
    // touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  })

  return (
    <div ref={swipeRef}>
      <div className="fr-container" ref={containerRef}>
        <div className={styles.header}>
          <h2 className="fr-mb-0">
            Retrouvez ici les projets
            <br />
            et réalisations des collectivités.
          </h2>
          <div
            className={`fr-mt-8v fr-btns-group fr-btns-group--inline ${styles.buttons}`}
          >
            <button
              type="button"
              className="fr-btn fr-btn--secondary fr-icon-arrow-left-line"
              onClick={previous}
            />
            <button
              type="button"
              className="fr-btn fr-btn--secondary fr-icon-arrow-right-line"
              onClick={next}
            />
          </div>
        </div>
        <Link
          href="/projets"
          className="fr-link fr-link--icon-right fr-icon-arrow-right-line fr-mt-0 fr-mt-md-4v"
          style={{ display: 'inline-block' }}
        >
          Voir tous les projets
        </Link>
      </div>
      <div className={`fr-mt-12v ${styles.showcaseContainer}`}>
        <div
          className={styles.cardsWrapper}
          style={{
            transform: `translateX(${offsetString})`,
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              key={project.id}
              ref={index === 0 ? firstCardRef : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const ProjectCard = forwardRef<
  HTMLDivElement,
  { project: ShowcaseProject; style?: CSSProperties | undefined }
>(
  (
    { project: { title, slug, city, district, imagePath, imageAlt }, style },
    ref,
  ) => {
    return (
      <div ref={ref} className={styles.card}>
        <picture>
          <img src={legacyProjectImageUrl(imagePath)} alt={imageAlt} />
        </picture>
        <div className={`fr-px-5w fr-py-10v ${styles.cardContent}`}>
          <p
            className="fr-hint-text"
            style={{ color: 'var(--text-mention-grey' }}
          >
            <span className="fr-mr-1w fr-icon--sm fr-icon-map-pin-2-line" />
            {city}
          </p>
          <h6 style={{ flexGrow: 1 }}>{title}</h6>
          <a
            href={legacyProjectUrl(slug)}
            target="_blank"
            className="fr-link fr-link--icon-right fr-icon-arrow-right-line fr-mt-4v"
            style={{ display: 'inline-block' }}
          >
            Voir le projet
          </a>
        </div>
      </div>
    )
  },
)
ProjectCard.displayName = 'ProjectCard'
