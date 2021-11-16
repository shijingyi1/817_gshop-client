// 路由器对象

import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'


//安装Vue插件
Vue.use(Router)


// 缓存原本的push方法

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    //如果制定了成功或者失败的回调
    if (onResolve || onReject) {
        //直接调用原本的push方法
        return originalPush.call(this, location, onResolve, onReject)
    }
    //没有成功或者失败的回调，必须用catch处理
    return originalPush.call(this, location).catch((err) => {
        //如果是重复导航产生的错误
        if (Router.isNavigationFailure(err)) {
            // resolve err
            return err
        }
        //如果是其他原因导航的错误，将错误向下传递
        // rethrow error
        return Promise.reject(err)
    })
}

//向外暴露路由器对象

export default new Router({
    //模式
    mode: 'history', //不带#
    //应用中心的所有路由
    routes

})