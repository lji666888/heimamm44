import Vue from 'vue'
import App from './App.vue'
// 导入饿了么 ui
import ElementUI from 'element-ui';
// 导入饿了么 的样式
import 'element-ui/lib/theme-chalk/index.css';
// 注册一下
Vue.use(ElementUI);

/* 导入路由 */
import router from './router/router.js'

/* 导入全局样式 */
import './style/base.css'

Vue.config.productionTip = false


new Vue({
  router,//挂在到vue实例上
  render: h => h(App),
}).$mount('#app')
