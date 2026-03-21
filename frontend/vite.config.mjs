import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Match docker-compose gateway host port (3001). Use 3000 if you run the gateway locally on 3000.
    proxy: {
      '/account': 'http://localhost:3001',
      '/shipment': 'http://localhost:3001',
      '/tracking': 'http://localhost:3001',
      '/notification': 'http://localhost:3001',
    },
  },
});
