<style scoped lang="less">
    .tutorial {
        flex: 1;
        .h3 {
            margin: 0;
            height: 90px;
            line-height: 90px;
            font-size: 32px;
            font-weight: 500;
            color: rgba(248, 245, 240, 1);
        }
        .problem {
            padding: 30px;
            box-sizing: border-box;
            background: @bg-card-color;
            border-radius: 8px;
            .item {
                display: flex;
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
                    color: @primary-text-color;
                    line-height: 40px;
                    a {
                        display: flex;
                        line-height: 75px;
                        color: #CCCCCC;
                        // border-bottom: 2px solid rgba(255, 255, 255, 0.06);
                    }
                }
            }

        }
        .novice {
            padding: 0 30px;
            .item {
                height: 100px;
                font-size: 32px;
                font-weight: 400;
                color: @primary-text-color;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                color: #CCCCCC;
                border-bottom: 2px solid rgba(255, 255, 255, 0.06);
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
</style>

<template>
    <div class="tutorial">
        <h3 class="h3">
            猜你想问
        </h3>
        <div class="problem">
            <div class="item" v-for="(i,index) in want_as" :key="index">

                <div class="left">{{i.mod_name}}</div>
                <div class="rigth">
                    <a @click="$router.push({path:`/helpDetail`,query:$route.query.source?{id:j.id,type:0,source:$route.query.source}:{id:j.id,type:0}})" v-for="(j ,jk) in i.list" :key="jk">{{j.title}}</a>
                </div>
            </div>
            <!--<div class="item">-->

                <!--<div class="left">优惠问题</div>-->
                <!--<div class="rigth">-->
                    <!--<a href="">优惠活动如何申请？</a>-->
                    <!--<a href="">我上个月参加了优惠，这个月还能…</a>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="item">-->
                <!--<div class="left">其他问题</div>-->
                <!--<div class="rigth">-->
                    <!--<a href="">我的余额怎么变成了负数？</a>-->
                    <!--<a href="">盈利与显示不相符合？</a>-->
                <!--</div>-->
            <!--</div>-->

        </div>
        <h3 class="h3">
            {{new_user_as.mod_name}}
        </h3>
        <div class="problem novice">
            <div class="item" v-for="i in new_user_as.list" :key="i.id"  @click="$router.push({path:'/helpDetail',query:$route.query.source?{id:i.id,type:0,source:$route.query.source}:{id:i.id,type:0}})">
                <!-- <img :src="icons[i.id]" alt="" >  -->
                <img :src="i.h5_pic" alt="" > 
                {{i.title}}
            </div>
        </div>
        <div class=" aagames-button-box">
            <div class="aagames-button" @click="$openKefu">在线人工客服</div>
        </div>
    </div>
</template>

<script>

  import { aqlist } from '@/api/personalData'

  export default {
    components: {},
    data () {
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
    created () {
      this.isLoading = true
      aqlist({}).then(res => {
        if (res.data.code === 0) {
          this.new_user_as = res.data.data.new_user_as[0] || {}
          this.want_as = res.data.data.want_as
        }
      }).finally(() => {
        this.isLoading = false
      })
    }
  }
</script>
