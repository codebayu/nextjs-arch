import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      outDir: 'dist',
      rollupTypes: false,
    }),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        ui: 'src/ui/index.ts',
        service: 'src/service/index.ts',
      },
      formats: ['es'],
      fileName: (format, entryName) => {
        return entryName === 'index' ? 'index.js' : `${entryName}/index.js`;
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: true,
    emptyOutDir: true,
  },
});
