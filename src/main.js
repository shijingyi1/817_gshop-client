import Vue from 'vue'
import App from './App.vue'


//不显示非生产环境打包提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
