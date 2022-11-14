import { prismaClient } from '@pt/prisma'
import { projectsCsvFilename } from '@pt/project/projectsDownload'

const Stats = async () => {
  const projectsCount = await prismaClient.project.count()
  const downloadFilename = projectsCsvFilename()

  return (
    <>
      <div className="fr-grid-row fr-pt-8v">
        <h2>Territoires de solutions</h2>
      </div>
      <div className="fr-grid-row fr-mt-2v fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-6">
          <div className="fr-card">
            <div className="fr-card__body">
              <div className="fr-card__content">
                <h4 className="fr-card__title">
                  <span className="fr-icon-folder-2-fill fr-mr-2v" />
                  Projets
                </h4>
                <div className="fr-card__desc fr-pt-4v">
                  <p>{projectsCount} projets ont été enregistrés.</p>
                  <a
                    className="fr-btn fr-btn--icon-left fr-icon-download-line"
                    href="/api/projects/download"
                    download={downloadFilename}
                  >
                    Télécharger au format CSV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Stats
