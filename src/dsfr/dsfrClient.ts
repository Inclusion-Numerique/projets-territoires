'use client'
import 'client-only'
import { useEffect } from 'react'
import { loadScript } from '@pt/utils/loadScript'

// This file is to enable dsfr js code lazily
const DsfrClient = () => {
  useEffect(() => {
    // TODO The correct way to load 3rd party script is with the next/script component, not yet stable
    // https://github.com/vercel/next.js/issues/42519
    // https://beta.nextjs.org/docs/optimizing/scripts
    loadScript('/dsfr.module.min.js')
    loadScript('/dsfr.nomodule.min.js', { nomodule: true })
  })
  return null
}

export default DsfrClient
