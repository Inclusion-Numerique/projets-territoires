import Link from 'next/link'
import styles from './styles.module.scss'
import { allProjectsLink, projectCategoriesLinks } from '@pt/anctProjects'

export default function HomePage() {
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
      <div className="fr-container fr-py-6w">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12 fr-col-offset-md-2 fr-col-md-8">
            <div
              className={`fr-background-default--grey fr-p-6w ${styles.jumboCard}`}
            >
              <p className="fr-text--lead">
                «
                <strong>
                  La transition écologique est le défi majeur pour notre pays.
                </strong>{' '}
                Les collectivités territoriales sont en première ligne pour y
                faire face. Le partage des solutions concrètes, des réussites
                faites ici ou là, est indispensable pour accélération la
                transition écologique de nos territoires. Ensemble, partageons
                les solutions. »
              </p>
              <p
                className="fr-text--lead fr-mb-2v"
                style={{ textAlign: 'right' }}
              >
                Christophe Béchu
              </p>
              <p className="fr-text fr-mb-0" style={{ textAlign: 'right' }}>
                Ministre de la Transition écologique <br />
                et de la Cohésion des territoires
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fr-py-4v">
        <div className="fr-container">
          <div className="fr-grid-row fr-mt-1v fr-mb-8v fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-md-6">
              <div className="fr-btns-group fr-btns-group--lg">
                <Link href="/projet" className="fr-btn fr-py-8v">
                  Je suis maire, je partage mes solutions&nbsp;!
                </Link>
              </div>
            </div>
            <div className="fr-col-12 fr-col-md-6">
              <div className="fr-btns-group fr-btns-group--lg">
                <Link
                  href={allProjectsLink}
                  className="fr-btn fr-btn--secondary fr-py-8v"
                  target="_blank"
                  rel="noreferrer"
                >
                  Je suis maire, je cherche des solutions&nbsp;!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fr-background-alt--blue-france">
        <div className="fr-container fr-py-6w">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12">
              <h2>Découvrez des solutions partout en France</h2>
            </div>
            {projectCategoriesLinks.map(({ url, title }) => (
              <div key={title} className="fr-col-12 fr-col-md-6 fr-col-lg-4">
                <div className="fr-tile fr-tile--horizontal fr-enlarge-link">
                  <div className="fr-tile__body fr-m-4v">
                    <h4 className="fr-tile__title fr-mb-0">
                      <a href={url} target="_blank" rel="noreferrer">
                        {title}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="fr-container fr-pt-6w fr-pb-10w">
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12">
              <h2>Questions fréquentes</h2>
            </div>
            <div
              className="fr-accordions-group"
              data-fr-js-accordions-group="true"
              style={{ width: '100%' }}
            >
              <section className="fr-accordion">
                <h3 className="fr-accordion__title">
                  <button
                    className="fr-accordion__btn"
                    aria-expanded="false"
                    aria-controls="accordion-1"
                    data-fr-js-collapse-button="true"
                  >
                    Quelle est la première question ?
                  </button>
                </h3>
                <div
                  className="fr-collapse"
                  id="accordion-1"
                  data-fr-js-collapse="true"
                >
                  <p>Réponse à cette question.</p>
                  <p>En construction.</p>
                </div>
              </section>
              <section className="fr-accordion">
                <h3 className="fr-accordion__title">
                  <button
                    className="fr-accordion__btn"
                    aria-expanded="false"
                    aria-controls="accordion-2"
                    data-fr-js-collapse-button="true"
                  >
                    Quelle est la seconde question ?
                  </button>
                </h3>
                <div
                  className="fr-collapse"
                  id="accordion-2"
                  data-fr-js-collapse="true"
                >
                  <p>Réponse à cette question.</p>
                  <p>En construction.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
