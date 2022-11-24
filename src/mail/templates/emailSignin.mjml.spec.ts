import { mjmlTemplateOutputFactory } from '@pt/mail/outputTemplateHtml'
import { emailSignin } from '@pt/mail/templates/emailSignin.mjml'

describe('Template: emailSignin', () => {
  const output = mjmlTemplateOutputFactory('emailSignin')

  it('Compiles hello world mjml template and uses translations', () => {
    const result = emailSignin({
      url: 'https://test.local?token=oui',
      host: 'https://host.local',
    })
    expect(result).toContain('Connexion')
    expect(result).toContain('https://test.local?token=oui')

    output(result)
  })
})
