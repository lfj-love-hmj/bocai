<template>
  <div id="welfare">
    <lheader v-if="isShowHeader" :title="title" :goback="true"></lheader>
    <div class="content" :class="{ 'no-header': !isShowHeader }">
      <div>
        <div :class="['top',{'top-wanqu':$projectname === 'wanqu','top-other': $projectname !== 'wanqu'}]"></div>
        <div class="center">
          <!-- 星级晋级机制 -->
          <div class="Witty" v-if="note.length > 0">
            <img src="./assets/title.png" alt />
            <div class="list">
              <div>
                <p>四品官员</p>
                <p>投注{{ note[0].money.valid_bet }}W+</p>
                <p>月存{{ note[0].money.deposite_money }}W+</p>
              </div>
              <img
                src="./assets/arrow-right.png"
                alt
              />
              <div>
                <p>三品官员</p>
                <P>投注{{ note[1].money.valid_bet }}W+</P>
                <P>月存{{ note[1].money.deposite_money }}W+</P>
              </div>
              <img
                src="./assets/arrow-right.png"
                alt
              />
              <div>
                <p>二品官员</p>
                <P>投注{{ note[2].money.valid_bet }}W+</P>
                <P>月存{{ note[2].money.deposite_money }}W+</P>
              </div>
            </div>
            <div class="list">
              <img
                src="./assets/arrow-right.png"
                alt
              />
              <div>
                <p>一品官员</p>
                <P>投注{{ note[3].money.valid_bet }}W+</P>
                <P>月存{{ note[3].money.deposite_money }}W+</P>
              </div>
              <img
                src="./assets/arrow-right.png"
                alt
              />
              <div>
                <p>乾隆大帝</p>
                <P>投注{{ note[4].money.valid_bet }}W+</P>
                <P>月存{{ note[4].money.deposite_money }}W+</P>
              </div>
            </div>
          </div>
          <!-- 星级特权福利 -->
          <div class="privilege">
            <img src="./assets/title copy.png" alt />
            <div class="privilege-table">
              <table>
                <tr>
                  <th>品职</th>
                  <th>酒店</th>
                  <th>美女</th>
                  <th>年龄</th>
                  <th>服务周期</th>
                </tr>
                <tr v-for="(item, index) in list" :key="index">
                  <td>{{ item.starClass }}</td>
                  <td>{{ item.hotel }}</td>
                  <td>{{ item.beauty }}</td>
                  <td>{{ item.age }}</td>
                  <td>{{ item.cycle }}</td>
                </tr>
              </table>

              <div class="text">
                <p>*温馨提示 ：</p>
                <p>
                  ①
                  会员提前联系客服专员，选取美女服务，只针对有机场直达的城市，AA集团承担交通服务费用；
                </p>
                <p>
                  ②
                  相关隐私请参考当地法律，AA集团不干涉，为避免文字差异,AA集团保留最终解释权
                </p>
              </div>
            </div>
          </div>
          <!-- 活动规则 -->
          <div class="rulesActivity">
            <img src="./assets/Group 1.png" alt />
            <div class="text">
              <p>
                <span>1</span>
                <span>本活动{{$config[$projectname].secName}}所有二星及以上会员均可享受；</span>
              </p>
              <p>
                <span>2</span>
                <span>会员需要提前联系客服/专员，选取美女服务；</span>
              </p>
              <p>
                <span>3</span>
                <span>只针对有机场直达的城市，AA集团承担交通服务费用;</span>
              </p>
              <p>
                <span>4</span>
                <span
                  >本存款金额只限线下存款(银行卡转账)，微信，支付宝，在线支付等不计算在内；</span
                >
              </p>
              <p>
                <span>5</span>
                <span>本活动数据按月累计，转月之后自动清零;</span>
              </p>
              <p>
                <span>6</span>
                <span
                  >本优惠活动只限娱乐性质的会员参加，如发现用户拥有超过一个账户、包括同一姓名、同一姓名、统一邮箱，同一/相似IP地址，同一住址，
                  同一银行卡，同一电脑，禁止多开窗口进行投注，软件投注和套免费游戏等其他任何不正常投注行为，已经发现我们将保留冻结账户以及没收所有余额的权利;</span
                >
              </p>
              <p>
                <span>7</span>
                <span>关于本活动{{$config[$projectname].secName}}拥有最终解释权。</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import { specialdetail } from "@/api/activity";
export default {
  data() {
    return {
      title: "美女派送",
      merchant_no: process.env.VUE_APP_MERCHANT_NO, //商户号
      id: 0, //活动id
      note: [], //规则
      isShowHeader: true,
      list: [
        {
          starClass: "四品官员",
          hotel: "三星酒店",
          beauty: "模特",
          age: "18-25",
          cycle: "1次/6个月"
        },
        {
          starClass: "三品官员",
          hotel: "四星酒店",
          beauty: "模特",
          age: "18-25",
          cycle: "1次/3个月"
        },
        {
          starClass: "二品官员",
          hotel: "五星酒店",
          beauty: "模特,空姐,学生",
          age: "18-25",
          cycle: "1次/1个月"
        },
        {
          starClass: "一品官员",
          hotel: "五星豪华",
          beauty: "二线明星",
          age: "18-25",
          cycle: "1次/1个月"
        },
        {
          starClass: "乾隆大帝",
          hotel: "顶级豪华",
          beauty: "二线明星",
          age: "18-25",
          cycle: "2次/1个月"
        }
      ]
    };
  },
  components: {
    Lheader
  },
  methods: {
    //获取优惠详情
    getDetail() {
      specialdetail({
        merchant_no: this.merchant_no,
        id: this.id
      }).then(res => {
        this.note = res.data.data.condition_setting;
      });
    }
  },
  created() {
    if (this.$route.query.token) {
      localStorage.setItem("token", this.$route.query.token);
    }
    if (this.$route.query.source) {
      this.isShowHeader = false;
    }
    this.id = this.$route.query.id;
    this.getDetail();
  }
};
</script>

<style src="./style.less" lang="less" scoped></style>
