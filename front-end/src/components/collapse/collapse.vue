<template>

<div class="table">
  <el-button type="primary" size="medium" @click="add">添加</el-button>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="时间"
      width="280">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.createdAt }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="标题"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.title }}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="内容"
      width="280">
      <template slot-scope="scope">
      <span>{{scope.row.content}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

<!--添加-->

<el-dialog title="添加/编辑数据" :visible.sync="dialogFormVisible">
  <el-form :label-position="labelPosition" label-width="80px">
  <el-form-item label="标题">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
  <el-form-item label="内容">
    <el-input v-model="form.content"></el-input>
  </el-form-item>
</el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="saveForm">确 定</el-button>
  </div>
</el-dialog>

</div>
</template>

<script>
import tabeService from "@/api/table";
export default {
  name: "table",
  data() {
      return {
        tableData: [],
        dialogFormVisible: false,
        labelPosition: 'right',
        form: {
          title: '',
          content: '',
        },
        isAdd: 0, //0是添加 1是编辑
      }
    },
    created() {
      this.finadAllInfo();
    },
    methods: {
      add() {
        this.isAdd = 0;
        this.dialogFormVisible = true;
        this.form = {
           title: '',
          content: ''
        }
      },
      finadAllInfo() {
        tabeService.finadAllInfo().then(res => {
          if(res.code === 'ok') {
            this.tableData = res.result;
          } 
        })
      },
      saveForm() {
        this.dialogFormVisible = false;
        let fn;
        if(this.isAdd === 0) { // 添加
          fn = tabeService.addTable(this.form)
        } else {// 删除
          fn = tabeService.editTableById(this.form.id,{title: this.form.title, content: this.form.content})
        }
        fn.then(res => {
          if(res.code == 'ok') {
                this.$message({
                message: res.message,
                type: 'success'
               });
             this.finadAllInfo();
          }else {
              this.$message({
                message: res.message,
                type: 'error'
          });
          }
        })
      },
      handleEdit(index, row) {
        this.dialogFormVisible = true;
        this.isAdd = 1;
        this.form = JSON.parse(JSON.stringify(row));
      },
      handleDelete(index, row) {
         this.$confirm('此操作将永久删除该内容, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          tabeService.deleteTableByeId(row.id).then(res => {
            if(res.code === 'ok') {
              this.$message({
                  type: 'success',
                  message: res.message
              });
              this.finadAllInfo();
            }
          })
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
};
</script>

<style lang="scss" scoped>
.table {
  padding: 10px;
}
</style>


