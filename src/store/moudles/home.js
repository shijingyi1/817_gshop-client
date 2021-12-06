// 管理首页相关的数据
import { 
    reqCategoryList,
    reqBannerList,
    reqFloors,
    reqRecommends
 } from "@/api"

const state = {
    categoryList: [],
    bannerList:[],
    recommends:[],
    floors:[]


}

const mutations = {
    // 接受保存分类列表
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        console.log(222)
        state.categoryList = categoryList.splice(0, 15)

    },
    RECEIVE_BANNER_LIST(state, bannerList) {
        
        state.bannerList = bannerList

    },
    RECEIVE_RECOMMENDS_LIST(state,recommends){
        state.recommends = recommends
    },
    RECEIVE_FLOORS_LIST(state,floors){
        state.floors = floors
    },

}


const actions = {
    async getCatecoryList({ commit }) {
        const result = await reqCategoryList()
        if (result.code === 200) {
            console.log(1)
            const categoryList = result.data
            commit('RECEIVE_CATEGORY_LIST', categoryList)
        }
    },
    async getBannerList({ commit }) {
        const result = await reqBannerList()
        if (result.code === 200) {
            const bannerList = result.data
            console.log(result.data)
            commit('RECEIVE_BANNER_LIST', bannerList)
        }
    },
    async recommends({ commit }) {
        const result = await reqRecommends()
        if (result.code === 200) {
            const recommends = result.data
            commit('RECEIVE_RECOMMENDS_LIST', recommends)
        }
    },
    async floors({commit}){
        const result = await reqFloors()
        if(result.code === 200) {
            const floots = result.data
            commit('RECEIVE_FLOORS_LIST',floots)
        }
    }
}

const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}