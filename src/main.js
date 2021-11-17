import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'


//不显示非生产环境打包提示
Vue.config.productionTip = false

Vue.component(TypeNav.name, TypeNav)

new Vue({
    render: h => h(App),
    router, //注册路由器  所有组件都可以直接访问2个对象：$router(路由器对象)与$route(当前路由信息对象)
}).$mount('#app')