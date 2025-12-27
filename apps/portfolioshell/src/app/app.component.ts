// import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
// import { RouterModule } from '@angular/router';
// // import { loadRemoteModule } from '@softarc/native-federation';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import ReactButton from "../react-components/ReactButton"; // Import React component

import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

// // declare module 'react-mfe' {
// //   export function mount(containerId: string): void;
// //   export function unmount(containerId: string): void;
// // }

// @Component({
//   imports: [RouterModule],
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent implements AfterViewInit, OnDestroy {
//   reactModule: any;
//   private root: ReactDOM.Root | null = null;

//   constructor(private el: ElementRef) {}

//   ngAfterViewInit() {
//     try {
//       console.log('Loading remote module...');

//       // const RemoteComponent = async () => {
//       //   // @ts-ignore
//       //   const module = await import('remote/remote-app');
//       //   return module.get('./remote-app')(); // Ensure the module is exporting the default component
//       // };
      
//       // Load the remote module using module federation
//       // const module = await loadRemoteModule({
//       //   remoteEntry: 'https://websaving-cs.web.app/remoteEntry.js',
//       //   remoteName: 'remote',
//       //   exposedModule: './remote-app'
//       // });
// // @ts-ignore
//       import('remote/remote-app').then(module => {
//         const RemoteComponent = module.default
//         console.log('Remote module loaded:', RemoteComponent);

//       // Get the container element
//       const container = document.getElementById("react-container");
//       if (!container) {
//         throw new Error('React container not found');
//       }

//       // Create root and render the remote app
//       this.root = ReactDOM.createRoot(container);
      
//       // Check if the module is a React component or has a default export
//       const Component = RemoteComponent;
//       if (typeof Component !== 'function') {
//         throw new Error('Remote module is not a valid React component');
//       }
      
//       this.root.render(React.createElement(Component));
//       console.log('React component mounted');

//       });
      
      
//     } catch (error) {
//       console.error('Failed to load React MFE:', error);
//       if (error instanceof Error) {
//         console.error('Error details:', {
//           message: error.message,
//           stack: error.stack,
//           name: error.name
//         });
//       }
//     }
//   }

//   ngOnDestroy() {
//     if (this.root) {
//       this.root.unmount();
//       this.root = null;
//     }
//   }
// }
@Component({
  selector: 'app-root',
  template: `<div #host></div>`
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('host', { static: true }) host!: ElementRef;
  cleanup?: () => void;

  async ngAfterViewInit() {
    const reactMf = await import(
      'http://localhost:4173/react-mf.js'
    );

    this.cleanup = reactMf.mount(
      this.host.nativeElement,
      { userId: '123' }
    );
  }

  ngOnDestroy() {
    this.cleanup?.();
  }
}


