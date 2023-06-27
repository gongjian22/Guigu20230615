<template>
  <el-button type="primary" size="small" icon="Refresh" circle></el-button>
  <el-button type="primary" size="small" icon="FullScreen" circle></el-button>
  <el-button type="primary" size="small" icon="Setting" circle></el-button>
  <img src="../../../../Q03.jpg" alt="" />
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script></script>

<style scoped lang="less">
img{
  width: 35px;
      height: 35px;
      border-radius: 50%;
      margin-left:15px;
      margin-right:10px;
}
</style>
