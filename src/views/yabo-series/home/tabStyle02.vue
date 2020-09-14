<template>
  <div class="avaswipe">
    <div class="avaswipe-tit">
      <div v-for="(item,index) in navs02" @click="slideCur(index)">
        <p v-if="activeIdx===index" class="avaswipe-active-tit"><span>{{item.title}}</span> <span>{{item.name}}</span></p>
        <p v-else class="avaswipe-norm-tit">{{item.title}}</p>
      </div>
    </div>
    <div class="swiper-container" id="swiper-container1">
      <div class="swiper-wrapper" id="swiper-dom">
        <div class="swiper-slide">
          <div class="swiper-container swiper-container2">
            <div ref="swiperScroll" class="swiper-wrapper">
              <div class="swiper-slide">
                <Sports/>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="swiper-container swiper-container2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <Casino/>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="swiper-container swiper-container2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <Slots :slotsType="slotsType" @changeSlotsType="changeSlotsType"/>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="swiper-container swiper-container2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <Chess/>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="swiper-container swiper-container2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <Lottery/>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="swiper-container swiper-container2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <ESports/>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="swiper-container swiper-container2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <Fishing/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Casino from './casino'
  import Chess from './chess'
  import Slots from './slots'
  import Lottery from './lottery'
  import Fishing from './fishing'
  import Sports from './sports'
  import ESports from './esports'
  import "swiper/dist/css/swiper.css";
  import { Swiper } from "vue-awesome-swiper";
  import {mapState} from "vuex";
  export default {
    name: "tabStyle02",
    components:{Casino,Chess,Slots,Lottery,Fishing,Sports,ESports},
    data(){
      return{
        navs02: [{
          title: '体育',
          activeTit:'体育赛事',
          name: 'SPORTS EVENTS',
          bannerPic: '',
          normalIcon:'home_icon_sport_nomal@2x',
          activeIcon:'home_icon_sport_selected@2x'
        },{
          title: '真人',
          activeTit:'真人娱乐',
          name: 'LIVE CASINO',
          bannerPic: '',
          normalIcon:'home_icon_live_nomal@2x',
          activeIcon:'home_icon_live_selected@2x'
        }, {
          title: '电子',
          activeTit:'电子游艺',
          name: 'SLOT MACHINES',
          bannerPic: '',
          normalIcon:'home_icon_slot_nomal@2x',
          activeIcon:'home_icon_slot_selected@2x'
        }, {
          title: '棋牌',
          activeTit:'棋牌游戏',
          name: 'BOARD GAMES',
          bannerPic: '',
          normalIcon:'home_icon_board_nomal@2x',
          activeIcon:'home_icon_board_selected@2x'
        },{
          title: '彩票',
          activeTit:'彩票投注',
          name: 'LOTTERY GAMES',
          bannerPic: '',
          normalIcon:'home_icon_lottery_nomal@2x',
          activeIcon:'home_icon_lottery_selected@2x'
        }, {
          title: '电竞',
          activeTit:'电子竞技',
          name: 'E-SPORTS',
          bannerPic: '',
          normalIcon:'home_icon_esports_nomal@2x',
          activeIcon:'home_icon_esports_selected@2x'
        }, {
          title: '捕鱼',
          activeTit:'捕鱼游戏',
          name: 'FISHING GAMES',
          bannerPic: '',
          normalIcon:'home_icon_fishing_nomal@2x',
          activeIcon:'home_icon_fishing_selected@2x'
        }],
        mySwiper1:null,
        slotsType: '',
        activeIdx:0,
      }
    },
    watch: {
      active (val) {
        if (val !== 2) {
          this.slotsType = ''
        }
      }
    },
    computed: {
      ...mapState('global', ['gameSearch'],"users", ["isLogin"])
    },
    created () {
      this.navs02.map((item, index) => {
        if (item.name === this.$config[this.$projectname].name && item.name !== 'featured') {
          this.navs.splice(index, 1)
        }
      })
    },
    mounted(){
      let that = this;
      this.$nextTick(function () {

        this.mySwiper1 = new Swiper('#swiper-container1', {
          direction: 'vertical',
          on: {
            slideChangeTransitionStart: function () {
              that.activeIdx = this.activeIndex
              if(this.activeIndex === 0) {
                // console.log(222,window)
                // window.scrollTo(0, 0)
              } else {
                window.scroll(0,1000)
              }
            },
          },
        });

        new Swiper('.swiper-container2',{//子swiper
          direction: 'vertical',
          nested:true,
          //resistanceRatio: 0,
          slidesPerView: 'auto',
          freeMode: true,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
          },
        })
        this.$refs['swiperScroll'].ontouchend = (e) => {
          const swiperDom = document.getElementById('swiper-dom')
          console.log(444, swiperDom.style.transform.split(',')[1].split('px')[0])
          if(swiperDom.style.transform.split(',')[1].split('px')[0]*1>0 && this.activeIdx === 0) {
            scroll(0,0)
          }
        }
      })
    },
    methods:{
      slideCur(index){
        this.activeIdx = index;
        this.mySwiper1.slideTo(index, 300, false)
        if(index === 0) {
          // console.log(222,window)
          // window.scrollTo(0, 0)
        } else {
          window.scrollTo(0,1000)
        }
      },
      changeSlotsType () {
        this.slotsType = ''
      },
    },
  }
</script>

<style scoped>

</style>
