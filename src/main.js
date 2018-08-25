import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters/index' // 加载全局过滤器

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
