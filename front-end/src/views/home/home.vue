<template>
    <div class="app-wrapper clearfix">
        <side-bar class="sidebar-container" :class="{'active': $store.state.sidebar}"></side-bar>
        <div class="main-container" :class="{'active': $store.state.sidebar}">
            <nav-bar></nav-bar>
            <div class="router-box">
                <el-scrollbar style="height: 100%;">
                     <transition name="ScaleDown">
                    <router-view></router-view>
                     </transition>
                </el-scrollbar>
            </div>
        </div>
    </div>
</template>
<script>
import sideBar from "./components/sidebar";
import navBar from "./components/navbar";
import 'vue-transition.css'
export default {
  name: "home",
  components: {
    sideBar,
    navBar
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;

  // 侧边栏
  .sidebar-container {
    width: 180px;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    &.active {
      width: 64px;
    }
  }
  .main-container {
    margin-left: 180px;
    transition: margin-left 0.28s;
    overflow: hidden;
    height: 100%;
    &.active {
      margin-left: 64px;
    }
    .router-box {
      height: calc(100% - 50px);
      // overflow-y: scroll;
    }
  }
}
</style>

