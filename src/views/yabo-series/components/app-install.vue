<template>
  <div class="app-install" v-if="show">
    <van-icon name="cross" @click="close" />
    <!-- <van-image :src="data.icon" /> -->
    <van-image :src="$imgs['home/logo_install']" />
    <p><span>{{$config[$projectname].project}}全站APP</span><span>真人娱乐，体育投注，电子游艺等尽在一手掌握</span></p>
    <van-button class="install-btn" type="primary" @click="$router.push({ name: 'downApp' })">立即下载</van-button>
    <!--<img class="install-btn" :src="$imgs['home/home_down_bt_xz@2x']" @click="$router.push({ name: 'downApp' })" alt="">-->

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
      this.$emit('handleChange', this.show)
      window.sessionStorage.setItem('downAppHidden', 1)
    }
  }
}
</script>

<style lang="less" scoped>
.app-install{
  width: 100%;
  height: 100px;
  top: calc(@height-tab-bar);
  left: 0;
  background: @color-tab-bar;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  color: #fff;
  padding: @space-gap/2 @space-gap;
  .van-icon {
    font-size: 36px;
    color: #ccc;
    margin-right: 16px;
  }
  .van-image{
    width: 80px;
    height: 80px;
    // padding: 15px;
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
    padding-left: 8px;
    color: #333;
    span:last-child{
      font-size: 18px;
      color: #999;
      display: block;
      margin-top: 8px;
    }
  }
}
</style>
