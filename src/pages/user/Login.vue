<template>
  <div class="login_page">
    <section class="form_contianer">
      <div class="manage_tip">
        <p>第一个后台管理系统</p>
      </div>
      <el-form>
        <el-form-item prop="username">
          <el-input placeholder="用户名" v-model="uname"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit_btn" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<script>
  import http from '@/utils/http'

  export default {
    data() {
      return {
        uname: '',
        pwd: ''
      }
    },
    methods: {
      login() {
        let self = this;
        let params = {
          username: this.uname,
          password: this.pwd
        };
        http.post('http://localhost:9000/member/login', params, (response) => {
          if (response.data === 'ok') {
            self.$router.push({path: '/'})
          } else {
            self.$message.error('账号或密码错误，请重新填写');
          }
        })

      }
    }
  }
</script>
<style scoped>
  @import '../../assets/css/login.css';
</style>


