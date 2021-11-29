// 管理首页相关的数据
import { reqCategoryList } from "@/api"

const state = {
    categoryList: []
}

const mutations = {
    // 接受保存分类列表
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        console.log(222)
        state.categoryList = categoryList.splice(0, 15)

    }
}


const actions = {
    async getCatecoryList({ commit }) {
        const result = await reqCategoryList()
        console.log(result[0].code)
        console.log(result[0].data)
        if (result[0].code === 200) {
            console.log(1)
            const categoryList = result[0].data
            commit('RECEIVE_CATEGORY_LIST', categoryList)
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