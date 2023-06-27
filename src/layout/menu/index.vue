<template>
  <div class="logo">
    <template v-for="(item, index) in menuList" :key="item.path">
      <el-menu-item v-if="!item.children && !item.meta.hidden" :index="item.path" @click="goRoute">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>{{ item.meta.title }}</template>
      </el-menu-item>
      <el-menu-item
        v-if="item.children && item.children.length === 1 && !item.meta.hidden"
        :index="item.children[0].path"
        @click="goRoute"
      >
        <template #title>
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <span>{{ item.children[0].meta.title }} </span>
        </template>
      </el-menu-item>
      <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children" />
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

defineProps(['menuList'])

const goRoute = (item: any) => {
  console.log(item)
  router.push(item.index)
}
</script>

<script lang="ts">
export default {
  name: 'Menu'
}
</script>

<style scoped lang="less">
.logo {
  color: #fff;
}
</style>
