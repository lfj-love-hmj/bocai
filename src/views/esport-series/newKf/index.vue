
<template>
  <div class="kfPage" :style="{backgroundImage:$bImgs['common/blue-headbg@2x']}">
    <template v-if="$projectname!='10033'">
      <p class="title">客服</p>
      <template v-if="$projectname==='10029'">
        <div class="kf-wel" :style="{backgroundImage:$bImgs['newKf/service_bg2@2x']}">
          <div class="kf-wel-con">
            <img :src="$imgs['newKf/img']" alt="">
            <p><span>Hi，尊敬的用户 </span><span>欢迎来到客服中心</span></p>
          </div>
        </div>
        <div class="zbkf-item">
          <div class="zbkf-item-child" :style="{backgroundImage:$bImgs['newKf/bet_service_top_bg3@2x']}" @click="callService">
            <div class="">
              <p><img :src="$imgs['newKf/servic_icon_servic@2x']" alt=""><span>主线客服</span></p>
              <p>Main Customer Support</p>
              <p>7*24小时专线服务 贴心至上</p>
            </div>
            <van-icon name="arrow" />
          </div>
          <div class="zbkf-item-child" :style="{backgroundImage:$bImgs['newKf/bet_service_top_bg4@2x']}" @click="callbackCk">
            <div class="">
              <p><img :src="$imgs['newKf/servic_icon_call@2x']" alt=""><span>请求回电</span></p>
              <p>Reserve Customer Support</p>
              <p>7*24小时专线服务 贴心至上</p>
            </div>
            <van-icon name="arrow" />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="kf-wel" :style="{backgroundImage:$bImgs['newKf/service_bg2@2x']}">
          <div class="kf-wel-con">
            <img :src="$imgs['newKf/img']" alt="">
            <p><span>欢迎来到客服中心</span><span>24小时随时为您服务</span></p>
          </div>

        </div>
        <div class="kf-pad">
          <div class="kf-btn">
            <van-button type="info" @click="callService"><img :src="$imgs['newKf/servic_icon_servic@2x']" alt=""><span>在线客服</span></van-button>
            <van-button @click="callbackCk"><img :src="$imgs['newKf/servic_icon_call@2x']" alt=""><span>请求回电</span></van-button>
          </div>
          <div class="kf-slide">
            <h2>猜你想问</h2>
            <van-collapse v-model="activeNames">
              <van-collapse-item name="1">
                <template #title>
                  <div class="kf-slide-tit"><img :src="$imgs['newKf/service_iocn1@2x']" alt=""><span>常见问题</span></div>
                </template>
                <van-cell title="存款" is-link to="/helpDetail?id=13&type=0" />
                <van-cell title="取款" is-link to="/helpDetail?id=10&type=0" />
                <router-link to="/help/tutorial" class="kf-ques-more"><span>更多问题</span><van-icon name="arrow-down"  color="#4080FF" /></router-link>
              </van-collapse-item>
              <van-cell title="品牌实力" is-link to="/help/introduction">
                <template #title>
                  <div class="kf-slide-tit">
                    <van-image class="cell-van-img" :src="$imgs['newKf/service_iocn2@2x']" />
                    <span class="custom-title">品牌实力</span>
                  </div>
                </template>
              </van-cell>
              <van-collapse-item name="3" >
                <template #title>
                  <div class="kf-slide-tit"><img :src="$imgs['newKf/service_iocn3@2x']" alt=""><span>游戏手册</span></div>
                </template>
                <van-cell title="真人" is-link to="/helpDetail?id=2&type=1" />
                <van-cell title="棋牌" is-link to="/helpDetail?id=28&type=1" />
                <router-link to="/help/manual" class="kf-ques-more"><span>更多问题</span><van-icon name="arrow-down"  color="#4080FF" /></router-link>
              </van-collapse-item>
              <van-cell title="安全保障" is-link to="/help/protection">
                <template #title>
                  <div class="kf-slide-tit">
                    <van-image class="cell-van-img" :src="$imgs['newKf/service_iocn4@2x']" />
                    <span class="custom-title">安全保障</span>
                  </div>
                </template>
              </van-cell>
              <van-cell title="安全保障" is-link to="/help/main" value="100个常见问题解密">
                <template #title>
                  <div class="kf-slide-tit">
                    <van-image class="cell-van-img" :src="$imgs['newKf/service_iocn5@2x']" />
                    <span class="custom-title">全部问题</span>
                  </div>
                </template>
              </van-cell>

            </van-collapse>
          </div>
        </div>
      </template>
    </template>
    <template v-else>
      <p class="db-kftit">猜你想问</p>
      <div class="dbkf-slide">
        <van-collapse v-model="activeNames">
          <van-collapse-item name="1">
            <template #title>
              <div class="kf-slide-tit"><span>常见问题</span></div>
            </template>
            <van-cell title="存款" is-link to="/helpDetail?id=13&type=0" />
            <van-cell title="取款" is-link to="/helpDetail?id=10&type=0" />
            <router-link to="/help/tutorial" class="kf-ques-more"><span>更多问题</span><van-icon name="arrow-down"  color="#4080FF" /></router-link>
          </van-collapse-item>
          <van-cell title="品牌实力" is-link to="/help/introduction">
            <template #title>
              <div class="kf-slide-tit">
                <span class="custom-title">品牌实力</span>
              </div>
            </template>
          </van-cell>
          <van-collapse-item name="3" >
            <template #title>
              <div class="kf-slide-tit"><span>游戏手册</span></div>
            </template>
            <van-cell title="真人" is-link to="/helpDetail?id=2&type=1" />
            <van-cell title="棋牌" is-link to="/helpDetail?id=28&type=1" />
            <router-link to="/help/manual" class="kf-ques-more"><span>更多问题</span><van-icon name="arrow-down"  color="#4080FF" /></router-link>
          </van-collapse-item>
          <van-cell title="安全保障" is-link to="/help/protection">
            <template #title>
              <div class="kf-slide-tit">
                <span class="custom-title">安全保障</span>
              </div>
            </template>
          </van-cell>
          <van-cell title="安全保障" is-link to="/help/main">
            <template #title>
              <div class="kf-slide-tit">
                <span class="custom-title">全部问题</span>
              </div>
            </template>
          </van-cell>

        </van-collapse>
      </div>
      <p class="db-kftit">新手教程</p>
      <van-cell class="newer-teach" title="手机充值教程" is-link to="/helpDetail?id=3&type=0" />
      <van-cell class="newer-teach" title="如何取款" is-link to="/helpDetail?id=10&type=0" />
      <van-cell class="newer-teach" title="如何洗码" is-link to="/helpDetail?id=9&type=0" />
      <van-cell class="newer-teach" title="常见问题" is-link to="/help/tutorial" />

      <div class="kf-btn">
        <van-button @click="callbackCk"><img :src="$imgs['newKf/servic_icon_call@2x']" alt=""><span>请求回电</span></van-button>
        <van-button type="info" @click="callService"><img :src="$imgs['newKf/servic_icon_servic@2x']" alt=""><span>在线客服</span></van-button>
      </div>
    </template>
    <vtabbar class="m-footer" :index="2"></vtabbar>

    <!-- 客服 -->
    <van-popup
      closeable
      class="callBack custom close-top"
      v-model="show"
      get-container="#app"
    >
      <div class="pop-head">
        <h2>请求回电</h2>
        <!--<van-icon name="arrow-left" @click="fanhui" />-->
      </div>
      <p class="title">申请回拨我们将有专人5分钟内给您致电处理问题</p>
      <div class="aagames-form">
        <div class="input" style="background-color: #F5F6FA">
          <phoneArea v-model="areaCode">
            <i class="areaNum">
              &nbsp;+{{ areaCode }}
              <img class="xiala" :src="$imgs['otherIcon/xiala@2x']" alt />
            </i>
          </phoneArea>
          <input v-model="phone" type="text" placeholder="请输入手机号" />
        </div>
        <div class="input t-input">
          <textarea v-model="remark" placeholder="您可以描述您的疑问，可以更快的帮助您处理" />
        </div>
        <div class="feedbackImg clearfix">
          <!-- 是否预览 -->
          <!-- @click="onPreview(index)" -->
          <div class="feedbackList">
            <!-- <img :src="item" /> -->
            <div
              class="imgBack"
              v-for="(item,index) in uploadImg"
              :key="index"
            >
              <p>附件:{{item}}</p>
              <van-icon size="16px" name="cross" @click.stop="onCross(index)" />
            </div>
          </div>
        </div>
      </div>
      <div class="aagames-button-box">
        <van-uploader :after-read="onRead">
          <button class="aagames-button line">上传附件</button>
        </van-uploader>

        <button class="aagames-button" type="button" @click="callbackSubmit">申请回拨</button>
      </div>
    </van-popup>
    <van-popup class="callBack" v-model="successInfo" get-container=".kfPage">
      <div class="title">温馨提示</div>
      <div class="website">请求回电成功</div>
    </van-popup>
  </div>
