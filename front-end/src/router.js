import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getUserInfo } from "@/services/auth.service";
import loginService from "@/api/login.js";
import store from './store'
Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/404', component: () => import('@/views/errorPage/404') },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/collapse',
      meta: { title: '主页' },
      children: [
        {
          path: 'collapse',
          name: 'collapse',
          component: () => import('@/components/collapse/collapse.vue'),
          meta: { parentTitle: '首页', title: 'table展示' }
        },

        {
          path: 'progress',
          name: 'progress',
          component: () => import('@/components/progress/progress.vue'),
          meta: { parentTitle: '首页', title: '进度条' }
        },
        {
          path: 'baseMap',
          name: 'baseMap',
          component: () => import('@/components/baseMap/baseMap.vue'),
          meta: { parentTitle: 'Arcgis地图', title: '底图切换' }
        },
        {
          path: 'codemirror',
          name: 'codemirror',
          component: () => import('@/components/codemirror/codemirror.vue'),
          meta: { parentTitle: '编辑器', title: 'sql编辑器' }
        },
        {
          path: 'resource',
          name: 'resource',
          component: () => import('@/views/sys/resource.vue'),
          meta: { parentTitle: '系统管理', title: '资源管理' }
        },
        {
          path: 'org',
          name: 'org',
          component: () => import('@/views/sys/org.vue'),
          meta: { parentTitle: '系统管理', title: '组织机构管理' }
        },
        {
          path: 'role',
          name: 'role',
          component: () => import('@/views/sys/role.vue'),
          meta: { parentTitle: '系统管理', title: '角色管理' }
        },
        {
          path: 'datadic',
          name: 'datadic',
          component: () => import('@/views/sys/datadic.vue'),
          meta: { parentTitle: '系统管理', title: '数据字典' }
        },
        {
          path: 'log',
          name: 'log',
          component: () => import('@/views/sys/log.vue'),
          meta: { parentTitle: '系统管理', title: '系统日志' }
        }
      ]
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
});

/**
    * 获取用户菜单（导航栏菜单）
    */
function getUserMenus() {
  return new Promise((resolve, reject) => {
    loginService.getUserMenus().then(res => {
      resolve(res.result)
    });
  });
};
/**
 * 获取用户资源
 */
function getUserResources() {
  return new Promise((resolve, reject) => {
    loginService.getUserResources().then(res => {
      resolve(res.result)
    });
  });
}
// 路由拦截

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.name === 'login') {
    next();
    NProgress.done()
  } else {
    if (!getUserInfo()) {
      next({
        name: 'login'
      });
      NProgress.done()
    } else {
      if (store.state.currUserMenus.length <= 0) {
        Promise.all([getUserMenus(), getUserResources()]).then(data => {
          store.state.currUserMenus = data[0] ? data[0].children : [];
          store.state.currUserResources = data[1]
          NProgress.done()
          next();
        })
      } else {
        NProgress.done()
        next();
      }



    }
  }
});

export default router;