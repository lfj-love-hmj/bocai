<template>
  <div class="accountSafe-page">
    <!-- <lheader
      :title="title"
      path="111"
      :fanhui="true"
      :goback="false"
      @goback="goback"></lheader> -->
    <van-nav-bar
      class="m-header"
      :title="title"
      left-arrow
      :fixed="true"
      @click-left="goback"
      @click-right="$openKefu"
    >
      <template #right>
        <img :src="$imgs['otherIcon/nav_kefu2@2x']" class="kf-icon" alt="">
      </template>
    </van-nav-bar>
    <div class="reset">
      <div class="aagames-select-box aagames-select-tit">
        <div class="personal-title">个人资料</div>
      </div>
      <div class="aagames-select-box">
        <div class="select">
          <img :src="$imgs['agent/agent_icon10']" />
          <span>昵称</span>
          <input
            type="text"
            placeholder="您未填写昵称，立即填写"
            @focus="isShowSave = true"
            v-model="list.nick_name"
          />
        </div>
      </div>
      <div class="aagames-select-box">
        <div class="select">
          <img :src="$imgs['agent/agent_icon10']" />
          <span>真实姓名</span>
          <input
            type="text"
            :disabled="list.realname && isName "
            style="background: none"
            placeholder="请输入与银行卡一致的真实姓名"
            @focus="isShowSave = true"
            v-model="list.realname"
          />
        </div>
      </div>
      <div class="aagames-select-box">
        <div class="select">
          <img :src="$imgs['agent/agent_icon18']" />
          <span>出生日期</span>
          <input
            type="text"
            placeholder="请输入出生日期"
            @focus="showDate = true"
            readonly
            v-model="list.birthday"
          />
        </div>
      </div>
      <div class="aagames-select-box">
        <div class="select">
          <img :src="$imgs['agent/agent_icon12']" />
          <span>微信号</span>
          <input
            type="text"
            placeholder="您未填写微信，立即填写"
            @focus="isShowSave = true"
            v-model="list.wechat"
          />
        </div>
      </div>
      <div class="aagames-select-box">
        <div class="select">
          <img :src="$imgs['agent/agent_icon22']" />
          <span>QQ 号</span>
          <input type="text" placeholder="您未填写QQ，立即填写" @focus="isShowSave = true" v-model="list.qq" />
        </div>
      </div>
      <div class="aagames-select-box aagames-select-tit">
        <div class="personal-title">账户绑定</div>
      </div>
      <div class="aagames-select-box">
        <div class="select">
          <img :src="$imgs['agent/agent_icon11']" />
          <span>手机号</span>
          <input
            type="text"
            placeholder="立即绑定"
            readonly
            @click="setContact(1)"
            v-model="list.mobile"
          />
          <i class="el-icon-arrow-right" :style="{backgroundImage:$bImgs['otherIcon/arrow-right']}"></i>
        </div>
      </div>
      <div class="aagames-select-box">
        <div class="select">
          <img :src="$imgs['agent/agent_icon23']" />
          <span>邮箱地址</span>
          <input
            type="text"
            placeholder="立即绑定"
            readonly
            @click="setContact(2)"
            v-model="list.email"
          />
          <i class="el-icon-arrow-right" :style="{backgroundImage:$bImgs['otherIcon/arrow-right']}"></i>
        </div>
      </div>
      <div class="aagames-select-box aagames-select-tit">
        <div class="personal-title">安全设置</div>
      </div>
      <div class="aagames-select-box">
        <div class="select">
          <img :src="$imgs['agent/agent_icon19']" />
          <span>登录密码</span>
          <input type="text" @click="open(1)" readonly :class="getSafe" :value="levelText" />
          <i class="el-icon-arrow-right" :style="{backgroundImage:$bImgs['otherIcon/arrow-right']}"></i>
        </div>
      </div>
      <div class="aagames-select-box" @click="open(2)">
        <div class="select">
          <img :src="$imgs['agent/agent_icon20']" />
          <span>资金密码</span>
          <span
            :class="['input-tips',{'red':password == 1}]"
          >{{password == 1? '您未设置资金密码': '已设置资金密码'}}</span>
          <i class="el-icon-arrow-right" :style="{backgroundImage:$bImgs['otherIcon/arrow-right']}"></i>
        </div>
      </div>
      <div class="aagames-select-box mb40" @click="tosetQues">
        <div class="select">
          <img :src="$imgs['agent/agent_icon21']" />
          <span>密保问题</span>
          <span
            :class="['input-tips',{'red':answer === 1}]"
          >{{answer === 1 ? '您未设置密保问题': '已设置密保问题'}}</span>
          <i class="el-icon-arrow-right" :style="{backgroundImage:$bImgs['otherIcon/arrow-right']}"></i>
        </div>
      </div>
      <div v-show="isShowSave" class="aagames-button-box">
        <button class="aagames-button" type="button" @click="submit">保存</button>
      </div>
    </div>
    <van-popup v-model="showDate" position="bottom" get-container="#app">
      <van-datetime-picker
        type="date"
        title="请选择出生日期"
        @confirm="onConfirmDate"
        @cancel="onCancelDate"
        :min-date="minDate"
        v-model="currentDate"
      />
    </van-popup>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";

