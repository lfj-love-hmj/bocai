<template>
  <div class="to-top" id="to-top-s" @click="goToTop">
    <img src="./to-top.png"  alt="" />
  </div>
</template>

<style lang="less" scoped>
.to-top {
  position: fixed;
  right: 47px;
  bottom: 100px;
  display: flex;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;

  img {
    width: 64px;
    height: auto;
    margin: auto;
  }
}
</style>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    goToTop() {
      // 滚动动画由CSS实现 scroll-behavior: smooth;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
  },

};
</script>
