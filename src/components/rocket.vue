<template>
  <div class="rocket">
    <div class="circle"></div>
    <div class="ship">
      <i class="iconfont icon-rocket"></i>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "~@assets/styles/login/index.less";
@width: 298px;
@bg: #01191d;
@green: #18F4A3;
@bluegreen: #00ffea;
@bluewhite: #dafffe;

.rocket{
  width: @width;
  height: @width;
  position: relative;
  margin: 0 auto;
}

.ship,
.circle {
  width: 50%;
  height: 50%;
  position: absolute;
  left: 25%;
  top: 25%;
  will-change: transform;
}

.circle{
  &:before,
  &:after{
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    background-color: @primary-color;
    border-radius: 50%;
  }
  &:before{
    animation: circle1 1.2s linear infinite;
  }
  &:after{
    animation: circle2 1.2s linear infinite;
  }
}

.ship {
  padding: 12.5%;
  border-radius: 50%;
  background-color: @primary-color;
  // transform: matrix(0.76604, 0.64278, -0.64278, 0.76604, 0, 0);
  img{
    display: block;
    width: 100%;
  }
  .iconfont{
    position: absolute;
    left: 25%;
    top: 25%;
    font-size: @width / 4;
    color: #fff;
    animation: rocket 1s alternate infinite linear;
  }
  // .fire {
  //   width: 15px;
  //   height: 15px;
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   margin-left: -7.5px;
  //   margin-top: 25px;
  //   border-top-left-radius: 80% 55%;
  //   border-top-right-radius: 0px;
  //   border-bottom-right-radius: 55% 80%;
  //   border-bottom-left-radius: 50%;
  //   background-color: @bluegreen;
  //   transform: rotate(135deg);
  //   animation: flicker infinite 1s alternate ease-in-out;
  //   z-index: -4;
  //   &:after {
  //     content: '';
  //     top: 5px;
  //     position: absolute;
  //     width: 10px;
  //     height: 10px;
  //     margin-left: -5px;
  //     border-top-left-radius: 80% 55%;
  //     border-top-right-radius: 0px;
  //     border-bottom-right-radius: 55% 80%;
  //     border-bottom-left-radius: 50%;
  //     background-color: @bluewhite;
  //   }  
  // }
}

@keyframes circle1 {
  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
@keyframes circle2 {
  to {
    transform: scale(2.2);
    opacity: 0;
  }
}

@keyframes rocket {
  from {
    transform: translate(-3px,2px);
    // opacity: 0;
  }
  to {
    transform: translate(2px,-3px);
  }
}

</style>