import { accountsafe, updateprofile } from "@/api/personalData";
import { member } from "@/api/memberCenter";
import { mapState, mapActions } from "vuex";

export default {
  name: "Personal",
  components: {
    Lheader
  },

  data() {
    return {
      display: false,
      drawerWidth: "100%",
      emailDisplay: false,
      telDisplay: false,
      passDisplay: false,
      loginDisplay: false,
      proDisplay: false,
      idDisplay: false,
      list: {},
      data: {
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        access_token: window.localStorage.token
      },
      isName: false,
      title: "账号安全",
      levelText: "",
      level: "",
      answer: "",
      password: "",
      getColor: "centre",
      isFirstSetPassword: 1,
      uid: "",
      accountShow: false,
      isShowSave: false,
      showDate: false,
      minDate: new Date(1970, 0, 1),
      currentDate: new Date(),
    };
  },
  computed: {
    getSafe() {
      if (this.getColor == "low") {
        return "red";
      } else if (this.getColor == "centre") {
        return "yellow";
      } else if (this.getColor == "high") {
        return "green";
      }
    },
    ...mapState("users", ["userInfo"])
  },
  watch: {
    userInfo: {
      handler(val) {
        this.list = Object.assign({}, val);
        if (this.list.realname) {
          this.isName = true;
        }
        this.uid = val.id;
        this.level = val.password_level;
        this.answer = val.is_pass_answer;
        this.password = val.is_pay_password;
        this.isFirstSetPassword = val.is_first_set_pass === 1;
        if (!this.level && this.isFirstSetPassword) {
          this.levelText = "设置密码";
          this.getColor = "normal";
        } else {
          if (this.level === 1) {
            this.levelText = "强度为低";
            this.getColor = "low";
          } else if (this.level === 2) {
            this.levelText = "强度为中";
            this.getColor = "centre";
          } else {
            this.levelText = "强度为强";
            this.getColor = "high";
          }
        }
      },
      deep: true
    }
  },
  created() {
    this.list = Object.assign({}, this.userInfo);
    if (this.list.realname) {
      this.isName = true;
    }
    this.uid = this.userInfo.id;
    this.level = this.userInfo.password_level;
    this.answer = this.userInfo.is_pass_answer;
    this.password = this.userInfo.is_pay_password;
    this.isFirstSetPassword = this.userInfo.is_first_set_pass === 1;
    if (!this.level && this.isFirstSetPassword) {
      this.levelText = "设置密码";
      this.getColor = "normal";
    } else {
      if (this.level === 1) {
        this.levelText = "强度为低";
        this.getColor = "low";
      } else if (this.level === 2) {
        this.levelText = "强度为中";
        this.getColor = "centre";
      } else {
        this.levelText = "强度为强";
        this.getColor = "high";
      }
    }
    // "id": 1,
    // is_first_set_pass: 1, // 是否是初次设置 1是 2不是
    // "password_level": 1,//密码安全等级1=低，2=中，3=高
    // "is_pass_answer": 1,//是否设置密码问题1=否，2=是
    // "is_pay_password": 1 //是否设置资金密码1=否，2=是
    // "is_money_password": 1 //是否设置理财密码1=否，2=是
    // accountsafe().then(res => {
    //   if (res.data.code === 0) {
    //     const { data } = res.data;
    //     this.uid = data.id;
    //     this.level = data.password_level;
    //     this.answer = data.is_pass_answer;
    //     this.password = data.is_pay_password;
    //     this.isFirstSetPassword = data.is_first_set_pass === 1;
    //     if (!this.level && this.isFirstSetPassword) {
    //       this.levelText = "设置密码";
    //       this.getColor = "normal";
    //     } else {
    //       if (this.level === 1) {
    //         this.levelText = "强度为低";
    //         this.getColor = "low";
    //       } else if (this.level === 2) {
    //         this.levelText = "强度为中";
    //         this.getColor = "centre";
    //       } else {
    //         this.levelText = "强度为强";
    //         this.getColor = "high";
    //       }
    //     }
    //     console.log('123',this.password)
    //   }
    // });
    // this.initStatus(true)
  },
  methods: {
    ...mapActions("global", ["setPopShow"]),
    // closeStatus() {
    //   this.accountShow = false
    // },
    // initStatus(first = false) {
    //   if (first) {
    //     const action = this.$route.query.action || ''
    //     if (action === 'mobile') {
    //       this.telDisplay = true
    //       this.accountShow = true
    //     } else if (action === 'email') {
    //       this.emailDisplay = true
    //       this.accountShow = true
    //     } else if (action === 'fund_password') {
    //       this.passDisplay = true
    //       this.accountShow = true
    //     } else if (action === 'password') {
    //       this.loginDisplay = true
    //       this.accountShow = true
    //     } else if (action === 'profile') {
    //       this.proDisplay = true
    //       this.accountShow = true
    //     }
    //   } else {
    //     this.telDisplay = false
    //     this.emailDisplay = false
    //     this.passDisplay = false
    //     this.loginDisplay = false
    //     this.proDisplay = false
    //     this.idDisplay = false
    //     this.isShowSave = false
    //   }
    // },
    tosetQues(){
      console.log(this.answer)
      if (this.answer == 2) {
        this.$router.push({path:'/verifyIdentity'})
      } else {
        // this.proDisplay = rue;
        this.accountShow = true;
        this.setPopShow({ proDisplay: true, status: true });
      }
    },
    submit() {
      console.log(this.list);
      this.isShowSave = true;
      if (!this.list.realname) {
        this.$toast.fail("请输入真实姓名");
        return false;
      }
      if (!this.list.nick_name) {
        this.$toast.fail("请输入昵称");
        return false;
      }
      updateprofile(this.list).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          this.$toast("保存成功");
          this.$store.dispatch("users/getUserInfo");
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    setContact(val) {
      // const ls = window.localStorage;
      // this.accountShow = true
      // this.initStatus()
      if (val == 1) {
        // this.telDisplay = true;
        this.setPopShow({ telDisplay: true, status: true });
      } else if (val == 2) {
        // this.emailDisplay = true;
        this.setPopShow({ emailDisplay: true, status: true });
      }
      // console.log(this.telDisplay,this.emailDisplay,this.passDisplay)
    },
    open(val) {
      // this.initStatus();
      this.accountShow = true;
      if (val == 1) {
        // this.loginDisplay = true;
        this.setPopShow({ loginDisplay: true, status: true });
      } else if (val == 2) {
        // this.passDisplay = true;
        this.setPopShow({ passDisplay: true, status: true });
      } else {
        if (this.answer == 2) {
          // this.idDisplay = true;
          this.setPopShow({ idDisplay: true, status: true });
          // this.$nextTick(()=> {
          //   console.log(this.$refs.verifyIdentity)
          //   this.$refs.verifyIdentity.checkUserInfo()
          // })
        } else {
          // this.proDisplay = true;
          this.setPopShow({ proDisplay: true, status: true });
        }
      }
    },
    goback() {
      this.$router.push("memberCenter");
    },
    onConfirmDate(value) {
      let date = value;
      const seperator1 = "-";
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      this.list.birthday = date.getFullYear() + seperator1 + month + seperator1 + strDate
      console.log(this.list.birthday)
      this.showDate = false
    },
    onCancelDate() {
      this.showDate = false;
    }
  }
};
</script>

<style scoped lang="less">
@import '~@assets/styles/personalData/index.less';
/deep/.aagames-form .input::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0 !important;
  background-color: none !important;
}

.accountSafe-page {
  color: #999999;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #F5F6FA;
  padding-top: 88px;

  .red {
    color: #ff6666;
  }

  .green {
    color: green;
  }

  .yellow {
    color: yellow;
  }

  .aagames-select-box {
    background: @bg-color;
    &.aagames-select-tit{
      background-color: #F5F6FA;
    }

    .personal-title {
      color: #cccccc;
      font-size: 0.43rem;
      height: 1.17333rem;
      line-height: 1.17333rem;
    }

    .select {
      img {
        width: 44px;
        margin-right: 0.2rem;
      }
      i{
        width: 44px;
        height: 44px;
        background-size: 100% auto;
      }
    }
  }

  .aagames-select-box .select::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.02666rem;
    background-color: #3f3f3f;
  }
}
/deep/ .van-popup--bottom{
  bottom: 50%;
}



</style>
