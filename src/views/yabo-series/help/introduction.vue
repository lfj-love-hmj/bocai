<template>
    <div class="list" :style="{marginTop: $route.query.source && '0'}">
      <!--<template v-for="(item,i) in content">-->
        <!--<van-image v-show="i != 0" fit="cover" lazy-load :key="i" :src="item.h5_index_pic" alt="" />-->
      <!--</template>-->
      <p class="title">一、谁是KVK体育</p>
      <p>万趣娱乐附属于AA集团。AA集团是世界领先的网络博彩集团之一，在全球差不多五十个国家均设办事处，英国、比利时、爱尔兰、美国及阿根廷都提供投注服务。现集团基于业务多元化考虑，将线上博彩业务领域扩展至亚洲，并以"全力打造亚洲最丰富的真人视讯超市"为己任， 向博彩爱好者隆重推出。同时也已经取得了菲律宾</p>
      <p>Philippine Amusement and Gaming Corporation (PAGCOR) (https://www.pagcor.ph/index.php) 的充分授权。万趣娱乐严格按照这些管理机构发布的规则进行所有运营。</p>
      <p class="title">二、在KVK投注的好</p>
      <p>
        只要使用一个账户，万趣娱乐便可带给您全面的激动人心的投 注娱乐。而且万趣娱乐集团是世界上最大的博彩公司的一份子，您尽可放心，我们对您账户的处 理是完全安全、谨慎和诚实的。
      </p>
      <p class="title">三、KVK的目标</p>
      <p>

        博彩世界并非只是博彩爱好者的乐园，对我们来说也同样刺激和挑战！万趣娱乐不惜重 金招聘和发掘最佳员工。我们的目标是保证能提供给客户们全心全意的服务和最清楚的信息。

      </p>
      <p class="title">四、KVK专业客服团队</p>
      <p>

        我们提供训练有素和亲切的客户服务，全天候24小时的在线为 客户们服务。我们保证以快速、礼貌和有效的方式为玩家们处 理问题。

      </p>
      <p class="title">五、KVK支付方式</p>
      <p>

        我们向您提供安全方便的各种支付方式。 我们坚持以"了解你的客户"和"反洗钱"为一贯宗旨，并配合第三方金融监管机构， 以确保遵守最高标准。

      </p>
      <p class="title">六、游戏责任</p>
      <p>

        万趣娱乐提倡有节制的赌博。我们建议阁下遵守以下一些基本规则：

      </p>
      <p class="title">七、禁止未满18岁的人士参与赌博游戏</p>
      <p>

        自定博彩预算，并按预算下注。

        如玩家要求下，我们将会冻结玩家的会籍。一旦冻结会籍后，所有相关时事通讯将会被取消。</p>
      <div class="aagames-button-box">
        <button
          class="aagames-button mt30"
          style="border-radius: 90px"
          type="button"
          @click="callService"
        >在线人工客服</button>
      </div>

    </div>
</template>

<script>
  import Lheader from '@/components/l-header'
  import { staticpage } from '@/api/personalData'
  import { strength } from '@/api'

  export default {
    components: {
      Lheader
    },
    data () {
      return {
        content: []
      }
    },
    created () {
      this.isLoading = true
      strength({
        merchant_no: process.env.VUE_APP_MERCHANT_NO
      }).then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.content = res.data.data
          // for (let i = 0; i < res.data.data.length; i++) {
          //   if (res.data.data[i].title === '关于我们') {
          //     this.content = res.data.data[i].content
          //     break
          //   }
          // }
        }
      }).finally(() => {
        this.isLoading = false
      })
    },
    methods:{
      callService() {
        this.$openKefu()
      },
    }
  }
</script>

<style scoped lang="less">
    .list {
      margin-top: 88px;
      font-size: 32px;
      font-weight: 400;
      color: #333;
      line-height: 44px;
      border-top: 20px solid #F5F6FA;
      padding: 30px;
      .title{
        color: @bg-gradient-color;
        font-weight: bold;
      }
      /deep/h3{
        font-size: 30px;
        font-weight: bolder;
      }
      /deep/p{
        text-align:justify;
        margin-bottom: 20px;
      }
      /deep/a{
        color:@primary-color;
      }
      img{
        width:100%;
      }
    }
</style>
