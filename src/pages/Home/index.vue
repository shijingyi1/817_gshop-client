<template>
    <div class="home">
        <TypeNav></TypeNav>
        <ListContainer/>
        <TodayRecommend/>
        <Rank/>
        <Like/>
        <Floor v-for="floor in floors" :key="floor.id" :floor="floor" />
        <Brand/>

    </div>
</template>

<script>
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from "./Rank/Rank.vue";
import Like from "./Like/Like.vue";
import Floor from "./Floor/Floor.vue";
import Brand from "./Brand/Brand.vue";
import { mapState } from 'vuex';


export default {
  components: {
  ListContainer,
  TodayRecommend,
  Rank,
  Like,
  Floor,
  Brand

  },
   name:'Home',
   mounted(){
       this.$store.dispatch('recommends')
       this.$store.dispatch('floors')
   },
   computed:{
       ...mapState({
           floors:state => state.home.floors
       })
    //    ,
    //    ...mapState({
    //        recommends:state=>state.home.recommends
    //    })
}
}
</script>

<style lang="less" scoped>
   

</style>
