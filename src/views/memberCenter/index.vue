<template>
  <div class="member-page">
    <van-nav-bar
      class="m-header"
      title
      left-arrow
      :fixed="true"
      right-text="专属客服"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <img class="more-img" slot="left" src="@assets/img3_0/memberCenter/shezhi.png" />
      <!-- <div slot="right" :class="{ dot: filterBy(sitenoticeLists, 1, 'is_read').length }"> -->
      <div slot="right" :class="{ dot: userInfo && userInfo.site_notice_unread_counts+userInfo.user_notice_unread_counts>0 }">
        <!-- <van-icon name="envelop-o" /> -->
        <img class="msg-img" src="@assets/img3_0/memberCenter/xiaoxi.png" alt />
      </div>
    </van-nav-bar>
    <vtabbar class="m-footer" :index="4" />
    <div class="m-body">
      <div v-if="$projectname === '10015'||$projectname === '10021'||$projectname === 'chobet'" class="top-bg">
        <span></span>
      </div>
      <!-- 登录信息 -->
      <div class="user-info">
        <div class="person-info">
          <!-- <img @click="listPath('personalData')" v-if="$projectname === '10015' " src="@assets/img3_0/memberCenter/login-out1.png" alt="login-out" /> -->
          <img @click="listPath('personalData')" src="@assets/img3_0/memberCenter/login-out.png" alt="login-out" />
          <div class="right">
            <div class="top">
              <span v-if="userInfo" class="name">{{ showName }}</span>
              <template v-else>
                <span class="name" @click="() => { !isLogin && this.$router.push({path: '/login'}) }">登录</span>
                <span class="name" @click="() => { !isLogin && this.$router.push({path: '/register'}) }">注册</span>
              </template>
            </div>
            <div class="bottom" v-if="isLogin">
              这是您成为{{$config[$projectname].project}}会员的第
              <span>{{registerDate}}</span> 天
              <span class="level" v-if="isLogin" @click="govip">
                <img :src="require(`@assets/img3_0/vip/level-small/LV${userInfo.level}@2x.png`)" />
                <!-- <span>{{ myLevelName }}</span> -->
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- 余额信息 -->
      <div class="balance">
        <div class="main-balance">
          <div class="info-area">
            <span>
              主钱包(元)
              <!-- <van-icon name="arrow" /> -->
            </span>
            <span>{{ (wallet && wallet.money || 0) | currency('') }}</span>
          </div>
          <img
              v-if="$projectname==='10057'"
              class="refresh"
              @click="refresh"
              :class="{ active: balanceLoading }"
              :src="$imgs['memberCenter/refresh']" alt="">
          <van-icon
              v-else
            class="refresh"
            @click="refresh"
            :class="{ active: balanceLoading }"
            name="replay"
          />
        </div>
        <div class="other-balance">
          <div class="info-area" @click="listPath('wallet')">
            <span>
              理财小金库
              <van-icon name="arrow" />
            </span>
            <span>{{ (wallet && wallet.financing_money || 0) | currency('') }}</span>
          </div>
          <div class="info-area" @click="listPath('quotaTransfer')" style="text-align: right;">
            <span>
              游戏额度
              <van-icon name="arrow" />
            </span>
            <span>{{ (wallet && wallet.all_platform_money || 0) | currency('') }}</span>
          </div>
        </div>
        <div class="operating">
          <template v-if='!$config[$projectname].hasXcoin'>
            <div class="wallet-operating" @click="listPath('deposit')">快速存款</div>
            <div class="wallet-operating" @click="listPath('washcode')">自助洗码</div>
            <div class="wallet-operating" @click="handleWithdraw">取款</div>
          </template>
          <template v-else>
            <div class="wallet-operating" @click="listPath('deposit')">快速存款</div>
            <div class="wallet-operating" @click="handleWithdraw">取款</div>
            <div class="wallet-operating" @click="showXcoin = true">X币兑换</div>
          </template>
        </div>
      </div>
      <div class="latest">
        <h2 @click="()=>{withdrawListsMy.length || depositListsMy.length?$router.push({ name: 'businessRecord',query:{type:5}}):$router.push({ name: 'WithdrawRank'})}">
          <span>最新动态</span>
          <van-icon name="arrow" />
        </h2>
        <template v-if="withdrawLists.length>0">
          <div
            class="newest-info-detail"
            v-for="(item, index) in withdrawLists.slice(0, 2)"
            :key="`${item.id}+${index}`"
          >
            <div class="newest-info-first">
              <div class="newest-name">取款-{{ item.username }}
                <img class="levelImg" :src="require(`@assets/img3_0/vip/level-small/LV${ item.level}@2x.png`)" alt="">
              </div>
              <div class="newest-num">{{ item.money | currency('') }}</div>
            </div>
            <div class="newest-info-two">
              <div class="newest-time">{{ item.created_at }}</div>
              <div class="newest-state">
                <span :class="['processing',{'green':withdrawLists.length}]">
                  <template v-if="withdrawLists.length">
                    出款成功
                  </template>
                  <template v-else>
                      处理中(
                    <!-- <span class="processing-time">14:56</span> -->
                    <van-count-down class="processing-time" :time="timeArr[index]" format="mm:ss" />)
                  </template>
                </span>
              </div>
            </div>
          </div>
        </template>
        <template v-if="!withdrawLists.length">
            <template v-if="withdrawListsMy.length > 0 && depositListsMy.length == 0">
              <div
                class="newest-info-detail"
                v-for="(item, index) in withdrawListsMy.slice(0, 2)"
                :key="`${item.id}+${index}`"
              >
                <div class="newest-info-first">
                  <div class="newest-name">取款-{{ item.username }}
                    <span class="push-money" @click="$toast('系统已优先为您处理')">催一下</span>
                    <!-- <img class="levelImg" :src="require(`@assets/img3_0/vip/level-small/LV${ item.level}@2x.png`)" alt=""> -->
                  </div>
                  <div class="newest-num">{{ item.money | currency('') }}</div>
                </div>
                <div class="newest-info-two">
                  <div class="newest-time">{{ item.created_at }}</div>
                  <div class="newest-state">
                    <span :class="['processing']">审核中</span>
                    (<van-count-down class="processing-time" :auto-start="true" ref="countDown1" @finish="handleReset('countDown1');" :time="time" format="mm:ss" />)
                  </div>
                </div>
              </div>
            </template>
            <template v-if="depositListsMy.length > 0 && withdrawListsMy.length == 0">
              <div
                class="newest-info-detail"
                v-for="(item, index) in depositListsMy.slice(0, 2)"
                :key="`${item.id}+${index}`"
              >
                <div class="newest-info-first">
                  <div class="newest-name">存款-{{ item.username }}
                    <span class="push-money" @click="$toast('系统已优先为您处理')">催一下</span>
                    <!-- <img class="levelImg" :src="require(`@assets/img3_0/vip/level-small/LV${ item.level}@2x.png`)" alt=""> -->
                  </div>
                  <div class="newest-num">{{ item.money | currency('') }}</div>
                </div>
                <div class="newest-info-two">
                  <div class="newest-time">{{ item.created_at }}</div>
                  <div class="newest-state">
                    <span :class="['processing']">审核中</span>
                    (<van-count-down class="processing-time" :auto-start="true" ref="countDown2" @finish="handleReset('countDown2');" :time="time" format="mm:ss" />)
                  </div>
                </div>
              </div>
            </template>
            <template v-if="depositListsMy.length && withdrawListsMy.length">
              <div
                class="newest-info-detail"
                v-for="(item, index) in depositListsMy.slice(0, 1)"
                :key="`${item.id}+${index}`"
              >
                <div class="newest-info-first">
                  <div class="newest-name">存款-{{ item.username }}
                    <span class="push-money" @click="$toast('系统已优先为您处理')">催一下</span>
                    <!-- <img class="levelImg" :src="require(`@assets/img3_0/vip/level-small/LV${ item.level}@2x.png`)" alt=""> -->
                  </div>
                  <div class="newest-num">{{ item.money | currency('') }}</div>
                </div>
                <div class="newest-info-two">
                  <div class="newest-time">{{ item.created_at }}</div>
                  <div class="newest-state">
                    <span :class="['processing']">审核中</span>
                    (<van-count-down class="processing-time" :auto-start="true" ref="countDown2" @finish="handleReset('countDown2');" :time="time" format="mm:ss" />)
                  </div>
                </div>
              </div>
              <div
                class="newest-info-detail"
                v-for="(item, index) in withdrawListsMy.slice(0, 1)"
                :key="`${item.id}+${index}`"
              >
                <div class="newest-info-first">
                  <div class="newest-name">取款-{{ item.username }}
                    <span class="push-money" @click="$toast('系统已优先为您处理')">催一下</span>
                    <!-- <img class="levelImg" :src="require(`@assets/img3_0/vip/level-small/LV${ item.level}@2x.png`)" alt=""> -->
                  </div>
                  <div class="newest-num">{{ item.money | currency('') }}</div>
                </div>
                <div class="newest-info-two">
                  <div class="newest-time">{{ item.created_at }}</div>
                  <div class="newest-state">
                    <span :class="['processing']">审核中</span>
                    (<van-count-down class="processing-time" :auto-start="true" ref="countDown1" @finish="handleReset('countDown1');" :time="time" format="mm:ss" />)
                  </div>
                </div>
              </div>
            </template>
        </template>
      </div>
      <!-- 活动banner -->
      <!-- <div class="banner" v-if="isLogin">
        <a :href="h5_index_pic_link">
          <img :src="h5_index_pic || 'https://via.placeholder.com/690x180/3A3A3A.png?text=BANNER'" />
        </a>
      </div>-->
      <!-- <div class="banner" v-else @click="openActivities">
        <img src="@assets/img3_0/memberCenter/banner-default.png" alt />
      </div>-->
      <!-- 个人中心入口 -->
      <div :class="['person-entr',{'mb120':!isLogin}]">
        <van-row align="center" :gutter="2">
          <van-col
            class="menu"
            v-for="(item,index) in list"
            :key="index"
            span="8"
            @click.native="listPath(item.path)"
          >
            <i :class="'list' + (index + 1)"></i>
            <p>{{ item.text }}</p>
          </van-col>
        </van-row>
      </div>
      <!-- <div class="login-out" v-if="isLogin" @click="signOut">
        <span>退出登录</span>
      </div> -->
    </div>
    <div class="popup levelUp" v-show="isPop && userInfo && userInfo.level">
      <div class="mask" v-if="userInfo && userInfo.level"></div>
      <div class="img" v-if="userInfo && userInfo.level">
        <img class="levelImg" :src="require(`@assets/img3_0/vip/level/LV${ userInfo.level}@2x.png`)" alt="">
        <div class="upgrade">
          <b>恭喜您</b>
          <br />
          <b class="level-text">升级到{{ (userInfo && userInfo.level) | filterLevel(levelName) }}会员</b>
        </div>
        <div class="detailed">
          <div v-for="(item,index) in profitArr" :key="index">
            <img :src="require(`@assets/img3_0/memberCenter/levelUp/${item.thumb}`)" alt="">
            <p>{{item.more}}<br/>{{item.detail}}</p>
          </div>
        </div>
        <img
          class="closeLevel"
          @click="isPop =false"
          :src="require('@assets/img3_0/memberCenter/levelUp/guanbi@2x.png')"
          alt
        />
      </div>
    </div>
    <XchangePopup :showXcoin="showXcoin" @setShow="(val)=>{showXcoin = val}"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Vtabbar from "@/components/v-tabbar";
