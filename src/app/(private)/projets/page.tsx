const Stats = async () => {
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
                  <span className="fr-icon-warning-line fr-mr-2v" />
                  Cet espace est en construction
                </h4>
                <div className="fr-card__desc fr-pt-4v">
                  Vous pourrez consulter les projets ici.
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
