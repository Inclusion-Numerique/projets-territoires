import { LegacyProject } from '@prisma/client'
import {
  legacyProjectImageUrl,
  legacyProjectUrl,
} from '@pt/projethoteque/legacyProjects'

export const LegacyProjectCard = ({
  project: {
    category,
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
    <div className="fr-grid-row fr-grid-row--gutters fr-mb-6v">
      <div className="fr-col-4">
        <picture>
          <img
            className="fr-responsive-img"
            src={legacyProjectImageUrl(imagePath)}
            alt={imageAlt}
          />
        </picture>
      </div>
      <div className="fr-col-8">
        <h5>{title}</h5>
        <pre>{legacyProjectUrl(slug)}</pre>
      </div>
    </div>
  )
}
