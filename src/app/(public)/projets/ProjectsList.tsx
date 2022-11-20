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
    <div className="fr-px-8v fr-pb-8v">
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
        <div className="fr-mt-2v">
          <p style={{ fontWeight: 400, fontSize: '.875rem' }}>
            {projects.length === 1
              ? `1 projet correspond à votre recherche`
              : `${projects.length} projets correspondent à votre recherche`}
          </p>
        </div>
      ) : null}

      <ul className="fr-raw-list">
        <ProjectCards projects={projectsQuery.data?.projects ?? []} />
      </ul>
    </div>
  )
}

export default withTrpc(ProjectsList)
