<template>
  <div class="reward-pop popup">
    <div class="mask"></div>
    <div class="img">
      <img
        class="closeLevel"
        @click="close"
        :src="require('@assets/img3_0/memberCenter/levelUp/guanbi@2x.png')"
        alt
      />
      <div class="detailed">
        <p><span>{{redMsg.money}}</span>元</p>
        <p>恭喜您获得{{redMsg.data.name}}红包</p>
        <p>已存入您的钱包</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'rewardPop',
  data() {
    return {

    }
  },
  computed:{
    ...mapState('global',['redMsg'])
  },
  methods: {
    close() {
      this.$store.dispatch('global/setRedBag', [false])
    }
  }
};
</script>

<style lang="less" scoped>
.popup {
  z-index: 100000;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  .mask{
    background-color:rgba(0,0,0,.5);    
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
  }
  .img{
    background-image: url('~@assets/img3_0/decorate/redbag@2x.png');
    background-size: 100%;
    width:750px;
    height:806px;
    position: relative;
    left: 50%;
    top:40%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    .closeLevel{
      bottom:-140px;
      width:100px;
      left:50%;
      margin-left: -50px;
      position: absolute;
    }
    .detailed{
      text-align: center;
      padding-top:520px;
      p{
        color: @primary-color;
        font-size: 28px;
        margin-bottom:20px;
        font-weight: 600;
        span{
          font-size: 80px;
          margin-right: 10px;
          background:linear-gradient(180deg, rgba(235,195,127,1) 0%, rgba(255,251,215,1) 100%);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
      }
    }
  }
}
</style>