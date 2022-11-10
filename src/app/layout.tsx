import '@pt/styles/global.css'
import '@pt/dsfr/dsfrCss'
import { PropsWithChildren } from 'react'
import DsfrClient from '@pt/dsfr/dsfrClient'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fr" data-fr-theme="light" data-fr-scheme="light">
      <head>
        <meta charSet="utf-8" />
        <title>Territoires de solutions</title>
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
        <meta name="description" content="Territoires de solutions" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
      <DsfrClient />
    </html>
  )
}
