<template>
  <div class="mouse">
    <!-- <h1>鼠你最旺</h1> -->
    <lheader title="新年活动" :goback="true"></lheader>
    <div class="top">
      <p>还可使用炮竹<span>{{availData.paozhu || 0}}</span>次或烟花<span>{{availData.yanhua || 0}}</span>次或皇家礼炮<span>{{availData.lipao || 0}}</span>次</p>
      <div>
        <div class="container" v-for="(item,index) in fireType" :key="index">
          <van-image :src="item.img"></van-image>
          <h3>{{item.name}}</h3>
          <p v-html="item.text"></p>
          <button class="mouse-btn" @click="getReward(index+1)">
            <span>放{{item.name}}赢大礼</span> 
          </button>
        </div>
      </div>
    </div>
    <div class="middle">
      <van-image :src="require('./assets/title-1.png')"></van-image>
      <p>已放炮竹次数:炮竹<span>{{availData.used_paozhu || 0}}</span>次,烟花<span>{{availData.used_yanhua || 0}}</span>次,皇家礼炮<span>{{availData.used_lipao || 0}}</span>次</p>
      <div>
        <div class="container" v-for="(item,index) in mouseType" :key="index">
          <van-image :src="require(`./assets/mouse-${index+1}.png`)"></van-image>
          <p v-html="item.text"></p>
          <button :disabled="!levelStatus[index+1]" @click="getReward(4, index+1)" class="mouse-btn">
            <span>{{getStatus(levelStatus[index+1])}}</span> 
          </button>
        </div>
      </div>
    </div>
    <div class="reward">
      <van-image :src="require('./assets/title-2.png')"></van-image>
      <button class="mouse-btn" @click="myReward">
        <span>我的礼品</span> 
      </button>
      <div class="tab-container">
        <div :class="['tab-header',{'tab-1':tabType == 1},{'tab-2':tabType == 2}]">
          <span @click="setTab(1)"></span>
          <span @click="setTab(2)"></span>
          <!-- <van-image :style="{'z-index':tabType == 1?'9':'0'}" @click="setTab(1)" :src="require('./assets/tab-1.png')"></van-image>
          <van-image :style="{'z-index':tabType == 2?'9':'0'}" @click="setTab(2)" :src="require('./assets/tab-2.png')"></van-image> -->
        </div>
        <div class="tab-detail" :show-indicators="false">
          <van-swipe :autoplay="3000" :show-indicators="false" vertical>
            <van-swipe-item v-for="(item,index) in swipeData" :key="index">
              <div class="swipe-list" v-for="(l,i) in item" :key="i">
                <span>恭喜{{l.username}}</span>
                <span>于{{l.created_at}}</span>
                <span>获得{{l.gift || l.money}}<template v-if="l.money">元红包</template></span>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <div class="trip">
      <van-image :src="require('./assets/title-3.png')"></van-image>
      <p>获得<span>“银鼠”</span>称号以上玩家可以用<span>5个</span>皇家礼炮换取<span>1次</span>菲律宾或者全球任意游</p>
      <button @click="status = 3;liwuName = '菲律宾豪华游'" class="mouse-btn">
        <span>立即加入</span> 
      </button>
      <div class="trip-detail">
        <div v-for="(item,index) in tripData" :key="index">
          <van-image :src="item.img"></van-image>
          <!-- <p>{{item.text}}</p> -->
        </div>
      </div>
    </div>
    <div class="lipin">
      <van-image :src="require('./assets/title-4.png')"></van-image>
      <div class="trip-detail">
        <div v-for="(item,index) in lipinData" :key="index">
          <van-image :src="item.img"></van-image>
          <!-- <p>{{item.text}}</p> -->
        </div>
      </div>
    </div>
    <div class="pop-mouse" v-if="status">
      <div class="mask"></div>
      <div class="redbag">
        <van-image v-if="status == 1 || status == 2" :src="require('./assets/tanchuang-bg.png')"></van-image>
        <div class="content1" v-if="status == 1">
          <van-icon name="cross" @click="close" />
          <p>恭喜您</p>
          <h3>{{rewardData.num}}<span>元</span></h3>
          <p>新春红包</p>
        </div>
        <div class="content2" v-if="status == 2">
          <van-icon class="cross2" name="cross" @click="close" />
          <p class="p2">恭喜您</p>
          <p>{{rewardType[rewardData.type]}}</p>
          <van-image class="liwu" :src="require(`./assets/type-${rewardData.type}.png`)"></van-image>
          <van-image class="btn" :src="require('./assets/lingqu.png')" @click="status = 3;liwuName = rewardType[rewardData.type],liwuId= rewardData.id"></van-image>
        </div>
        <div class="content3" v-if="status == 3">
          <div class="form-header">
            <p>礼物派送</p>
            <van-image :src="require('./assets/zhuanshi.png')"></van-image>
            <div class="close" @click="close">
              <van-icon class="cross2" name="cross" />
            </div>
          </div>
          <div class="form-body">
            <div>
              <label>礼品名称</label>
              <input disabled v-model="liwuName" type="text">
            </div>
            <div>
              <label>姓名</label>
              <input v-model="form.username" type="text">
            </div>
            <div>
              <label>手机号码</label>
              <input v-model="form.mobile" type="text">
            </div>
            <div class="province" @click="showCityPicker = true">
              <label>省份</label>
              <div>
                <input v-model="form.province" disabled type="text">
                <van-icon name="arrow-down" />
              </div>
              <div>
                <input v-model="form.city" disabled type="text">
                <van-icon name="arrow-down" />
              </div>
            </div>
            <div>
              <label></label>
              <!-- <textarea class="textarea-input" placeholder="请输入详细地址" type="textarea"> -->
              <textarea v-model="form.address" placeholder="请输入详细地址" row="3" col="4"></textarea>
            </div>
            <p>奖励说明:成功申请活动后将在10天内送达礼品</p>
          </div>
          <div class="form-footer">
            <van-button class="cancel" @click="close">取消</van-button>
            <van-button :loading="loading" class="confirm" @click="confirm">提交领取申请</van-button>
          </div>
        </div>
        <div class="content3 content4" v-if="status == 4">
          <div class="form-header">
            <p>我的礼品</p>
            <van-image :src="require('./assets/zhuanshi.png')"></van-image>
            <div class="close" @click="close">
              <van-icon class="cross2" name="cross" />
            </div>
          </div>
          <div class="form-body">
            <van-tabs v-model="active" @click="changeTab">
              <van-tab title="已获得现金"></van-tab>
              <van-tab title="已获得礼品"></van-tab>
            </van-tabs>
            <div>
              <template v-if="liwuData.length">
                <div class="header">
                  <div>获得时间</div>
                  <div>{{active == 0?'获得现金':'获得礼品'}}</div>
                  <div>{{active == 0?'领取类型':'领取状态'}}</div>
                </div>
                <div class="body" v-for="(item, index) in liwuData[page-1]" :key="index">
                  <div>{{item.created_at}}</div>
                  <div>{{active == 0 ? item.num : rewardType[item.type]}}</div>
                  <div>
                    <template v-if="active == 0">
                      {{cateType[item.cate]}}
                    </template>
                    <template v-else>
                      <span v-if="item.status == 1" @click="status = 3;liwuName = rewardType[item.type],liwuId = item.id" style="color:#cc0000">申请领取</span>
                      <span v-else style="color:#878787">已领取</span>
                    </template>
                    <!-- {{active == 0?cateType[item.cate]:item.status == 1?'待领取':'已领取'}} -->
                  </div>
                </div>
              </template>
              <template v-else>
                <p>暂无数据</p>
              </template>
              
            </div>
          </div>
          <div class="form-footer">
            <span @click="getPageData(1)">首页</span>
            <span @click="getPageData('up')">上一页</span>
            <span>{{page}}/{{total}}</span>
            <span @click="getPageData('down')">下一页</span>
            <span @click="getPageData(total)">尾页</span>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="showCityPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @change="onCityPickerChange"
        @cancel="showCityPicker = false"
        @confirm="onCityPickerConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import areaList from '@/utils/area'
