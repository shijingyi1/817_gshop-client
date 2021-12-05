import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'

import './plugins/swiper' //加载是swiper的配置
import './mock/mockServer'

// import 'swiper/css/swiper.css'
//不显示非生产环境打包提示
Vue.config.productionTip = false

Vue.component(TypeNav.name, TypeNav)

new Vue({
    render: h => h(App),
    router, //注册路由器  所有组件都可以直接访问2个对象：$router(路由器对象)与$route(当前路由信息对象)
    store, //注册vuex   所有组件豆科鱼i直接访问一个对象$store
}).$mount('#app')