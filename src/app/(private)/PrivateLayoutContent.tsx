import { SessionUser } from '@pt/auth/sessionUser'
import { FunctionComponent, ReactNode } from 'react'
import PrivateHeader from '@pt/app/(private)/PrivateHeader'
import PrivateFooter from '@pt/app/(private)/PrivateFooter'

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
      <PrivateFooter />
    </div>
  )
}
export default PrivateLayoutContent
