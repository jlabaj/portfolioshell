/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';
import { federation } from '@module-federation/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite',
    build: {
      outDir: '../../dist/apps/portfolioshell/client',
      reportCompressedSize: true,
      modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          '@mui/material',
          '@emotion/react',
          '@emotion/styled',
          'tslib',
          'rxjs',
          'rxjs/operators',
          'rxjs/internal/Subscription',
          '@angular/core',
          '@angular/common',
          '@angular/platform-browser',
          '@angular/platform-browser-dynamic',
          '@angular/compiler',
          '@angular/forms',
          '@angular/router'
        ],
        output: {
          format: 'es',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            '@mui/material': 'MaterialUI',
            '@emotion/react': 'EmotionReact',
            '@emotion/styled': 'EmotionStyled',
            'tslib': 'tslib',
            'rxjs': 'rxjs',
            'rxjs/operators': 'rxjs/operators',
            'rxjs/internal/Subscription': 'rxjs/internal/Subscription',
            '@angular/core': 'ng.core',
            '@angular/common': 'ng.common',
            '@angular/platform-browser': 'ng.platformBrowser',
            '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
            '@angular/compiler': 'ng.compiler',
            '@angular/forms': 'ng.forms',
            '@angular/router': 'ng.router'
          }
        }
      }
    },
    optimizeDeps: {
      include: [
        'tslib',
        'rxjs',
        'rxjs/operators',
        'rxjs/internal/Subscription',
        '@angular/core',
        '@angular/common',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/compiler',
        '@angular/forms',
        '@angular/router',
        '@emotion/react',
        '@emotion/styled',
        'react',
        'react-dom'
      ]
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
      federation({
        name: 'portfolioshell',
        filename: 'remoteEntry.js',
        remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: 'https://websaving-cs.web.app/remoteEntry.js',
          entryGlobalName: "remote",
          shareScope: "default",
        },
      },
        shared: {
          react: { singleton: true, requiredVersion: '^19.1.0' },
          'react-dom': { singleton: true, requiredVersion: '^19.1.0' },
          '@mui/material': { singleton: true, requiredVersion: '^7.0.1' },
          '@emotion/react': { singleton: true, requiredVersion: '^11.14.0' },
          '@emotion/styled': { singleton: true, requiredVersion: '^11.14.0' },
          tslib: { singleton: true },
          rxjs: { singleton: true },
          '@angular/core': { singleton: true },
          '@angular/common': { singleton: true },
          '@angular/platform-browser': { singleton: true },
          '@angular/platform-browser-dynamic': { singleton: true },
          '@angular/compiler': { singleton: true },
          '@angular/forms': { singleton: true },
          '@angular/router': { singleton: true }
        }
      })
    ],
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, './src/app'),
        '@emotion/react': path.resolve(__dirname, '../../node_modules/@emotion/react'),
        '@emotion/styled': path.resolve(__dirname, '../../node_modules/@emotion/styled')
      }
    },
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
