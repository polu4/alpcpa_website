import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'security-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Content Security Policy - Restrict resource loading
          res.setHeader(
            'Content-Security-Policy',
            [
              "default-src 'self'",
              "script-src 'self'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", // Allow Google Fonts
              "img-src 'self' data: https:",
              "font-src 'self' data: https://fonts.gstatic.com", // Allow Google Fonts
              "connect-src 'self'",
              "frame-src https://maps.google.com", // Allow Google Maps
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          );

          // Prevent clickjacking attacks
          res.setHeader('X-Frame-Options', 'DENY');

          // Prevent MIME-type sniffing
          res.setHeader('X-Content-Type-Options', 'nosniff');

          // Control referrer information
          res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

          // Restrict browser features
          res.setHeader(
            'Permissions-Policy',
            'geolocation=(), microphone=(), camera=(), payment=()'
          );

          next();
        });
      }
    }
  ],
})
