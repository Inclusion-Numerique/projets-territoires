import { PropsWithChildren } from 'react'
import styles from '@pt/app/(public)/styles.module.scss'

const ProjectsLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className={styles.cover}>
        <div className="fr-container fr-py-6w">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-offset-md-2 fr-col-md-8">
              <h4 className={`fr-display--xs ${styles.jumboText}`}>
                Retrouvez ici les projets et réalisations des collectivités.
              </h4>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

export default ProjectsLayout
