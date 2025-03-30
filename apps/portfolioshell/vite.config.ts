/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite',
    build: {
      outDir: '../../dist/apps/portfolioshell/client',
      reportCompressedSize: true,
      target: ['es2020'],
      rollupOptions: {
        external: ['react-mfe', 'react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled'],
        output: {
          globals: {
            'react-mfe': 'ReactMFE',
            'react': 'React',
            'react-dom': 'ReactDOM',
            '@mui/material': 'MaterialUI',
            '@emotion/react': 'EmotionReact',
            '@emotion/styled': 'EmotionStyled'
          }
        }
      },
    },
    optimizeDeps: {
      exclude: ['react-mfe']
    },
    plugins: [
      analog({
        ssr: false,
        static: true,
        prerender: {
          routes: [],
        },
      }),
      nxViteTsPaths(),
      {
        name: 'external-module-resolver',
        resolveId(id) {
          if (id === 'react-mfe') {
            return 'https://websaving-cs.web.app/react-mfe.js';
          }
          if (id === 'react') {
            return path.resolve(__dirname, '../../node_modules/react/index.js');
          }
          if (id === 'react-dom') {
            return path.resolve(__dirname, '../../node_modules/react-dom/index.js');
          }
          if (id === '@mui/material') {
            return path.resolve(__dirname, '../../node_modules/@mui/material/esm/index.js');
          }
          if (id === '@mui/icons-material') {
            return path.resolve(__dirname, '../../node_modules/@mui/icons-material/esm/index.js');
          }          
          if (id === '@emotion/react') {
            return path.resolve(__dirname, '../../node_modules/@emotion/react/dist/emotion-react.esm.js');
          }
          if (id === '@emotion/styled') {
            return path.resolve(__dirname, '../../node_modules/@emotion/styled/dist/emotion-styled.esm.js');
          }
        }
      }
    ],
    server: {
      fs: {
        allow: ['..'],  // Allow serving files from one level up (where node_modules is)
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
