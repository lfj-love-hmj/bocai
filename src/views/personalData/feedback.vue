<template>
  <div class="container">
    <lheader :title="title" path="111"></lheader>
    <div class="main">
      <div class="reset">
        <textarea resize="none" v-model="content" maxlength="500" placeholder="请告诉我们有哪些可以改进的地方 …">
        </textarea>
        <div class="feedbackImg clearfix">
          <div @click="onPreview(index)" class="feedbackList" v-for="(item,index) in imgArr" :key="index">
            <img :src="item">
            <van-icon size="16px" name="cross" @click.stop="onCross(index)" />
          </div>
          <van-uploader class="uploader" :after-read="onRead"></van-uploader>
        </div>

      </div>
      <div class="aagames-button-box">
        <button class="aagames-button" type="button" @click="submit">提交</button>
      </div>
      <loading :isShow="isLoading" :title="loadingText"></loading>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Lheader from '@/components/l-header';
  import Loading from '@/components/loading';
  import { feedback, upload } from '@/api/personalData';
  import { ImagePreview } from 'vant';
  import { Toast } from 'vant';
  Vue.use(ImagePreview);
  Vue.use(Toast);

  export default {
    name: "discountCore",
    components: {
      Loading,
      Lheader
    },
    data() {
      return {
        title: '意见反馈',
        test: '',
        imgArr: [],
        content: '',
        uploadImg: [],
        isLoading: false,
        loadingText: '提交中...'
      }
    },
    methods: {
      onRead(file) {
        var windowURL = window.URL || window.webkitURL;
        let param = new FormData();
        param.append('file',file.file);
        this.loadingText = '上传中...';
        this.isLoading = true;
        upload(param).then(res=> {
          if (res.data.code === 0) {
            this.uploadImg.push(res.data.data.path);
            this.imgArr.push(file.content);
          } else {
              Toast(res.data.msg)
          }
        }).finally(()=>{
          this.isLoading = false;
        })
      },
      onPreview(idx) {
        ImagePreview({
          images: this.imgArr,
          startPosition: idx
        })
      },
      onCross(idx) {
        this.imgArr.splice(idx,1)
        this.uploadImg.splice(idx,1)
      },
      submit() {
        if (!this.content) {
          Toast('多少写点什么吧~：）')
          return false
        }
        this.isLoading = true;
        this.loadingText = '提交中...';
        feedback({
          access_token: window.localStorage.token,
          merchant_no: process.env.VUE_APP_MERCHANT_NO,
          content: this.content,
          pics: this.uploadImg.join(',')
        }).then(res=> {
          if ( res.data.code === 0 ) {
            const This = this
            toast({
              message: '反馈成功',
              onClose() {
                This.$router.go(-1)
              }
            })
          }
        }).finally(()=>{
          this.isLoading = false;
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    display: flex;
    flex-direction: column;
    // background-color: #090705;
    .main {
      padding: 0;
      margin-top: @main-margin-top;
      .aagames-button-box {
        margin-top: 1.33333rem;
      }
      .reset {
        textarea {
          width: 100%;
          // background-color: #232C39;
          color:#222222;
          font-size: 32px;
          border: none;
          text-align: left;
          padding: 20px;
          resize: none;
          min-height: 307px;
        }
        .uploader {
          float: left;
          width: 2.61333rem;
          height: 2.61333rem;
          /deep/ .van-uploader__wrapper {
            height: 100%;
            .van-uploader__upload {
              height: 100%;
              width: 100%;
              .van-icon {
                font-size: .93333rem;
              }
            }
          }
        }
        .feedbackImg {
          margin-top: 30px;
          padding: 0 @margin-10;
          .feedbackList {
            margin-right: 20px;
            float: left;
            width: 2.6rem;
            height: 2.6rem;
            position: relative;
            .van-icon {
              position: absolute;
              right: 10px;
              top: 10px;
              color:#ffffff;
              // background-color: #222222;
              width: 30px;
              height: 30px;
              text-align: center;

            }
            img {
              width: 2.61333rem;
              height: 2.61333rem;
            }
          }
        }
      }
    }
  }
</style>
