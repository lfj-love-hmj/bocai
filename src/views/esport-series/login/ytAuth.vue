<template>
  <div>
    <lheader :title="title"></lheader>
    <div class="container">
      <div class="main">
        <div class="auth-container">
          <div>
            <img class="wanqu" :src="$imgs['auth/wanqu_logo']" alt />
            <p>{{$config[$projectname].secName}}</p>
          </div>
          <div>
            <img class="arrow" :src="$imgs['auth/right_arrow']" alt />
          </div>
          <div>
            <img class="youtiao" :src="$imgs['auth/youtiao_logo']" alt />
            <p>油条平台</p>
          </div>
        </div>
        <div class="auth-bottom">
          <h4>同意将{{$config[$projectname].project}}账户的以下信息授权给油条</h4>
          <ul>
            <li>
              获取你的登录状态
              <img :src="$imgs['auth/checked']" alt />
            </li>
            <li>
              获取你的公开信息（昵称、头像）
              <img :src="$imgs['auth/checked']" alt />
            </li>
          </ul>
        </div>
        <div class="aagames-button-box">
          <van-button
            class="aagames-button"
            :loading="submiting"
            @click="submit"
            loading-text="授权中..."
          >确认授权</van-button>
        </div>
      </div>
    </div>
    <a href id="backurl" target="_blank"></a>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import { authlogin } from "@/api/login";
import {mapState} from 'vuex'

export default {
  components: {
    Lheader
  },
  data() {
    return {
      title: "油条授权登录",
      submiting: false,
      isAuth: false
    };
  },
  computed:{
    ...mapState('users',['token'])
  },
  methods: {
    submit() {
      // var newOpenWindow = window.open("about:blank");
      const params = {
        auth_access_token: localStorage.getItem("authToken"),
      }
      authlogin(params).then(res => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("isAuth");
        setTimeout(()=> {
          window.location.href= "https://m.youtiaoaa.me/auth?at=" + res.data.data.access_token;
        },300)
      })
      // axios({
      //   method: "post",
      //   url: "https://userweb.wan66666.com/authlogin",
      //   params: {
      //     auth_access_token: localStorage.getItem("authToken"),
      //     access_token: window.localStorage.token
      //   }
      // }).then(res => {
      //   // newOpenWindow.location = "https://m.youtiaoaa.me/auth?at=" + res.data.data.access_token;
      //   localStorage.removeItem("authToken");
      //   localStorage.removeItem("isAuth");
      //   setTimeout(()=> {
      //     window.location.href= "https://m.youtiaoaa.me/auth?at=" + res.data.data.access_token;
      //   },300)
      //   // this.$router.push('/home');
      // });
    },
    handlerAuth() {
      console.log(this.token)
      if (this.$route.query.access_token) {
        localStorage.setItem("authToken", this.$route.query.access_token);
      }
      if (this.token) {
        this.isAuth = true;
      } else if (!this.token) {
        localStorage.setItem("isAuth", true);
        this.$router.push("/login");
      }
    }
  },
  created() {
    this.handlerAuth();
  }
};
</script>

<style lang="less" scoped>
.aagames-button-box {
  flex: 1;
  width: 90%;
  padding: 0;
  margin: 0 auto;
  margin-top: 80px;
  button {
    height: 1.14666rem;
    width: 100%;
    display: block;
    .van-button__text {
      display: block;
      line-height: 1.14666rem;
    }
  }
}
.el-main {
  padding: 0;
}

.auth-container {
  background: #fff;
  display: flex;
  margin-top: 88px;
  padding-top: 51px;
  padding-bottom: 45px;
  div {
    flex: 1;
    text-align: center;
    position: relative;
    &:nth-child(1) {
      text-align: right;
      p {
        margin-right: 10px;
      }
    }
    &:nth-child(3) {
      text-align: left;
      p {
        margin-left: 10px;
      }
    }
    p {
      margin-top: 12px;
      font-size: 28px;
    }
  }
  .wanqu,
  .youtiao {
    width: 134px;
  }
  .arrow {
    width: 96px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -11px;
    margin-left: -48px;
  }
}
.auth-bottom {
  padding: 0 38px;
  h4 {
    color:#fff;
    margin-top: 59px;
    font-size: 34px;
  }
  ul {
    li {
      font-size: 30px;
      color: #888;
      line-height: 80px;
      position: relative;
      margin-left: 20px;
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #888;
        top: 50%;
        margin-top: -4px;
        left: -20px;
      }
      img {
        width: 28px;
        float: right;
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -14px;
      }
    }
  }
}
</style>
