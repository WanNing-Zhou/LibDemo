import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
// import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    root: './examples',
    plugins: [
        vue(),
        vueJsx(),
    ],
    build: {
        minify: false,
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '',
            },
        },
    },
})