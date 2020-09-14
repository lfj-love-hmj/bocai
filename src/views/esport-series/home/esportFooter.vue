<template>
  <div class="site_footer">
    <div class="links">
      <div class="item">
        <a>狂竞技</a>
        <router-link to="/activities">促销活动</router-link>
        <router-link to="/help/main">条款与规则</router-link>
        <router-link to="/agentHomepage">代理</router-link>
        <router-link to="/brand">赞助</router-link>
      </div>
      <div class="item">
        <a>联系我们</a>
        <a @click="$openKefu()"><img :src="$imgs['home/bottom_icon_service@2x']" alt="">在线客服</a>
        <a><img :src="$imgs['home/bottom_icon_email@2x']" alt="">客服：cs@kuang,com</a>
        <a><img :src="$imgs['home/bottom_icon_BD@2x']" alt="">商务：aff@kuang.com</a>
        <a><img :src="$imgs['home/bottom_icon_wechat@2x']" alt="">订阅号：狂竞技</a>
        <a><img :src="$imgs['home/bottom_icon_weibo@2x']" alt="">微博：狂竞技</a>
      </div>
      <div class="item">
        <a>支付方式</a>
        <img :src="$imgs['home/bottom_pay@2x']" alt="">
      </div>
    </div>
    <div class="foot-copy">
      <div class="fc-l">
        <img :src="$imgs['home/bottom_icon_committee@2x']" alt="">
        <img :src="$imgs['home/bottom_icon_adult@2x']" alt="">
      </div>
      <div class="fc-r">
        kuang.bet 由AA集团拥有，由狂竞技专业团队运营，在欧洲马耳他的商业注册处注册。受马耳他竞技管理委员会（MGA）及其政府监管，并遵守欧洲游戏和竞技协会（EGBA）制定的所有运营准则。
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.site_footer {
  padding: 20px 0;
  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .item {
      margin-bottom: 20px;
      padding-left: 60px;
      &:first-child {
        width: 40%;
      }
      a {
        margin-bottom: 20px;
        color: #6d6d6d;
        display: block;
        height: 32px;
        line-height: 32px;
        font-size: 24px;
        img{
          width: 32px;
          height: 32px;
          position: relative;
          top: 5px;
          left: -10px;
        }
        &:first-child {
          font-weight: 600;
          font-size: 30px;
          color: #888888;
          position: relative;
          top: 5px;
          left: -14px;
        }
      }
      img {
        width: 518px;
        height: 40px;
      }
    }
  }
  .foot-copy {
    align-items: center;
    padding: 30px;
    display: flex;
    .fc-l {
      display: flex;
      img {
        height: 64px;
      }
    }
    .fc-r {
      color: #888888;
      font-size: 20px;
      line-height: 1.7;
      margin-left: 20px;
    }
  }
}
</style>