import XchangePopup from './components/XchangePopup'
import {
  member,
  wallet,
  memberlevellist,
  memberleveltypelist,
  memberupdatetips,
  readmessage,
  withdrawlistinfo,
  withdrawlist,
  userindexcontent,
  canwithdraw,
  rechargeflow,
  getdepositandwithdrawlist
} from "@/api/memberCenter";
import { sitenotice, message } from "@/api/news";
export default {
  name: "MemberCenter",
  components: {
    Vtabbar,
    XchangePopup
  },
  data() {
    return {
      isTop: false,
      list: [
        {
          text: "交易记录",
          path: "businessRecord"
        },
        {
          text: "银行卡绑定",
          path: "bankcard"
        },
        {
          text: "账号安全",
          path: "personalData"
        },
        {
          text: "新手教程",
          path: "tutorial"
        },

        {
          text: "服务订阅",
          path: "serviceSubscription"
        },
        {
          text: "代理中心",
          path: "agentHomepage"
        }
      ],
      profitArr:[
        {
          thumb:'fl@2x.png',
          more:'更多',
          detail:'专属福利'
        },
        {
          thumb:'xm@2x.png',
          more:'更高',
          detail:'洗码比例'
        },
        {
          thumb:'VIP@2x.png',
          more:'更多',
          detail:'线下体验'
        }
      ],
      registerDate: "-",
      money: "",
      balanceLoading: false,
      financing_money: "",
      all_platform_money: "",
      rotate: false,
      levelName: [],
      levelType: {},
      data: {
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        access_token: this.token
      },
      withdrawLists: [],
      withdrawListsMy: [],
      depositListsMy: [],
      sitenoticeLists: [],
      isPop: false,
      getType: "",
      getText: "",
      getLevelName: "",
      myLevelName: "",
      levelText: "",
      // getName: "",
      h5_index_pic: "", // banner地址
      h5_index_pic_link: "", // banner地址
      isShowRedpacketPop: true,
      timeArr: [],
      showflow: false,
      loading: false,
      finished: false,
      rechargeData:[],
      time: 900000,
      showXcoin: false
    };
  },
  computed: {
    ...mapState("users", [
      "token",
      "userInfo",
      "username",
      "isLogin",
      "wallet"
    ]),
    // 个人绑定的银行卡列表
    bankList() {
      const { userInfo } = this;
      return userInfo.user_bank;
    },
    showName() {
      const { userInfo } = this;
      if (!userInfo) return "立即登录";
      const { register_type, username, mobile } = userInfo;
      // 手机号注册显示手机号中间四位隐藏
      if (register_type === 3 && mobile) {
        return mobile.substr(0, 3) + "****" + mobile.substr(-4);
      } else {
        return username;
      }
    }
  },
  created() {
    // console.log('this.isLogin', this.isLogin, 'token', this.token, 'username', this.username)
    this.randTime();
    this.memberupdatetipsApi();
    this.$store.dispatch('users/getWallet')
    // if(window.localStorage.getItem('token')) {
    //   this.isLogin = true
    // }
    if (this.token) {
      this.getRegisterDate();
      const { register_type, username, mobile } = this.userInfo;
      // 手机号注册显示手机号中间四位隐藏
      if (register_type === 3 && mobile) {
        this.getName = mobile.substr(0, 3) + "****" + mobile.substr(-4);
      } else {
        this.getName = username;
      }
      memberleveltypelist(this.data).then(res => {
        this.levelType = res.data.data;
        memberlevellist().then(res => {
          if (res.data.code === 0) {
            this.levelName = res.data.data;

            let myLevel = "";
            let idx = 0;
            for (let i = 0; i < this.levelName.length; i++) {
              if (this.levelName[i].level === this.userInfo.level) {
                myLevel = this.levelName[i];
                idx = ++i;
                break;
              }
            }
            try {
              this.getType = this.levelType[this.levelName[idx].type];
              this.getText = this.levelName[idx].text;
              this.getLevelName = this.levelName[idx].name;
              this.myLevelName = this.levelName[idx - 1].name;
            } catch (error) {}
          }
        });
      });
    }
    if(this.isLogin) {
      this.$store.dispatch("users/getUserInfo");
    }
    Promise.all([this.getWithdrawListsMy(1),this.getWithdrawListsMy(2)]).then(val=> {
      if(!val[0].length && !val[1].length) {
        this.getWithdrawLists()
      }
    })
  },
  filters: {
    filterLevel(val, levelList) {
      for (let i = 0; i < levelList.length; i++) {
        if (levelList[i].level === val) {
          return levelList[i].name;
        }
      }
    }
  },
  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  methods: {
    randTime() {
      this.timeArr.push(
        Math.floor(Math.random() * (900000 - 700000 + 1)) + 700000
      );
      this.timeArr.push(
        Math.floor(Math.random() * (900000 - 700000 + 1)) + 700000
      );
    },
    openActivities() {
      // 登录后
      if (this.token) {
        this.$router.push({
          path: "/activities5"
        });
      } else {
        this.$router.push({
          path: "/withdrawal"
        });
      }
    },
    // handleScroll() {
    //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   let offsetTop = document.querySelector('#header').offsetTop
    //   scrollTop > offsetTop ? this.isTop = true : this.isTop = false
    //   console.log(scrollTop, offsetTop, this.isTop)
    // },
    // 获取活动详情
    userindexcontent(type) {
      // 登录
      if (type || type === 0) {
        const data = {
          merchant_no: process.env.VUE_APP_MERCHANT_NO,
          access_token: this.token,
          type: type
        };
        userindexcontent(data).then(res => {
          if (res.data.data.h5_banner) {
            res.data.data.h5_banner.forEach(element => {
              if (element.level == type) {
                this.h5_index_pic = element.logo;
                this.h5_index_pic_link = element.link;
              }
            });
          }
        });
      } else {
        console.log("未登录的banner");
      }
    },
    memberupdatetipsApi() {
      if(this.isLogin) {
        memberupdatetips(this.data).then(res => {
          if (res.data.code === 0) {
            if (res.data.data) {
              // if (res.data.data.type == 16) {
              //   this.isShowRedpacketPop = true;
              //   this.levelText = res.data.data.content;
              //   this.data.id = res.data.data.id;
              // } else {
                this.isPop = true;
                this.levelText = res.data.data.content;
                this.data.id = res.data.data.id;
              // }
              readmessage(this.data).then(res=> {
                if (res.data.code === 0) {
                  this.$store.dispatch('users/getUserInfo')
                } else {
                  this.$toast(res.data.msg)
                }
              })
            }
          } else {
            this.$toast(res.data.msg);
          }
        });
      }
    },
    getSiteNotice() {
      sitenotice().then(res => {
        const { code, data } = res.data;
        if (code === 0) {
          this.sitenoticeLists = data.data;
        }
      })
      message().then(res => {
        const { code, data } = res.data;
        if (code === 0) {
          this.sitenoticeLists = this.sitenoticeLists.concat(data.data);
        }
      })
    },
    getWithdrawLists(val) {
      withdrawlistinfo().then(res => {
        const { code, data, msg } = res.data;
        if (code === 0) {
          this.withdrawLists = (data && data.list) || [];
        } else {
          console.log(msg);
        }
      });
    },
    getWithdrawListsMy(val) {
      return new Promise((resolve, reject)=> {
        if(this.token && this.isLogin) {
          getdepositandwithdrawlist({type:val}).then(res => {
            const { code, data, msg } = res.data;
            if(code === 0) {
              if(val == 1) {
                this.withdrawListsMy = (data && data.data) || []
              } else {
                this.depositListsMy = (data && data.data) || []
              }
              resolve((data && data.data) || [])
            } else {
              console.log(msg);
            }
          })
        } else {
          resolve([])
        }
      })
    },
    listPath(path) {
      if (path === "agentHomepage") {
        this.$router.push("agentHomepage");
      } else {
        this.isLogin
          ? this.$router.push({ name: path })
          : this.$store.dispatch("global/setNoLogin",true)
      }
    },
    refresh() {
      this.balanceLoading = true;
      this.$store
        .dispatch("users/getWallet")
        .then(res => {
          // clearInterval(time);
          // if (res.data.code === 0) {
          //   this.money = res.data.data.money;
          //   this.all_platform_money = res.data.data.all_platform_money;
          //   this.financing_money = res.data.data.financing_money;
          // }
          this.balanceLoading = false;
        })
        .catch(() => {
          this.balanceLoading = false;
        });
    },
    levelShow() {
      this.$dialog
        .confirm({
          message: `您需要 ${this.getType} ${this.getText} 即可升级至 ${this.getLevelName}`,
          title: "温馨提示",
          showCancelButton: false
        })
        .then(() => {})
        .catch(() => {});
    },
    signOut() {
      this.$dialog
        .confirm({
          message: "是否退出登录？"
        })
        .then(() => {
          // this.isLogin = false;
          this.$store.dispatch("users/logout").then(() => {});
        })
        .catch(() => {
          // on cancel
        });
    },
    govip() {
      // window.open("https://m.aavipjlb.com", "aavip");
      this.$router.push('/vip')
    },
    // 获取注册天数
    getRegisterDate() {
      if (this.userInfo.created_at) {
        let year = new Date(
          this.userInfo.created_at.replace(/-/g, "/")
        ).getFullYear();
        let month =
          new Date(this.userInfo.created_at.replace(/-/g, "/")).getMonth() + 1;
        let date = new Date(
          this.userInfo.created_at.replace(/-/g, "/")
        ).getDate();
        this.registerDate =
          parseInt(
            (new Date().getTime() -
              new Date(`${year}/${month}/${date}`).getTime()) /
              (24 * 60 * 60 * 1000)
          ) + 1;
      }
    },
    onClickLeft() {
      // if (this.token) {
        this.$router.push({
          path: "/more"
        });
      // } else {
      //   this.$router.push({
      //     path: "/login"
      //   });
      // }
    },
    onClickRight() {
      if (this.isLogin) {
        this.$router.push({
          name: "news"
        });
      } else {
        this.$store.dispatch("global/setNoLogin",true)
      }
    },
    handleWithdraw() {
      if(!this.isLogin) {
        this.$store.dispatch("global/setNoLogin",true)
        return
      }
      const { bankList, userInfo } = this;
      if (!bankList || !bankList.length) {
        const vm = this;
        this.$dialog
          .confirm({
            message: `您未绑定银行卡，我们无法为您打款到账户<br>遇到问题 <span style="color:${this.$colorjs.baseColor};">联系专属客服<span>`,
            title: "银行卡绑定提示",
            confirmButtonText: "立即绑定",
            cancelButtonText: "暂不绑定"
          })
          .then(() => {
            vm.$router.push({
              path: "/addBankCard",
              query: {
                getPath: "memberCenter"
              }
            });
          })
          .catch(() => {
            vm.$router.push({
              path: "/memberCenter"
            });
          });
        return;
      } else if(!userInfo.mobile) {
        this.$store.dispatch('global/setPopShow',{ telDisplay: true, status: true });
      } else {
        this.$store.dispatch('global/setFlow',true)
      }
    },
    handleReset(val) {
      this.$nextTick(()=> {
        this.$refs[val][0].reset()
      })
    }
  }
};
</script>

