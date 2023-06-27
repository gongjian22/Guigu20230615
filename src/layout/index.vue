<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo />
      <el-scrollbar class="scrollBar">
        <el-menu background-color="#001529" text-color="#fff" :default-active="route.path">
          <!-- <el-menu-item index="1">processing center</el-menu-item>
          <el-menu-item index="2">pr center</el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <span>权限管理</span>
            </template>
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item 2</el-menu-item>
            <el-menu-item index="3-3">item 3</el-menu-item>
          </el-sub-menu> -->
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar">
      <Tabbar />
    </div>
    <div class="layout_main">
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

const route = useRoute()

let userStore = useUserStore()
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
    width: calc(100% - 276px);
    height: 50px;
    top: 8px;
    left: 268px;
  }

  .layout_main {
    position: absolute;
    overflow: auto;
    width: calc(100% - 260px);
    height: calc(100vh - 50px);
    background-color: yellow;
    left: 268px;
    top: 58px;
  }
}
</style>
