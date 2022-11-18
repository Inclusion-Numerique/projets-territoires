import { PropsWithChildren } from 'react'
import { ProjectsFilters } from '@pt/app/(public)/projets/ProjectsFilters'

const ProjectsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="fr-container">
      <div className="fr-grid-row fr-grid-row--center">
        <h2>Les projets</h2>
      </div>
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-4">
          <ProjectsFilters />
        </div>
        <div className="fr-col-12 fr-col-md-8">{children}</div>
      </div>
    </div>
  )
}

export default ProjectsLayout
