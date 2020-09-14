<template>
  <div>
    <lheader
      v-if="!$route.query.source || ['android','ios'].indexOf($route.query.source) !== -1"
      :title="`${$config[$projectname].secName}演唱会赞助`"
      :goback="true"
    ></lheader>
    <ToTop />
    <div class="suncity-wraper">
      <p class="suncity-info">
        {{$config[$projectname].secName}}联合太阳城集团实力赞助各类明星大咖演唱会，顶级金光综艺馆娱乐体验。现场强烈的气氛加上惊艳四射的视听设备，打造出耀目的舞台效果。只为{{$config[$projectname].secName}}和太阳城的尊贵客户提供最优质的视听和娱乐盛宴。
      </p>
      <img class="suncity-img" src="./assets/img2.png" alt="" />
    </div>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import ToTop from "@/components/to-top";
export default {
  components: {
    Lheader,
    ToTop
  },
  data() {
    return {
      isShowHeader: true
    };
  }
};
</script>

<style lang="less" scoped>
.logoImg {
  width: 100%;
  height: auto;
  position: absolute;
  top: 1.17333rem;
  left: 0;
}
.suncity-wraper {
  width: 100%;
  height: 1400px;
  background: url(./assets/bg1.png) no-repeat center;
  background-size: cover;
  position: relative;
  .suncity-info {
    position: absolute;
    left: 50%;
    top: 420px;
    margin-left: -242px;
    width: 485px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 36px;
    text-align: center;
  }
  .suncity-img {
    position: absolute;
    left: 50%;
    top: 671px;
    margin-left: -242px;
    width: 485px;
  }
}
</style>
