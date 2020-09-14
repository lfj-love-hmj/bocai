<template>
<div>
  <van-list
    class="events"
    v-model="loading"
    :finished="finished"
    :finished-text="finishedText"
    @load="onLoad"
    :immediate-check="false"
  >
    <van-cell
      v-for="(item, index) in lists"
      :key="index"
    >
      <div
        class="event-item"
        slot="default"
        @click="onClick(item)"
      >
        <van-image :src="item.h5_index_pic" fit="cover" lazy />
        <div class="info">
          <h3>
            <!-- <span>{{ tab.title.slice(0, -2) }}</span> -->
            {{ item.title }}
          </h3>
          <div class="subinfo">
            <p>{{ item.sub_title }}</p>
          </div>
          <div class="action">
            <span>{{(item.created_at).split(' ')[0]}}</span>
            <span class="action-detail">查看详情<van-icon name="arrow" /></span>
          </div>
        </div>
      </div>
    </van-cell>
  </van-list>
  <div class="list-empty" v-if="!loading && lists.length === 0">
    <p>我们正在为您准备更多内容哦！</p>
  </div>
</div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import { brandlist } from "@/api/home"
export default {
  name: 'EventList',
  props: ['tab'],
  data () {
    return {
      lists: [],
      // finishedText: '我们正在为您准备更多活动哦！',
      finishedText: '',
      total: 0,
      pageNo: 1,
      loading: false,
      finished: false,
      constActive:['AV女优赞助','意甲赞助',`${this.$config[this.$projectname].project}演唱会`,'公益赞助']
    }
  },
  created () {
    this.loadData()
    // console.log(this.tab)
  },
  // computed: {
  //   ...mapState('games', ['gameCatesPlatforms']),
  //   ...mapState('global', ['gameSearch'])
  // },
  methods: {
    // ...mapActions('games', [
    //   'getAllGameCatesPlatforms'
    // ]),
    onLoad () {
      // this.loadData()
    },
    loadData (reload) {
      this.$loading({
        mask: false
      })
      const { tab, pageNo } = this
      // const params = {
      //   b_type: tab.id,
      //   page: pageNo
      // }
      brandlist({type:tab.id}).then(res => {
        const { code, data, msg } = res.data
        if (code === 0) {
          if(tab.id) {
            this.lists = data.filter(item => item.type == tab.id)
          } else {
            this.lists = data
          }
          // this.total = data.total
          // this.pageNo++
          // if (this.pageNo > data.last_page) {
          //   this.finished = true
          // }
          this.finished = true
          this.loading = false
        } else {
          console.log(msg)
        }
        this.$toast.clear()
      })
    },
    onClick (item) {
      console.log(this.constActive.indexOf(item.title))
      console.log(item.url.indexOf('https'))
      if(this.constActive.indexOf(item.title) == -1 && !item.url) {
        const { id } = item
        this.$router.push({
          name: 'brandDetails',
          params: {
            id
          }
        })
      } else if(item.url.indexOf('https') != -1){
        window.open(item.url,'_blank')
      } else {
        this.$router.push({path:`${item.url}`})
      } 
    }
  }
}
</script>

<style lang="less" scoped>
.events{
  display: flex;
  flex-wrap: wrap;
  /deep/ .van-cell{
    position: relative;
    width: 100%;
    margin-bottom: @space-gap;
    background: @bg-card-color;
    padding: 0;
    border-radius: 8px;
    overflow: hidden;
    &:after{
      border-bottom: none!important;
    }
    .event-item{
      color: #fff;
      position: relative;
      .tag{
        width: 100px;
        height: 100px;
        position: absolute;
        right: 0;
        top: 0;
        text-align: center;
        padding-top: 70px;
        line-height: 30px;
        font-size: 20px;
        background-image: linear-gradient(to right, #FF9A5D, #FF3937);
        text-transform: uppercase;
        transform: rotate(45deg) translate(-20%, -20%);
        transform-origin: 100% 100%;
        &.new{
          background-image: linear-gradient(to right, #05D0DA, #279CF8);
        }
      }
      .info{
        padding: @space-gap;
        font-size: 26px;
        color: #666;
        h3{
          font-size: 32px;
          margin: 0;
          color: #fff;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          span{
            background-color: @primary-color;
            color: #fff;
            font-size: 20px;
            line-height: 44px;
            padding: 0 10px;
            font-weight: 300;
            margin-right: 20px;
            border-radius: 5px;
          }
        }
      }
      .subinfo{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding-top: @space-gap/2;
        p{
          padding-right: 20px;
          line-height: 40px;
          text-align: justify;
        }
        .van-icon{
          font-size: 36px;
          color: #666;
        }
      }
      .action{
        display: flex;
        color: #B1B1B1;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        // align-items: center;
        // width: 160px;
        line-height: 40px;
        // white-space: nowrap;
        .action-detail{
          display:flex;
          align-items: center;
        }
      }
    }
    
  }
  .van-image{
    width: 100%;
    min-height: 120px;
    // height: 240px;
  }
  /deep/ .van-list__loading {
    width: 100%;
    margin-left: @space-gap;
    padding-bottom: @space-gap;
  }
}

.list-empty{
  width: 100%;
  color: #666;
  text-align: center;
}
</style>
