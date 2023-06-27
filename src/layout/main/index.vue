<template>
  <router-view v-slot="{Component}">
    <transition name="fade">
      <!-- 渲染layout的子路由 -->
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
