<template>
  <div class="events">
    <template v-if="$projectname==='10022'||$projectname==='10024'||$projectname==='10050'||$projectname==='10026'||$projectname==='10027'||$projectname==='10028'">
      <van-nav-bar
        class="m-header"
        title="VIP特权详情"
        left-arrow
        :fixed="true"
        @click-left="goback"
        v-if="!$route.query.source"
      >
      </van-nav-bar>
      <van-tabs @click="tabClick" :style="{top: $route.query.source && '0px !important'}">
        <van-tab v-for="(item,index) in tags" :key="index" title-active-color="#333">
          <template #title>
            <van-image class="tab-icon-nor" :src="$imgs['vip/newLevel/vip_details_icon'+(index+1)+'_normal@2x']"/>
            <van-image class="tab-icon-active" :src="$imgs['vip/newLevel/vip_details_icon'+(index+1)+'_Select@2x']"/>
            <span>{{item.title}}</span>
          </template>
        </van-tab>
      </van-tabs>
      <div class="container" :style="{paddingTop: $route.query.source && '1.6rem !important'}">
        <template v-if="activeNum===0">
          <div class="main-block">
            <p class="block-tit"><b class="venueStyle__linemark"></b><i>场馆返水</i><i>VIP等级越高，返水越高</i></p>
            <p class="block-tit-sub">特权简介</p>
            <p class="block-desc">会员达到指定VIP等级,即可获得返水福利,VIP等级越高,返水越高！</p>
            <div class="venueStyle__tab">
              <div class="venueStyle__wbTable">
                <ul class="venueStyle__content">
                  <li class="venueStyle__content_tit">
                    <div>场馆</div>
                    <div>VIP0</div>
                    <div>VIP1</div>
                    <div>VIP2</div>
                    <div>VIP3</div>
                    <div>VIP4</div>
                    <div>VIP5</div>
                    <div>VIP6</div>
                    <div>VIP7</div>
                    <div>VIP8</div>
                    <div>VIP9</div>
                    <div>VIP10</div>
                  </li>
                  <li>
                    <!--<template v-for="(item,index) in benefitData">-->
                    <div class="venueStyle__venuename_wrap" :style="{width:(benefitData.length-1)*2+'rem'}">
                      <ul class="venueStyle__venuename" v-for="(item,index) in benefitData" v-if="item.name!='六合彩'">
                        <li>{{item.name}}</li>
                        <li>-</li>
                        <li v-for="child in item.list">{{child.proportion}}%</li>
                      </ul>
                    </div>
                    <!--<ul style="width: 14rem;">-->
                      <!--<li>0.40%</li>-->
                      <!--<li>0.55%</li>-->
                      <!--<li>0.48%</li>-->
                      <!--<li>0.48%</li>-->
                      <!--<li>0.48%</li>-->
                      <!--<li>0.40%</li>-->
                      <!--<li>0.48%</li>-->
                    <!--</ul>-->
                    <!--</template>-->
                  </li>
                </ul>
              </div>
            </div>
            <div class="venueStyle__tips">*以上为各场馆最高返水，具体返水金额请以实际游戏为准。</div>
          </div>
        </template>
        <template v-if="activeNum===1">
          <div class="main-block">
            <p class="block-tit"><b class="venueStyle__linemark"></b><i>每日提款</i><i>VIP等级越高，每日提款次数和金额越多</i></p>
            <p class="block-tit-sub">特权简介</p>
            <p class="block-desc">会员VIP等级不同，每日可提款的次数和可提款的金额不同，VIP等
              级越高，每日可提款次数越多，每日可提款金额越高！</p>
            <table class="venueStyle__monthlyTable">
              <colgroup>
                <col width="20%">
                <col width="40%">
                <col width="40%">
              </colgroup>
              <tbody>
                <tr>
                  <th colspan="3">VIP每日提款</th>
                </tr>
                <tr>
                  <td>VIP等级</td>
                  <td>日提款次数</td>
                  <td>日提款额度(元)</td>
                </tr>
                <tr v-for="(item,index) in levelData">
                  <td>VIP{{item.level}}</td>
                  <td>{{item.withdraw_times_limit}}</td>
                  <td>{{item.withdraw_money_limit}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
        <template v-if="activeNum===2">
          <div class="main-block">
            <p class="block-tit"><b class="venueStyle__linemark"></b><i>佳节礼品</i><i>VIP等级越高，每月红包金额越多</i></p>
            <p class="block-tit-sub">特权简介</p>
            <p class="block-desc">会员达到指定VIP等级，即可每月领取每月红包（月初自动发放），
              VIP等级越高，每月发放的红包金额越多！</p>
            <table class="venueStyle__monthlyTable">
              <colgroup>
                <col width="20%">
                <col width="80%">
              </colgroup>
              <tbody>
              <tr>
                <th colspan="2">VIP佳节礼品</th>
              </tr>
              <tr>
                <td>VIP等级</td>
                <td>佳节礼品</td>
              </tr>
              <tr v-for="(item,index) in farewareData">
                <td>VIP{{item.level}}</td>
                <td>{{item.gift}}</td>
              </tr>
              </tbody>
            </table>
            <div class="venueStyle__tips">*礼包内容可能不定期更新，具体以领取时的提示为准。</div>
          </div>
        </template>
        <template v-if="activeNum===3">
          <div class="main-block">
            <p class="block-tit"><b class="venueStyle__linemark"></b><i>生日礼金</i><i>VIP等级越高，生日礼金金额越多</i></p>
            <p class="block-tit-sub">特权简介</p>
            <p class="block-desc">达到一定VIP等级的时候，平台将会在您生日的时候赠送大额的生
              日礼金，一定要记得设置生日哦！ 特别说明:会员在注册90天内过
              生日，今年将不能领取生日礼金。另注册时间大于90天的会员需在
              生日当天的VIP页面进行自助领取，每年可领取一次。（生日彩金
              1倍流水即可提款）</p>
            <table class="venueStyle__monthlyTable">
              <colgroup>
                <col width="20%">
                <col width="80%">
              </colgroup>
              <tbody>
              <tr>
                <th colspan="2">VIP生日礼金</th>
              </tr>
              <tr>
                <td>VIP等级</td>
                <td>生日礼金</td>
              </tr>
              <tr v-for="(item,index) in farewareData">
                <td>VIP{{item.level}}</td>
                <td>{{item.birthday_money}}</td>
              </tr>
              </tbody>
            </table>
            <div class="venueStyle__tips">*礼包内容可能不定期更新，具体以领取时的提示为准。</div>
          </div>
        </template>
        <template v-if="activeNum===4">
          <div class="main-block">
            <p class="block-tit"><b class="venueStyle__linemark"></b><i>晋级礼金</i><i>VIP等级越高，生日礼金金额越多</i></p>
            <p class="block-tit-sub">特权简介</p>
            <p class="block-desc">会员晋级的时候，自动获得晋级礼金，VIP等级越高，晋级的时候
              获得的VIP晋级礼金也越多！每个玩家每个VIP等级只能获得1次晋
              级礼金。VIP等级降级后，再次晋级，不能重复获得晋级礼金。</p>
            <table class="venueStyle__monthlyTable">
              <colgroup>
                <col width="20%">
                <col width="80%">
              </colgroup>
              <tbody>
              <tr>
                <th colspan="2">VIP晋级礼金</th>
              </tr>
              <tr>
                <td>VIP等级</td>
                <td>晋级礼金</td>
              </tr>
              <tr v-for="(item,index) in farewareData">
                <td>VIP{{item.level}}</td>
                <td>{{item.upgrade_money}}</td>
              </tr>
              </tbody>
            </table>
            <div class="venueStyle__tips">*礼包内容可能不定期更新，具体以领取时的提示为准。</div>
          </div>
        </template>
      </div>
    </template>
    <template v-if="$projectname==='10023' || $projectname==='10029' || $projectname==='10033'">
      <temlate v-if="$projectname==='10029'">
        <van-nav-bar
            class="m-header"
            title="VIP特权详情"
            left-arrow
            :fixed="true"
            @click-left="goback"
        >
        </van-nav-bar>
      </temlate>
      <h2 class="events-title"><i></i><span>VIP返水与比例</span></h2>
      <ul class="newfs-wrap">
        <li class="newfs-wrap-tit">
          <div>VIP等级</div>
          <div v-for="(item,index) in 11"><img :src="$imgs['vip/newLevel/grade_normal'+(index+1)+'@2x']" alt="">VIP{{index}}</div>
        </li>
        <li v-for="(item,index) in benefitData" v-if="item.name!='六合彩'">
          <div>{{item.name}}</div>
          <div>-</div>
          <div v-for="child in item.list">{{child.proportion}}%</div>
        </li>
      </ul>
      <temlate v-if="$projectname==='10029'">
        <h2 class="events-title"><i></i><span>VIP 提款额度</span></h2>
        <div class="rank-block">
          <ul class="newfs-wrap newfs-wrap02">
            <li class="newfs-wrap-tit" style="flex: 2">
              <div>VIP等级</div>
              <div>日取款次数</div>
              <div>每日取款额度</div>
            </li>
            <li v-for="(item,index) in levelData" :class="index===rankVip?'on':''">
              <div><img :src="$imgs['vip/newLevel/grade_normal'+(index+1)+'@2x']" alt=""><span>VIP{{index}}</span></div>
              <div><span>{{item.withdraw_times_limit}}</span></div>
              <div><span>{{item.withdraw_money_limit.split('.')[0]/10000}}万</span></div>
            </li>
          </ul>
        </div>
      </temlate>
      <h2 class="events-title"><i></i><span>条款与规则</span></h2>
      <div class="events-rules-item" v-for="(item,index) in rules">
        <i>{{index+1}}</i>
        <div>
          <h3>{{item.title}}</h3>
          <p>{{item.con}}</p>
        </div>
      </div>
    </template>
    <template v-if="$projectname==='10025'">
      <van-nav-bar
        class="m-header"
        title="VIP特权详情"
        left-arrow
        :fixed="true"
        @click-left="goback"
      >
      </van-nav-bar>
      <div class="hlEvents">
        <div class="hlEvents-main-t">
          <img class="hlEvents-logo" :src="$imgs['vip/hlevents/bet_vip_bk_title@2x']" alt="">
          <div class="swiper-container swiper-rank">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in 11"><img :src="$imgs['vip/newLevel/grade_normal'+(index+1)+'@2x']" alt=""></div>
            </div>
          </div>
          <ul class="rank-items" v-if="levelData.length>0">
            <li>
              <img :src="$imgs['vip/hlevents/rank01']" alt="">
              <div class="rank-items-info">
                <h2>会员等级</h2>
                <p>VIP{{rankVip}}</p>
              </div>
            </li>
            <li>
              <img :src="$imgs['vip/hlevents/rank02']" alt="">
              <div class="rank-items-info">
                <h2>累计存款</h2>
                <p>{{levelData[rankVip].deposit_money}}</p>
              </div>
            </li>
            <li>
              <img :src="$imgs['vip/hlevents/rank03']" alt="">
              <div class="rank-items-info">
                <h2>有效流水要求</h2>
                <p>{{levelData[rankVip].money_condition}}</p>
              </div>
            </li>
            <li>
              <img :src="$imgs['vip/hlevents/rank04']" alt="">
              <div class="rank-items-info">
                <h2>保级有效流水</h2>
                <p>{{levelData[rankVip].valid_bet_money}}</p>
              </div>
            </li>
            <li>
              <img :src="$imgs['vip/hlevents/rank05']" alt="">
              <div class="rank-items-info">
                <h2>晋级奖金: <span v-for="(item,index) in farewareData" v-if="item.level === rankVip">{{item.upgrade_money}}</span></h2>
                <p>升级礼金1倍流水即可提款</p>
              </div>
            </li>

            <li>
              <img :src="$imgs['vip/hlevents/rank06']" alt="">
              <div class="rank-items-info">
                <h2>每月红包: <span v-for="(item,index) in farewareData" v-if="item.level === rankVip">{{item.gift?item.gift:'--'}}</span></h2>
                <p>升级礼金1倍流水即可提款</p>
              </div>
            </li>
            <li>
              <img :src="$imgs['vip/hlevents/rank07']" alt="">
              <div class="rank-items-info">
                <h2>生日礼金: <span v-for="(item,index) in farewareData" v-if="item.level === rankVip">{{item.birthday_money}}</span></h2>
              </div>
            </li>
            <li>
              <img :src="$imgs['vip/hlevents/rank08']" alt="">
              <div class="rank-items-info">
                <h2>豪礼相送</h2>
              </div>
            </li>
          </ul>
          <div class="rank-block">
            <h2>VIP 返水比例</h2>
            <ul class="newfs-wrap-vert">
              <li class="newfs-wrap-tit">
                <div>VIP等级</div>
                <div v-for="(item,index) in 11"  :class="index===rankVip?'on':''"><span>VIP<br>{{index}}</span></div>
              </li>
              <li v-for="(item,index) in benefitData" v-if="item.name!='六合彩'">
                <div><span>{{item.name}}</span></div>
                <div :class="rankVip===0?'on':''">-</div>
                <div :class="(childIndex+1)===rankVip?'on':''" v-for="(child,childIndex) in item.list"><span>{{child.proportion}}<br>%</span></div>
              </li>
            </ul>
          </div>
          <div class="rank-block">
            <h2>VIP 提款额度</h2>
            <ul class="newfs-wrap">
              <li class="newfs-wrap-tit" style="flex: 2">
                <div>VIP等级</div>
                <div>提款次数</div>
                <div>提款额度</div>
              </li>
              <li v-for="(item,index) in levelData" :class="index===rankVip?'on':''">
                <div><span>VIP<br>{{index}}</span></div>
                <div><span>{{item.withdraw_times_limit}}</span></div>
                <div><span>{{item.withdraw_money_limit.split('.')[0]/10000}}<br>万</span></div>
              </li>
            </ul>
          </div>

        </div>
        <img :src="$imgs['vip/hlevents/vip_image_line@2x']" class="hl-img" alt="">
        <img :src="$imgs['vip/hlevents/bet_vip_image_words@2x']" style="display: block;width: 100%" alt="">
        <p class="hlCopyright">- 版权所有 ©2019-2020 火狐 保留所有权 -</p>
      </div>
    </template>
  </div>
</template>

<script>
  // import { BarChart } from './components/BarChart'
  import {memberlevellist,privilegeactivity,allactivitybenefit} from "@/api/memberCenter";
  import EventApply from "../../vip/components/EventApply";
  import {mapState} from 'vuex'
  import "swiper/dist/css/swiper.css";
  import { Swiper } from "vue-awesome-swiper";

  export default {
    name: "Events",
    components: {
      // BarChart,
      EventApply
    },
    data() {
      const tabs = [
        {
          title: "正在进行中",
          status: 2
        },
        // {
        //   title: "未开始",
        //   status: 1
        // },
        {
          title: "往期活动",
          status: 3
        }
      ];
      return {
        showPopup: false,
        applyTitle: "活动申请",
        applyId: 0,
        // 1=尊享活动 2=特权
        type: 1,
        listCached: {},
        lists: [],
        tabs,
        tab: tabs[0],
        showEmpty: false,
        tags: [{
          title: '场馆返水',
          normIcon: '',
          activeIcon: ''
        }, {
          title: '每日提款',
          normIcon: '',
          activeIcon: ''
        }, {
          title: '佳节礼品',
          normIcon: '',
          activeIcon: ''
        }, {
          title: '生日礼金',
          normIcon: '',
          activeIcon: ''
        }, {
          title: '晋级礼金',
          normIcon: '',
          activeIcon: ''
        }],
        activeNum: 0,
        levelData:[],
        farewareData:[],
        benefitData:[],
        rules:[{
          title:'晋级标准',
          con:'会员的累计投注额达到相应级别的要求，即可晋级相应VIP等级，数据统计时间从账户注册之后立即开始；'
        },{
          title:'保级标准',
          con:'会员在“VIP等级变更”后的（xx）天内需完成相应等级的有效投注额和存款要求方可继续保级(xx)天；'
        },{
          title:'降级标准',
          con:'如果会员在（xx）天内没有完成相应的保级要求流水，系统会自动降级一个等级，福利也会随之调整至降级后的等级; '
        },{
          title:'晋级礼金',
          con:'会员晋级的时候，自动获得晋级礼金，VIP等级越高，晋级的时候获得的VIP晋级礼金也越多！每个玩家每个VIP等级只能获得1次晋级礼金。VIP等级降级后，再次晋级，不能重复获得晋级礼金。'
        },{
          title:'生日礼金',
          con:'达到一定VIP等级的时候，平台将会在您生日的时候赠送大额的生日礼金，一定要记得设置出生日哦！ 特别说明:会员在注册后90天内过生日，今年将不能领取生日礼金。另注册后出生日期大于90天的会员会按照您填写的出生日期自动派发生日彩金。'
        },{
          title:'会员日红包',
          con:'会员可在每个自然月的18号找客服领取每月红包，每月红包金额以当月18号当天VIP等级为准（每月会员日红包礼金3倍流水即可取款）；'
        },{
          title:'佳节礼品',
          con:'达到一定的VIP等级时您可以在中国法定节假日联系在线客服小姐姐，领取对应等级礼品哦！'
        },{
          title:'客户经理',
          con:'您专属的客户经理，随时为您解答疑问，满足其它合理需求；'
        },{
          title:'游戏通道',
          con:'您个人专属的域名和网络线路，更快更稳定，杜绝风险隐患；起搏有权对该活动进行修改、暂停、取消等，无需特别通知，并保留对该活动的最终解释权。'
        }],
        rankVip:0
      };
    },
    created() {
      let that = this;
      this.getLevelInfo();
      this.getWelfateInfo();
      this.getBenefit();
      this.$nextTick(function () {
        new Swiper('.swiper-rank', {
          slidesPerView: 4,
          spaceBetween: 30,
          centeredSlides: true,
          on:{
            slideChange: function () {
              that.rankVip = this.activeIndex
              console.log(this.activeIndex);
            },
          }
        });
      })
//      this.getVipActivity();
    },
    computed: {
      ...mapState('users', ['userInfo', 'isLogin'])
    },
    methods: {
      getLevelInfo(){
        let that = this;
        this.$loading();
        memberlevellist().then(res => {
          if (res.data.code === 0) {
            console.log(res.data.data)
            this.levelData = res.data.data

          }
        });
      },
      getWelfateInfo(){
        let that = this;
        this.$loading();
        privilegeactivity().then(res => {
          if (res.data.code === 0) {
            console.log(res.data.data)
            this.farewareData = res.data.data.benefit_setting

          }
        });
      },
      getBenefit(){
        allactivitybenefit().then(res => {
          if (res.data.code === 0) {
            console.log(res.data.data)
            this.benefitData = res.data.data

          }
        });
      },
      goback() {
        this.$router.go(-1)
      },
      tabClick(name) {
        console.log(name)
        this.activeNum = name
      },
//      getVipActivity() {
//        const {tab, type, listCached} = this;
//        const {status} = tab;
//        if (listCached[status]) {
//          this.lists = listCached[status];
//          return;
//        }
//        this.$loading();
//        this.showEmpty = false
//        vipActivity({status}).then(res => {
//          this.$toast.clear();
//          const {code, data, msg} = res.data;
//          if (code === 0) {
//            this.showEmpty = true
//            this.lists = data.data;
//            this.listCached[status] = data.data;
//          } else {
//            this.$toast(msg);
//          }
//        });
//      },
//      eventApply(item) {
//        if (this.isLogin) {
//          if (item.id) {
//            this.applyTitle = item.title;
//            this.applyId = item.id;
//          } else {
//            this.applyTitle = "[请后台配置数据] - 测试用活动标题" + item;
//            this.applyId = item;
//          }
//          this.showPopup = true;
//        } else {
//          this.$router.push({name: 'login'})
//        }
//      },
      onTabClick(tab) {
        this.tab = tab;
        this.getVipActivity();
      }
    }
  };
</script>

<style lang="less" scoped>
  .events {
    /deep/ .van-tabs {
      position: fixed;
      width: 100%;
      left: 0;
      z-index: 1;
      height: 96px;
      top: 88px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.06);

      .van-tabs__wrap {
        height: 100%;
        border-bottom: 0 !important;
      }

      .van-tabs__nav {
        height: 100%;
      }

      .van-tabs__line {
        display: none;
      }

      .van-tab__text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .van-image {
          width: 44px;
          height: 44px;
        }

        span {
          line-height: 1;
          font-size: 22px;
          color: #bbb;
          margin-top: 8px;
        }
      }

      .van-tab--active {
        .van-tab__text span {
          color: #333;
        }
      }

      .van-tab .tab-icon-active {
        display: none;
      }

      .van-tab .tab-icon-nor {
        display: block;
      }

      .van-tab--active .tab-icon-nor {
        display: none;
      }

      .van-tab--active .tab-icon-active {
        display: block;
      }
    }

    .container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: 0;
      padding: 204px 30px 50px;
      background: #F5F6FA;

      .main-block {
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 6px 30px 0px rgba(0, 34, 80, 0.1);
        border-radius: 20px;
        padding: 20px;

        .block-tit {
          display: flex;
          align-items: center;

          b {
            width: 6px;
            height: 32px;
            background: linear-gradient(179deg, rgba(64, 128, 255, 1) 0%, rgba(151, 212, 251, 1) 100%);
            border-radius: 3px;

          }

          i:nth-child(2) {
            font-size: 28px;
            font-weight: 600;
            color: rgba(51, 51, 51, 1);
            margin: 0 24px 0 14px;
          }

          i:nth-child(3) {
            font-size: 20px;
            color: #999;
          }
        }

        .block-tit-sub {
          font-size: 20px;
          color: #333;
          margin: 22px 0 14px;
          margin-left: 20px;
        }

        .block-desc {
          padding: 0 20px;
          font-size: 20px;
          color: #999;
          line-height: 32px;
        }

        .venueStyle__tab {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          margin-top: 0.22rem;
          width: 100%;
          text-align: center
        }

        .venueStyle__tab .venueStyle__wbTable {
          width: 100%
        }

        .venueStyle__tab .venueStyle__wbTable .venueStyle__content {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          width: 100%;
          border-left: 1px solid #ebedf0;
          margin-left: .2rem
        }

        .venueStyle__content_tit::after {
          content: '';
          position: absolute;
          display: block;
          right: -3.2px;
          right: -0.2rem;
          top: 0;
          width: 3.2px;
          width: 0.2rem;
          height: 100%;
          background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .05)), to(transparent));
          background: -webkit-linear-gradient(left, rgba(0, 0, 0, .05), transparent);
          background: linear-gradient(to right, rgba(0, 0, 0, .05), transparent);
          z-index: 2
        }

        .venueStyle__tab .venueStyle__wbTable .venueStyle__content li {
          border: 1px solid #ebedf0;
          border-left: 0;
          position: relative
        }

        .venueStyle__tab .venueStyle__wbTable .venueStyle__content li:first-child {
          width: 86px;
          border-left: 1px solid #E6EAEF;
        }

        .venueStyle__tab .venueStyle__wbTable .venueStyle__content li:first-child div {
          border-bottom: 1px solid #E6EAEF;
          height: 84px;
          line-height: 84px;
          font-weight: 600
        }

        .venueStyle__tab .venueStyle__wbTable .venueStyle__content li:first-child div:first-child {
          height: 58px;
          line-height: 58px;
          padding: 0;
          background-color: #EDEFF6;
        }

        .venueStyle__tab .venueStyle__wbTable .venueStyle__content li:first-child div:last-child {
          border: 0
        }

        .venueStyle__tab .venueStyle__wbTable .venueStyle__content li:last-child {
          width: 86%;
          overflow-y: hidden;
          border-right: 0;
          -webkit-overflow-scrolling: touch;
        }
        .venueStyle__venuename_wrap{
          display: flex;
        }

        .venueStyle__tab .venueStyle__wbTable .venueStyle__content li ul {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          flex-direction: column;
          background: #fff;
          width: 2rem;
        }


        .venueStyle__tab .venueStyle__wbTable .venueStyle__content li ul > li {
          border: 0;
          height: 84px;
          line-height: 84px;
          width: 2rem;
          color: #4080ff;
          text-align: center;
          border-bottom: 1px solid #E6EAEF;
          border-right: 1px solid #E6EAEF;
          &:first-child{
            height: 58px;
            line-height: 58px;
            background-color: #EDEFF6;
            color: #333;
          }
        }

        .venueStyle__tab .venueStyle__wbTable .venueStyle__content li ul > li p {
          margin: 0;
          padding: 0
        }

        .venueStyle__tab .venueStyle__wbTable .venueStyle__content li ul > li:first-child {
          width: 2rem
        }

        .venueStyle__tab .venueStyle__wbTable .venueStyle__content li ul > li:last-child {
          width: 2rem;
          border-right: 1px solid #ebedf0
        }

        .venueStyle__tab .venueStyle__wbTable .venueStyle__content li ul.venueStyle__venuename__mMwO6 li {
          color: #333
        }

        .venueStyle__monthlyTable {
          width: 100%;
          border-collapse: collapse;
          margin-top: 24px;
        }

        .venueStyle__monthlyTable td {
          width: 1.165rem;
          border: 0.02rem #ebedf0 solid;
          text-align: center;
          height: 66px;
          color: #333;
        }
        .venueStyle__monthlyTable th {
          background: #EDEFF6;
          border: 0.02rem #ebedf0 solid;
          text-align: center;
          height: 66px;
          color: #333;
          font-weight: bold;
        }

        .venueStyle__tab .venueStyle__left {
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          -ms-flex: 1;
          flex: 1
        }

        .venueStyle__tab .venueStyle__left .venueStyle__vip {
          border-collapse: collapse;
          height: 2.84rem
        }

        .venueStyle__tab .venueStyle__left .venueStyle__vip td {
          width: 1.165rem;
          border: 0.02rem #ebedf0 solid;
          border-bottom: 0;
          color: #158bf4
        }

        .venueStyle__tab .venueStyle__left .venueStyle__tableleft {
          border-collapse: collapse
        }

        .venueStyle__tab .venueStyle__left .venueStyle__tableleft td {
          width: 1.165rem;
          height: 0.7rem;
          color: #158bf4;
          border: 0.02rem #ebedf0 solid
        }

        .venueStyle__venuename {
          color: #333;
          width: 136px;
        }

        .venueStyle__tips {
          color: #e02020;
          margin-top: 0.16rem;
          font-size: 24px;
        }

      }
    }
  }
</style>