</template>

<script>

  import Loading from '@/components/loading'
  // import TLoading from '@/components/t-loading'
  import Vtabbar from "../components/v-tabbar"

  import { isnum } from "@/utils/index";
  import { recall, siteinfo } from "@/api/home";
  import { phonearea } from "@/api/login";
  import { feedback, upload } from "@/api/personalData";
  import { mapState } from "vuex";
  export default {
    name: 'Brand',
    components: {
      Vtabbar
    },
    data () {
      return {
        activeNames:[],
        show: false,
        // realName: window.localStorage.username || '',
        areaCode: "86",
        successInfo: false,
        areaCodeShow: false,
        phone: "",
        remark: "",
        columns: [],
        isLogin: true,
        callShow: false,
        imgArr:[],
        uploadImg:[],
      };
    },
    created() {
      const toast = this.$toast.loading({
        className: "toast-loading",
        mask: false,
        duration: 1000,
        forbidClick: true,
        loadingType: "spinner",
      });
      if(this.token) {
        this.refresh()
      }
      phonearea().then(res => {
        if (res.data.code === 0) {
          this.columns = res.data.data;
        }
      });
      siteinfo(process.env.VUE_APP_MERCHANT_NO).then(res => {
        if (res.data.code === 0) {
          this.h5LogoSrc = res.data.data.h5_logo;
        }
      });

    },
    computed: {
      ...mapState("users", ["token", "wallet", "userInfo", "username"])
    },
    methods: {
      callbackCk() {
        this.callShow = false;
        if (this.token) {
          this.show = true;
        } else {
          this.$router.push("/login");
        }
      },
      callService() {
        if (this.token) {
          this.$openKefu();
        } else {
          this.$router.push("/login");
        }
      },
      refresh() {
        this.balanceLoading = true;
        this.$store
          .dispatch("users/getWallet")
          .then(res => {
            this.balanceLoading = false;
          })
          .catch(() => {
            this.balanceLoading = false;
          });
      },
      fanhui() {
        this.show = false;
        this.callShow = true;
      },
      onRead(file) {
        var windowURL = window.URL || window.webkitURL;
        let param = new FormData();
        param.append("file", file.file);
        upload(param)
          .then(res => {
            if (res.data.code === 0) {
              this.uploadImg.push(res.data.data.path);
              this.imgArr.push(res.data.data.saveName);
              console.log(this.uploadImg,this.imgArr)
            } else {
              this.$toast.fail(res.data.msg);
            }
          })
      },
      callbackSubmit() {
        console.log(this.uploadImg,this.imgArr)
        if (!isnum(this.phone)) {
          this.$toast.fail("手机格式有误");
          return false;
        }
        if (!this.remark) {
          this.$toast.fail('多少写点什么吧~：）')
          return false
        }
        this.$loading();
        recall({
          tel: this.phone,
          remark: this.remark,
          pic:JSON.stringify(this.imgArr),
          access_token: this.token
        }).then(res => {
          this.$toast.clear();
          this.show = false;
          if (res.data.code === 0) {
            this.$toast("请求回电成功！");
            this.successInfo = false;
            this.phone = ''
            this.remark = ''
            this.uploadImg = []
            this.imgArr = []
          } else {
            this.$toast.fail("请求回电失败请重试！");
          }
        });
      },
      onCross(idx) {
        this.imgArr.splice(idx, 1);
        this.uploadImg.splice(idx, 1);
      }
    }
  };
