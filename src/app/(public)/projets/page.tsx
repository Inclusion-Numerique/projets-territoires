import { prismaClient } from '@pt/prisma'
import { categoryToLegacyCategory } from '@pt/projethoteque/legacyProjects'
import { LegacyProjectCard } from '@pt/app/(public)/projets/LegacyProjectCard'

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
            category: {
              in: activeCategoriesFilters.map(categoryToLegacyCategory),
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
    <div>
      <ul className="fr-raw-list">
        {projects.map((project) => (
          <LegacyProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  )
}
export default ProjectsPage
