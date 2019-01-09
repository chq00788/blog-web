<template>
  <div class="container">
    <el-row>
      <el-col :span="3" class="header_logo">
        <div><h2 class="header_logo_font">XXX管理系统</h2></div>
      </el-col>
      <el-col :span="19" class="header_menu">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">文章管理</el-menu-item>
          <el-menu-item index="3">用户管理</el-menu-item>
          <el-menu-item index="4">系统设置</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="2" class="header_menu">
        <div class="header_user">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px;color: white"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-row>
  </div>

</template>

<script>
  export default {}
</script>


<style scoped>
  .container {
    height: 100%;
    width: 100%;
    padding: 0px;
  }

  .header_logo {
    height: 60px;
    background: #545c64;
    text-align: center;
    color: white;
  }

  .header_logo_font {
    margin-top: 13px;
  }

  .header_menu {
    height: 60px;
    background: #545c64;
  }

  .header_user {
    height: 100%;
    margin: 13px;
    font-size: 15px;
    text-align: center;
    color: white;
    padding: 5px;
  }
</style>
