import React from 'react';
import { signOut } from 'auth-astro/client';

const Logout: React.FC = () => {
  return (
    <button
      style={{ 
        padding: '0.5rem 1rem', 
        backgroundColor: '#e53e3e', 
        color: '#fff', 
        border: 'none', 
        borderRadius: '5px', 
        cursor: 'pointer',
        fontWeight: 'medium'
      }}
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
};

export default Logout;