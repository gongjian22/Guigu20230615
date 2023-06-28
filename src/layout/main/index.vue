<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout的子路由 -->
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting'
import { nextTick, ref, watch } from 'vue'
let LayoutSettingStore = useLayoutSettingStore()

let flag = ref(true)
watch(
  () => LayoutSettingStore.refesh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  }
)
</script>

<style lang="less" scoped></style>
