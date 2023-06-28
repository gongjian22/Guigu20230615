<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="fold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      class="breadcrumb_item"
      v-for="(item, index) in route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span></el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const route = useRoute()

let LayoutSettingStore = useLayoutSettingStore()

let { fold } = storeToRefs(LayoutSettingStore)
const changeIcon = () => {
  LayoutSettingStore.changeFold()
}
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb'
}
</script>

<style scoped lang="less">
.breadcrumb_item {
  display: flex;
  align-items: center;
}
</style>
