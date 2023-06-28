<template>
  <h1>一级路由Home</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useUserStore from '@/store/modules/user'

let UserStore = useUserStore()

onMounted(() => {
  UserStore.userInfo()
})
</script>

<style lang="less" scoped></style>
