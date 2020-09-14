<style scoped lang="less">
  .tutorial {
    flex: 1;
    padding: 0 0 0 30px !important;

    .h3 {
      margin: 0;
      height: 90px;
      line-height: 90px;
      font-size: 32px;
      font-weight: 500;
      color: rgba(248, 245, 240, 1);
    }

    .problem {
      box-sizing: border-box;
      border-radius: 8px;

      .item {
        display: flex;
        height: 98px;
        border-bottom: 2px solid #EDEFF6;

        .left {
          width: 158px;
          // line-height: 150px;
          font-size: 32px;
          font-weight: 500;
          color: rgba(248, 245, 240, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rigth {
          flex: 1;
          font-size: 28px;
          font-weight: 400;
          color: #333;
          line-height: 40px;

          a {
            display: flex;
            line-height: 98px;
            color: #333;
            // border-bottom: 2px solid rgba(255, 255, 255, 0.06);
          }
        }
      }

    }

    .novice {
      /*padding: 0 30px;*/

      .item {
        height: 98px;
        font-size: 28px;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #333;
        border-bottom: 2px solid #EDEFF6;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        img {
          width: 40px;
          margin-right: 30px;
        }
      }

    }

    .aagames-button-box {
      padding: 0;
      margin: 40px auto 100px;
    }
  }

  .gokefu {
    font-size: 24px;
    color: #999;
    text-align: center;
    margin-top: 60px;

    span {
      color: @bg-gradient-color;
      text-decoration: underline;
    }
  }
</style>

<template>
  <div class="tutorial" :style="{marginTop: $route.query.source && '0'}">
    <!--<h3 class="h3">-->
    <!--猜你想问-->
    <!--</h3>-->
    <div class="problem" v-for="(i,index) in want_as" :key="index">
      <div class="item" v-for="(j ,jk) in i.list" :key="jk">

        <!--<div class="left">{{i.mod_name}}</div>-->
        <div class="rigth">
          <a @click="$router.push({path:'/helpDetail',query:$route.query.source?{id:j.id,type:0,source:$route.query.source}:{id:j.id,type:0}})">{{j.title}}</a>
        </div>
      </div>

    </div>

    <div class="problem novice">
      <div class="item" v-for="i in new_user_as.list" :key="i.id"
           @click="$router.push({path:'/helpDetail',query:{id:i.id,type:0}})">
        <!-- <img :src="icons[i.id]" alt="" >  -->
        <!--<img :src="i.h5_pic" alt="" >-->
        {{i.title}}
      </div>
    </div>
    <p class="gokefu">
      遇到问题，联系
      <span @click="goKefu">专属客服</span>
    </p>
  </div>
</template>

<script>

  import {aqlist} from '@/api/personalData'

  export default {
    components: {},
    data() {
      return {

        new_user_as: {},
        want_as: [],
        data: {},
        icons: {
          9: require('@assets/img3_0/otherIcon/sc@2x.png'),
          10: require('@assets/img3_0/otherIcon/czsm@2x.png'),
          11: require('@assets/img3_0/otherIcon/yhk@2x.png'),
          12: require('@assets/img3_0/otherIcon/ck@2x.png'),
          13: require('@assets/img3_0/otherIcon/ck@2x.png'),
          14: require('@assets/img3_0/otherIcon/ck@2x.png')
        }
      }
    },
    created() {
      this.isLoading = true
      aqlist({}).then(res => {
        if (res.data.code === 0) {
          this.new_user_as = res.data.data.new_user_as[0] || {}
          this.want_as = res.data.data.want_as
        }
      }).finally(() => {
        this.isLoading = false
      })
    },
    methods:{
      goKefu() {
        this.$openKefu();
        this.$store.dispatch("global/setPopShow", { status: false });
      },
    }
  }
</script>
