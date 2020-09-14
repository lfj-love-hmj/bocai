<template>
  <div class="slide-vertical">
    <div class="vertical-wrapper">
      <div class="slide-vertical-scroll" ref="slide">
        <div class="slide-group" ref="slideGroup">
          <div class="slide-item" ref="innerScroll" v-for="(item,index) in navs">
						<ul class="inner-content">
              <Sports ref="sports" v-if="index===0"/>
              <Casino ref="casino" v-if="index===1"/>
              <Slots ref="slots" v-if="index===2" :slotsType="slotsType" @changeSlotsType="changeSlotsType"/>
              <Chess ref="chess" v-if="index===3"/>
              <Lottery ref="lottery" v-if="index===4"/>
              <ESports ref="esports" v-if="index===5"/>
              <Fishing ref="fishing" v-if="index===6"/>
            </ul>
					</div>
        </div>
      </div>
      <div class="docs-wrapper" ref="docs">
        <div class="docs-content">
          <div @click="change(index)" v-for="(item, index) in navs" :key="index">
            <img class="nav-norm-icon" :src="$imgs[`home/${currentPageIndex === index?item.activeIcon:item.normalIcon}`]" alt="">
          </div>
        </div>
      </div>
      <van-icon size="20" class="down" name="arrow-down" />
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
// better-scroll
import BScroll from "@better-scroll/core";
import NestedScroll from '@better-scroll/nested-scroll'
import Slide from "@better-scroll/slide";

BScroll.use(Slide)
BScroll.use(NestedScroll)

export default {
  props: ['navs'],
  components: {
    Casino,
    Chess,
    Slots,
    Lottery,
    Fishing,
    Sports,
    ESports
  },
  data() {
    return {
      slide: null,
      playTimer: 0,
      currentPageIndex: 0,
      slotsType: ''
    };
  },
  mounted() {
    this.$nextTick(()=> {
        this.init();
    })
  },
  beforeDestroy() {
    this.slide.destroy();
  },
  methods: {
    init() {
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: false,
        scrollY: true,
        slide: {
          loop: false,
					threshold: 10
        },
        useTransition: true,
        momentum: false,
        bounce: false,
				stopPropagation: true,
				nestedScroll: true
      });
      this.$refs.innerScroll.map((item,index) => {
        this[`innerScroll${index}`] = new BScroll(item, {
          nestedScroll: true,
          // close bounce effects
          bounce: {
            top: true,
            bottom: true
          }
        })
      })
      // console.log(this.$refs.docs)
      // this.docs = new BScroll(this.$refs.docs, {
      //   scrollY: true,
      //   probeType: 3
      // }) 
			this.slide.on("scrollEnd", this.onScrollEnd);
    },
    onScrollEnd() {
        console.log(this.slide, this.$refs.slide)
      let pageIndex = this.slide.getCurrentPage().pageY;
      this.currentPageIndex = pageIndex;
    },
    changeSlotsType () {
      this.slotsType = ''
    },
    change(index) {
      this.slide.goToPage(0,index,600,{})
    }
  }
};
</script>

<style lang="less" scoped>

.slide-vertical{
  height: 100%;
  &.view{
    padding: 0;
    height: 100%;
  }
  .vertical-wrapper{
    position: relative;
    height: 100%;
    font-size: 0;
    .down{
      position: absolute;
      bottom:10px;
      color: @primary-color;
      left: 38px;
      animation: arrow_move 1s linear 1s infinite alternate;
    }
  }
  .slide-vertical-scroll{
    height: 100%;
    overflow: hidden;
    width: 84%;
    right: 0;
    top: 20px;
    padding-right: 20px;
    position: absolute;
    .slide-item{
      width: 100%;
      font-size: 26px;
      transform: translate3d(0,0,0);
			backface-visibility: hidden;
			float: left;
      position: relative;
      overflow: hidden;
    }
  }
  .docs-wrapper{
    position: absolute;
    left: 4px;
    top: 14px;
    width: 14%;
    height: 100%;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .docs-content{
      div{
        &:last-child{
          margin-bottom: 40px;
        }
      }
    }
    img{
      width: 100%;
      margin: 0 auto;
    }
  }
}
@keyframes arrow_move {
  from {bottom:-4px;}
  to {bottom: 4px;}
}
</style>