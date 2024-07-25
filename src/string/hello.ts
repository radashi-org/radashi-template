/**
 * Returns a greeting in the specified language.
 *
 * @example
 * ```ts
 * hello('World') // "Hello, World!"
 * hello('World', 'fr') // "Bonjour, World!"
 * ```
 */
export function hello(subject: string, lang?: string) {
  const hello = lang === 'fr' ? 'Bonjour' : 'Hello'
  return `${hello}, ${subject}!`
}
