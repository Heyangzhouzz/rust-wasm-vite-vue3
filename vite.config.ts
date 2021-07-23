import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueRsw from 'vite-plugin-rsw'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx(), vueRsw({
    crates:['rustmain']
  })]
})
