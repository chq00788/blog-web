<template>
  <el-container style="height: 100%">
    <el-header style="background: #141628;padding: 0">
      <el-row>
        <el-col :span="3" class="header_logo">
          <div><h2 class="header_logo_font">XXX管理系统</h2></div>
        </el-col>
        <el-col :span="19">
          <el-menu
            :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
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
    </el-header>
    <el-container style="height: 90%;">
      <el-aside style="width: 250px">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main style="background: aquamarine">

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 1
      }
    }
  }
</script>


<style scoped>
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
