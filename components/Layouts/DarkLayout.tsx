import { FC, ReactNode } from 'react';

const styles = {
  backgroundColor: 'rgba(200, 200, 0, 0.2)',
  padding: '10px',
  borderRadius: '5px' 
};

interface DarkLayoutProps {
  children: ReactNode
};

export const DarkLayout: FC<DarkLayoutProps> = ({ children }) => {
  return (
    <div style={styles}>
      <h3>Dark Layout</h3>
      { children }
    </div>
  );
};
