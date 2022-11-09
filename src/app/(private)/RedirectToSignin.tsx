'use client'
import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { generateSignInUrl } from '@pt/auth/generateSignInUrl'
import { getUrl } from '@pt/utils/baseUrl'

const RedirectToSignin = () => {
  const router = useRouter()
  const pathname = usePathname()
  const redirected = useRef(false)
  useEffect(() => {
    if (redirected.current) {
      return
    }
    redirected.current = true
    router.push(generateSignInUrl(getUrl(pathname ?? '/projets')))
  }, [router, pathname])
  return null
}

export default RedirectToSignin
