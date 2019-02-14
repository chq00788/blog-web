<template>
  <div>
    <el-card shadow="never" :body-style="{ padding: '0px' }">
      <div slot="header">
        <el-row :gutter="10">
          <el-col :span="3">
            <el-input placeholder="用户名" clearable></el-input>
          </el-col>
          <el-col :span="3">
            <el-input placeholder="手机号码" clearable></el-input>
          </el-col>
          <el-col :span="3">
            <el-select v-model="state" placeholder="用户状态" clearable>
              <el-option :label="'启用'" :value="1"></el-option>
              <el-option :label="'禁用'" :value="2"></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-date-picker
              v-model="dateValue"
              type="daterange"
              range-separator="-"
              start-placeholder="注册开始日期"
              end-placeholder="注册结束日期">
            </el-date-picker>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" icon="el-icon-search">查询</el-button>
          </el-col>
        </el-row>
        <br>
        <el-button size="medium" type="primary" icon="el-icon-plus" @click="dialogFormVisible=true">新增</el-button>
        <el-button size="medium" icon="el-icon-upload2">导入</el-button>
        <el-button size="medium" icon="el-icon-download">导出</el-button>
        <el-table
          :data="tableData" stripe="true"
          style="width: 100%;margin: 5px">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
            <template slot-scope="scope">
              <el-button type="success" icon="el-icon-search" size="small"></el-button>
              <el-button type="primary" icon="el-icon-edit" size="small"></el-button>
              <el-button type="danger" icon="el-icon-delete" size="small"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100">
        </el-pagination>
      </div>
    </el-card>


    <el-dialog title="新增" :visible.sync="dialogFormVisible" center width="30%">
      <el-form :label-position="labelPosition" label-width="80px" :model="right">
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style>
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
  export default {
    name: "User",
    data() {
      return {
        dateValue: '',
        state: null,
        currentPage: 1,
        formLabelWidth: '120px',
        dialogTableVisible: false,
        dialogFormVisible: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>

</style>
