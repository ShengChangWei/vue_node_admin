<template>
  <el-menu class="navbar" mode="horizontal">
    <i class="bars fa fa-bars" :class="{'active': $store.state.sidebar}" @click="toggleSideBar"></i>
    <!-- 面包屑 -->

    <el-breadcrumb class="navbar-breadcrumb" separator="/">
      <el-breadcrumb-item>{{levelList.parentTitle}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{levelList.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="navbar-right">
      <i class="fullscreen fa fa-arrows-alt" @click="fullscreen" style="cursor: pointer"></i>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="@/assets/user.png">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="LogOut">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import loginService from "@/api/login.js";
import screenfull from "screenfull/dist/screenfull.js";
import { removeUserInfo } from "@/services/auth.service";
export default {
  name: "nav-bar",
  data() {
    return {
      levelList: null
    };
  },

  created() {
    this.getBreadcrumb();
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },
    getBreadcrumb() {
      this.levelList = this.$route.meta;
    },
    fullscreen() {
      if (screenfull && screenfull.enabled) {
        screenfull.toggle();
      } else {
        this.$message({
          message: "you browser can not work",
          type: "warning"
        });
        return;
      }
    },
    LogOut() {
      loginService.logOut().then(res => {
        if (res.code === "ok") {
          this.$message({
            showClose: true,
            message: res.info,
            type: "success",
            duration: 1000
          });
          removeUserInfo();
          this.$router.push({ path: "/login" });
        } else {
          this.$message({
            showClose: true,
            message: res.info,
            type: "error"
          });
        }
      });
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
    levelList() {}
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .bars {
    font-size: 22px;
    margin-left: 10px;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
    position: absolute;
    top: 14px;
    &.active {
      transform: rotate(90deg);
    }
  }
  .navbar-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 40px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }

  .navbar-right {
    position: absolute;
    right: 20px;
    top: 0;
    .fullscreen {
      position: absolute;
      right: 80px;
      top: 15px;
      font-size: 20px;
    }
    .user-avatar {
      width: 40px;
    }
  }
}
</style>


