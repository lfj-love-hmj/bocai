
<template>
  <van-tabbar 
    v-model="active" 
    :active-color="$colorjs.baseColor" 
    safe-area-inset-bottom
    :class="['tabbar',{'top-shadow':$projectname === 'chobet'}]"
  >
    <van-tabbar-item @click="$router.push('/')">
      <span>首页</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? home.active : home.normal"
      >
    </van-tabbar-item>

    <van-tabbar-item @click="$router.push('vip')">
      <span>VIP特权</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? vip.active : vip.normal"
      >
    </van-tabbar-item>
    <van-tabbar-item @click="$router.push('activities')">
      <span>红利</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? hongli.active : hongli.normal"
      >
    </van-tabbar-item>
    <van-tabbar-item v-if="['10046', '10016'].indexOf($projectname) == -1"  @click="$router.push('brand')">
      <span>品牌</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? pingpai.active : pingpai.normal"
      >
    </van-tabbar-item>
    <van-tabbar-item @click="goCenter">
      <span>我的</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? member.active : member.normal"
      >
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import tab1 from '@assets/img3_0/tabBar/home@2x_1.png'
  import tab1A from '@assets/img3_0/tabBar/home@2x.png'
  import tab2 from '@assets/img3_0/tabBar/vip@2x_1.png'
  import tab2A from '@assets/img3_0/tabBar/vip@2x.png'
  import tab3 from '@assets/img3_0/tabBar/yinghangka@2x_1.png'
  import tab3A from '@assets/img3_0/tabBar/yinghangka@2x.png'
  import tab4 from '@assets/img3_0/tabBar/pp@2x_1.png'
  import tab4A from '@assets/img3_0/tabBar/pp@2x.png'
  import tab5 from '@assets/img3_0/tabBar/wode@2x_1.png'
  import tab5A from '@assets/img3_0/tabBar/wode@2x.png'
  import { mapState } from 'vuex'

    export default {
      name: "v-tabbar",
      data() {
        return {
          home: {
            active: tab1A,
            normal: tab1
          },
          vip: {
            active: tab2A,
            normal: tab2
          },
          hongli: {
            active: tab3A,
            normal: tab3
          },
          pingpai: {
            active: tab4A,
            normal: tab4
          },
          member: {
            active: tab5A,
            normal: tab5
          },
          active: 0
        }
      },
      props: ['index'],
      created() {
        // if(!this.isLogin && index == 4) {
        //   return
        // }
        this.active = this.index
      },
      computed: {
        ...mapState('users', ['isLogin','token'])
      },
      methods:{
        goCenter() {
          if(this.isLogin || this.token) {
            this.$router.push('memberCenter')
          } else {
            this.$store.dispatch("global/setNoLogin",true)
          }
        }
      }
    }
</script>

<style scoped lang="less">
  .tabbar {
    height: @height-tab-bar;
    // background-color: #232C39 !important;
    background: @color-tab-bar;
    z-index: 999 !important;
    .van-tabbar-item {
      font-size: 20px;
      // position: relative;
      // top:0;
      // background-color: #232C39;
      .van-tabbar-item__icon img{
        height: 38px;
      }
    }
  }
  .top-shadow{
    box-shadow:0px 30px 80px -30px #000;
  }
  /deep/ .van-tabbar-item__icon {
    margin-top: 5px;
    margin-bottom: 10px;
  }
</style>
