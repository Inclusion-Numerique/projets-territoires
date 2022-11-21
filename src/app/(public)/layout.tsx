import { PropsWithChildren } from 'react'
import PublicHeader from '@pt/app/(public)/PublicHeader'
import PublicFooter from '@pt/app/(public)/PublicFooter'
import { PrivateConfig } from '@pt/config'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

const PublicLayout = ({ children }: PropsWithChildren) => {
  // Disable static rendering
  headers()

  const openingTime = PrivateConfig.openingTime
  if (openingTime && new Date() < new Date(openingTime)) {
    return redirect('/salon-des-maires')
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}
    >
      <PublicHeader />
      <div style={{ flex: 1 }}>
        <div>{children}</div>
      </div>
      <PublicFooter />
    </div>
  )
}

export default PublicLayout
