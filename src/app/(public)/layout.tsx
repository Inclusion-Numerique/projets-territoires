import { PropsWithChildren } from 'react'
import PublicHeader from '@pt/app/(public)/PublicHeader'
import PublicFooter from '@pt/app/(public)/PublicFooter'

const PublicLayout = ({ children }: PropsWithChildren) => {
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
