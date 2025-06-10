// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css' // ← 引入你刚刚写的 CSS 文件

export default {
    ...DefaultTheme,
    Layout
}
