<template>
  <div id="baccarat">
    <lheader v-if="isShowHeader" title="百家乐大赛" :goback="true"></lheader>

    <img class="top-img1 margin-t" src="./assets/主题@2x.png" alt="" />
    <div class="activity-time">2020年2月1日-2020年2月23日</div>
    <div class="baccarat-btn" @click="handleClick"></div>
    <!--左侧赛事倒计时-->
    <div class="count-down">
      <div
        class="count-down-close"
        v-if="countDown === false"
        @click="countDown = true"
      >
        <div class="down-time">{{ downTime }}</div>
      </div>

      <div class="count-down-open" v-else @click="countDown = false">
        <div class="count-down-open-text">距离2月1日新手赛 还有</div>
        <div class="open-down-time">{{ downTime }}</div>
      </div>

      <!--预加载图片-->
      <img src="./assets/赛事日历.png" style="display: none" alt="" />
    </div>

    <!--赛事规则选择-->
    <div class="top-status">
      <img class="top-img1" :src="imgList2[status]" alt="" />
      <div class="top-status-item item1" @click="status = 0"></div>
      <div class="top-status-item item2" @click="status = 1"></div>
      <div class="top-status-item item3" @click="status = 2"></div>

      <!--为了预先加载img-->
      <img :src="imgList2[0]" style="display: none" alt="" />
      <img :src="imgList2[1]" style="display: none" alt="" />
      <img :src="imgList2[2]" style="display: none" alt="" />
    </div>

    <!--活动内容-->
    <div class="activity-content" v-if="status === 0">
      <!--赛事奖金-->
      <div class="bonus-box" id="navigation1">
        <div class="bonus-box-item bonus-box-1">3,888,888</div>
        <div class="bonus-box-item bonus-box-2">588,888</div>
        <div class="bonus-box-item bonus-box-3">1,888,888</div>
        <div class="bonus-box-item bonus-box-4"></div>
      </div>
      <img
        class="top-img1"
        src="./assets/赛事流程.png"
        id="navigation2"
        alt=""
      />
      <!--赛事规则-->
      <div class="rule" id="navigation3">
        <div class="schedule-box schedule-box-1" @click="imgIndex = 0">
          <div class="schedule-time">
            <p>下一场</p>
            <p>暂定</p>
          </div>
        </div>
        <div class="schedule-box schedule-box-2" @click="imgIndex = 1">
          <div class="schedule-time">
            <p>下一场</p>
            <p>暂定</p>
          </div>
        </div>
        <div class="schedule-box schedule-box-3" @click="imgIndex = 2">
          <div class="schedule-time">
            <p>下一场</p>
            <p>暂定</p>
          </div>
        </div>
        <div class="schedule-box schedule-box-4" @click="imgIndex = 3">
          <div class="schedule-time">
            <p>下一场</p>
            <p>暂定</p>
          </div>
        </div>
        <div class="schedule-box schedule-box-5" @click="imgIndex = 4">
          <div class="schedule-time">
            <p>下一场</p>
            <p>暂定</p>
          </div>
        </div>

        <div class="table-1">
          <img class="table-img" :src="imgList[imgIndex]" alt="" />
          <img
            src="./assets/rule/Group 6@2x(4).png"
            class="table-i table-img1"
            alt=""
          />
          <img
            src="./assets/rule/Group 6@2x(5).png"
            class="table-i table-img2"
            alt=""
          />
          <img
            src="./assets/rule/Group 6@2x(6).png"
            class="table-i table-img3"
            alt=""
          />
          <img
            src="./assets/rule/Group 6@2x(7).png"
            class="table-i table-img4"
            alt=""
          />
          <img
            src="./assets/rule/Group 6@2x(9).png"
            class="table-i table-img5"
            alt=""
          />
          <img
            class="table-i table-img6"
            :src="activityRule[imgIndex].tableImg"
            :class="{
              'table-bjs': imgIndex === 3,
              'table-zjs': imgIndex === 4
            }"
            alt=""
          />

          <div class="role-1 role-text">
            {{ activityRule[imgIndex].rule1 }}
          </div>
          <div class="role-2 role-text">
            {{ activityRule[imgIndex].rule2 }}
          </div>
          <div class="role-3 role-text">
            {{ activityRule[imgIndex].rule3 }}
          </div>
          <div class="role-4-title" :class="{ 'role-zjs': imgIndex === 4 }">
            <span v-for="i in activityRule[imgIndex].title" :key="i">
              {{ i }}
            </span>
          </div>
          <div class="role-4" :class="{ 'role-zjs': imgIndex === 4 }">
            <span v-for="i in activityRule[imgIndex].rule4" :key="i">
              {{ i }}
            </span>
          </div>
          <div class="role-5">{{ activityRule[imgIndex].rule5 }}</div>
          <div class="role-6">
            <span v-if="false">12月13日</span>
            <span v-else>{{ activityRule[imgIndex].rule6 }}</span>
          </div>
          <!--          <div class="role-5">-->
          <!--            <span v-for="i in 13" :key="i">12月13日</span>-->
          <!--          </div>-->
          <!--todo 具体赛事规则切换-->

          <!--为了预先加载img-->
          <img :src="imgList[0]" style="display: none" alt="" />
          <img :src="imgList[1]" style="display: none" alt="" />
          <img :src="imgList[2]" style="display: none" alt="" />
          <img :src="imgList[3]" style="display: none" alt="" />
          <img :src="imgList[4]" style="display: none" alt="" />
        </div>
      </div>

      <!--赛事详情-->
      <div class="details">
        <ul class="details-ul">
          <li class="details-li" v-for="(i, index) in detalisList">
            {{ i }}
            <div class="item-img">{{ index + 1 }}</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 晋级赛区 -->
    <div class="advance" v-if="status === 1">
      <!--会员参赛资格-->
      <div class="advance-top-bg">
        <div class="advance-top-1">您尚未登录</div>
        <div class="advance-top-2">登录查看参赛资格及获奖记录</div>
        <button class="advance-top-3" @click="handleClick"></button>
        <div class="advance-top-4">
          存款5000元以上，即可参与下个时间段新手赛；
          VIP3以上会员可以直接参与新手赛事
        </div>
      </div>
      <!--奖金记录、晋级记录-->
      <div class="advance-top-bg-2"></div>
      <!--晋级排行记录-->
      <div class="ranking-list">
        <div class="ranking-list-top">
          <div
            class="ranking-list-item"
            @click="rankingListIndex = index"
            v-for="(i, index) in rankingList"
            :key="i.title"
            :class="{ active: rankingListIndex === index }"
          >
            <div class="ranking-list-title">{{ i.title }}</div>
            <div class="ranking-list-description">{{ i.description }}</div>
          </div>
        </div>
        <div class="ranking-list-data">
          <!--              <img-->
          <!--                  src="./assets/advance/left.png"-->
          <!--                  class="list-left"-->
          <!--                  @click="dataListIndex&#45;&#45;"-->
          <!--              />-->
          <div class="data-list" v-if="false">
            <div
              class="data-list-item"
              :class="{ active: dataListIndex === index }"
              :key="index"
              v-for="(i, index) in dataList.slice(0, 7)"
              @click="dataListIndex = index"
            >
              {{ i }}
            </div>
          </div>
          <div class="data-list" v-else>
            <div class="data-list-item active" style="margin: 0 auto;">
              暂定
            </div>
          </div>
          <!--              <img-->
          <!--                  src="./assets/advance/right.png"-->
          <!--                  class="list-right"-->
          <!--                  @click="dataListIndex++"-->
          <!--              />-->
        </div>
        <div class="ranking-list-text">
          <!--          {{ rankingMap[rankingListIndex] }}{{ dataList[dataListIndex] }} 排行榜-->
          {{ rankingMap[rankingListIndex] }}排行榜
        </div>
      </div>
    </div>

    <!-- 积分赛区 -->
    <div class="integral" v-if="status === 2">
      <div class="integral-1">
        <button class="integral-login" @click="handleClick"></button>
      </div>
      <div class="integral-2">
        <div class="integral-2-box">
          <div class="integral-2-line-1">
            <div
              class="img-box"
              :key="index"
              v-for="(i, index) in achievementList.slice(0, 4)"
            >
              <img class="head-portrait" :src="i.img" alt="" />
              <div class="img-box-right">
                <div class="text-1">
                  <img class="lock" src="./assets/integral/锁.png" alt="" />
                  未解锁{{ i.integral }}积分
                </div>
                <p
                  class="text-p"
                  :class="{ 'text-p-2': index === 1 }"
                  v-for="(k, index) in i.bonus"
                  :key="index"
                >
                  {{ k }}
                </p>
              </div>
            </div>
          </div>
          <div class="integral-2-line-1">
            <div
              class="img-box"
              :key="index"
              v-for="(i, index) in achievementList.slice(4, 7)"
            >
              <img class="head-portrait" :src="i.img" style="width: 1.53333rem;" :style="{height: index === 0 ? '1.26rem' : 'auto'}" alt="" />
              <div class="img-box-right">
                <div class="text-1">
                  <img class="lock" src="./assets/integral/锁.png" alt="" />
                  未解锁{{ i.integral }}积分
                </div>
                <p
                  class="text-p"
                  :class="{ 'text-p-2': index === 1 }"
                  v-for="(k, index) in i.bonus"
                  :key="index"
                >
                  {{ k }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <!--        692 516-->
      </div>
      <div class="integral-3">
        <div class="guest-left">
          <div class="guest-left-item top1">
            <img src="./assets/integral/3@2x.png" alt="" class="crown" />
            <img src="./assets/integral/2@2x.png" alt="" class="table" />
            <div class="guest-left-name">虚位以待</div>
          </div>
          <div class="guest-left-line">
            <div class="guest-left-item" v-for="i in 3">
              <img src="./assets/integral/3@2x.png" alt="" class="crown" />
              <img src="./assets/integral/2@2x.png" alt="" class="table" />
              <div class="guest-left-name">虚位以待</div>
            </div>
          </div>
          <div class="guest-left-line">
            <div class="guest-left-item" v-for="i in 3">
              <img src="./assets/integral/3@2x.png" alt="" class="crown" />
              <img src="./assets/integral/2@2x.png" alt="" class="table" />
              <div class="guest-left-name">虚位以待</div>
            </div>
          </div>
        </div>
        <div class="guest-right">
          <div
            class="guest-right-item"
            v-for="(i, index) in guestRuleList"
            :key="index"
          >
            {{ i.text }}
            <img :src="i.icon" alt="" />
          </div>
        </div>
      </div>
      <div class="integral-4">
        <div class="integral-left">
          <div class="integral-left-text1">
            赛事积分是{{$config[$projectname].secName}}大师赛的专属积分
          </div>
          <div class="integral-left-text2">
            赛事积分日期：2020年2月1日 至 2020年2月23日
          </div>
          <div class="integral-line"></div>
          <div class="integral-left-text3">存款1000元=1赛事积分</div>
          <div class="integral-left-text4">10000有效投注=1赛事积分</div>

          <ul class="integral-left-ul">
            <li class="integral-left-li">
              跻身赛事积分榜前列，可以达成个人成就，领取奖金、赛事勋章
              <img
                class="integral-left-icon"
                src="./assets/integral/图层 59@2x.png"
                alt=""
              />
            </li>
            <li class="integral-left-li">
              更有机会直接晋级半决赛
              <img
                class="integral-left-icon"
                src="./assets/integral/图层 59@2x.png"
                alt=""
              />
            </li>
            <li class="integral-left-li">
              率先7人达成20000赛事积分的会员可以作为特约嘉宾直通总决赛。
              <img
                class="integral-left-icon"
                src="./assets/integral/图层 59@2x.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./style.less" lang="less" scoped></style>

<script>
import Lheader from "@/components/l-header";
import dayjs from "dayjs";
import { Toast } from "vant";

import imgList1 from "./assets/1.png";
import imgList2 from "./assets/2.png";
import imgList3 from "./assets/3.png";

import img0 from "./assets/rule/新手赛事规则@2x.png";
import img1 from "./assets/rule/精英赛事规则@2x.png";
import img2 from "./assets/rule/专家赛事规则@2x.png";
import img3 from "./assets/rule/半决赛事规则@2x.png";
import img4 from "./assets/rule/总决赛赛事规则@2x.png";

import tableImg1 from "./assets/rule/Group 6@2x(8).png";
import tableImg2 from "./assets/rule/Group 6@2x(2).png";
import tableImg3 from "./assets/rule/Group 6@2x(3).png";
import tableImg4 from "./assets/rule/Group 6@2x(1).png";
import tableImg5 from "./assets/rule/Group 6@2x.png";

import icon1 from "./assets/integral/icon1.png";
import icon2 from "./assets/integral/icon2.png";
import icon3 from "./assets/integral/icon3.png";
import icon4 from "./assets/integral/icon4.png";
import icon5 from "./assets/integral/icon5.png";

import achievementImg1 from "./assets/integral/图标1.png";
import achievementImg2 from "./assets/integral/图标2.png";
import achievementImg3 from "./assets/integral/图标3.png";
import achievementImg4 from "./assets/integral/图标4.png";
import achievementImg5 from "./assets/integral/图标5.png";
import achievementImg6 from "./assets/integral/图标6.png";
import achievementImg7 from "./assets/integral/图标7.png";

export default {
  components: {
    Lheader
  },
  data() {
    return {
      isShowHeader: true,
      countDown: false,
      downTimeId: undefined,
      downTime: "",

      status: 0, // 0活动内容 1晋级赛区 2积分赛区
      imgList2: [imgList1, imgList2, imgList3],
      // 赛事规则-详情
      activityRule: [
        {
          rule1: "积分前280名精英赛门票",
          rule2: "存款5000元，已晋级会员无法再次参与",
          rule3: "每场晋级20位会员积分最高名额，派发高额奖金",
          rule4: ["奖金", 1888, 888, 588, 188, 18],
          rule5: "3倍流水提款",
          rule6: "暂定",
          tableImg: tableImg1,
          title: ["名次", "第一名", "第二名", "第三名", "第4-10名", "第10-20名"]
        },
        {
          rule1: "晋级280人进行3轮对决",
          rule2: "存款50000以上，或者VIP4以上会员直接参与",
          rule3: "每轮积分最高的33人直接晋级专家赛",
          rule4: ["奖金", 38888, 18888, 8888, 3888, 188],
          rule5: "3倍流水提款",
          rule6: "暂定",
          tableImg: tableImg2,
          title: ["名次", "第一名", "第二名", "第三名", "第4-10名", "第10-20名"]
        },
        {
          rule1: "晋级99人进行1轮对决",
          rule2: "存款大于等于500000元",
          rule3: "积分最高的50人直接晋级半决赛",
          rule4: ["奖金", 188888, 88888, 58888, 18888, 1888],
          rule5: "3倍流水提款",
          rule6: "暂定",
          tableImg: tableImg3,
          title: ["名次", "第一名", "第二名", "第三名", "第4-10名", "第10-20名"]
        },
        {
          rule1: "根据晋级半决赛者计算积分",
          rule2: "存款大于等于5000000元",
          rule3: "积分前7者进入总决赛",
          rule4: [],
          rule5: "",
          rule6: "暂定",
          tableImg: tableImg4,
          title: []
        },
        {
          rule1: "根据晋级人数计算出积分最高前七名",
          rule2: "获得半决赛晋级资格的7人+特约嘉宾7人",
          rule3: "晋级者全部赠送礼金",
          rule4: ["奖金", 3888888, 1888888, 588888, 58888],
          rule5: "无需流水即可取款",
          rule6: "暂定",
          tableImg: tableImg5,
          title: ["名次", "第一名", "第二名", "第三名", "第4-10名"]
        }
      ],

      imgIndex: 0, // 赛事规则
      imgList: [img0, img1, img2, img3, img4], // 赛事规则图片列表
      detalisList: [
        "所有赛事结果将在赛事结束并经过审核部门核实无误后2小时内公布并添加奖金到游戏账号，完成3倍流水即可取款，决赛奖金无需流水",
        "只有真人游戏厅的百家乐游戏才会计算有效流水。棋牌游戏(大牌德州+雀神麻将)及电子游戏的以下类型游戏不计算为有效投注额，" +
          "包括各种桌面卡牌游戏、视频扑克、轮盘、Pontoon游戏、各种Craps游戏赌场战争游戏、娱乐场Hold’em游戏、牌九游戏等均不计算在百家乐大赛有效投注内；",
        "本赛事所指单周定义为自然周（周一0:00至周日23:59）、单日定义为自然日（0:00至23:59）；",
        "同账号、姓名、电话、银行卡、IP等绑定信息的玩家仅获得一个参赛资格及领取奖金机会；",
        `会员参加任何优惠活动则被视为认可并同意遵守这些规则以及本娱乐场有关规定，愿意受其约束。为了避免对文字的理解差异，${this.$config[this.$projectname].secName}保留对以上方案的最终解释权。`
      ],

      rankingList: [
        {
          title: "新手赛排行",
          description: "最高奖金1888元"
        },
        {
          title: "精英赛排行",
          description: "最高奖金38888元"
        },
        {
          title: "专家赛排行",
          description: "最高奖金188888元"
        },
        {
          title: "半决赛排行",
          description: "争夺决赛资格"
        },
        {
          title: "总决赛排行",
          description: "最高奖金3888888元"
        }
      ],
      rankingMap: ["新手赛", "精英赛", "专家赛", "半决赛", "总决赛"],
      rankingListIndex: 0, // 晋级赛事选择

      // 特邀规则
      guestRuleList: [
        {
          icon: icon1,
          text: "直通总决赛，保底5万，最高388万奖金"
        },
        {
          icon: icon2,
          text:
            "菲律宾豪华游全套超豪华服务，往返商务舱+星级美食+特色旅游+奢华晚宴"
        },
        {
          icon: icon3,
          text: "与代言女优同框合影留念"
        },
        {
          icon: icon4,
          text: `${this.$config[this.$projectname].secName}大师赛纯金定制纪念勋章`
        },
        {
          icon: icon5,
          text: `入选${this.$config[this.$projectname].secName}大师赛委员会，您的态度指引我们赛事`
        }
      ],

      achievementList: [
        {
          img: achievementImg1,
          integral: 100,
          bonus: ["88元红包"]
        },
        {
          img: achievementImg2,
          integral: 1000,
          bonus: ["888元红包"]
        },
        {
          img: achievementImg3,
          integral: 5000,
          bonus: ["1888元红包"]
        },
        {
          img: achievementImg4,
          integral: 10000,
          bonus: ["3888元红包"]
        },
        {
          img: achievementImg5,
          integral: 20000,
          bonus: ["5888元红包", "率先达成7人获得特约嘉宾名额"]
        },
        {
          img: achievementImg6,
          integral: 50000,
          bonus: ["30g定制黄金", "纪念徽章"]
        },
        {
          img: achievementImg7,
          integral: 100,
          bonus: ["50g定制黄金", "纪念徽章"]
        }
      ]
    };
  },
  mounted() {
    // 倒计时
    this.downTimeId = setInterval(() => {
      const endDay = dayjs("2020-2-1");
      const newDay = dayjs(new Date());
      const hour = endDay.diff(newDay, "hour");
      const minute = endDay.diff(newDay, "minute") % 60;
      const second = endDay.diff(newDay, "second") % 60;
      this.downTime = `${hour > 10 ? hour : "0" + hour}:${
        minute > 10 ? minute : "0" + minute
      }:${second > 10 ? second : "0" + second}`;
    }, 1000);
  },
  methods: {
    // message
    handleClick() {
      Toast("活动暂未开始");
    }
  },
  beforeMount() {
    // 清除定时器
    clearInterval(this.downTimeId);
  }
};
</script>
