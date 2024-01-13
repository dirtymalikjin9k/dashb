import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './hooks/useAppContext';

import './index.css';
import './react-grid-layout.css';
import './react-grid-layout2.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(
    <React.StrictMode>
      <AuthProvider>
        <GoogleOAuthProvider clientId="557185091022-7ac4ii4kss5crk2ecl20jeee70eac0a5.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}
