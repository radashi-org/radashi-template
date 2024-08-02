import { vitestRadashi } from 'radashi-helper/vitest'
import { defineConfig } from 'vitest/config'

const resolve = (specifier: string) =>
  new URL(import.meta.resolve(specifier)).pathname

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      thresholds: { 100: true },
      exclude: ['*.config.ts', 'benchmarks/**', 'tests/**/*.test-d.ts'],
    },
    benchmark: {
      exclude: ['**/.radashi/**'],
    },
    exclude: ['**/.radashi/**', '**/node_modules/**'],
  },
  resolve: {
    alias: {
      radashi: resolve('./mod.js'),
    },
  },
  plugins: [vitestRadashi()],
})
