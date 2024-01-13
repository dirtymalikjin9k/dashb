import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return defineConfig({
    plugins: [react()],
    // proxy for Backend APIs to avoid CORS issues.
    server: {
      port: 5300, // UI port
      proxy: {
        '/api': {
          target: process.env.VITE_UI_API_BASE, // see .env, DEV: "http://localhost:3050",
          changeOrigin: true,
          secure: false,
          headers: {
            "ngrok-skip-browser-warning":"any",
            'Access-Control-Allow-Headers': '*'
          },
          // Add this line to allow both GET and POST methods
          rewrite: (path) => path.replace(/^\/api/, 'api')
        }
      }
    }
  });
};
