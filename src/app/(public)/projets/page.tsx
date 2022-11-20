'use client'

import { District } from '@pt/projethoteque/legacyProjects'
import { ProjectsFilters } from '@pt/app/(public)/projets/ProjectsFilters'
import { ProjectsCategories } from '@pt/app/(public)/projets/ProjectsCategories'
import ProjectsList from '@pt/app/(public)/projets/ProjectsList'
import { searchParamAsArray } from '@pt/utils/searchParams'
import { Category } from '@pt/anctProjects'

const ProjectsPage = ({
  searchParams,
}: {
  searchParams?: {
    thematiques?: string[] | string
    regions?: string[] | string
  }
}) => {
  const activeCategoriesFilters = searchParamAsArray<Category>(
    searchParams?.thematiques,
  )
  const activeDistrictsFilters = searchParamAsArray<District>(
    searchParams?.regions,
  )

  return (
    <div
      className="fr-container fr-background-default--grey fr-p-0"
      style={{
        marginTop: '-25vh',
        boxShadow: '0 0 0 1px var(--border-default-grey)',
      }}
    >
      <div className="fr-grid-row fr-p-0">
        <div className="fr-col-12 fr-col-md-4 fr-p-0 fr-background-alt--grey">
          <aside
            className="fr-sidemenu fr-sidemenu--sticky fr-p-0"
            style={{
              boxShadow: 'inset -1px 0 0 0 var(--border-default-grey)',
            }}
            aria-label="Menu latéral"
          >
            <ProjectsFilters
              routingCategoriesFilters={activeCategoriesFilters}
              routingDistrictsFilters={activeDistrictsFilters}
            />
          </aside>
        </div>
        <div className="fr-col-12 fr-col-md-8">
          <ProjectsCategories />
          <div className="fr-px-8v fr-pb-8v">
            <ProjectsList initialProjects={null} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectsPage
