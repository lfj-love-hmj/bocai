<template>
  <van-nav-bar
    class="m-header"
    :title="title"
    :fixed="true"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script>
    export default {
      name: 'n-header',
      props: ['title'],
      data() {
        return {}
      },
      methods: {
        onClickLeft() {
          this.$router.go(-1)
        },
        onClickRight() {
          Toast('按钮');
        }
      }
    }
</script>

<style scoped lang="less">
// .van-nav-bar{
//   background-color: @bg-color!important;
// }
</style>
