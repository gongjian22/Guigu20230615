<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>hello</h1>
          <h2>welcome to guigu!</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" type="primary" size="default" @click="login"
              >login</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'

const $router = useRouter()

let loginForms = ref()

const userNameValidator = (ruler:any,value:any,callback:any) => {
  console.log(ruler,value,callback);
  if (/^\d{5,10}$/.test(value)) {
    callback()
  } else {
    callback(new Error('length is 5-10'))
  }
}

const rules = {
  username: [
    {validator:userNameValidator,trigger:'blur'}
  ],
  password: [
  {validator:userNameValidator,trigger:'blur'}
  ]
}

let loading = ref(false)

let userStore = useUserStore()
let loginForm = reactive({
  username: 'admin',
  password: 123456
})

const login = async () => {
  // 保证表单校验通过之后再发请求
  await loginForms.value.validate()
  
  loading.value = true
  try {
    // 保证登陆成功
    await userStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登陆成功',
      title: getTime()
    })
  } catch (error) {
    console.log('errorLogin:', error)

    ElNotification({
      type: 'error',
      message: (error as Error).message,
      title: getTime()
    })
  } finally {
    loading.value = false
  }
}
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