<style scoped lang="less">
@import '~@assets/styles/memberCenter/index.less';
.center-title-img {
  width: 0.53rem;
}

.center-title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.14rem 0.4rem;
}

.member-page {
  display: block;
  position: absolute;
  left: 0;
  padding-top: 0.01833rem;
  padding-bottom: 1.5rem;
  top: 0;
  right: 0;
  bottom: @main-top;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background: @bg-color url(~@assets/img3_0/memberCenter/bg@2x.png) no-repeat;
  background-size: contain;

  .m-header.van-nav-bar {
    background: @bg-color;
    .more-img {
      width: 36px;
      display: inline-block;
      vertical-align: middle;
    }
    .msg-img {
      width: 40px;
      display: inline-block;
      vertical-align: middle;
    }
    /deep/ .van-nav-bar__right {
      .van-icon {
        font-size: 44px;
        color: @primary-color;
        font-weight: 500;
      }
      .dot:before {
        position: absolute;
        content: "";
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #fa5300;
        transform: translate(30px, 20px);
      }
    }
  }

  .m-body {
    padding: 88px @space-gap 0 @space-gap;
  }

  .barColor {
    // background-image: url("@assets/img3_0/memberCenter/bg-person-center@2x.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }

  // 个人中心头部
  .user-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.2rem;
    margin-bottom: @space-gap;

    .person-info {
      flex: 8;
      display: flex;
      align-items: center;

      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 100px;
      }

      .right {
        .bottom {
          margin-left: @margin-15;
          margin-top: 4px;
          color: #666666;

          span {
            font-size: 30px;
          }
        }

        .name {
          margin-left: @margin-15;
          font-size: @font-size-14;
          color: #ffffff;
          font-weight: 500;
        }

        .level {
          display: inline-block;

          span {
            margin-top: 2px;
          }

          span,
          img {
            display: inline-block;
            vertical-align: middle;
          }

          img {
            width: 44px;
            height: auto;
          }
        }
      }
    }

    .login-edit {
      flex: 2;
      text-align: right;

      button {
        width: 1.73333rem;
        height: 0.8rem;
        border: none;
        background-color: #ffffff;
        text-align: center;
        line-height: 0.8rem;
        color: #222222;
        font-size: @font-size-13;
        font-weight: 600;
        border-radius: 8px;
      }

      img {
        width: 0.53333rem;
        height: 0.53333rem;
      }
    }
  }

  .info-area {
    width: 100%;
    display: flex;
    flex-direction: column;

    // align-items: center;
    > span {
      display: flex;
      align-items: center;
      .van-icon {
        color: #606060;
      }
      &:first-child {
        font-size: @font-size-12;
        color: #999999;
        margin-top: 0.4rem;
      }
      &:last-child {
        color: @primary-color;
        font-size: 0.53333rem;
        font-weight: 600;
        margin-top: 8px;
      }
    }
  }

  .balance {
    // padding: 0 .53rem;
    background: @bg-card-color;
    border-radius: 10px;
    // height: 6.4rem;
    // box-shadow: 0px 1px 5px #f0f0f0;
    margin-bottom: @space-gap;
    .main-balance {
      height: 1.6rem;
      position: relative;
      padding: 0 0.53rem;

      // &::after {
      //   content: "";
      //   position: absolute;
      //   left: 10%;
      //   bottom: 0;
      //   width: 80%;
      //   height: 0.026666rem;
      //   background-color: #eeeeee;
      // }
      > i {
        position: absolute;
        font-size: 0.53333rem;
        top: 0.26666rem;
        right: 0.53rem;
        color: #999;
      }
      .refresh {
        transition: all 0.45s ease-out;
        &.active {
          animation: refresh 1s linear infinite;
        }
      }
    }

    .other-balance {
      width: 100%;
      display: inline-flex;
      padding: 0 0.53rem;

      > div:last-child {
        position: relative;
        // &::after {
        //   .aagames-separation-line(0.032222rem);
        // }
      }
    }

    .operating {
      display: flex;
      margin-top: 0.8rem;
      padding: 0.5rem 0.53rem;
      font-size: @font-size-15;
      color: #ffffff;
      justify-content: space-between;
      border-top: 0.005rem solid @border-color;
      :nth-child(1) {
        background: @primary-color;
      }

      :nth-child(2) {
        background-image: linear-gradient(90deg, #da8b45 0%, #b04d25 99%);
      }

      :nth-child(3) {
        background-image: linear-gradient(90deg, #13b1d7 0%, #1c7588 99%);
      }

      .wallet-operating {
        width: 2.5rem;
        height: 1rem;
        border-radius: 1rem;
        text-align: center;
        line-height: 1rem;
      }
    }
  }

  //最新動態
  .latest {
    margin-bottom: @space-gap;
    h2 {
      display: flex;
      justify-content: space-between;
      font-size: 0.4266rem;
      padding: 0;
      margin: 0;
      padding: 15px 0;
      color: white;
      .van-icon {
        font-size: 28px;
        color: #666;
      }
    }

    .newest-info-detail {
      padding: @space-gap 0;
      border-bottom: 2px solid @border-color;
      .push-money{
        border: 2px solid @primary-color;
        color:@primary-color;
        margin-left: 10px;
        border-radius: 40px;
        padding:4px 8px;
        font-size: 26px;
      }
      .newest-info-first {
        display: flex;
        justify-content: space-between;
        font-size: 0.4266rem;
        color: #b1b1b1;
        margin-bottom: 2%;

        .newest-name {
          img{
            width: 56px;
            position: relative;
            top: 14px;
            left: 4px;
          }
        }

        .newest-num {
        }
      }

      .newest-info-two {
        display: flex;
        justify-content: space-between;
        font-size: 0.32rem;

        .newest-time {
          color: #666666;
        }

        .newest-state {
          .processing {
            color: @primary-color;
            &.green{
              color:#30AD8F;
            }
          }

          .processing-time {
            color: #e94f01;
            font-size: 16px;
          }

          .recharge-success {
            color: #30ad8f;
          }
        }
      }
    }
  }

  // 广告banner
  .banner {
    img {
      display: block;
      width: 100%;
      border-radius: 8px;
    }
  }

  // 个人中心-菜单入口
  .mb120 {
    margin-bottom: 120px;
  }

  .person-entr {
    position: relative;
    margin: @margin-10;
    color: #b1b1b1;

    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 2.3rem;
      position: relative;

      > i {
        display: block;
        width: 60px;
        height: 60px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        margin-bottom: 10px;
      }

      > p {
        margin-top: @margin-5;
      }
    }

    .list1 {
      background-image: url(~@assets/img3_0/memberCenter/list_1.png);
    }

    .list2 {
      background-image: url(~@assets/img3_0/memberCenter/list_2.png);
    }

    .list3 {
      background-image: url(~@assets/img3_0/memberCenter/list_3.png);
    }

    .list4 {
      background-image: url(~@assets/img3_0/memberCenter/list_4.png);
    }

    .list5 {
      background-image: url(~@assets/img3_0/memberCenter/list_5.png);
    }

    .list6 {
      background-image: url(~@assets/img3_0/memberCenter/list_6.png);
    }
  }

  // 退出
  .login-out {
    margin: @margin-10;
    border-radius: 0.08rem;
    text-align: center;
    background: #353435;

    > span {
      display: inline-block;
      width: 100%;
      height: 1.22666rem;
      line-height: 1.22666rem;
      color: #cccccc;
      font-size: @font-size-15;
    }
  }

  .aa {
    transition: all 2s;
    transform: rotate(0deg);
  }

  .go {
    transform: rotate(180deg);
    transition: all 2s;
  }

  .mt-60 {
    margin-top: 60px;
  }

  .van-progress {
    height: 8px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #586277;
  }

  .van-progress__pivot {
    opacity: 0;
  }
}

