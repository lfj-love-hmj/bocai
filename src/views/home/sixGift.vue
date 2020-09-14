<template>
  <div class="six-gifts" :class="{ active: showPop }">
    <div class="gift-mask"></div>
    <div class="gift-pop">
      <img :src="require('@assets/img3_0/home/six-gift/bg.png')" alt="">
      <h2>存款六重礼</h2>
      <ul class="redpacks">
        <li
          v-for="(item, index) in redpacks"
          :key="index"
        >
          <h3>{{ item.prize }}元</h3>
          <span>免费彩金</span>
          <p>单笔存款<br>{{ item.need }}元以上</p>
        </li>
      </ul>
      <a @click="link">了解详情</a>
      <span class="close" @click="close"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SixGift',
  props: {},
  data () {
    const redpacks = [{
      prize: 38888,
      need: 100000
    }, {
      prize: 15888,
      need: 50000
    }, {
      prize: 1268,
      need: 5000
    }, {
      prize: 188,
      need: 1000
    }, {
      prize: 58,
      need: 500
    }, {
      prize: 18,
      need: 100
    }]
    return {
      showPop: false,
      redpacks
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.showPop = !window.sessionStorage.getItem('sixGiftsPopShown');
      }, 1000);
    })
  },
  methods: {
    link () {
      this.close();
      // this.$router.push({
      //   name: 'seminar',
      //   query: {
      //     id: 58
      //   }
      // })
      this.$router.push({
        name: '6gift'
      })
    },
    close () {
      this.showPop = false;
      window.sessionStorage.setItem('sixGiftsPopShown', 1)
    }
  }
}
</script>

<style lang="less" scoped>
.six-gifts{
  .gift-mask{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(#000, .9);
    visibility: hidden;
    opacity: 0;
    z-index: 1;
    transition: opacity .45s ease-in;
  }
  .gift-pop{
    width: 750px;
    height: 1010px;
    position: fixed;
    top: 50%;
    left: 0;
    margin-top: -505px;
    visibility: hidden;
    opacity: 0;
    z-index: 1;
    transform: scale(.6);
    transition: opacity .45s ease-in, transform .45s ease-in-out;
    > img {
      display: block;
      width: 100%;
    }
    h2{
      width: 100%;
      position: absolute;
      left: 0;
      top: 140px;
      text-align: center;
      line-height: 58px;
      font-size: 42px;
      font-weight: 500;
      color: #fff;
      margin: 0;
    }
    a{
      width: 420px;
      height: 74px;
      position: absolute;
      left: 50%;
      margin-left: -210px;
      bottom: 210px;
      background-image: linear-gradient(to right, #c34cff, #6652cc);
      color: #fff;
      font-size: 32px;
      text-align: center;
      line-height: 74px;
      border-radius: 40px;
      cursor: pointer;
    }
    span.close{
      position: absolute;
      width: 90px;
      height: 90px;
      left: 50%;
      margin-left: -45px;
      bottom: 20px;
      text-indent: -9999em;
      cursor: pointer;
    }
  }
  &.active{
    .gift-mask{
      visibility: visible;
      opacity: 1;
      z-index: 2998;
    }
    .gift-pop{
      visibility: visible;
      opacity: 1;
      transform: scale(1);
      z-index: 2999;
    }
  }
  .redpacks{
    position: absolute;
    left: 0;
    top: 240px;
    padding: 15px 50px 0;
    li{
      float: left;
      width: 500px / 3;
      height: 240px;
      margin: 0 25px;
      padding-top: 40px;
      background: url(~@assets/img3_0/home/six-gift/redpack.png) center center no-repeat;
      background-size: cover;
      color: #91570d;
      text-align: center;
      h3{
        font-size: 30px;
        font-weight: 500;
        margin: 0;
        margin-bottom: 10px;
      }
      >span{
        font-size: 24px;
      }
      p{
        margin-top: 45px;
        color: #fff;
      }
    }
  }
}
</style>