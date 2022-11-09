import ProjectForm from '@pt/app/(public)/ProjectForm'

export default function Home() {
  return (
    <>
      <div className="fr-container">
        <div className="fr-grid-row fr-mt-8v fr-grid-row--gutters">
          <div
            className="fr-col-12 fr-col-md-6"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <picture>
              <source srcSet="/images/logo-anct.svg" type="image/svg" />
              <img
                className="fr-responsive-img"
                src="/images/logo-anct.svg"
                alt="Logo ANCT"
                style={{ maxWidth: 480 }}
              />
            </picture>
            <h1 className="fr-mt-8v">Territoires de solutions</h1>
            <p className="fr-text--lead fr-mb-3w">
              Destiné aux maires, ce service vous permet de renseigner les
              projets de vos territoires.
            </p>
            <p className="fr-text--sm fr-mb-5w">
              Ces projets seront ensuite intégrés dans la projethotèque du site
              de l&apos;ANCT.
            </p>
          </div>
          <div
            className="fr-col-12 fr-col-md-6"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <picture>
              <source
                srcSet="/artwork/pictograms/map/location-france.svg"
                type="image/svg"
              />
              <img
                className="fr-responsive-img"
                srcSet="/artwork/pictograms/map/location-france.svg"
                alt="Illustration carte de france"
                style={{ maxWidth: 480, maxHeight: 480 }}
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="fr-py-4v" style={{ backgroundColor: '#2A3173' }}>
        <div className="fr-container">
          <div className="fr-grid-row fr-mt-8v fr-mb-8v fr-grid-row--center">
            <div className="fr-col-12 fr-col-md-10 fr-col-lg-8">
              <ProjectForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
