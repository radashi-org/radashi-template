import { vitestRadashi } from 'radashi-helper/vitest'
import { defineConfig } from 'vitest/config'

const resolve = (specifier: string) =>
  new URL(import.meta.resolve(specifier)).pathname

export default defineConfig(env => ({
  test: {
    globals: true,
    include: ['tests/**/*.test.ts'],
    benchmark: {
      include: ['benchmarks/**/*.bench.ts'],
    },
    coverage: {
      thresholds: { 100: true },
      include: ['src/**'],
    },
    setupFiles: env.mode === 'benchmark' ? ['benchmarks/globals.ts'] : [],
  },
  resolve: {
    alias: {
      radashi: resolve('./mod.js'),
    },
  },
  plugins: [vitestRadashi()],
}))
