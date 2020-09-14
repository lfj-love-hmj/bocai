<template>
  <div class="index-main">
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab v-for="(item,index) in navs">
        <template #title>
          <img class="nav-active-icon" :src="$imgs['home/'+item.activeIcon+'']" alt="">
          <p class="nav-norm-icon" v-if="$projectname==='10023'">{{item.title}}</p>
          <img class="nav-norm-icon" v-else :src="$imgs['home/'+item.normalIcon+'']" alt="">
        </template>
        <Sports v-if="index===0"/>
        <Casino v-if="index===1"/>
        <Slots v-if="index===2" :slotsType="slotsType" @changeSlotsType="changeSlotsType"/>
        <Chess v-if="index===3"/>
        <Lottery v-if="index===4"/>
        <ESports v-if="index===5"/>
        <Fishing v-if="index===6"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Casino from './casino'
  import Chess from './chess'
  import Slots from './slots'
  import Lottery from './lottery'
  import Fishing from './fishing'
  import Sports from './sports'
  import ESports from './esports'
  export default {
    name: "tabStyle01",
    components:{Casino,Chess,Slots,Lottery,Fishing,Sports,ESports},
    watch: {
      active (val) {
        if (val !== 2) {
          this.slotsType = ''
        }
      }
    },
    data(){
      return{
        navs: [
          {
            title: '体育',
            name: 'sports',
            bannerPic: '',
            normalIcon:'home_icon_sport_nomal@2x',
            activeIcon:'home_icon_sport_selected@2x'
          },{
            title: '真人',
            name: 'casino',
            bannerPic: '',
            normalIcon:'home_icon_live_nomal@2x',
            activeIcon:'home_icon_live_selected@2x'
          }, {
            title: '电子',
            name: 'slots',
            bannerPic: '',
            normalIcon:'home_icon_slot_nomal@2x',
            activeIcon:'home_icon_slot_selected@2x'
          }, {
            title: '棋牌',
            name: 'chess',
            bannerPic: '',
            normalIcon:'home_icon_board_nomal@2x',
            activeIcon:'home_icon_board_selected@2x'
          },{
            title: '彩票',
            name: 'lottery',
            bannerPic: '',
            normalIcon:'home_icon_lottery_nomal@2x',
            activeIcon:'home_icon_lottery_selected@2x'
          }, {
            title: '电竞',
            name: 'esports',
            bannerPic: '',
            normalIcon:'home_icon_esports_nomal@2x',
            activeIcon:'home_icon_esports_selected@2x'
          }, {
            title: '捕鱼',
            name: 'fishing',
            bannerPic: '',
            normalIcon:'home_icon_fishing_nomal@2x',
            activeIcon:'home_icon_fishing_selected@2x'
          }
        ],
        active: 0,
        slotsType: '',
      }
    },
    created () {
      this.navs.map((item, index) => {
        if (item.name === this.$config[this.$projectname].name && item.name !== 'featured') {
          this.navs.splice(index, 1)
        }
      })
    },
    computed: {
      ...mapState('global', ['gameSearch'],"users", ["isLogin"])
    },
    methods:{
      changeSlotsType () {
        this.slotsType = ''
      },
    },
  }
</script>

<style scoped>

</style>
