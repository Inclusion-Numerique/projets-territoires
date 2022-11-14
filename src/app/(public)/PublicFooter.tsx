import Link from 'next/link'
import Image from 'next/image'

const PublicFooter = () => {
  return (
    <footer id="footer" role="contentinfo" className="fr-footer">
      <div className="fr-container">
        <div className="fr-footer__body fr-footer__body--operator">
          <div className="fr-footer__brand fr-enlarge-link">
            <a
              href="https://www.ecologie.gouv.fr/"
              title="Site Web du Ministère de la Transition écologique et de la Cohésion des territoires"
              className="fr-footer__brand-link"
            >
              <p className="fr-logo fr-logo--sm">
                Ministère
                <br />
                de la transition
                <br />
                écologique
                <br />
                et de la cohésion
                <br />
                des territoires
              </p>
            </a>
          </div>
          <div className="fr-ml-4v">
            <div className="fr-footer__brand fr-enlarge-link">
              <a
                href="https://agence-cohesion-territoires.gouv.fr/"
                title="Site Web de l'Agence Nationale de la Cohésion des Territoires"
                className="fr-footer__brand-link"
              >
                <Image
                  src="/images/logo-anct.svg"
                  alt="Logo de l'Agence Nationale de la Cohésion des Territoires"
                  width={200}
                  height={200}
                  className="fr-footer__logo"
                />
              </a>
            </div>
          </div>
          <div className="fr-footer__content">
            <ul className="fr-footer__content-list">
              <li className="fr-footer__content-item">
                <a
                  href="https://gouvernement.fr"
                  className="fr-footer__content-link"
                >
                  gouvernement.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  href="https://service-public.fr"
                  className="fr-footer__content-link"
                >
                  service-public.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  href="https://data.gouv.fr"
                  className="fr-footer__content-link"
                >
                  data.gouv.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  href="https://beta.gouv.fr"
                  className="fr-footer__content-link"
                >
                  beta.gouv.fr
                </a>
              </li>
            </ul>
            <div
              className="fr-grid-row fr-grid-row fr-mt-4v"
              style={{ width: '100%' }}
            >
              <Link
                href="/auth/signin"
                target="_self"
                className="fr-btn fr-btn--sm fr-btn--icon-left fr-btn--tertiary fr-icon-user-setting-line"
              >
                Espace ANCT
              </Link>
            </div>
          </div>
        </div>
        <div className="fr-footer__bottom">
          <ul className="fr-footer__bottom-list">
            <li className="fr-footer__bottom-item">
              <Link
                href="/accessibility-statement"
                className="fr-footer__bottom-link"
              >
                Accessibilité: non conforme
              </Link>
            </li>
          </ul>
          <div className="fr-footer__bottom-copy">
            <p>
              Sauf mention contraire, tous les contenus de ce site sont sous{' '}
              <a
                href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
                target="_blank"
                rel="noreferrer"
              >
                licence etalab-2.0
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default PublicFooter
