import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    emptyOutDir: true /** Clears the output directory before building. **/,
    lib: {
      entry: ['src/index.ts'] /** Specifies the entry file for the library. */,
      formats: ['es', 'cjs'] /** Specifies the output formats (CommonJS and ES modules). */,
    },
  },
  plugins: [dts() /** Generates a .d.ts file for the library. */],
})
