import Link from 'next/link'

const PublicHeader = () => {
  return (
    <header role="banner" className="fr-header">
      <div className="fr-header__body">
        <div className="fr-container">
          <div className="fr-header__body-row">
            <div className="fr-header__brand fr-enlarge-link">
              <div className="fr-header__brand-top">
                <div className="fr-header__logo">
                  <Link
                    href="/"
                    aria-current="page"
                    target="_self"
                    title="Territoires de solutions"
                    className="nuxt-link-exact-active nuxt-link-active"
                  >
                    <p className="fr-logo">
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
                  </Link>
                </div>
                <div className="fr-header__operator">
                  <h2>Territoires de solutions</h2>
                </div>
                <div className="fr-header__navbar">
                  <button
                    id="fr-btn-menu-mobile"
                    data-fr-opened="false"
                    aria-controls="modal-menu-mobile"
                    aria-haspopup="menu"
                    title="Menu"
                    className="fr-btn--menu fr-btn"
                    data-fr-js-modal-button="true"
                  >
                    Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="modal-menu-mobile"
        className="fr-header__menu fr-modal"
        data-fr-js-modal="true"
        data-fr-js-header-modal="true"
      >
        <div className="fr-container">
          <button
            aria-controls="modal-menu-mobile"
            className="fr-btn--close fr-btn"
            data-fr-js-modal-button="true"
          >
            Fermer
          </button>
          <div className="fr-header__menu-links">
            <ul className="fr-links-group" data-fr-js-header-links="true">
              <li>
                <Link
                  href="/auth/signin"
                  target="_self"
                  className="fr-btn fr-btn--icon-left fr-icon-account-line"
                >
                  Espace ANCT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PublicHeader
