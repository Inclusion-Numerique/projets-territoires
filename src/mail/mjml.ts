import { minify, Options } from 'html-minifier'
import mjml2html from 'mjml'
import { MJMLParsingOptions } from 'mjml-core'

const MJML_OPTIONS: MJMLParsingOptions = { validationLevel: 'strict' }
const MINIFIER_OPTIONS: Options = {
  collapseWhitespace: true,
  conservativeCollapse: false,
}

export function compileMjml(mjmlTemplate: string): string {
  const result = mjml2html(mjmlTemplate, MJML_OPTIONS)
  if (result.errors.length > 0) {
    for (const error of result.errors) {
      console.error(error.formattedMessage)
    }
    throw new Error(
      `Could not compile template ${result.errors
        .map((e) => e.formattedMessage)
        .join(', ')}`,
    )
  }
  return minify(result.html, MINIFIER_OPTIONS)
}
