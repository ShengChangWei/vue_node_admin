<template>
    <el-scrollbar>
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF" :collapse="$store.state.sidebar">
            <template v-for="(item, index) in curMenu">
                <el-submenu v-if="item.children.length>0" :index="item.url" :key="index">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.name}}</span>
                    </template>
                    <template v-for="(ite, inx) in item.children">
                        <el-menu-item :index="ite.url" :key="inx" @click="toPath(ite.url)">
                            <i :class="ite.icon"></i>
                            <span slot="title">{{ite.name}}</span>
                        </el-menu-item>
                    </template>
                </el-submenu>
                <el-menu-item v-else :index="item.url" :key="index" @click="toPath(item.url)">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </el-scrollbar>
</template>

<script>
export default {
  name: "side-bar",
  data() {
    return {
      curMenu: [
        {
          id: "d2b45d754acf4dc8b6faca86189a06ff",
          sn: "home",
          name: "Example",
          describe: "",
          type: "menu",
          url: "/frame/custom/home",
          icon: "fa fa-adjust",
          parentId: "1",
          order: 1524463150870,
          children: [
            {
              id: "61bc57183b754da794b628406b2d70cf",
              sn: "task",
              name: "table",
              describe: "",
              type: "menu",
              url: "/table",
              icon: "fa fa-circle-o",
              parentId: "898f617a90b442f6b29a8ac9c138cde1",
              order: 1517390717083,
              children: []
            },
            {
              id: "61bc57183b754da794b628406b2d70cr",
              sn: "task",
              name: "progress",
              describe: "",
              type: "menu",
              url: "/progress",
              icon: "fa fa-circle-o",
              parentId: "898f617a90b442f6b29a8ac9c138cde1",
              order: 1517390717083,
              children: []
            }
          ]
        }
      ]
    };
  },
  created: function() {
    console.log(this.$store.state.currUserMenus)
    this.curMenu = this.$store.state.currUserMenus
      // ? this.$store.state.currUserMenus
      // : this.curMenu;
      console.log(this.$route.path)
  },
  methods: {
    toPath(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
}
</style>
<style  lang="scss">
.el-scrollbar__view {
  height: 100%;
  .el-menu {
    height: 100%;
    i {
      padding-right: 10px;
    }
  }
  .el-submenu .el-menu-item {
    i {
      padding-right: 10px !important;
    }
    min-width: 179px !important;
  }
}

.el-menu-item i {
  padding-right: 10px;
}
</style>



