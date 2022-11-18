import { prismaClient } from '@pt/prisma'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { dashboardRootPath } from '@pt/dashboard/dashboard'

const ProjectPage = async ({
  params: { reference },
}: {
  params: { reference: string }
}) => {
  const project = await prismaClient.project.findUnique({
    where: { reference },
    include: { community: true, attachments: true },
  })
  if (!project) {
    return notFound()
  }

  const { created, community, attachments } = project

  return (
    <>
      <div className="fr-grid-row fr-pt-8v">
        <div className="fr-col-12">
          <h2>La France des solutions</h2>
          <Link
            href={dashboardRootPath}
            className="fr-link fr-link--icon-left fr-icon-arrow-left-line"
          >
            Retour aux projets
          </Link>
        </div>
      </div>
      <div className="fr-grid-row fr-mt-8w fr-grid-row--center">
        <div className="fr-col-12 fr-col-md-8">
          <div className="fr-card">
            <div className="fr-card__body">
              <div className="fr-card__content">
                <h4 className="fr-card__title">
                  <span className="fr-icon-folder-2-fill fr-mr-2v" />
                  Projet {reference}
                </h4>
                <div className="fr-card__desc fr-pt-4v">
                  🚧 Cette page est en cours de construction
                  <ul>
                    <li>Date : {created.toLocaleDateString()}</li>
                    <li>Collectivité : {community.name}</li>
                  </ul>
                  <h6>Pièces jointes</h6>
                  {attachments.length > 0 ? (
                    <ul>
                      {attachments.map(({ name, key, type }) => (
                        <li key={key}>{name}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>Aucune pièce jointe</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProjectPage
