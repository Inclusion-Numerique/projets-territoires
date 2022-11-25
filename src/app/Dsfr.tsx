'use client'
import Script from 'next/script'

export const Dsfr = () => (
  <>
    <Script src="/dsfr.module.min.js" />
    <Script src="/dsfr.nomodule.min.js" noModule={true} />
  </>
)
