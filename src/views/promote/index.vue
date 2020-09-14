<template>
  <div id="promote">
    <gheader class="m-header"></gheader>
    <div class="top">
      <van-image :src="require('@assets/img3_0/promote/top_brand@2x.png')"></van-image>
    </div>
    <div class="main">
      <div class="section1">
        <h2>千种游戏，任您选择</h2>
        <div class="content" >
          <div 
            class="item"
            v-for="(item,index) in section1" 
            :key="index"
            :style="{backgroundImage:`url(${require(`@assets/img3_0/promote/game_${index+1}@2x.png`)})`}">
            <h4>{{ item.title }}</h4>
            <p v-html="item.content"></p>
          </div>
        </div>
      </div>
      <div class="section2">
        <h2>各种优惠好礼，天天送大礼</h2>
        <div class="content" >
          <div 
            class="item"
            v-for="(item,index) in section2" 
            :key="index">
            <h4>{{ item.title }}</h4>
            <p v-html="item.content"></p>
          </div>
        </div>
      </div>
      <div class="section3">
        <h2>品牌权威&实力雄厚，多名女优代言品牌</h2>
        <div class="content" >
          <div 
            class="item"
            v-for="(item,index) in section3" 
            :key="index"
            :style="{backgroundImage:`url(${require(`@assets/img3_0/promote/brand_${index+1}@2x.png`)})`}">
            <h4>{{ item.title }}</h4>
            <p v-html="item.content"></p>
          </div>
        </div>
      </div>
      <div class="section4">
        <h2>在线博彩的最佳平台选择</h2>
        <div class="content">
          <p v-for="(item,index) in section4" :key="index">{{item}}</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <AAFooter/>
    </div>
  </div>
</template>

<script>
import AAFooter from '@/components/aa-footer'
import Gheader from "@/components/g-header";
export default {
  components: {
    Gheader,
    AAFooter
  },
  data() {
    return {
      section1: [
        {
          title: '真人',
          content: '百家乐   轮盘  骰宝<br/>多家真人游戏厅，自由投注'
        },
        {
          title: '棋牌',
          content: '万趣棋牌，倾力打造<br/>激情对局，福利多多'
        },
        {
          title: '捕鱼',
          content: '花式捕鱼，爽快捞金'
        },
        {
          title: '其他',
          content: '彩票投注、电竞投注、电子投注'
        }
      ],
      section2: [
        {
          title: '注册五重好礼',
          content: '注册送、首存送、次存送，优惠更多'
        },
        {
          title: '邀请好友',
          content: '邀请好友越多红利越多'
        },
        {
          title: '余额宝',
          content: '注册送、首存送、次存送，优惠更多'
        },
        {
          title: '明星任意挑选',
          content: '每日每月达到流水 ，豪华游送美女'
        }
      ],
      section3: [
        {
          title: 'AA集团',
          content: '亚洲第一娱乐品牌'
        },
        {
          title: 'AA贵宾厅',
          content: '打造最优质的<br/>线下娱乐体验'
        },
        {
          title: '宇都宫紫苑',
          content: '神之乳的洗礼<br/>受邀代言万趣娱乐'
        },
        {
          title: '三上悠亚',
          content: 'AV界奥斯卡之称的<br/>日本女优亲临万趣娱乐'
        }
      ],
      section4: [
        'AA集团创立于2014年，多年来坚持“专注 专业 创新”的精神，用心服务每一位客户。经过多年积累和发展，已成为东南亚顶尖娱乐品牌。',
        'AA集团旨在为客户提供完成的线上线下VIP娱乐服务，如今“AA”集团业务覆盖实体酒店产业、实体赌场贵宾厅、高端旅游服务、线上及实地娱乐领域，已成为高端用户的娱乐首选。作为5年的老品牌，AA集团旗下万趣娱乐资金雄厚，实力超绝，国际AV女优宇都宫紫苑、三上悠亚官方唯一的博彩赞助商。',
        '万趣娱乐专为亚洲玩家定制 , 提供7*24小时客户服务全年无休 , 会员取款最快1分钟到账。万趣娱乐始终坚定地为广大玩家提供公平透明的游戏平台和高品质的贵宾服务 , 恪守诚信打造一流口碑 , 且坚信领先是实力领先和服务领先。',
        '万趣娱乐与澳门、菲律宾的赌场有着紧密的合作 , 会员存款到万趣娱乐均能在赌场贵宾厅提款，最快一分钟到账。 万趣娱乐与亚洲最佳游戏平台AG,OG,欧博,申博是战略合作伙伴关系 , 是各大平台最优质的运营商。',
        '万趣娱乐坚决反对21岁以下人士参与博彩,提倡有节制的博彩 , 鼓励玩家控制好自身行为且对自己负责。'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  #promote{
    padding-top: 88px;
    .m-header{
      z-index: 99;
    }
    .top{
      margin-bottom: @space-gap;
    }
    .main{
      padding: 0 @space-gap+20;
      text-align: center;
      .section1,.section2,.section3,.section4{
        margin-bottom: 60px;
        h2{
          font-size: 30px;
          color:#fff;
          margin-bottom: 40px;
        }
        .item{
          background-size: 100%;
          background-position: center;
          background-repeat: no-repeat;
        }
        .content{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          color:#fff;
        }
      }
      .section1{
        .item{
          width:300px;
          height: 380px;
          color:#fff;
          &:nth-child(1),&:nth-child(2){
            margin-bottom: 40px;
          }
          h4{
            font-size: 32px;
            margin-bottom: 20px;
          }
          p{
            font-size: 20px;
            line-height: 40px;
          }
        }
      }
      .section2{
        .content{
          background-color: @primary-color;
          padding:0 30px;
          background-image: url(~@assets/img3_0/promote/aw@2x.png);
          background-size: 382px 480px;
          background-position:center;
          background-repeat: no-repeat;
          .item{
            width:285px;
            height:215px;
            h4{
              font-size: 30px;
              margin-bottom: 20px;
            }
            p{
              font-size: 20px;
              line-height: 40px;
            }
          }
        }
      }
      .section3{
        .item{
          width:304px;
          height: 234px;
          text-align: left;
          padding-left: 26px;
          &:nth-child(1),&:nth-child(2){
            margin-bottom: 40px;
          }
          h4{
            font-size: 30px;
            color: #DDB087;
          }
          p{
            font-size: 20px;
            line-height: 40px;
          }
        }
      }
      .section4{
        .content {
          background:url('~@assets/img3_0/promote/plateform_bg@2x.png');
          background-position: center;
          background-size: 100%;
          padding: 30px 30px 86px 30px;
          p{
            font-size: 24px;
            color:#ccc;
            text-align: left;
            line-height: 40px;
            margin-bottom: 30px;
          }
        }
      }
    }
    .footer{
      padding: 0 @space-gap;
    }
  }
</style>