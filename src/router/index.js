import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: "登录",
      component: () => import("@/pages/login"),
    },
    {
      path: '/home',
      name: "主页",//主体件
      component: () => import("@/pages/home"),
      redirect: '/instrumentpanel',
      children: [
        {
          path: '/instrumentpanel',
          name: "仪表盘",
          component: () => import("@/pages/home/instrumentpanel"),
          meta:{type:1,nemr:"仪表盘"}
        },
        {
          path: '/figure',
          name: "主机资产",
          component: () => import("@/pages/home/figure"),
          meta:{type:2,nemr:"数字空间治理"},
          redirect: '/hostmachine',
          children: [
            {
              path: '/hostmachine',
              name: "主机资产",
              component: () => import("@/pages/home/figure/hostmachine"),
              meta:{type:2,nemr:"数字空间治理"}
            },
          ]
        },
        // -----------------------------------------------------------------------------------------------------
        {
          path: '/assets',
          name: "资产",
          component: () => import("@/pages/home/assets")
          // meta:{type:1}drivingdepot
        },
        {
          path: '/drivingdepot',
          name: "驾驶舱",
          component: () => import("@/pages/home/drivingdepot"),
          meta:{type:9}
        },
        
      ]
    }
  ]
})
