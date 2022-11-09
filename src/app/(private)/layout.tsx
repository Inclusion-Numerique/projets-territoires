import { PropsWithChildren } from 'react'
import { getSessionUser } from '@pt/auth/getSessionUser'
import PrivateLayoutContent from '@pt/app/(private)/PrivateLayoutContent'
import RedirectToSignin from '@pt/app/(private)/RedirectToSignin'

const PrivateLayout = async ({ children, ...props }: PropsWithChildren) => {
  const user = await getSessionUser()

  if (!user) {
    return <RedirectToSignin />
  }

  return (
    <PrivateLayoutContent user={user} {...props}>
      {children}
    </PrivateLayoutContent>
  )
}

export default PrivateLayout
