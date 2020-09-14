<template>
  <div class="download">
    <router-link :to='{"path":"/downApp"}' tag='p'>下载APP</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppBanner',
  methods: {
    close () {
      this.$emit('closeAppBanner')
    }
  }
}
</script>

<style scoped lang="less">
.download{
  width: 100%;
  height: 100px;
  // background-image: url('../@assets/img/home/down_bg.png');
  background-size: 100% 100%;
  z-index: 1000;
  &:after{
    content: '';
    display: block;
    clear: both;
  }
  >.close{
    float: left;
    width: 1.1733rem;
    height: 1.1733rem;
    margin: 0.08rem;
  }
  >.logo{
    float: left;
    width: 2.9067rem;
    height: 0.9333rem;
    margin: 0.2rem;
  }
  >p{
    float: right;
    width:1.7333rem;
    height:0.6667rem;
    background:linear-gradient(-90deg,rgba(206,114,0,1),rgba(229,178,0,1));
    border-radius:0.0667rem;
    margin: 0.3333rem;
    font-size:0.32rem;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:0.6667rem;
    text-align: center;
  }
}
</style>