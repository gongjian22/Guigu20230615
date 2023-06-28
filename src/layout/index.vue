<template>
  <div class="layout_container">
    <div class="layout_slider" :class="{ fold: layoutSettingStore.fold }">
      <Logo />
      <el-scrollbar class="scrollBar">
        <el-menu
          background-color="#001529"
          text-color="#fff"
          :default-active="route.path"
          :collapse="layoutSettingStore.fold"
        >
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar" :class="{ fold: layoutSettingStore.fold }">
      <Tabbar />
    </div>
    <div class="layout_main" :class="{ fold: layoutSettingStore.fold }">
      <!-- <router-view></router-view> -->
      <Main />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user'
import useLayoutSettingStore from '@/store/modules/setting'

let layoutSettingStore = useLayoutSettingStore()
const route = useRoute()

let userStore = useUserStore()
</script>

<script lang="ts">
export default {
  name: 'Layout'
}
</script>

<style scoped lang="less">
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #001529;
}

.layout_container {
  // color: aliceblue;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: #fff;
    width: 260px;
    height: 100vh;
    background-color: #001529;
    transition: all 0.3s;
    &.fold {
      width: 50px;
    }
    .scrollBar {
      width: 100%;
      height: calc(100vh - 50px);
      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    position: absolute;
    width: calc(100% - 260px);
    height: 50px;
    top: 8px;
    left: 260px;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - 50px);
      left: 50px;
    }
  }

  .layout_main {
    position: absolute;
    overflow: auto;
    width: calc(100% - 260px);
    height: calc(100vh - 50px);
    background-color: yellow;
    left: 268px;
    top: 58px;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - 50px);
      left: 50px;
    }
  }
}
</style>
