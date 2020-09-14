<style scoped lang="less">
    .item {
        .title {
            line-height: 104px;
            height: 104px;
            font-weight: 500;
            font-size:32px;
            color:rgba(248,245,240,1);
        }
        .list {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -10px;
            div{
                width: 25%;
                display: flex;
                padding: 10px;
                box-sizing: border-box;
                height:108px;
                a {
                    flex: 1;
                    text-align: center;
                    background:@bg-card-color;
                    border-radius:8px;
                    line-height: 88px;
                    color: #CCCCCC;
                    overflow: hidden;
                }
            }

        }
    }
</style>

<template>
    <div class="tutorial" :style="{marginTop: $route.query.source && '0px !important'}">

            <div class="item" v-for="i in list" :key="i.title">
                <div class="title">{{i.game_cate_name}}</div>
                <div class="list">
                    <div v-for="j in i.list" :key="j.id">
                        <a class=""  @click="$router.push({path:'/helpDetail',query:$route.query.source?{id:j.id,type:1,source:$route.query.source}:{id:j.id,type:1}})" >{{j.title}}</a>

                    </div>
                </div>
            </div>
    </div>
</template>

<script>

  import { gamemanual } from '@/api/personalData'
  export default {
    components: {},
    data () {
      return {
        list: [
          {
            list: ['真人游戏','真人游戏','真人游戏','真人游戏','真人游戏','真人游戏','真人游戏','真人游戏',],
            title: '真人'
          },
          {
            list: ['老虎机','3D捕鱼'],
            title: '电子'
          },
          {
            list: ['VR彩票','3D捕鱼'],
            title: '彩票'
          },
        ]
      }
    },
    created () {
      this.isLoading = true
      gamemanual({
      }).then(res => {
        if (res.data.code === 0) {
          this.list = res.data.data
        }
      }).finally(() => {
        this.isLoading = false
      })
    }
  }
</script>
