<template>
  <div class="logo">
    <img :src="setting.logo" alt="" />
    <p>{{setting.title}}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>

<style scoped lang="less">
.logo{
  width: 100%;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 20px;
  img{
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  p{
    font-size: 20px;
  }
}
</style>
