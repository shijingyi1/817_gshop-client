// 管理首页相关的数据
import { reqCategoryList } from "@/api"

const state = {
    categoryList: []
}

const mutations = {
    // 接受保存分类列表
    RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList.splice(0,15)

    }
}


const actions = {
    async getCatecoryList({commit}){
        const result =await reqCategoryList()
        if (result.code === 200) {
            const categoryList = result.data
            commit('RECEIVE_CATEGORY_LIST',categoryList)
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