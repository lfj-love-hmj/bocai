
<template>
  <div>
    <Roadmap
      :canvasHeight="76"
      :defaultVid="vid"
      :cellSize="12"
    />
  </div>
</template>

<script>
import Roadmap from '@/components/roadmap'
export default {
  name: 'Luckyway',
  components: {
    Roadmap
  },
  data () {
    return {
      vid: null,
      bg: true
    }
  },
  // beforeCreate () {
  //   document.documentElement.classList.add('transparent')
  // },
  created () {
    // const { bg } = this.$route.query
    // console.log(bg)
    // this.bg = !!bg
    document.documentElement.classList.add('transparent')
  },
  beforeDestroy () {
    document.documentElement.classList.remove('transparent')
  }
}
</script>

<style lang="less">
html.transparent,
html.transparent body{
  background: transparent
}
</style>