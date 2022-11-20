import { LegacyProject } from '@prisma/client'
import {
  legacyProjectImageUrl,
  legacyProjectUrl,
} from '@pt/projethoteque/legacyProjects'
import styles from './styles.module.scss'
import Link from 'next/link'

export const LegacyProjectCard = ({
  project: {
    program,
    categories,
    district,
    id,
    title,
    city,
    imageAlt,
    imagePath,
    itemIndexInPage,
    pageIndex,
    slug,
  },
}: {
  project: LegacyProject
}) => {
  return (
    <li className="">
      <Link
        href={legacyProjectUrl(slug)}
        target="_blank"
        rel="noreferrer"
        className={`fr-p-4v fr-mb-8v ${styles.legacyProjectCard}`}
      >
        <picture>
          <img
            id={`${id}__image`}
            src={legacyProjectImageUrl(imagePath)}
            alt={imageAlt}
          />
        </picture>
        <div className="fr-col-8 fr-pl-4v">
          <h6 className="fr-mb-2v fr-text--lg">{title}</h6>
          <div>
            {district ? (
              <p className="fr-badge fr-badge--sm fr-badge--blue-cumulus fr-mr-2v">
                {district}
              </p>
            ) : null}
            {program ? (
              <p className="fr-badge fr-badge--sm">{program}</p>
            ) : null}
          </div>
          <div className="fr-mt-1v">
            {categories.map((category) => (
              <p
                key={category}
                className="fr-badge fr-badge--green-emeraude fr-badge--sm fr-mr-2v"
              >
                {category}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </li>
  )
}
