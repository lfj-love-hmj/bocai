
<template>
  <div class="brand-wrap">
    <van-nav-bar
      class="m-header"
      left-arrow
      :title="title"
      :fixed="true"
      @click-left="goback"
      v-if="isShowHeader"
    >
    </van-nav-bar>
    <template v-if="$projectname==='10023'">
      <bvbPage01 v-if="id===1"></bvbPage01>
      <bvbPage02 v-if="id===2"></bvbPage02>
      <bvbPage03 v-if="id===3"></bvbPage03>
      <bvbPage04 v-if="id===4"></bvbPage04>
    </template>
    <template v-if="$projectname==='10025'">
      <hlPage01 v-if="id===1"></hlPage01>
      <hlPage02 v-if="id===2"></hlPage02>
    </template>
    <template v-if="$projectname==='10027'">
      <xbPage01 v-if="id===1"></xbPage01>
      <xbPage02 v-if="id===2"></xbPage02>
    </template>
    <template v-if="$projectname==='10028'">
      <zbPage01 v-if="id===1"></zbPage01>
      <zbPage02 v-if="id===2"></zbPage02>
    </template>
    <template v-if="$projectname==='10029'">
      <qbPage01 v-if="id===1"></qbPage01>
      <qbPage02 v-if="id===2"></qbPage02>
      <qbPage03 v-if="id===3"></qbPage03>
    </template>
    <template v-if="$projectname==='10033'">
      <dbPage01 v-if="id===1"></dbPage01>
      <dbPage02 v-if="id===2"></dbPage02>
    </template>
  </div>
</template>

<script>
  import bvbPage01 from './bvbPage01'
  import bvbPage02 from './bvbPage02'
  import bvbPage03 from './bvbPage03'
  import bvbPage04 from './bvbPage04'
  import hlPage01 from './hlPage01'
  import hlPage02 from './hlPage02'
  import dbPage01 from './dbPage01'
  import dbPage02 from './dbPage02'
  import zbPage01 from './zbPage01'
  import zbPage02 from './zbPage02'
  import qbPage01 from './qbPage01'
  import qbPage02 from './qbPage02'
  import qbPage03 from './qbPage03'
  import xbPage01 from './xbPage01'
  import xbPage02 from './xbPage02'
import Vtabbar from "../components/v-tabbar"
import "swiper/dist/css/swiper.css";
import { Swiper } from "vue-awesome-swiper";
export default {
  name: 'Brand',
  components: {
    Vtabbar,
    bvbPage01,
    bvbPage02,
    bvbPage03,
    bvbPage04,
    hlPage01,
    hlPage02,
    dbPage01,
    dbPage02,
    zbPage01,
    zbPage02,
    qbPage01,
    qbPage02,
    qbPage03,
    xbPage01,
    xbPage02
  },
  data () {
    return {
      isShowHeader: true,
      title: '',
      bannerArray:[
        {num:'06',name:'何塞·路易斯·帕洛米诺',eng:'José Luis Palomino'},
        {num:'04',name:'博什科·舒塔洛',eng:'Boško Šutalo'},
        {num:'02',name:'拉斐尔·托洛伊',eng:'Rafael Toloi'},
        {num:'21',name:'蒂莫西·卡斯塔涅',eng:'Timothy Castagne'},
        {num:'08',name:'罗宾·戈森斯',eng:'Robin Gosens'}],
      activeIndex:0,
      bannerArray02:[
        {num:'14',name:'达尼·加西亚',eng:'Daniel Garcia'},
        {num:'10',name:'伊克尔·穆尼亚因',eng:'Iker Muniain'},
        {num:'06',name:'米克尔·多明戈斯',eng:'Mikel Vesga'},
        {num:'22',name:'劳尔·加西亚·埃斯库德罗',eng:'Raul Garcia Escudero'},
        {num:'03',name:'乌奈·努涅斯',eng:'Unai Núñez'}],
      name:'何塞·路易斯·帕洛米诺',
      eng:'José Luis Palomino',
      brandBvb:[],
      id:this.$route.query.id*1
    };
  },
  created() {
    if (this.$route.query.source) {
      this.isShowHeader = false;
    }
    const toast = this.$toast.loading({
      className: "toast-loading",
      mask: false,
      duration: 1000,
      forbidClick: true,
      loadingType: "spinner",
    });
    if(['10023'].includes(process.env.VUE_APP_PROJECT_NAME)){
      this.brandBvb = [{
        cover:'bet_brand_banner_1@2x',
        tit:'那不勒斯'
      },{
        cover:'bet_brand_banner_2@2x',
        tit:'多特蒙德'
      },{
        cover:'bet_brand_banner_3@2x',
        tit:'菲利波·因扎特'
      },{
        cover:'bet_brand_banner_4@2x',
        tit:'法甲·里昂'
      }]

    }else if(['10025'].includes(process.env.VUE_APP_PROJECT_NAME)){
      this.brandBvb = [{
        cover:'bet_brand_banner_1@2x',
        tit:'德甲莱比锡'
      },{
        cover:'bet_brand_banner_2@2x',
        tit:'意甲帕尔马'
      }]
    }else if(['10027'].includes(process.env.VUE_APP_PROJECT_NAME)){
      this.brandBvb = [{
        cover:'bet_brand_banner_1@2x',
        tit:'西甲瓦伦西亚'
      },{
        cover:'bet_brand_banner_2@2x',
        tit:'品牌代言'
      }]
    }else if(['10028'].includes(process.env.VUE_APP_PROJECT_NAME)){
      this.brandBvb = [{
        cover:'bet_brand_banner_1@2x',
        tit:'荷甲阿贾克斯'
      },{
        cover:'bet_brand_banner_2@2x',
        tit:'法甲波尔多'
      }]
    }else if(['10029'].includes(process.env.VUE_APP_PROJECT_NAME)){
      this.brandBvb = [{
        cover:'bet_brand_banner_1@2x',
        tit:'英超曼联'
      },{
        cover:'bet_brand_banner_2@2x',
        tit:'德甲拜仁慕尼黑'
      },{
        cover:'bet_brand_banner_3@2x',
        tit:'杰拉德'
      }]
    }else if(['10033'].includes(process.env.VUE_APP_PROJECT_NAME)){
      this.brandBvb = [{
        cover:'bet_brand_banner_1@2x',
        tit:'克罗地亚'
      },{
        cover:'bet_brand_banner_2@2x',
        tit:'达沃·苏克'
      }]
    }
    this.title = this.brandBvb[this.$route.query.id*1-1].tit
    let that = this;
    // this.onRefresh();

  },
  methods: {
    goback(){
      this.$router.go(-1)
    },
  }
};
</script>
<style scoped lang="less">
  .brand-wrap{

    margin-top: 88px;
    .m-header{
      z-index: 80;
    }
    /deep/ .van-nav-bar__title{
      font-weight: bold;
    }

  }
</style>

