import React from 'react';

interface ReactButtonProps {
  text: string;
}

const ReactButton: React.FC<ReactButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default ReactButton; 