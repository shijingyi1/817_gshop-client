//包含应用的所有接口的接口请求函数

// eslint-disable-next-line no-unused-vars
import ajax from './ajax';

//首页三级分类
//  /api/product/getBaseCategoryList  GET

export function getCategoryList() {
    return ajax.get('/product')
}