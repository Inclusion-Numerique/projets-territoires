import { SendVerificationRequestParams } from 'next-auth/providers'
import { createTransport } from 'nodemailer'
import {
  emailSignin,
  emailSigninText,
} from '@pt/mail/templates/emailSignin.mjml'
import { compileMjml } from '@pt/mail/mjml'

export const sendVerificationRequest = async ({
  url,
  provider,
  identifier,
}: SendVerificationRequestParams) => {
  const { host } = new URL(url)
  const transport = createTransport(provider.server)
  const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Connexion à La France des solutions`,
    text: emailSigninText({ url, host }),
    html: compileMjml(emailSignin({ url, host })),
  })
  const failed = result.rejected.concat(result.pending).filter(Boolean)
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`)
  }
}
