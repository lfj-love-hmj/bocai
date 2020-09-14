<template>
    <div class="mousePop" v-show="isShow">
        <div class="mask"></div>
        <div class="mouse-container">
          <van-icon name="cross" @click="setShow(1)"/>
          <van-image class="mouse-bg" :src="require('@assets/img3_0/mousepop/mouse-bg.png')"></van-image>
          <van-image class="mouse-btn" :src="require('@assets/img3_0/mousepop/mouse-btn.png')" @click="setShow(2)"></van-image>>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        isShow: true
      }
    },
    methods:{
      setShow(val) {
        const date = (new Date()).getTime()
        this.isShow = false
        if(val == 2) {
          this.$router.push({name:'mouse'})
        }
        localStorage.setItem('popTime',date)
      }
    },
    mounted() {
      const now = (new Date()).getTime()
      const date = localStorage.getItem('popTime')*1 || null
      console.log(now-date)
      if(date && (now-date) > 24*60*60*1000) {
        this.isShow = true
      } else if(!date) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
}
</script>

<style lang="less" scoped> 
  .mousePop{
    z-index: 100000;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    text-align: center;
    .mask{
      background-color:rgba(0,0,0,.5);    
      position: absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
    }
    .mouse-container{
      width: 660px;
      margin:0 auto;
      margin-top: 300px;
      position: relative;
      .van-icon{
        color:#fff;
        font-size: 50px;
        position: absolute;
        right:50px;
        top:20px;
        z-index: 9999;
      }
    }
    .mouse-btn{
      width:200px;
      position: absolute;
      left:50%;
      bottom: 150px;
      margin-left: -100px;
    }
  }
</style>