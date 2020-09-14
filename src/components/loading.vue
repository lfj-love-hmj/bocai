<template>
  <div class="loading" v-show="isShow" :class="{ background: background }">
    <div class="logo">
      <img class="icon" src="@assets/img3_0/common/loading-2.png" alt="loading">
    </div>
    <span class="title">{{title||'加载中...'}}</span>
  </div>
</template>

<script>
  export default {
    name: "Loding",
    data() {
      return {
      }
    },
    props: {
      title: '',
      isShow: false,
      background: true
    },
    created() {

    },
    methods: {
    },
    watch:{
    }
  }
</script>

<style scoped lang="less">
.loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &.background{
    background-color: rgba(0, 0, 0, .8);
  }
  .logo {
    background-image: url('~@assets/img3_0/common/loading-1.png');
    background-size: 45%;
    background-position: center;
    background-repeat: no-repeat;
    height: 2rem;
    width: 2rem;
  }
  .title {
    font-size:@font-size-15;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    margin-top: 10px;
    color:@primary-text-color;
  }
  .icon {
    animation: rotate 1.2s linear infinite;
    width: inherit;
  }
  @keyframes rotate{
    from{transform: rotate(0deg)}
    to{transform: rotate(360deg)}
  }
}
</style>
