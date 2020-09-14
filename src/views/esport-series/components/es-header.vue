<template>
  <van-nav-bar
      class="m-header a"
      :fixed="true"
      :left-arrow="showLeft"
      @click-left="clickBack"
    >
      <template #title>
        <img :src="$imgs['login/logo']" alt="">
      </template>
      <template #right>
        <img :src="$imgs['otherIcon/kefu@2x']" alt="" @click="$openKefu()">
      </template>

    </van-nav-bar>
</template>

<script>
export default {
  props: {
    showLeft: {
      type:Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    clickBack() {
      if (this.$route.name === 'Home' || !this.$route.name) {
        window.parent.postMessage('home', '*')
      } else {
        window.history.go(-1)
      }
    }
  }
}
</script>