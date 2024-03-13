import Vue from 'vue'
import App from './App'
import router from './router'
// ---------------------------------------------
import "@/util/style/base.css";
import "@/util/style/global.less";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueDND from 'awe-dnd'
Vue.use(Element)
Vue.use(VueDND)
const echarts = require('echarts')
Vue.prototype.$echarts = echarts
Vue.prototype.$code = 200
// --------------------------------------------
// 树形组件
import Trees from '@/components/tree/index.vue'
Vue.component('Trees',Trees)
// src\components\tree\index.vue
// --------------------------------------------
// 时间转换组件
import moment from "moment"
Vue.prototype.$moment = moment;
// --------------------------------------------
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
