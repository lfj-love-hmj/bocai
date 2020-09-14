<template>
  <div class="avaswipe">
    <div id="getTop"></div>
    <div :class="['swiper-container',{'iosBig':num === 6 && downAppHidden}]" id="swiper-container1">
      <!-- Add Pagination -->
      <div class="swiper-pagination" id="pagination">

      </div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div :class="['swiper-container','swiper-container2',{'iosBig':num === 6 && downAppHidden}]">
            <div ref="swiperScroll" class="swiper-wrapper">
              <div class="swiper-slide">
                <ESports />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div :class="['swiper-container','swiper-container2',{'iosBig':num === 6 && downAppHidden}]">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <Casino />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div :class="['swiper-container','swiper-container2',{'iosBig':num === 6 && downAppHidden}]">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <Slots :slotsType="slotsType" @changeSlotsType="changeSlotsType" />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div :class="['swiper-container','swiper-container2',{'iosBig':num === 6 && downAppHidden}]">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <Lottery />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div :class="['swiper-container','swiper-container2',{'iosBig':num === 6 && downAppHidden}]">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <Chess />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div :class="['swiper-container','swiper-container2',{'iosBig':num === 6 && downAppHidden}]">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <Sports />
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div :class="['swiper-container','swiper-container2',{'iosBig':num === 6 && downAppHidden}]">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <Fishing />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Casino from "./casino";
import Chess from "./chess";
import Slots from "./slots";
import Lottery from "./lottery";
import Fishing from "./fishing";
import Sports from "./sports";
import ESports from "./esports";
import "swiper/dist/css/swiper.css";
import { Swiper } from "vue-awesome-swiper";
import { mapState } from "vuex";
export default {
  name: "tabStyle02",
  components: { Casino, Chess, Slots, Lottery, Fishing, Sports, ESports },
  props: ['appInstallStatus'],
  data() {
    return {
      navs02: [
          {
            title: '电竞',
            name: 'esports',
            bannerPic: '',
            normalIcon:'home_icon_esports_nomal@2x',
            activeIcon:'home_icon_esports_selected@2x'
          },{
            title: '真人',
            name: 'casino',
            bannerPic: '',
            normalIcon:'home_icon_live_nomal@2x',
            activeIcon:'home_icon_live_selected@2x'
          },{
            title: '电子',
            name: 'slots',
            bannerPic: '',
            normalIcon:'home_icon_slot_nomal@2x',
            activeIcon:'home_icon_slot_selected@2x'
          },{
            title: '彩票',
            name: 'lottery',
            bannerPic: '',
            normalIcon:'home_icon_lottery_nomal@2x',
            activeIcon:'home_icon_lottery_selected@2x'
          },{
            title: '棋牌',
            name: 'chess',
            bannerPic: '',
            normalIcon:'home_icon_board_nomal@2x',
            activeIcon:'home_icon_board_selected@2x'
          },{
            title: '体育',
            name: 'sports',
            bannerPic: '',
            normalIcon:'home_icon_sport_nomal@2x',
            activeIcon:'home_icon_sport_selected@2x'
          },{
            title: '捕鱼',
            name: 'fishing',
            bannerPic: '',
            normalIcon:'home_icon_fishing_nomal@2x',
            activeIcon:'home_icon_fishing_selected@2x'
          }
        ],
      mySwiper1: null,
      mySwiper2: null,
      slotsType: "",
      activeIdx: 0,
      num: 5,
      downAppHidden: window.sessionStorage.getItem('downAppHidden')*1
    };
  },
  watch: {
    active(val) {
      if (val !== 2) {
        this.slotsType = "";
      }
    },
    appInstallStatus(val) {
      if(!val) {
        this.num = screen.height < 812 ? 5 : 6
        this.downAppHidden = 1
        this.activeIdx = 0
        // window.location.reload()
        this.initSwiper()
      }
    }
  },
  computed: {
    ...mapState("global", ["gameSearch"], "users", ["isLogin"])
  },
  created() {
    this.navs02.map((item, index) => {
      if (
        item.name === this.$config[this.$projectname].name &&
        item.name !== "featured"
      ) {
        this.navs.splice(index, 1);
      }
    });
  },
  mounted() {
    this.initSwiper()
  },
  beforeDestroy() {
    document.getElementById('app').style.overflow = 'unset'
  },
  methods: {
    slideCur(index) {
      this.activeIdx = index;
      this.mySwiper1.slideTo(index, 300, false);
    },
    changeSlotsType() {
      this.slotsType = "";
    },
    initSwiper() {
      const that = this
      that.num = screen.height < 812 ? 5 : 6
      // document.getElementById('app').style.overflow = 'hidden'
      let deviceType = navigator.userAgent.toLowerCase();
      this.$nextTick(function() {
        this.mySwiper1 = new Swiper("#swiper-container1", {
          direction: "vertical",
          observer: true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,
          on: {
            slideChangeTransitionStart: function() {
              that.activeIdx = this.activeIndex;
              that.downAppHidden =  window.sessionStorage.getItem('downAppHidden')*1
              // if(this.activeIndex > 0 && screen.height < 813 && !that.downAppHidden) {
              //   document.getElementsByClassName('bg-img')[0].classList.remove('translateScrollMin')
              //   document.getElementsByClassName('bg-img')[0].classList.add('translateScrollMax')
              // }

              const actDom = document.getElementsByClassName('swiper-pagination-bullet')[that.activeIdx]
              const defDomArr = document.getElementsByClassName('swiper-pagination-bullet')
              for(let i=0;i<defDomArr.length;i++) {
                defDomArr[i].style.backgroundImage = that.$bImgs[`home/${that.navs02[i].normalIcon}`]
              }
              actDom.style.backgroundImage = that.$bImgs[`home/${that.navs02[this.activeIndex].activeIcon}`]
            }
          },
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            dynamicMainBullets: that.num,
            clickable: true,
            renderBullet:function(index, className) {
              var text = that.navs02[index].title;
              that.downAppHidden =  window.sessionStorage.getItem('downAppHidden')*1
              if(process.env.VUE_APP_PROJECT_NAME==='10023'){
                var icon = 'none'
              }else{
                var icon = that.$bImgs[`home/${that.navs02[index].normalIcon}`]
              }
              if(that.activeIdx === index) {
                icon = that.$bImgs[`home/${that.navs02[index].activeIcon}`]
              }
              if(process.env.VUE_APP_PROJECT_NAME==='10023'){
                return `<li class="${className}" style='background-image:${icon};'>${text}</li>`
              }else{
                return `<li class="${className}" style='background-image:${icon};'></li>`
              }

            }
          }
        });
        this.mySwiper2 = new Swiper(".swiper-container2", {
          direction: "vertical",
          nested: true,
          slidesPerView: "auto",
          freeMode: true,
          observer: true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: true
          },
          on:{
            transitionEnd: function(){
              const that = this
              that.downAppHidden =  window.sessionStorage.getItem('downAppHidden')*1
              if(screen.height < 813 && that.activeIdx === 0 && !that.downAppHidden) {
                const target = that.$refs['swiperScroll']
                const mTop = target.style.transform.split(',')[1].split('px')[0]*1
                // if(mTop >= 0) {
                //   document.getElementsByClassName('bg-img')[0].classList.add('translateScrollMin')
                //   document.getElementsByClassName('bg-img')[0].classList.remove('translateScrollMax')
                // }
                // if(mTop<= -60) {
                //   document.getElementsByClassName('bg-img')[0].classList.remove('translateScrollMin')
                //   document.getElementsByClassName('bg-img')[0].classList.add('translateScrollMax')
                // }
              }
            }
          }
        });
        const target = this.$refs['swiperScroll']
        this.$refs['swiperScroll'].ontouchmove = () => {
          that.downAppHidden =  window.sessionStorage.getItem('downAppHidden')*1
          if(screen.height < 813 && that.activeIdx === 0 && !that.downAppHidden) {
            const mTop = target.style.transform.split(',')[1].split('px')[0]*1
            // if(mTop>0) {
            //   document.getElementsByClassName('bg-img')[0].classList.add('translateScrollMin')
            //   document.getElementsByClassName('bg-img')[0].classList.remove('translateScrollMax')
            // }
            // if(mTop<-60) {
            //   document.getElementsByClassName('bg-img')[0].classList.remove('translateScrollMin')
            //   document.getElementsByClassName('bg-img')[0].classList.add('translateScrollMax')
            // }
          }
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
#swiper-container1{
  display: flex;
  justify-content: flex-start;
  >.swiper-wrapper {
    width: 88%;
    margin-left: 25%;
  }
  >.swiper-pagination{
    width: 25%;
    height: 100%;
    left:0;
    height: 640px !important;
    top:0;
    transform: translateY(0);
    /deep/.swiper-pagination-bullet{
      width:168px !important;
      margin:0 auto;
      background-color: transparent !important;
      height: 76px;
      background-size: 100%;
      opacity: 1 !important;
      transform: scale(1) !important;
      outline: none !important;
      margin-top: 12px;
      top: 6px !important;
    }
  }
}
</style>
