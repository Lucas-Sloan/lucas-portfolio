import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        svgProps: {
          width: "100%",
          height: "100%",
        },
        memo: true,
        icon: false,
      },
    }),
  ],
});