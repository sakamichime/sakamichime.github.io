// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import 'normalize.css'
import './assets/icon/iconfont.css'
import './styles/index.less'
import './components/Spine-Player/spine-player.css'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // 拖选文本时切换 areaselect 光标
    if (typeof window !== 'undefined') {
      let selecting = false
      document.addEventListener('mousedown', (e) => {
        if (e.detail === 1) {
          selecting = false
        }
      })
      document.addEventListener('mousemove', (e) => {
        if (e.buttons === 1 && !selecting) {
          selecting = true
          document.body.classList.add('selecting')
        }
      })
      document.addEventListener('mouseup', () => {
        if (selecting) {
          selecting = false
          document.body.classList.remove('selecting')
        }
      })
    }
  },
} satisfies Theme
