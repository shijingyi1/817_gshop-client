<template>
  <div id="app">
    <Header></Header>
    <!-- 所有的一级路由都在此显示 -->
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
// import {getCategoryList} from './api'


export default {
  name: 'App',
  mounted(){
    //异步获取三级分类的列表
    // getCategoryList().then(result =>{
    //   console.log(result)
    // })

    this.$store.dispatch('getCatecoryList')
    //轮播图数据
    this.$store.dispatch('getBannerList')
  },
  components:{
    Header,
    Footer
  }
  
}
</script>

<style>

</style>
