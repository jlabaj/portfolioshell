
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "@angular/common": async () => {
          let pkg = await import("__mf__virtual/portfolioshell__prebuild___mf_0_angular_mf_1_common__prebuild__.js");
            return pkg;
        }
      ,
        "@angular/compiler": async () => {
          let pkg = await import("__mf__virtual/portfolioshell__prebuild___mf_0_angular_mf_1_compiler__prebuild__.js");
            return pkg;
        }
      ,
        "@angular/core": async () => {
          let pkg = await import("__mf__virtual/portfolioshell__prebuild___mf_0_angular_mf_1_core__prebuild__.js");
            return pkg;
        }
      ,
        "@angular/forms": async () => {
          let pkg = await import("__mf__virtual/portfolioshell__prebuild___mf_0_angular_mf_1_forms__prebuild__.js");
            return pkg;
        }
      ,
        "@angular/platform-browser": async () => {
          let pkg = await import("__mf__virtual/portfolioshell__prebuild___mf_0_angular_mf_1_platform_mf_2_browser__prebuild__.js");
            return pkg;
        }
      ,
        "@angular/platform-browser-dynamic": async () => {
          let pkg = await import("__mf__virtual/portfolioshell__prebuild___mf_0_angular_mf_1_platform_mf_2_browser_mf_2_dynamic__prebuild__.js");
            return pkg;
        }
      ,
        "@angular/router": async () => {
          let pkg = await import("__mf__virtual/portfolioshell__prebuild___mf_0_angular_mf_1_router__prebuild__.js");
            return pkg;
        }
      ,
        "react": async () => {
          let pkg = await import("__mf__virtual/portfolioshell__prebuild__react__prebuild__.js");
            return pkg;
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/portfolioshell__prebuild__react_mf_2_dom__prebuild__.js");
            return pkg;
        }
      ,
        "rxjs": async () => {
          let pkg = await import("__mf__virtual/portfolioshell__prebuild__rxjs__prebuild__.js");
            return pkg;
        }
      ,
        "tslib": async () => {
          let pkg = await import("__mf__virtual/portfolioshell__prebuild__tslib__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "@angular/common": {
            name: "@angular/common",
            version: "21.0.6",
            scope: ["default"],
            loaded: false,
            from: "portfolioshell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@angular/common"}' must be provided by host`);
              }
              usedShared["@angular/common"].loaded = true
              const {"@angular/common": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^21.0.6",
              
            }
          }
        ,
          "@angular/compiler": {
            name: "@angular/compiler",
            version: "21.0.6",
            scope: ["default"],
            loaded: false,
            from: "portfolioshell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@angular/compiler"}' must be provided by host`);
              }
              usedShared["@angular/compiler"].loaded = true
              const {"@angular/compiler": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^21.0.6",
              
            }
          }
        ,
          "@angular/core": {
            name: "@angular/core",
            version: "21.0.6",
            scope: ["default"],
            loaded: false,
            from: "portfolioshell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@angular/core"}' must be provided by host`);
              }
              usedShared["@angular/core"].loaded = true
              const {"@angular/core": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^21.0.6",
              
            }
          }
        ,
          "@angular/forms": {
            name: "@angular/forms",
            version: "21.0.6",
            scope: ["default"],
            loaded: false,
            from: "portfolioshell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@angular/forms"}' must be provided by host`);
              }
              usedShared["@angular/forms"].loaded = true
              const {"@angular/forms": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^21.0.6",
              
            }
          }
        ,
          "@angular/platform-browser": {
            name: "@angular/platform-browser",
            version: "21.0.6",
            scope: ["default"],
            loaded: false,
            from: "portfolioshell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@angular/platform-browser"}' must be provided by host`);
              }
              usedShared["@angular/platform-browser"].loaded = true
              const {"@angular/platform-browser": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^21.0.6",
              
            }
          }
        ,
          "@angular/platform-browser-dynamic": {
            name: "@angular/platform-browser-dynamic",
            version: "21.0.6",
            scope: ["default"],
            loaded: false,
            from: "portfolioshell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@angular/platform-browser-dynamic"}' must be provided by host`);
              }
              usedShared["@angular/platform-browser-dynamic"].loaded = true
              const {"@angular/platform-browser-dynamic": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^21.0.6",
              
            }
          }
        ,
          "@angular/router": {
            name: "@angular/router",
            version: "21.0.6",
            scope: ["default"],
            loaded: false,
            from: "portfolioshell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@angular/router"}' must be provided by host`);
              }
              usedShared["@angular/router"].loaded = true
              const {"@angular/router": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^21.0.6",
              
            }
          }
        ,
          "react": {
            name: "react",
            version: "19.2.3",
            scope: ["default"],
            loaded: false,
            from: "portfolioshell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react"}' must be provided by host`);
              }
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.1.0",
              
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.2.3",
            scope: ["default"],
            loaded: false,
            from: "portfolioshell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react-dom"}' must be provided by host`);
              }
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.1.0",
              
            }
          }
        ,
          "rxjs": {
            name: "rxjs",
            version: "7.8.2",
            scope: ["default"],
            loaded: false,
            from: "portfolioshell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"rxjs"}' must be provided by host`);
              }
              usedShared["rxjs"].loaded = true
              const {"rxjs": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^7.8.2",
              
            }
          }
        ,
          "tslib": {
            name: "tslib",
            version: "2.8.1",
            scope: ["default"],
            loaded: false,
            from: "portfolioshell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"tslib"}' must be provided by host`);
              }
              usedShared["tslib"].loaded = true
              const {"tslib": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^2.8.1",
              
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      