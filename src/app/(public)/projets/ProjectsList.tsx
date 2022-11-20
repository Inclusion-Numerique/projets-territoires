'use client'
import Link from 'next/link'
import styles from '@pt/app/(public)/projets/styles.module.scss'
import { LegacyProject } from '@prisma/client'
import {
  useCategoriesFilters,
  useDistrictFilters,
} from '@pt/app/(public)/projets/projectFiltersStore'
import { trpc } from '@pt/trpc'
import { withTrpc } from '@pt/withTrpc'
import { ProjectCards } from '@pt/app/(public)/projets/ProjectCards'

const ProjectsList = ({
  initialProjects,
}: {
  initialProjects: LegacyProject[] | null
}) => {
  const selectedDistricts = useDistrictFilters(({ selected }) => selected)
  const selectedCategories = useCategoriesFilters(({ selected }) => selected)

  const projectsQuery = trpc.findLegacyProject.useQuery(
    {
      districts: [...selectedDistricts],
      categories: [...selectedCategories],
    },
    {
      initialData: initialProjects ? { projects: initialProjects } : undefined,
      keepPreviousData: true,
    },
  )

  const projects = projectsQuery.data?.projects

  return (
    <div className="fr-p-8v">
      {projects?.length === 0 ? (
        <div
          className={`fr-p-4v ${styles.legacyProjectCard}`}
          style={{
            textAlign: 'center',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h6 style={{ width: '100%' }}>
            Il n&apos;y a pas encore de projets pour votre recherche.
          </h6>
        </div>
      ) : projects?.length ? (
        <div className={`fr-p-4v ${styles.legacyProjectCard}`}>
          <p>
            {projects.length} projet{projects.length > 1 ? 's' : ''}{' '}
            correspondent à votre recherche.
          </p>
        </div>
      ) : null}

      <ul className="fr-raw-list">
        <ProjectCards projects={projectsQuery.data?.projects ?? []} />

        <li className="fr-mt-8v">
          <div
            className={`fr-p-4v`}
            style={{
              textAlign: 'center',
              width: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 0 0 1px var(--border-default-grey)',
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
          </div>
        </li>
      </ul>
    </div>
  )
}

export default withTrpc(ProjectsList)
