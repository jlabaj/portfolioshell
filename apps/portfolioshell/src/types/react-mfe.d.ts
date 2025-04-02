declare module 'reactMFE' {
  interface ReactMFE {
    mount: (containerId: string) => void;
    unmount: (containerId: string) => void;
  }

  const ReactMFE: ReactMFE;
  export default ReactMFE;
}