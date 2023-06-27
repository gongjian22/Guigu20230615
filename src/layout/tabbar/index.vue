<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <BreadCrumb />
    </div>
    <div class="tabbar_right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<style lang="less" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tabbar_left {
    display: flex;
    margin-left: 20px;
  }
  .tabbar_right {
    display: flex;
    align-items: center;
    .el-button{
      width:30px;
      height: 30px;
    }
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-left:15px;
      margin-right:10px;
    }
    .el-dropdown-link{
      display:flex;
      align-items:center;
      margin-right:5px;
    }
  }
}
</style>
