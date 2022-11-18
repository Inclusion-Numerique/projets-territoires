import { PropsWithChildren } from 'react'
import { ProjectsFilters } from '@pt/app/(public)/projets/ProjectsFilters'
import styles from '@pt/app/(public)/styles.module.scss'

const ProjectsLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className={styles.cover}>
        <div className="fr-container fr-py-6w">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-offset-md-2 fr-col-md-8">
              <h1 className={`fr-display--sm ${styles.jumboText}`}>
                Retrouvez ici les projets et réalisations des collectivités.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fr-container fr-background-default--grey fr-p-0"
        style={{
          marginTop: '-30vh',
          boxShadow: '0 0 0 1px var(--border-default-grey)',
        }}
      >
        <div className="fr-grid-row fr-p-0">
          <div className="fr-col-12 fr-col-md-4 fr-p-0 fr-background-alt--grey">
            <aside
              className="fr-sidemenu fr-sidemenu--sticky fr-p-0"
              aria-label="Menu latéral"
            >
              <div className="fr-sidemenu__inner">
                <ProjectsFilters />
              </div>
            </aside>
          </div>
          <div className="fr-col-12 fr-col-md-8">{children}</div>
        </div>
      </div>
    </>
  )
}

export default ProjectsLayout
