import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg配置插件代码
import 'virtual:svg-icons-register'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import App from '@/App.vue'
import router from './router'
import pinia from './store'
// import permission from './permission'
import './permission'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router).use(pinia).use(ElementPlus, {
  locale: zhCn
})




app.mount('#app')
