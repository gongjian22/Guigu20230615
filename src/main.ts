import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import App from '@/App.vue'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})


// svg配置插件代码
import 'virtual:svg-icons-register'

import axios from 'axios'
axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'adimin',
    password:'111111'
  }
})
app.mount('#app')
