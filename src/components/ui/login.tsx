import React from 'react';
import { signIn } from 'auth-astro/client';

const Login: React.FC = () => {
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem', height: '60dvh'}}>
                <div style={{ width: '100%' }}>
                    <button 
                        style={{ width: '100%', padding: '1rem', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                        onClick={() => signIn('github')}
                    >
                        <img 
                            src="src/icons/github-light.svg" 
                            alt="GitHub Logo" 
                            style={{ width: '25px', height: '25px' }} 
                        />
                        Login with GitHub
                    </button>
                </div>
        </div>
    );
};

export default Login;