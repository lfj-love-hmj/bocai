<template>
  <div class="container">
    <div class="pop-head">
      <h2>设置密保问题</h2>
    </div>
    <div class="pop-body">
      <div class="input-cells">
        <div class="aagames-form">
          <p class="left">密保问题</p>
          <div class="select">
            <img class="xiala" style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/xiala@2x.png')" alt />
            <input
              type="text"
              v-model="problem"
              readonly
              @click="show = true"
              class="centre"
              placeholder="请选择密保问题"
            />
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="input-cells">
        <div class="aagames-form">
          <p class="left">密保答案</p>
          <div class="input">
            <input type="text" v-model="setAnswer.answer" placeholder="请输入密保答案" />
          </div>
        </div>
      </div>
      <div class="input-cells">
        <div class="aagames-form">
          <p class="left">确认密保答案</p>
          <div class="input">
            <input type="text" v-model="setAnswer.re_answer" placeholder="请再次输入密保答案" />
          </div>
        </div>
      </div>
      <div class="input-cells">
        <div class="aagames-button-box">
          <button class="aagames-button" type="button" @click="onSubmit">确认提交</button>
        </div>
      </div>
    </div>

    <van-popup get-container="#app" v-model="show" position="bottom">
      <van-picker
        show-toolbar
        value-key="name"
        @confirm="onConfirm"
        @cancel="onCancel"
        :columns="columns"
      />
    </van-popup>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import { passquestion, setpassquestion } from "@/api/personalData";
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);

export default {
  name: "discountCore",
  data() {
    return {
      problem: "",
      title: "设置密保问题",
      columns: [],
      show: false,
      setAnswer: {
        question_id: "",
        answer: "",
        re_answer: ""
      }
    };
  },
  methods: {
    onCancel(value, index) {
      this.show = false;
    },
    onConfirm(value) {
      this.problem = value.name;
      this.setAnswer.question_id = value.id;
      this.show = false;
    },
    onSubmit() {
      if (!this.setAnswer.answer) {
        this.$toast.fail("答案不能为空");
        return false;
      }

      if (this.setAnswer.answer !== this.setAnswer.re_answer) {
        this.$toast.fail("2次输入答案不同");
        return false;
      }

      setpassquestion(this.setAnswer).then(res => {
        let that = this;
        if (res.data.code === 0) {
          Toast({
            message: "密保设置成功",
            onClose() {
              that.$store.dispatch("users/getUserInfo");
              // that.$emit('closeStatus',true)
              that.$store.dispatch("global/setPopShow", { status: false });
            }
          });
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    }
  },
  created() {
    passquestion().then(res => {
      if (res.data.code === 0) {
        this.columns = res.data.data;
        this.problem = res.data.data[0].name;
        this.setAnswer.question_id = res.data.data[0].id;
      } else {
        this.$toast.fail(res.data.msg);
      }
    });
  },
  components: {
    Lheader
  }
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  .aagames-button-box {
    padding:0;
    button {
      width: 100%;
    }
  }
  .aagames-form {
    padding:0;
    .input {
      > input {
        text-align: left;
      }
    }
    .select {
      .xiala {
        width: 40px;
        top: 50%;
        margin-top: -20px;
        position: absolute;
        right: 10px;
      }
    }
  }
}
</style>
