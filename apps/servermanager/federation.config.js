const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'servermanager',
  exposes: {
    './ServerManagerComponent': 'apps/servermanager/src/bootstrap.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    'async_hooks',
    'node:process',
    'node:perf_hooks',
    'node:worker_threads',
    // Add further packages you don't need at runtime
  ],
  features: {
    ignoreUnusedDeps: true,
  }
});