</script>
<style scoped lang="less">
  .kfPage{
    background-color: #F5F6FA;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 100% auto;
    padding-top: 106px;
    padding-bottom: 140px;
    .cell-van-img{
      width: 64px;
    }
    .kf-ques-more{
      font-size: 24px;
      display: flex;
      align-items: center;
      color: @bg-gradient-color;
      text-align: center;
      margin-top: .2rem;
      justify-content: center;
    }
    .title{
      text-align: center;
      font-size: 36px;
      color: #fff;
    }
    .kf-wel{
      width: 710px;
      height: 200px;
      background-position: center top;
      background-repeat: no-repeat;
      background-size: 100% auto;
      padding: 38px 0 0 40px;
      box-sizing: border-box;
      margin: 12px auto 0;
    }
    .kf-wel-con{
      display: flex;
      align-items: center;
      img{
        width: 120px;
      }
      p{
        margin-left: 24px;
        font-size: 36px;
        color: #333;
        span:last-child{
          font-size: 24px;
          color: #bbb;
          display: block;
          margin-top: 10px;
        }
      }
    }
    .kf-pad{
      padding: 18px 30px;
    }
    .kf-btn{
      display: flex;
      align-items: center;
      .van-button:first-child{
        margin-right: 30px;
      }
      .van-button:last-child{
        border-color: #fff;
        background-color: #fff;
        box-shadow:0px 2px 10px 0px rgba(0,34,80,0.05);
      }
      img{
        width: 40px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
      }
      span{
        display: inline-block;
        vertical-align: middle;
      }
    }
    .kf-slide{
      background-color: #fff;
      border-radius: 16px;
      margin-top: 30px;
      padding: 20px 30px 0;
      box-shadow:0px 2px 10px 0px rgba(0,34,80,0.05);
      h2{
        font-size: 28px;
        color: #333;
        margin: 0;
        font-weight: bold;
      }
      /deep/ .van-icon{
        font-size: 30px;
      }
      /deep/ .van-cell{
        display: flex;
        align-items: center;
        padding: 26px 0;
        position: relative;
        .van-cell__value{
          font-size: 24px;
        }
        &:after{
          content: '';
          position: absolute;
          left: 84px;
          right: 0;
          bottom: 0;
          height: 2px;
          transform: scaleY(0.5);
          background-color: #E6EAEF;
          visibility: initial;
        }
      }
      /deep/ .van-collapse-item{
        /*border-bottom: 2px solid #F5F6FA;*/
        position: relative;
        &:after{
          content: '';
          position: absolute;
          right: 0;
          left: 84px;
          height: 2px;
          background-color: #F5F6FA;
          bottom: 0;
          top: auto;
        }
        .van-cell__title{
          font-size: 24px;
          color: #999;
        }
      }
      /deep/ .van-collapse-item__wrapper{
        padding-left: 68px;
        .van-collapse-item__content{
          padding-right: 0;
        }
        .van-cell:after{
          left: 0;
        }
      }
      .kf-slide-tit{
        display: flex;
        align-items: center;
        font-weight: bold;
        img{
          width: 64px;
        }
        span{
          font-size: 28px;
          color: #333;
          margin-left: 20px;
        }
      }
    }

  }
  .aagames-button-box{
    /deep/ .van-uploader{
      width: 48%;
      margin-right: 4%;
      .van-uploader__wrapper{
        width: 100%;
        display: block;
      }
      .line{
        border:2px solid @bg-gradient-color;
        color: @bg-gradient-color;
        background-color: transparent!important;
        width: 100%!important;
      }
    }

  }
  .aagames-form{
    padding: 0;
  }
  .aagames-form .input .areaNum{
    color: #333;
  }
  .zbkf-item{
    padding: 0 10px;
    margin-top: 22px;
    .zbkf-item-child{
      height: 240px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 50px 32px 60px;
      background-size: 100% auto;
      background-repeat: no-repeat;
      color: #fff;
      font-size: 28px;
      .van-icon{
        color: #fff;
        font-size: 48px;
      }
      p:first-child{
        display: flex;
        align-items: center;
        font-size: 40px;
        img{
          width: 46px;
          margin-right: 4px;
        }
      }
      p:nth-child(2){
        color: rgba(255,255,255,.36);
        margin: 4px 0 24px 0;
      }
    }
  }
</style>

