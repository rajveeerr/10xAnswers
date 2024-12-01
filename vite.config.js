import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: '10xAnswers',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'recoil', 'react-markdown', 'react-syntax-highlighter', 'react-rnd', 'uuid'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'recoil': 'Recoil',
          'react-markdown': 'ReactMarkdown',
          'react-syntax-highlighter': 'ReactSyntaxHighlighter',
          'react-rnd': 'ReactRnd',
          'uuid': 'uuid'
        }
      }
    }
  }
})
