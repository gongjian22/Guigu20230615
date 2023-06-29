<template>
  <el-button type="primary" size="small" icon="Refresh" circle @click="updateRefesh"></el-button>
  <el-button type="primary" size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button type="primary" size="small" icon="Setting" circle></el-button>
  <img :src="useStore.avatar" alt="" />
  <el-dropdown>
    <span class="el-dropdown-link">
      admin{{ useStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'

let router = useRouter()
let route = useRoute()
let useStore = useUserStore()
let LayoutSettingStore = useLayoutSettingStore()

const updateRefesh = () => {
  LayoutSettingStore.refesh = !LayoutSettingStore.refesh
}

const fullScreen = () => {
  console.log(document.fullscreenElement)
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const logout = () => {
  useStore.userLogout()
  router.push({ path: '/login', query: { redirect: route.path } })
}
</script>

<script lang="ts">
export default {
  name: 'Setting'
}
</script>

<style scoped lang="less">
img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 15px;
  margin-right: 10px;
}
</style>
