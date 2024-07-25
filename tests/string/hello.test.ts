import * as _ from 'radashi'

describe('hello', () => {
  test('without language argument', () => {
    expect(_.hello('World')).toBe('Hello, World!')
  })
  test('with explicit language', () => {
    expect(_.hello('my friend', 'en')).toBe('Hello, my friend!')
    expect(_.hello('mon ami', 'fr')).toBe('Bonjour, mon ami!')
  })
  test('with unsupported language', () => {
    // Default to English.
    expect(_.hello('mi amigo', 'es')).toBe('Hello, mi amigo!')
  })
})
