<template>
    <el-container>
        <el-aside width="25%">
            <div class="aside-title title">
                组织机构
            </div>
            <div class="aside-content">
                <el-scrollbar style="height: 100%;">
                    <el-tree :data="treeData" node-key="id" default-expand-all draggable>
                        <span class="custom-tree-node" slot-scope="{ node, data }">
                            <i class="icon Eicons sys-zuzhijigou"></i>
                            <span class="label">{{node.label}}</span>
                            <span class="floatRight number" v-if="node.childNodes.length>0">{{node.childNodes.length}}</span>
                        </span>
                    </el-tree>
                </el-scrollbar>
            </div>
        </el-aside>
        <el-main>
            <div class="main-title title">【组织机构】详情</div>
            <div class="main-content">
                <el-table :data="tableData" header-align="center" align="center" border style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import sysOrgService from "@/api/sys-org";
export default {
  name: "org",
  data() {
    return {
      treeData: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created() {
    this.getSysUnitListTree();
  },
  methods: {
    getSysUnitListTree() {
      sysOrgService.getSysUnitListTree().then(res => {
        this.treeData[0] = res;
        if (this.treeData) {
          this.treeData = [...this.treeData];
          this.resourceForm = this.treeData[0];
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  .title {
    height: 86px;
    line-height: 86px;
    font-size: 24px;
    padding-left: 20px;
    border-bottom: 1px solid #e2ebed;
  }
  .el-aside {
    border-right: 1px solid #e2ebed;
    height: 100%;
    .aside-content {
      height: calc(100% - 87px);
      padding: 20px;
      .custom-tree-node {
        width: 100%;
        padding-top: 2px;
        font-size: 14px;
        .icon {
          margin-right: 5px;
        }
        .number {
          display: inline-block;
          padding: 0px 6px;
          border: 1px solid #e2ebed;
          border-radius: 50%;
          &.active {
            background-color: #2eb5f0;
            color: #fff;
          }
        }
        .label {
          &.active {
            background-color: #2eb5f0;
            color: #fff;
            padding: 2px 3px;
            border-radius: 3px;
          }
        }
        &:hover {
          .label {
            background-color: #2eb5f0;
            color: #fff;
            padding: 2px 3px;
            border-radius: 3px;
          }
        }
      }
    }
  }
  .el-main {
    padding: 0;
    .main-content {
      margin-top: 40px;
      padding: 0 20px;
    }
  }
}
</style>

<style lang="scss">
.el-tree-node__label {
  padding: 3px 5px;
  &:hover {
    background-color: #2eb5f0;
    border-radius: 2px;
    color: #fff;
  }
}
.el-tree-node:focus > .el-tree-node__content {
  background-color: transparent !important;
  .custom-tree-node {
    .label {
      background-color: #2eb5f0;
      color: #fff;
      padding: 2px 3px;
      border-radius: 3px;
    }
    .number {
      background-color: #2eb5f0;
      color: #fff;
    }
  }
}
#contextStyle {
  padding: 7px;
  > div {
    padding: 4px 2px;
    cursor: pointer;
    > i {
      margin-right: 6px;
    }
    &:hover {
      background-color: #2eb5f0;
      color: #fff;
      border-radius: 3px;
    }
  }
}
.el-form-item {
  margin-bottom: 10px;
}
.el-form--label-top .el-form-item__label {
  padding: 0;
}
.el-input.is-disabled .el-input__inner {
  color: #7c7979;
}
</style>


