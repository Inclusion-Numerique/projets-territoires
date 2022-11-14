import ProjectForm from '@pt/app/(public)/ProjectForm'
import styles from '@pt/app/(public)/styles.module.scss'

export default function ProjectPage() {
  return (
    <>
      <div className={styles.cover}>
        <div className="fr-container fr-py-6w">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-offset-md-2 fr-col-md-8">
              <h1 className={`fr-display--sm ${styles.jumboText}`}>
                Ensemble, partageons les solutions des territoires
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="fr-py-4v fr-background-alt--grey">
        <div className="fr-container">
          <div className="fr-grid-row fr-mt-8v fr-mb-8v fr-grid-row--center">
            <div
              className={`fr-col-12 fr-col-md-10 fr-col-lg-8 ${styles.jumboCard}`}
            >
              <ProjectForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
