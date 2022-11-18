import { prismaClient } from '@pt/prisma'
import { categoryToLegacyCategory } from '@pt/projethoteque/legacyProjects'
import { LegacyProjectCard } from '@pt/app/(public)/projets/LegacyProjectCard'
import styles from './styles.module.scss'
import Link from 'next/link'

const searchParamAsArray = (param?: string | string[]): string[] => {
  if (!param) {
    return []
  }
  if (typeof param === 'string') {
    return [param]
  }
  return param
}

const ProjectsPage = async ({
  searchParams,
}: {
  searchParams?: {
    thematiques?: string[] | string
    regions?: string[] | string
  }
}) => {
  const activeCategoriesFilters = searchParamAsArray(searchParams?.thematiques)
  const activeDistrictsFilters = searchParamAsArray(searchParams?.regions)

  console.log('PAGE FILTERS', {
    activeCategoriesFilters,
    activeDistrictsFilters,
  })

  const projects = await prismaClient.legacyProject.findMany({
    where: {
      ...(activeCategoriesFilters.length === 0
        ? null
        : {
            categories: {
              hasSome: activeCategoriesFilters.map(categoryToLegacyCategory),
            },
          }),
      ...(activeDistrictsFilters.length === 0
        ? null
        : {
            district: {
              in: activeDistrictsFilters,
            },
          }),
    },
  })

  return (
    <div className="fr-p-8v">
      {projects.length === 0 ? (
        <p>Il n&apos;y a pas encore de projet pour votre selection.</p>
      ) : null}

      <ul className="fr-raw-list">
        {projects.map((project) => (
          <LegacyProjectCard key={project.id} project={project} />
        ))}
        <li className="fr-mt-8v">
          <Link
            className={`fr-p-4v ${styles.legacyProjectCard}`}
            href="/projet"
            style={{
              textAlign: 'center',
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h6 style={{ width: '100%' }}>
              Vous êtes maire ou président d&apos;intercommunalité ?
            </h6>
            <Link
              className={`fr-btn`}
              href="/projet"
              style={{ textAlign: 'center' }}
            >
              Partagez vos solutions&nbsp;!
            </Link>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default ProjectsPage
