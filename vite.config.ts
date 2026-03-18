import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'
import fs from 'fs'

// Plugin to handle figma:asset imports
const figmaAssetPlugin: Plugin = {
  name: 'figma-asset',
  resolveId(id) {
    if (id.startsWith('figma:asset/')) {
      return id
    }
  },
  load(id) {
    if (id.startsWith('figma:asset/')) {
      const assetHash = id.replace('figma:asset/', '').replace('.png', '')
      const assetPath = path.resolve(__dirname, `./src/assets/${assetHash}.png`)
      
      // Check if asset exists
      if (fs.existsSync(assetPath)) {
        return `export default new URL('${assetPath}', import.meta.url).href`
      }
      
      // Return a placeholder data URL if asset doesn't exist
      const placeholderDataUrl = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23f0f0f0" width="100" height="100"/%3C/svg%3E'
      return `export default "${placeholderDataUrl}"`
    }
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin,
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
