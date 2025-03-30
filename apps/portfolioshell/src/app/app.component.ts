import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from "@softarc/native-federation";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import ReactButton from "../react-components/ReactButton"; // Import React component

declare module 'react-mfe' {
  export function mount(containerId: string): void;
  export function unmount(containerId: string): void;
}

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  reactModule: any;

  constructor(private el: ElementRef) {}

  async ngAfterViewInit() {
    // Ensure import happens only in the browser (not during Vite processing)
    try {
      // Dynamically import the React MFE
      const reactMfe = await import('react-mfe');  // Path to the MFE
      
      // Check that the MFE mount function exists before calling
      if (reactMfe && reactMfe.mount) {
        reactMfe.mount('root');  // Mount the MFE to the container
      } else {
        console.error('React MFE mount function not found');
      }
    } catch (error) {
      console.error('Failed to load React MFE:', error);
    }
    // const { default: ReactComponent } = await loadRemoteModule({
    //   remoteEntry: 'https://websaving-cs.web.app/react-mfe.js',
    //   remoteName: 'reactMFE',
    //   exposedModule: './index',
    // });

    // console.log('Loaded React MFE:', ReactComponent);

    // const container = document.getElementById("react-container");
    // if (container) {
    //   const root = ReactDOM.createRoot(container);
    //   root.render(React.createElement(ReactButton, { text: "Click Me!" }));
    // }
  }
}

