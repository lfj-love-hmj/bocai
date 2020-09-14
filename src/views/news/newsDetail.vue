<template>
  <div id='newsDetail'>
    <lheader :title="title" :goback='goback' @goback='goback'></lheader>
    <div class="main">
      <p class="title">{{detail.title}}</p>
      <p class="created">{{detail.created_at}}</p>
      <p class="content">{{detail.content}}</p>
      <p class="update">{{detail.updated_at}}</p>
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
    .main{
      padding: 0.6667rem 0.4rem;
      .title{
        color: #ccc;
        font-weight: bold;
        font-size: 0.48rem;
        line-height: 0.6667rem;
      }
      .created{
        color: #999999;
        font-size: 0.32rem;
        line-height: 0.4533rem;
        margin: 0.2667rem 0 0.4267rem;
      }
      .content{
        color: #999;
        font-size: 0.3733rem;
        line-height: 0.6133rem;
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