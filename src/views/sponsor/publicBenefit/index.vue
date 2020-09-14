<template>
  <div>
    <lheader
      v-if="!$route.query.source || ['android','ios'].indexOf($route.query.source) !== -1"
      :title="`${$config[$projectname].secName}-爱心无疆`"
      :goback="true"
    ></lheader>
    <ToTop />
    <div class="public-love">
      <div class="public-top">
        <p class="public-top-p">
          {{$config[$projectname].secName}}一直对公益事业的发展方面格外关注，对环境保护、教育、消除贫困。自2008年成立以来，{{$config[$projectname].secName}}累计各种慈善公益事业捐款已达1600万元人民币的救援物资和救援金，{{$config[$projectname].secName}}员工在社会公益事业方面投入累计超过5万多小时。
        </p>
        <ul class="public-top-list">
          <li class="life">
            <img src="./assets/img10.png" alt="" />
            <h2>生活</h2>
            <p>提升社会弱势群体成员的生活质量</p>
          </li>
          <li class="health">
            <img src="./assets/img12.png" alt="" />
            <h2>健康</h2>
            <p>承建健康、营养和医疗项目，以促进健康公平性</p>
          </li>
          <li class="education">
            <img src="./assets/img11.png" alt="" />
            <h2>教育</h2>
            <p>开展促进教育、学习的发展方案</p>
          </li>
          <li class="">
            <img src="./assets/img9.png" alt="" />
            <h2>救援</h2>
            <p>为弱势群体、自然灾害的灾民，提供紧急救援帮助</p>
          </li>
        </ul>
        <div class="public-top-hbox">
          <p>
            {{$config[$projectname].secName}}希望利用自己的资源和优势，让更多人有机会了解公益事业，参与公益事业，推动整个社会公益事业的可持续发展。
          </p>
        </div>
      </div>
      <div class="public-bottom">
        <h2>{{$config[$projectname].secName}}募捐台风“苏力”</h2>
        <div class="typhoon">
          <p>
            2013年7月13日，强台风“苏力”进入浙江沿海地区，温州有5个县(市、区)53个乡(镇、街道)41万人受灾，乡镇受损最为严重，直接经济损失2.12亿元。其中农林牧渔业0.92亿元，工业交通运输业0.29亿元，水利设施0.35亿元。家园被催毁、流离失所。
          </p>
          <p>
            {{$config[$projectname].secName}}在第一时间通过菲律宾公益组织Habitat捐赠人民币50万元及100箱衣物和食品，希望能为沿海受灾居民恢复生产，重建家园，略尽绵薄之力。
          </p>
          <p>
            {{$config[$projectname].secName}}将现金用于重建“苏力”重灾区（乡镇等）的房屋等，捐赠物品派发给当地灾区居民。
          </p>
        </div>
        <ul class="public-bottom-list">
          <li>
            <img src="./assets/img3.png" alt="" />
            <p>{{$config[$projectname].secName}}的众多志愿者正在打包给灾民的食品和饮料</p>
          </li>
          <li>
            <img src="./assets/img4.png" alt="" />
            <p>志愿者在每个包裹上都写上了给灾民的爱</p>
            <p>“Never lose hope, God loves u”</p>
          </li>
          <li>
            <img src="./assets/img5.png" alt="" />
            <p>{{$config[$projectname].secName}}的众多志愿者正在打包给灾民的食品和饮料</p>
          </li>
          <li>
            <img src="./assets/img6.png" alt="" />
            <p>{{$config[$projectname].secName}}的众多志愿者正在打包给灾民的食品和饮料</p>
          </li>
          <li>
            <img src="./assets/img7.png" alt="" />
            <p>{{$config[$projectname].secName}}的众多志愿者正在打包给灾民的食品和饮料</p>
          </li>
          <li>
            <img src="./assets/img8.png" alt="" />
            <p>{{$config[$projectname].secName}}的众多志愿者正在打包给灾民的食品和饮料</p>
          </li>
        </ul>
        <h2>其他企业社会责任活动</h2>
        <div class="typhoon">
          <p>
            2013年5月，在四川雅安芦山地区发生4.20大地震后，{{$config[$projectname].secName}}捐款50万元，帮助雅安居民恢复生产，重建家园。
          </p>
          <p>
            2011年7月，在玉树地震发生一周年之后，{{$config[$projectname].secName}}捐赠30万元帮助玉树重灾区的9所学校兴建爱心图书室。共为9所学校提供书架150个、阅览桌椅100套，可存放图书近20万本。
          </p>
          <p>
            2010年12月，{{$config[$projectname].secName}}开展针对HIV/AIDS的“反歧视”活动，提升员工和社会大众对HIV和AIDS的认识，消除对艾滋病的偏见和歧视行为，创造和谐的工作和社会环境。
          </p>
          <p>
            2008年9月，{{$config[$projectname].secName}}助学金第一期项目计划走进菲律宾的20所高校的医学、教育学院，捐助30万元用于资助品学兼优的清贫学子完成他们大学学业。
          </p>
          <p>
            特此申明：{{$config[$projectname].secName}}平台仅此一家，且只拥有{{$config[$projectname].secName}}唯一品牌，旗下绝无任何一家子平台以及合作平台。
          </p>
          <p>
            为保障您的利益，请使用平台唯一域名验证中心：wanqu.bet 辨别真假平台。
          </p>
        </div>
      </div>
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
.public-love {
  background-color: #efdcce;
  .public-top {
    margin: 94px auto;
    width: 630px;
    height: 2000px;
    background: url(./assets/img14.png) no-repeat center 40px;
    background-size: 630px auto;
    .public-top-p {
      margin: 0 auto;
      padding: 680px 0 30px;
      width: 607px;
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(131, 105, 77, 1);
      line-height: 48px;
    }
    .public-top-list {
      display: flex;
      flex-wrap: wrap;
      li {
        text-align: center;
        width: 260px;
        img {
          height: 228px;
        }
        h2 {
          font-size: 60px;
          font-weight: 400;
          color: rgba(131, 105, 77, 1);
          line-height: 48px;
        }
        p {
          font-size: 18px;
          color: #83694d;
          line-height: 1.3;
          margin-top: 20px;
        }
      }
      .life {
        margin-right: 50px;
        padding-left: 26px;
      }
      .education {
        margin-right: 58px;
        h2,
        p {
          padding-left: 46px;
        }
      }
    }
    .public-top-hbox {
      margin: 46px auto;
      width: 100%;
      height: 165px;
      background: url(./assets/img13.png) no-repeat;
      background-size: 100%;
      p {
        padding: 56px 0 0 77px;
        width: 553px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(248, 104, 81, 1);
        line-height: 36px;
        text-align: center;
      }
    }
  }
  .public-bottom {
    margin: 0 auto;
    padding: 60px;
    h2 {
      padding-left: 50px;
      height: 50px;
      font-size: 36px;
      font-weight: 400;
      color: rgba(131, 105, 77, 1);
      line-height: 50px;
      padding-top: 10px;
      background: url(./assets/img1.png) no-repeat;
      background-size: 44px;
      margin: 0;
    }
    .typhoon {
      padding: 30px 0 75px;
      p {
        font-size: 18px;
        font-weight: 400;
        color: rgba(131, 105, 77, 1);
        line-height: 36px;
        margin-bottom: 20px;
      }
    }
    .public-bottom-list {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 288px;
        text-align: center;
        margin-right: 46px;
        margin-bottom: 40px;
        &:nth-child(2n) {
          margin-right: 0;
        }
        img {
          width: 288px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          color: rgba(131, 105, 77, 1);
          line-height: 30px;
          padding-top: 26px;
        }
      }
    }
  }
}
</style>
