import '@pt/styles/global.css'
import '@pt/dsfr/dsfrCss'
import { PropsWithChildren } from 'react'
import DsfrClient from '@pt/dsfr/dsfrClient'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr" data-fr-theme="system" data-fr-scheme="system">
      <head>
        <meta charSet="utf-8" />
        <title>Projets des territoires</title>
        <meta name="theme-color" content="#000091" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link
          rel="shortcut icon"
          href="/favicon/favicon.ico"
          type="image/x-icon"
        />
        <link
          rel="manifest"
          href="/favicon/manifest.webmanifest"
          crossOrigin="use-credentials"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var theme = localStorage.getItem('scheme')||(window&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-fr-theme',theme);document.documentElement.setAttribute('data-fr-scheme', theme);localStorage.setItem('scheme', theme)`,
          }}
        />
        <meta name="description" content="Projets des territoires" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
      <DsfrClient />
    </html>
  )
}
