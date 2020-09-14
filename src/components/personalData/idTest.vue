<template>
  <div class="drawer">
		<div class="pop-head">
			<h2>绑定手机号</h2>
		</div>
		<p v-if="$route.name == 'memberCenter'">为了保障你的资金安全，请绑定手机号</p>
		<p v-else>为了保障您的账号安全，请输入正确手机号</p>
		<div class="input-cells">
			<div class="aagames-form">
				<div class="input">
          <phoneArea v-model="areaCode">
            <i class="areaNum">
              &nbsp;+{{ areaCode }}
              <img class="xiala" :src="require('@assets/img3_0/otherIcon/xiala@2x.png')" alt />
            </i>
          </phoneArea>
          <input type="text" v-model="phone" placeholder="请填写您的手机号码" />
				</div>
			</div>
		</div>
		<div class="input-cells">
			<gcode
				:bind="true"
				:areaCode="areaCode"
				:account="phone"
				@getCode="getCodeC"
				@myCode="myCodeC"
			></gcode>
		</div>
		<div class="input-cells">
			<div class="aagames-button-box">
				<button class="aagames-button aagames-button-default" type="button" @click="closeByButton">暂不绑定</button>
				<button class="aagames-button" type="button" @click="send">确定</button>
			</div>
		</div>
		<van-popup v-model="show" position="bottom">
			<van-picker
				show-toolbar
				@confirm="onConfirm"
				value-key="text"
				@cancel="onCancel"
				:columns="columns"
			/>
		</van-popup>
  </div>
</template>

<script>
import Gcode from "@/components/g-code";
import { isnum } from "@/utils/index";
import { Toast } from "vant";
import { bindmobile } from "@/api/personalData";
import { phonearea } from "@/api/login";
export default {
  props:['userInfo'],
  data() {
    return {
      phone: this.userInfo.mobile,
      getCode: "",
      code: "",
      areaCode: 86,
      columns: [],
			show: false
    };
  },
  created() {
    phonearea().then(res => {
      if (res.data.code === 0) {
        this.columns = res.data.data;
      }
    });
  },
  components: {
    Gcode
  },
  mounted() {},
  methods: {
    closeByButton() {
      if(this.$route.name == 'memberCenter') {
        // this.$router.push('/withdraw')
        this.$store.dispatch('global/setFlow',true)
      }
      this.$store.dispatch('global/setPopShow',{status:false})
    },
    getCodeC(val) {
      this.getCode = val;
    },
    myCodeC(val) {
      this.code = val;
    },
    send() {
      if (!isnum(this.phone)) {
        Toast.fail("手机格式有误");
        return false;
      }
      if (!this.code) {
        Toast.fail("验证码不能为空");
        return false;
      }
      bindmobile({
        mobile: this.phone,
        code: this.code,
        phone_area_code: this.areaCode,
        access_token: window.localStorage.token
      }).then(res => {
        if (res.data.code === 0) {
          const self = this;
          Toast({
            message: "绑定成功",
            onClose() {
              self.$store.dispatch('users/getUserInfo')
              self.$store.dispatch('global/setPopShow',{status:false})
              if(self.$route.name == 'memberCenter') {
                self.$router.push('/withdraw')
              }
            }
          });
        } else {
          Toast(res.data.msg);
        }
      });
    },
    onConfirm(val) {
      this.show = false;
      this.areaCode = val;
    },
    onCancel(val) {
      this.show = false;
    }
  }
};
</script>

<style lang="less" scoped>
.drawer {
  .input-cells{
    .aagames-button{
      width:320px;
    }
  }
}
</style>
