<template>
  <el-tabs v-model="activeName" style="padding: 10px;height: 100%;">
    <el-tab-pane label="SQL编辑器" name="first">
      <sql-codemirror></sql-codemirror>
    </el-tab-pane>
    <el-tab-pane label="JAVA编辑器" name="second">
      <java-codemirror></java-codemirror>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import sqlCodemirror from "./components/sql";
import javaCodemirror from "./components/java";
export default {
  name: "codemirror",
  components: {
    sqlCodemirror,
    javaCodemirror
  },
  data() {
    return {
      activeName: "first"
    };
  }
};
</script>


<style lang="scss">
.el-tabs__content {
  height: calc(100% - 60px);
  .el-tab-pane {
    height: 100%;
  }
}
</style>

