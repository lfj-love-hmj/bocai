
<template>
  <div class="activities">
    <van-nav-bar
      class="m-header"
      :title="title"
      :fixed="true"
      @click-right="$openKefu"
      v-if="isShowHeader"
    >
      <van-icon name="service" slot="right" class="kefu" />
    </van-nav-bar>
    <vtabbar class="m-footer" v-if="isShowHeader" :index="3"></vtabbar>
    <div class="img-box" :style="{paddingTop: !isShowHeader && '0'}">
        <img class="bg" src="../img3_0/brand/bg.png" alt="">
        <img class="ball" src="../img3_0/brand/ball.png" alt="">
        <img class="text" src="../img3_0/brand/text.png" alt="">
        <img class="name" src="../img3_0/brand/name.png" alt="">
        <img class="golds" src="../img3_0/brand/golds.png" alt="">
        <img class="center" src="../img3_0/brand/center.png" alt="">
        <img class="blbl1" src="../img3_0/brand/blbl1.png" alt="">
        <img class="blbl2" src="../img3_0/brand/blbl2.png" alt="">
        <img class="left" src="../img3_0/brand/left.png" alt="">
        <img class="right" src="../img3_0/brand/right.png" alt="">
    </div>
  </div>
</template>

<script>
import Vtabbar from "@/components/v-tabbar"

export default {
  data () {
    return {
      title: '品牌',
      isShowHeader: true
    };
  },
  components: {
     Vtabbar
  },
  created() {
    if (this.$route.query.source) {
      this.isShowHeader = false;
    }
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
    .activities {
        .img-box{
            position: relative;
            width: 100%;
            height: 100%;
            padding: 1.17333rem 0;
            .bg{
                width: 100%;
            }
            .ball{
                position: absolute;
                right: 24%;
                top: 14%;
                width: 25%;
            }
            .text{
                position: absolute;
                top: 20%;
                right: 0;
                width: 68%;
            }
            .name{
                position: absolute;
                top: 40%;
                right: 0;
                width: 100%;
                z-index: 9;
            }
            .golds{
                position: absolute;
                top: 50%;
                right: 12%;
                width: 15%;
            }
            .center{
                position: absolute;
                top: 57%;
                left: 50%;
                transform: translateX(-50%);
                width: 50%;
            }
            .blbl1{
                position: absolute;
                top: 59%;
                left: 2%;
                width: 60%;
                z-index: 10;
            }
            .blbl2{
                position: absolute;
                top: 53%;
                right: 0;
                width: 60%;
            }
            .left{
                position: absolute;
                bottom: 9%;
                left: 9%;
                width: 40%;
            }
            .right{
                position: absolute;
                bottom: 5%;
                right: 9%;
                width: 40%;
            }
        }
    }
</style>
