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
    	path: '/drivingdepot',
    	name: "驾驶舱",
    	component: () => import("@/pages/home/drivingdepot"),
    	meta:{type:9}
    },
    {
      path: '/home',
      name: "主页",//主体件
      component: () => import("@/pages/home"),
      redirect: '/instrumentpanel',
      children: [
        // 仪表盘
        {
          path: '/instrumentpanel',
          name: "仪表盘",
          component: () => import("@/pages/home/instrumentpanel"),
          meta:{type:1,nemr:"仪表盘"}
        },
        // 数字空间治理
        {
          path: '/figure',
          name: "数字空间治理",
          component: () => import("@/pages/home/figure"),
          meta:{type:2,nemr:"数字空间治理"},
          // redirect: '/hostmachine',
          children: [
            {
              path: '/figure/hostmachine',
              name: "主机资产",
              component: () => import("@/pages/home/figure/hostmachine"),
              meta:{type:2,nemr:"主机资产"}
            },
            {
              path: '/figure/hostmachinedetails',
              name: "主机资产",
              component: () => import("@/pages/home/figure/hostmachinedetails"),
              meta:{type:2,nemr:"主机资产详情"}
            },
            {
              path: '/figure/website',
              name: "网站资产",
              component: () => import("@/pages/home/figure/website"),
              meta:{type:2,nemr:"网站资产"}
            },
            {
              path: '/figure/websitedetails',
              name: "网站资产",
              component: () => import("@/pages/home/figure/websitedetails"),
              meta:{type:2,nemr:"网站资产详情"}
            },
            {
              path: '/figure/vulnevrabilitymanagement',
              name: "漏洞治理",
              component: () => import("@/pages/home/figure/vulnevrabilitymanagement"),
              meta:{type:2,nemr:"漏洞治理"}
            },
            {
              path: '/figure/vulnevrabilitymanagement/governancedetails',
              name: "漏洞治理",
              component: () => import("@/pages/home/figure/components/governancedetails"),
              meta:{type:2,nemr:"治理详情"}
            },
            {
              path: '/figure/vulnevrabilitymanagement/aggregateview',
              name: "漏洞治理",
              component: () => import("@/pages/home/figure/components/aggregateview"),
              meta:{type:2,nemr:"聚合视角查看"}
            },
            {
              path: '/figure/disposalworkorder',
              name: "漏洞治理",
              component: () => import("@/pages/home/figure/disposalworkorder"),
              meta:{type:2,nemr:"处置工单"}
            },
            {
              path: '/figure/labellmanagement',
              name: "标签管理",
              component: () => import("@/pages/home/figure/labellmanagement"),
              meta:{type:2,nemr:"标签管理"}
            },
          ]
        },
        // 任务管理
        {
          path: '/taskmanagement',
          name: "任务管理",
          component: () => import("@/pages/home/taskmanagement"),
          meta:{type:3,nemr:"任务管理"},
        },
        // 任务管理-添加任务
        {
          path: '/taskmanagement/addquest',
          name: "任务管理-添加",
          component: () => import("@/pages/home/taskmanagement/addquest"),
          meta:{type:3,nemr:"任务管理-添加"},
        },
        // 知识库
        {
          path: '/knowledge',
          name: "知识库",
          component: () => import("@/pages/home/knowledge"),
          meta:{type:5,nemr:"知识库"},
          // redirect: '/loophole',
          children: [
            {
              path: '/knowledge/loophole',
              name: "漏洞知识库",
              component: () => import("@/pages/home/knowledge/loophole"),
              meta:{type:5,nemr:"漏洞知识库"}
            },
            {
              path: '/knowledgedetails',
              name: "漏洞知识详情",
              component: () => import("@/pages/home/knowledge/knowledgedetails"),
              meta:{type:5,nemr:"漏洞知识详情"}
            },
            {
              path: '/knowledge/techniqueandtactics',
              name: "技战术知识库",
              component: () => import("@/pages/home/knowledge/techniqueandtactics"),
              meta:{type:5,nemr:"技战术知识库"}
            },
            {
              path: '/attacktechniqueandtactics',
              name: "攻击技战术详情",
              component: () => import("@/pages/home/knowledge/attacktechniqueandtactics"),
              meta:{type:5,nemr:"攻击技战术详情"}
            },
            {
              path: '/defensivetechniquesandtactics',
              name: "防御技战术详情",
              component: () => import("@/pages/home/knowledge/defensivetechniquesandtactics"),
              meta:{type:5,nemr:"防御技战术详情"}
            },
          ]
        },
        // 系统设置
        {
          path: '/systemsetting',
          name: "系统设置",
          component: () => import("@/pages/home/systemsetting"),
          meta:{type:7,nemr:"系统设置"},
          // redirect: '/loophole',
          children: [
            {
              path: '/systemsetting/departmentmanagement',
              name: "部门管理",
              component: () => import("@/pages/home/systemsetting/departmentmanagement"),
              meta:{type:7,nemr:"部门管理"}
            },
            {
              path: '/systemsetting/personnelmanagement',
              name: "人员管理",
              component: () => import("@/pages/home/systemsetting/personnelmanagement"),
              meta:{type:7,nemr:"人员管理"}
            },
            {
              path: '/systemsetting/assetarea',
              name: "资产区域管理",
              component: () => import("@/pages/home/systemsetting/assetarea"),
              meta:{type:7,nemr:"资产区域管理"}
            },
            {
              path: '/systemsetting/assetregiondetails',
              name: "资产区域详情",
              component: () => import("@/pages/home/systemsetting/assetregiondetails"),
              meta:{type:7,nemr:"资产区域详情"}
            },
            {
              path: '/systemsetting/logmanagement',
              name: "日志管理",
              component: () => import("@/pages/home/systemsetting/logmanagement"),
              meta:{type:7,nemr:"日志管理"}
            },
            {
              path: '/systemsetting/toolmanagement',
              name: "工具管理",
              component: () => import("@/pages/home/systemsetting/toolmanagement"),
              meta:{type:7,nemr:"工具管理"}
            },
            {
              path: '/systemsetting/safetycontrol',
              name: "安全性控制",
              component: () => import("@/pages/home/systemsetting/safetycontrol"),
              meta:{type:7,nemr:"安全性控制"}
            },
            {
              path: '/systemsetting/overview',
              name: "系统概况",
              component: () => import("@/pages/home/systemsetting/overview"),
              meta:{type:7,nemr:"系统概况"}
            },
          ]
        },






        // System setting
        // -----------------------------------------------------------------------------------------------------
        {
          path: '/assets',
          name: "资产",
          component: () => import("@/pages/home/assets")
          // meta:{type:1}drivingdepot
        },
      ]
    }
  ]
})
