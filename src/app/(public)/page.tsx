import ProjectForm from '@pt/app/(public)/ProjectForm'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--center fr-pt-8v fr-hidden-md">
          <picture>
            <source srcSet="/images/logo-anct.svg" type="image/svg" />
            <img
              className="fr-responsive-img"
              src="/images/logo-anct.svg"
              alt="Logo ANCT"
              style={{ maxWidth: 480 }}
            />
          </picture>
        </div>
        <div className="fr-grid-row fr-mt-8v fr-grid-row--gutters">
          <div
            className="fr-col-12 fr-col-md-6"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h1 className="fr-mt-8v">
              Ensemble, partageons les solutions des territoires
            </h1>
            <p className="fr-text--lead">
              « 
              <strong>
                La transition écologique est le défi majeur pour notre pays.
              </strong>{' '}
              Les collectivités territoriales sont en première ligne pour y
              faire face. Le partage des solutions concrètes, des réussites
              faites ici ou là, est indispensable pour accélération la
              transition écologique de nos territoires. Ensemble, partageons les
              solutions. »
            </p>
            <p className="fr-text--lead" style={{ textAlign: 'right' }}>
              Christophe Béchu
            </p>
            <p className="fr-text--sm" style={{ textAlign: 'right' }}>
              Ministre de la Transition écologique et de la Cohésion des
              territoires
            </p>
          </div>
        </div>
      </div>
      <div className="fr-py-4v">
        <div className="fr-container">
          <div className="fr-grid-row fr-mt-8v fr-mb-8v fr-grid-row--center">
            <div className="fr-col-12 fr-col-md-10 fr-col-lg-8">
              <Link href="/projet" className="fr-btn">
                Participer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
