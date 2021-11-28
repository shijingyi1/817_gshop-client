//  vuex最核心的管理对象 store

import Vue from 'vue'
import Vuex from 'vuex'


import home from './moudles/home'
import user from './moudles/user'


Vue.use(Vuex)
const mutations = {

}

const actions = {

}

const getters = {}


export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules: {
        home: home,
        user: user

    }

})