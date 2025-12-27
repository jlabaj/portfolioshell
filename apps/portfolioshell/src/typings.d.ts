// src/typings.d.ts
declare module 'http://localhost:4173/react-mf.js' {
    export type MountProps = {
      userId?: string;
      onNavigate?: (url: string) => void;
    };
  
    export function mount(el: HTMLElement, props?: MountProps): () => void;
  }
  