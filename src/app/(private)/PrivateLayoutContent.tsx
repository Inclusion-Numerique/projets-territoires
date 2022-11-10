import { SessionUser } from '@pt/auth/sessionUser'
import { FunctionComponent, ReactNode } from 'react'
import PrivateHeader from '@pt/app/(private)/PrivateHeader'
import PublicFooter from '@pt/app/(public)/PublicFooter'

const PrivateLayoutContent: FunctionComponent<{
  user: SessionUser
  children: ReactNode
}> = ({ children, user }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}
    >
      <PrivateHeader user={user} />
      <div className="fr-container" style={{ flex: 1 }}>
        <div>{children}</div>
      </div>
      <PublicFooter />
    </div>
  )
}
export default PrivateLayoutContent
