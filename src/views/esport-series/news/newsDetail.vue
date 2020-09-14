<template>
  <div id='newsDetail'>
    <lheader :title="title" :goback='goback' @goback='goback'></lheader>
    <div class="main">
      <div class="newsDetail-head">
        <img v-if="this.$route.query.type*1 == 2" :src="$imgs['other/icon1']" alt="">
        <img v-if="this.$route.query.type*1 == 1" :src="$imgs['other/icon2']" alt="">
        <div class="">
          <p class="title">{{detail.title}}</p>
          <p class="created">{{detail.created_at}}</p>
        </div>
      </div>

      <p class="content">{{detail.content}}</p>
      <!--<p class="update">{{detail.updated_at}}</p>-->
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Lheader from '@/components/l-header'
  import { readnotice,readmessage } from '@/api/news'
  import { member } from '@/api/memberCenter'

  import { siteinfo } from '@/api/home'
  import { userinfo } from '@/api/agent'
  export default {
    data() {
      return {
        title: '',
        data: {
          merchant_no: process.env.VUE_APP_MERCHANT_NO,
          access_token:window.localStorage.token
        },
        detail: {}
      }
    },
    components: {
      Lheader,
    },
    created() {
      // window.addEventListener("message", function(event) {
      //   console.log(event, event.data);
      // }, false)
      if(this.$route.query.type == 1 && this.$route.query.is_read == 0){
        this.title = '公告详情';
        this.toreadnotice();
      }else if(this.$route.query.type == 2 && this.$route.query.is_read == 1){
        this.title = '站内信详情';
        this.toreadmessage();
      }else{
        this.title = '公告详情';
      }
      this.detail = {
        title: this.$route.query.title,
        content: this.$route.query.content,
        created_at: this.$route.query.created_at,
        updated_at: this.$route.query.updated_at,
        is_read: this.$route.query.is_read
      }
    },
    methods: {
      goback(){
        if(this.$route.query.from) {
          this.$router.push({name:this.$route.query.from})
        }
        if(this.$route.query.type == 1){
          this.$router.push({ path: '/news',query: { active: 1 } })
        }else if(this.$route.query.type == 2){
          this.$router.push({ path: '/news',query: { active: 2 } })
        }

      },
      toreadnotice(){
        if(window.localStorage.token){
          this.data.site_notice_id = this.$route.query.id;
          readnotice(this.data).then(res=> {
            if (res.data.code === 0) {
              this.$store.dispatch('users/getUserInfo')
            } else {
              this.$toast(res.data.msg)
            }
          })
        }

      },
      toreadmessage(){
        if(window.localStorage.token){
          this.data.id = this.$route.query.id;
          readmessage(this.data).then(res=> {
            if (res.data.code === 0) {
              this.$store.dispatch('users/getUserInfo')
            } else {
              this.$toast(res.data.msg)
            }
          })
        }

      }
    },
  }
</script>
<style lang="less" scoped>
  #newsDetail{
    // background-color: #fff;
    width: 100vw;
    height: 100vh;
    padding-top: @main-top;
    .newsDetail-head{
      display: flex;
      align-items: center;
      padding-left: @space-gap;
      height: 120px;
      position: relative;
      &:after{
        content: '';
        position: absolute;
        left: @space-gap;
        right: 0;
        bottom: 0;
        height: 2px;
        background: #EDEFF6;
      }
      img{
        width: 64px;
      }
    }
    .main{
      padding: 0;
      height: 100%;
      border-top: 20px solid #F5F6FA;
      background: #fff;
      .title{
        color: #333;
        font-weight: bold;
        font-size: 28px;
        line-height: 0.6667rem;
        padding-left: 20px;
      }
      .created{
        color: #999999;
        font-size: 20px;
        line-height: 0.4533rem;
        padding-left: 20px;
      }
      .content{
        color: #333;
        font-size: 28px;
        line-height: 48px;
        padding: @space-gap;
      }
      .update{
        color: #666;
        font-size: 0.32rem;
        line-height: 0.4533rem;
        margin-top: 1.12rem;
        text-align: right;
      }
    }
  }
</style>
