<template>
  <div class="guide" v-show="active>=0 && active<=2">
    <ul>
      <li v-show="active == i" :class="`step${i+1}`" v-for="(item,i) in newData" :key="i">
        <span v-show="active == 2" @click="goStep(i)">我知道了</span>
        <van-image :src="item.img" ></van-image>
        <span v-show="active != 2" @click="goStep(i)">我知道了</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      newData:[
        // {
        //   name:'新手教程',
        //   img:require('@assets/img3_0/guide/step_1@2x.png')
        // },
        {
          name:'存款',
          img:require('@assets/img3_0/guide/step_2@2x.png')
        },
        {
          name:'vip福利',
          img:require('@assets/img3_0/guide/step_3@2x.png')
        },
        {
          name:'客服',
          img:require('@assets/img3_0/guide/step_4@2x.png')
        }
      ],
      active:0
    }
  },
  computed:{
    ...mapState('global',['isRegister'])
  },
  watch: {
    $route(newVal,oldVal) {
      if(this.isRegister && newVal.name == 'Home') {
        this.active = 0
      } else {
        this.active = 3
      }
    }
  },
  created() {    
    if(this.isRegister && this.$route.name == 'Home') {
      this.active = 0
    } else {
      this.active = 3
    }
  },
  methods:{
    goStep(val) {
      this.active = val+1
      if(this.active > 2) {
        this.$store.dispatch('global/setGuide',false)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@assets/styles/guide/index.less';
  .guide{
    ul{
      height:100%;
      width:100%;
      position: fixed;
      z-index: 99999;
      background:rgba(0,0,0,.7);
      top:0;
      li{
        position:absolute;
        text-align: center;
        span{
          width:200px;
          height:80px;
          line-height: 80px;
          border:2px solid #fff;
          border-radius: 80px;
          display:block;
          color:#fff;
          text-align: center;
          margin:0 auto;
          margin-top: 40px;
          margin-bottom: 40px;
        }
        // &.step1{
        //   top:730px;
        //   right:20px;
        //   .van-image{
        //     width:600px;
        //   }
        // }
        &.step1{
          right:-104px;
          top:-10px;
          .van-image{
            width:500px;
          }
        }
        &.step2{
          bottom:-20px;
          left:120px;
          .van-image{
            width:500px;
          }
        }
        &.step3{
          right:0;
          .van-image{
            width:600px;
          }
        }
      }
    }
  }
</style>