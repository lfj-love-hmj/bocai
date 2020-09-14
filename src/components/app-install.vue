<template>
  <div class="app-install" v-if="show">
    <van-icon name="cross" @click="close" />
    <!-- <van-image :src="data.icon" /> -->
    <van-image :src="require('@assets/img3_0/home/logo_install.png')" />
    <p>下载全新APP 享受更多优惠 </p>
    <van-button type="primary" @click="$router.push({ name: 'downApp' })">下载</van-button>
  </div>
</template>

<script>
export default {
  name: 'AppInstall',
  props: ['data'],
  data () {
    return {
      show: !window.sessionStorage.getItem('downAppHidden')
    }
  },
  methods: {
    close () {
      this.show = false
      window.sessionStorage.setItem('downAppHidden', 1)
    }
  }
}
</script>

<style lang="less" scoped>

.app-install{
  width: 100%;
  height: 130px;
  position: fixed;
  bottom: calc(@height-tab-bar);
  left: 0;
  background: @bg-card-color;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  color: #fff;
  padding: @space-gap/2 @space-gap;
  .van-icon {
    font-size: 36px;
    color: #666;
    margin-right: 20px;
  }
  .van-image{
    width: 100px;
    height: 100px;
    // padding: 15px;
    // background-color: #1d1d1d;
    border-radius: 8px;
    overflow: hidden;
    // margin-right: 20px;
    img{
      width:100%;
    }
  }
  p{
    width: 60%;
    font-size: 28px;
    padding-left: 20px;
  }
  .van-button{
    height: 64px;
    line-height: 64px;
    width: 140px;
  }
}
@media only screen and (-webkit-device-pixel-ratio: 3) and (device-height: 812px) and (device-width: 375px){
  .app-install{
    bottom: 110px;
  }
}
</style>
