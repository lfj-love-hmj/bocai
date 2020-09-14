<template>
  <div id="dragonBoat">
    <lheader v-if="isShowHeader" :title="title" :goback="true"></lheader>
    <img class="kv" src="./assets/kv.png" alt="">
    <img class="cy" src="./assets/cy-bg.png" alt="">
    <img class="body" src="./assets/body-bg.png" alt="">
    <div class="top">
      <img @click="goDeposit" src="./assets/menpiao.png" alt="">
      <img src="./assets/cy.png" alt="">
      <div>
        <span v-for="item in rank" :key="item" class="num" >{{item}}</span>
        <span class="num">米</span>
      </div>
      <p>*每500流水即可前进1米</p>
    </div>
    <div class="content-box">
        <img class="ship" src="./assets/ship.png" alt="">
        <div class="ship-wrap reward">
            <div class="title">
            奖励
            </div>
            <div class="content">
            <div class="content-row" v-for="r in reward" :key="r.level">
                <span>第{{ r.level }}名</span>
                <span>{{ r.text }}</span>
            </div>
            <img class="jiangli" src="./assets/jiangli.png" alt="">
            <img class="zz1" src="./assets/zz1.png" alt="">
            </div>
        </div>
        <div class="ship-wrap bug">
            <div class="title">
            额外冲刺获赠方式
            </div>
            <div class="tag">
            每日特定额外冲刺获赠方式
            </div>
            <p v-for="b in bug" :key="b">{{ b }}</p>
            <img class="zz2" src="./assets/zz2.png" alt="">
        </div>
        <div class="ship-wrap record">
            <div class="tab" :style="{'backgroundImage':activeTab === 0 ? `url(${require('./assets/r-active.png')})` : `url(${require('./assets/l-active.png')})`}">
            <span :class="{'active': activeTab === t_index}" @click="activeTab = t_index" v-for="(t,t_index) in tab" :key="t_index">{{t}}</span>
            </div>
            <table v-if="activeTab === 0">
              <tbody>
                <tr>
                  <td>排名</td>
                  <td>会员账号</td>
                  <td>前进米数</td>
                </tr>
                <tr v-for="(item, index) in rankList" :key="index">
                  <td>{{ item.rank }}</td>
                  <td>{{ item.username }}</td>
                  <td>{{ item.score }}</td>
                </tr>
              </tbody>
            </table>
            <table v-else>
              <tbody>
                <tr>
                  <td>时间</td>
                  <td>内容</td>
                  <td>前进米数</td>
                </tr>
                <tr v-for="(item, index) in rankRecord" :key="index">
                  <td>{{item.created_at}}</td>
                  <td>{{weekType[item.week]}}</td>
                  <td>{{item.score}}</td>
                </tr>
              </tbody>
            </table>
            <img class="zz3" src="./assets/zz3.png" alt="">
        </div>
        <div class="ship-wrap rule">
            <div class="title">
            活动规则
            </div>
            <p v-for="(r,r_index) in rule" :key="r_index"><span>{{r_index+1}}.</span> {{r}}</p>
            <img class="zz4" src="./assets/zz4.png" alt="">
            <img class="zongzi" src="./assets/zongzi.png" alt="">
            <img class="gotop" @click="backTop" src="./assets/go-top.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import { getDragonBoatRank, getDragonBoatRankList, getDragonBoatRankRecord } from '@/api/activity'
import { mapGetters } from "vuex";

export default {
  data() {
    return {
        title:'端午活动',
        isShowHeader: true,
        activeTab: 0,
        reward: [
            {
            level: '1',
            text: '与RION 1对1私密远程视频和38,888元彩金'
            },
            {
            level: '2',
            text: '256G IPHONE PRO MAX 或 折现18,888元彩金'
            },
            {
            level: '3~5',
            text: '最新IPAD PRO 或 折现8888元彩金'
            },
            {
            level: '6~10',
            text: '5666元彩金'
            },
            {
            level: '11~25',
            text: '1888元彩金'
            },
            {
            level: '26~50',
            text: '888元彩金'
            },
            {
            level: '51~100',
            text: '388元彩金'
            }
        ],
        bug: [
            '周一 在AG百家乐连赢6局额外前进10米',
            '周二 彩票注单尾数为8888额外前进6米',
            '周三 电子游艺场当天总流水倍数*2',
            '周四 旗开得胜，当天在棋牌第一局赢得胜利即可获得当局流水相对前进米数*2',
            '周五 当天累计存款过千，即可以每1000元存款为1米额外增加前进米数',
            '周六 不眠夜，0点至早6点的流水将x1.5倍计算相对额外增加米数',
            '周日 连续参与一周，翻倍当周总前进总米数'
        ],
        tab: ['排行榜', '个人记录'],
        rule: [
            '单笔存款200元以及以上即获得当天龙舟大赛参与资格',
            '比赛前进米数以每500流水为1米计算',
            '数据将在每天00:30分更新',
            '“额外冲刺”需在完成后，向在线客服申请才会获赠，经相关部门核实后将跟当天数据一起更新；',
            '每日额外冲刺申请截止时间为当天23:59:59，逾期不补；',
            '龙舟大赛第一名与RION私密视频见面的总时长为30分钟；',
            '所有赠送彩金需完成1倍流水提现',
            '龙舟大赛获奖人公布以及奖励派发将在7月1日完成，奖金将直接派发至平台主钱包；',
            '此活动每位玩家，每账户信息（姓名，手机），支付方式（卡号，银行户名）及IP地址只能有一个账号参与',
            '如有违规并被确认为套利玩家，将立即取消参赛资格、收回所产生的盈利；',
            '此活动万趣娱乐享有最终解释权。'
        ],
        rank: null,
        rankList: [],
        rankRecord: [],
        weekType: {
          '1': 'AG百家乐连赢',
          '2': '彩票注单尾号',
          '3': '邀请好友',
          '4': '旗开得胜',
          '5': '累计存款过千',
          '6': '不眠夜',
          '0': '连续一周奖金翻倍',
          '-1': '常规获得'
        }
    }
  },
  computed: {
    ...mapGetters("users", ["isLogin"]),
  },
  components: {
    Lheader
  },
  created() {
    if (this.$route.query.source) {
      this.isShowHeader = false;
    }
  },
  async mounted () {
    getDragonBoatRank().then(res => {
      this.rank = res.data.data.score?String(res.data.data.score).split(''):['0']
    })
    getDragonBoatRankList().then(res => {
      this.rankList = res.data.data
    })
    getDragonBoatRankRecord().then(res => {
      this.rankRecord = res.data.data.data
    })
    console.log(this.rank, this.rankList, this.rankRecord)
  },
  methods: {
    goDeposit () {
      if (!this.isLogin) {
        this.$router.push('/register')
      } else {
        this.$router.push('/deposit')
      }
    },
    backTop () {
      scroll(0, 0)
    }
  }
};
</script>

<style src="./style.less" lang="less" scoped></style>
