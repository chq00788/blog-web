<template>
  <div class="login_page">
    <section class="form_contianer">
      <div class="manage_tip">
        <p>第一个后台管理系统</p>
      </div>
      <el-form>
        <el-form-item prop="username">
          <el-input placeholder="用户名"><span>dsfsf</span></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit_btn">登陆</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  @import '../../assets/css/login.css';
</style>
