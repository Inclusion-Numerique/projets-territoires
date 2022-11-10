import ProjectForm from '@pt/app/(public)/ProjectForm'

export default function ProjectPage() {
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
        <div className="fr-grid-row fr-mt-8v fr-grid-row--center">
          <div
            className="fr-col-12 fr-col-md-10 fr-col-lg-8"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h1 className="fr-mt-8v">Territoires de solutions</h1>
            <p className="fr-text--lead fr-mb-3w">
              Vous êtes maire ? Ce formulaire vous permet de renseigner les
              projets de votre territoire, en quelques clics.
            </p>
          </div>
        </div>
      </div>
      <div className="fr-py-4v">
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
