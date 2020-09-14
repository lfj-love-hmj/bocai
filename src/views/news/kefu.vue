<template>
  <div class="kefu">
		<van-nav-bar
      class="m-header"
      title="专属客服"
			left-arrow
      :fixed="true"
			@click-left="onClickLeft"
    />
    <div class="m-body">
      <!-- <div class="loading">
        <div class="logo"></div>
        <span class="title">加载中...</span>
      </div> -->
      <iframe :src="link" ref="iframe"></iframe>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Kefu',
  data () {
    return {}
  },
  computed: {
    ...mapState('global', ['siteInfo']),
    ...mapState('users', ['userInfo']),
    link () {
      const { siteInfo, userInfo } = this
      if(userInfo.username && siteInfo) {
        if(siteInfo.h5_kf.indexOf('aichat') !== -1) {
          return `${siteInfo.h5_kf}?params={"username":"${userInfo.username}"}`
        } else {
          return `${siteInfo.h5_kf}&metadata={"name":"${userInfo.username}"}`
        }
      }
      return ''
    }
  },
  created () {
    !this.link && this.getSiteInfo()
    this.$loading()
    this.$nextTick(() => {
      const iframe = this.$refs.iframe
      if (iframe.attachEvent) {
        iframe.attachEvent('onload', () =>{
          this.$toast.clear()
        })
      } else {
        iframe.onload = () => {
          this.$toast.clear()
        }
      }
    })
  },
  methods: {
    ...mapActions('global', [
      'getSiteInfo'
    ]),
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.kefu{
  height:100%;
  .m-body{
    height:100%;
  }
}
iframe{
  width: 100%;
  height: 100%;
  border: none;
}
</style>