import { getWinGiftList, getWinMoneyList, getAvailableNum, getLevelStatus, getAward, getMyGifts, joinNewYearActivity } from "@/api/activity";

export default {
  components: {
    Lheader
  },
  data() {
    return {
      fireType:[
        {
          name:'爆竹',
          img:require('./assets/baozu.png'),
          text:'3千有效投注即可放爆竹！<br>爆出各实体礼物和丰厚新年红包！'
        },
        {
          name:'烟花',
          img:require('./assets/firework.png'),
          text:'3万有效投注即可放烟花！<br>巨额红包和超多豪华礼品！'
        },
        {
          name:'皇家礼炮',
          img:require('./assets/lipao.png'),
          text:'“铜鼠”称号以上可额外送皇家礼炮<br>LV,GUCCI,万元红包，本烟花非彼烟花'
        }
      ],
      mouseType:[
        {
          text:'10次炮竹或1次烟花'
        },
        {
          text:'100次炮竹或10次烟花'
        },
        {
          text:'1000次炮竹或100次烟花<br>额外获得1个皇家礼炮'
        },
        {
          text:'3千次炮竹或300次烟花<br>额外获得3个皇家礼炮'
        },
        {
          text:'6千次炮竹或600次烟花<br>额外获得6个皇家礼炮'
        },
        {
          text:'1万次炮竹或1千次烟花<br>额外获得10个皇家礼炮'
        }
      ],
      tripData:[
        {
          text:'机票定制',
          img: require('./assets/trip-1.png')
        },
        {
          text:'机场接送',
          img: require('./assets/trip-2.png')
        },
        {
          text:'五星级酒店',
          img: require('./assets/trip-3.png')
        },
        {
          text:'私人助理',
          img: require('./assets/trip-4.png')
        }
      ],
      lipinData:[
        {
          text:'LV-MONOGRAM CLASSIC',
          img: require('./assets/liwu-1.png')
        },
        {
          text:'万元箱包任选',
          img: require('./assets/liwu-2.png')
        },
        {
          text:'万元茅台飞天',
          img: require('./assets/liwu-3.png')
        },
        {
          text:'万元家电任选',
          img: require('./assets/liwu-4.png')
        }
      ],
      liwuData:[
        // {
        //   time:'123123',
        //   liwu: 'liwu',
        //   status: '领取'
        // }
      ],
      status:null,
      showCityPicker: false,
      province: '',
      city: '',
      areaData: [],
      active: 0,
      tabType: 1,
      giftList:[],
      moneyList: [],
      availData: {},
      levelStatus: {},
      swipeData: [],
      form:{
        gift_name:'',
        username:'',
        mobile:'',
        province:'',
        city:'',
        address:''
      },
      rewardData:{
        type:1,
        num:0
      },
      rewardType:{
        1:'红包',
        2:'茅台酒',
        3:'新年转运小红绳',
        4:'鼠年生肖足金小红绳',
        5:'LV-MONOGRAM CLASSIC',
        6:'万元箱包',
        7:'万元家电',
        8:'万元飞天茅台'
      },
      cateType: {
        1: '放爆竹',
        2: '放烟花',
        3: '放礼炮',
        4: '六鼠闹新春'
      },
      myGiftData: [],
      liwuName: '',
      liwuId:'',
      page: 1,
      total: 0,
      loading: false
    }
  },
  created() {
    this.getColumns()
    this.initData()
  },
  methods:{
    initData() {
      Promise.all([
        this.getWinGift(),
        this.getWinMoney(), 
        this.getAvailable(), 
        this.getLevel()])
    },
    getStatus(item) {
      if(item) {
        return '领取红包和礼炮'
      } else {
        return '已领取奖励'
      }
    },
    getColumns() {
      this.areaData = [];
      for (let key in areaList.province_list) {
        let province = areaList.province_list[key];
        this.areaData[province] = [];
        let pCode = String(key).slice(0,2);
        if(key == 110000 || key == 120000 || key == 310000 || key == 500000) {
          for (let key1 in areaList.county_list) {
            if (String(key1).slice(0,2) == pCode) {
              this.areaData[province].push(areaList.county_list[key1]);
            }
          }
        } else {
          for (let key1 in areaList.city_list) {
            if (String(key1).slice(0,2) == pCode) {
              this.areaData[province].push(areaList.city_list[key1]);
            }
          }
        }
      }

      this.columns = [
        {
          values: Object.keys(this.areaData),
          className: 'column1'
        },
        {
          values: this.areaData['北京市'],
          className: 'column2',
          defaultIndex: 0
        }
      ]
    },
    onCityPickerChange(picker, values) {
      picker.setColumnValues(1, this.areaData[values[0]])
    },
    onCityPickerConfirm (data) {
      this.form.province = data[0]
      this.form.city = data[1]
      this.showCityPicker = false
    },
    close() {
      this.status = null
    },
    getReward(val, level) {
      // this.status = val
      const data = {
        cate: val,
        level
      }
      getAward(data).then(res => {
        this.rewardData = res.data.data
        if(res.data.data.type == 1) {
          this.status = 1
        } else {
          this.status = 2
        }
        this.initData()
      })
    },
    setTab(val) {
      this.tabType = val
      if(val == 1) {
        this.swipeData = this.moneyList
      } else {
        this.swipeData = this.giftList
      }
    },
    getWinGift() {
      getWinGiftList().then(res => {
        const giftList = res.data.data.list
        for (var i = 0, len = giftList.length; i < len; i += 5) {
          this.giftList.push(giftList.slice(i, i + 5))
        }
      })
    },
    getWinMoney() {
      getWinMoneyList().then(res => {
        const moneyList = res.data.data.list
        for (var i = 0, len = moneyList.length; i < len; i += 5) {
          this.moneyList.push(moneyList.slice(i, i + 5))
        }
        this.swipeData = this.moneyList
      })
    },
    getAvailable() {
      getAvailableNum().then(res => {
        this.availData = res.data.data
      })
    },
    getLevel() {
      getLevelStatus().then(res => {
        this.levelStatus = res.data.data
      })
    },
    confirm() {
      this.form.gift_name = this.liwuName
      if(this.liwuId) {
        this.form.id = this.liwuId
      }
      if(!this.form.name) {
        this.$toast.fail('用户名不能为空')
        return
      }
      if(!this.form.mobile) {
        this.$toast.fail('手机号不能为空')
        return 
      }
      if(!this.form.province && !this.form.city && !this.form.address) {
        this.$toast.fail('请填写完整地址')
        return 
      }
      this.loading = true
      joinNewYearActivity(this.form).then(res => {
        this.status = null
        this.loading = false
        this.$toast('您的申请已提交成功')
      })
    },
    myReward() {
      this.status = 4
      getMyGifts().then(res => {
        this.myGiftData = res.data.data
        for (var i = 0, len = res.data.data.money.length; i < len; i += 8) {
          this.liwuData.push(res.data.data.money.slice(i, i + 8))
        }
        this.total = this.liwuData.length
        // this.liwuData = res.data.data.money
      })
    },
    changeTab(i) {
      this.active = i
      this.page = 1
      this.liwuData = []
      if(i == 1) {
        for (var i = 0, len = this.myGiftData.entity.length; i < len; i += 8) {
          this.liwuData.push(this.myGiftData.entity.slice(i, i + 8))
        }
        this.total = this.liwuData.length
      } else {
        for (var i = 0, len = this.myGiftData.money.length; i < len; i += 8) {
          this.liwuData.push(this.myGiftData.money.slice(i, i + 8))
        }
        this.total = this.liwuData.length
      }
    },
    getPageData(val) {
      if (val === "up") {
        if(this.page == 1) {
          return
        }
        this.page--
      } else if(val === 'down') {
        if (this.page == this.total) {
          return 
        }
        this.page++
      } else {
        this.page = val
      }
    }
  }
};
</script>

<style src="./style.less" lang="less" scoped></style>