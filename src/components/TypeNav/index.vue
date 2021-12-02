<template>
  <div class="type-nav">
    <div class="container" @mouseleave="currentIndex=-2" >
      <div @mouseenter="showFirst" @mouseleave="hideFirst">
        <h2 class="all">全部商品分类</h2>
        <transition name="slide">
        <div class="sort"  v-show="isShowFirst">
        <div class="all-sort-list2" @click="toSearch">
          <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" :class="{active:currentIndex===index}" @mouseenter="showSubList(index)">
            <h3>
              <a href="javascript:" :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
              <!-- <router-link :to="`/search?categoryName=${c1.categoryName}&categoryId=${c1.categoryId}`">{{c1.categoryName}}</router-link> -->
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                  <dt class="fore">
                    <a href="javascript:" :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                    <!-- <router-link :to="`/search?categoryName=${c2.categoryName}&categoryId=${c2.categoryId}`">{{c2.categoryName}}</router-link> -->
                  </dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a href="javascript:" :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                      <!-- <router-link :to="`/search?categoryName=${c3.categoryName}&categoryId=${c3.categoryId}`">{{c3.categoryName}}</router-link> -->
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import throttle from 'lodash/throttle'
export default {
  name: "TypeNav",
  data(){
    return{
      //控制是否显示左侧菜单
      isShowFirst:false,
      currentIndex:-2,//需要显示字列表的分类项下标

    }
  },
  computed:{
    //方法一：
    // categoryList(){
    //   return this.$store.state.home.categoryList
    // }

    //方法二：
    ...mapState({
      categoryList: state => state.home.categoryList
    })
  },
  created() {
    const path = this.$route.path
    if( path ==='/'){
      this.isShowFirst = true
    }


  },
  methods:{
    toSearch(event){
      const target = event.target

      //祛除data自定义属性值
       const{categoryname,category1id,category2id,category3id} = target.dataset



      if(categoryname){

       //准备query参数
        const query = {
          categoryName:categoryname
        }

        if(category1id){
          query.category1Id = category1id
        }else if (category2id){
          query.category2Id = category2id
        }else if(category3id){
          query.category3Id=category3id
        }

        // console.log(query)

        //准备一个用于跳转的对象
        const location ={
          name:'search',
          query,
          params:this.$route.params//需要携带上当前已有的params

          }

        //跳转到search
        this.$router.push(location)
      }
    },

    showFirst(){
      this.currentIndex = -1;
      this.isShowFirst = true;

    },
    hideFirst(){
      this.currentIndex = -2;
      // console.log(this.$route.path)
      if(this.$route.path !== '/'){
        this.isShowFirst = false;
      }
      
    },
    //节流函数
    showSubList: throttle(function(index){
      if(this.currentIndex !== -2){
        this.currentIndex = index;
      }
      
    },500),
    // showSubList(index){
    //   console.log("@@@")
    //   this.currentIndex = index
    //   console.log(this.currentIndex)
    //   console.log(index)
    // }

  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      // 指定过度的样式
      &.slide-enter-active,&.slide-leave-active{
        transition: all 1s
      }
      //指定隐藏时的样式
      &.slide-enter,&.slide-leave-to{
        opacity: 0;
        height: 0;
      }
      // &.slide-leave,&.slide-enter-to{
      //   opacity: 1;
      //   height: 1;
      // }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.active {
            background:#ccc;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>