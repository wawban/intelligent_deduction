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
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