.popup {
  // position: fixed;
  // top: 118px;
  z-index: 100000;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  // width: 690px;
  // left: 50%;
  // padding: 20px;
  // margin-left: -690px/2;
  // min-height: 100px;
  // border-radius: 8px;
  // background-color: rgba(200, 167, 127, 1);
  .mask{
    background-color:rgba(0,0,0,.5);
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
  }
  &.levelUp{
    .img{
      background-image: url('~@assets/img3_0/memberCenter/levelUp/sj_bg@2x.png');
      background-size: 100%;
      width:522px;
      height:780px;
      position: relative;
      left: 50%;
      top:40%;
      -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
    }
    .levelImg{
      width:160px;
      position: absolute;
      left:50%;
      margin-left: -80px;
      top:180px;
    }
    .upgrade{
      text-align: center;
      padding-top: 380px;
      b{
        color:#574118;
        font-size: 48px;
        line-height: 80px;
      }
      .level-text{
        color:#574118;
        font-size: 36px;
      }
    }
    .detailed{
      margin-top: 46px;
      display: flex;
      >div{
        flex:1;
        text-align: center;
        img{
          width:68px;
        }
        p{
          line-height: 40px;
          color:#574118;
        }
      }
    }
    .closeLevel{
      bottom:-140px;
      width:100px;
      left:50%;
      margin-left: -50px;
      position: absolute;
    }
  }
  .title {
    width: 144px;
    height: 34px;
    font-size: 24px;
    font-weight: 600;
    color: rgba(25, 25, 25, 1);
    line-height: 34px;
  }
  .center {
    font-size: 20px;
    font-weight: 400;
    color: #191919;
    line-height: 28px;
  }
  .close {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 50%;
    margin-top: -30px;
    right: 20px;
  }
}
.error {
  background-color: #c55055;
  .title {
    color: #ffffff;
  }
  .center {
    color: #ffffff;
  }
}

.custom{
  display: flex;
  flex-direction: column;
}

/deep/ .van-progress__portion {
  width: 50% !important;
}
</style>
