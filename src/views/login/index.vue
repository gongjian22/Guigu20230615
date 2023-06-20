<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>hello</h1>
          <h2>welcome to guigu!</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="default" @click="">login</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'

let loginForm = reactive({
  username: 'admin',
  password: 123456
})
</script>

<style scoped lang="less">
.login_container {
  width: 100%;
  height: 100vh;
  background-color: pink;
  .login_form {
    padding: 20px;
    position: relative;
    width: 80%;
    top: 30vh;
    background-color: rgb(69, 102, 82);
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
      color: white;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
