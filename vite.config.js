import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// If you deploy to https://<username>.github.io/<repo-name>/,
// base MUST match your repo name exactly (with slashes on both sides).
// If your repo IS <username>.github.io (a user/org page), set base to "/".
export default defineConfig({
  plugins: [react()],
  base: "/amna-qa-portfolio/",
})
