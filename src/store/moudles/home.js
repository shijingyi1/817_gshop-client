// 管理首页相关的数据
import { reqCategoryList } from "@/api"
import { reqBannerList } from "@/api"

const state = {
    categoryList: [],
    bannerList:[]
}

const mutations = {
    // 接受保存分类列表
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        console.log(222)
        state.categoryList = categoryList.splice(0, 15)

    },
    RECEIVE_BANNER_LIST(state, bannerList) {
        
        state.bannerList = bannerList
        console.log(state.bannerList)

    }
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
    }
}

const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}