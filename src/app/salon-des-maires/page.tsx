import { PrivateConfig } from '@pt/config'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

const SalonDesMairesPage = () => {
  // Disable static rendering
  headers()

  const openingTime = PrivateConfig.openingTime
  if (!openingTime || new Date() >= new Date(openingTime)) {
    return redirect('/')
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url('/images/village.jpg')",
      }}
    >
      <h1 className="fr-display--md" style={{ color: 'white' }}>
        La France des solutions
      </h1>
      <div
        className="fr-card fr-card--shadow fr-mt-8v fr-p-16v"
        style={{
          minWidth: '50%',
          minHeight: '40vh',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>Ouverture du site prochainement</h2>
        <p className="fr-mt-8v fr-text--lead">
          La France des solutions sera présentée par Christophe Béchu, Ministre
          la transition écologique et de la cohésion des territoires lors du
          Salon des Maires et des collectivités locales.
        </p>
        <p className="fr-text--lead">
          La plateforme sera accessible le 22 novembre matin.
        </p>
      </div>
    </div>
  )
}

export default SalonDesMairesPage
