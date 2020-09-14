<template>
  <div class="events">
    <div class="tabs">
      <label
        v-for="(item, index) in tabs"
        :key="index"
        :class="{ active: tab.status === item.status }"
        @click="onTabClick(item)"
      >{{ item.title }}</label>
    </div>

    <div class="section">
      <div class="lists">
        <template v-if="lists.length">
          <div class="item" v-for="(item, index) in lists" :key="index">
            <van-image :class="{'grayImage':item.status == 3}" :src="item.h5_index_pic" />
            <p class="desc">{{ item.detail_content }}</p>
            <dl>
              <dt>
                <h3>
                  <span>{{ item.tag }}</span>
                  {{ item.title }}
                </h3>
                <p>截止时间：{{ item.end_time.split(' ')[0] }}</p>
              </dt>
              <dd>
                <button v-if="item.status == 2" @click="eventApply(item)">报名参加</button>
                <button class="end-button" v-else-if="item.status == 3" disabled>活动结束</button>
              </dd>
            </dl>
          </div>
        </template>
        <template v-else>
          <div class="empty" v-show="showEmpty">
            <van-image lazy-load :src="require('@assets/img3_0/error/empty.png')"></van-image>
            <p>暂无{{tab.title}}</p>
          </div>
        </template>
      </div>
    </div>

    <EventApply :title="applyTitle" :id="applyId" :show.sync="showPopup" :type='1'/>
  </div>
</template>

<script>
// import { BarChart } from './components/BarChart'
import { vipActivity } from "@/api/vip";
import EventApply from "./components/EventApply";
import { mapState } from 'vuex'
export default {
  name: "Events",
  components: {
    // BarChart,
    EventApply
  },
  data() {
    const tabs = [
      {
        title: "正在进行中",
        status: 2
      },
      // {
      //   title: "未开始",
      //   status: 1
      // },
      {
        title: "往期活动",
        status: 3
      }
    ];
    return {
      showPopup: false,
      applyTitle: "活动申请",
      applyId: 0,
      // 1=尊享活动 2=特权
      type: 1,
      listCached: {},
      lists: [],
      tabs,
      tab: tabs[0],
      showEmpty:false
    };
  },
  created() {
    this.getVipActivity();
  },
  computed: {
    ...mapState('users', ['userInfo', 'isLogin'])
  },
  methods: {
    getVipActivity() {
      const { tab, type, listCached } = this;
      const { status } = tab;
      if (listCached[status]) {
        this.lists = listCached[status];
        return;
      }
      this.$loading();
      this.showEmpty = false
      vipActivity({ status }).then(res => {
        this.$toast.clear();
        const { code, data, msg } = res.data;
        if (code === 0) {
          this.showEmpty = true
          this.lists = data.data;
          this.listCached[status] = data.data;
        } else {
          this.$toast(msg);
        }
      });
    },
    eventApply(item) {
      if(this.isLogin) {
        if (item.id) {
          this.applyTitle = item.title;
          this.applyId = item.id;
        } else {
          this.applyTitle = "[请后台配置数据] - 测试用活动标题" + item;
          this.applyId = item;
        }
        this.showPopup = true;
      } else {
        this.$router.push({ name: 'login' })
      }
    },
    onTabClick(tab) {
      this.tab = tab;
      this.getVipActivity();
    }
  }
};
</script>

<style lang="less" scoped>
.tabs {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: @space-gap;
  > label {
    min-width: 180px;
    height: 72px;
    line-height: 72px;
    font-size: 28px;
    color: #fff;
    padding: 0 @space-gap;
    border: 2px solid #fff;
    text-align: center;
    border-radius: 8px;
    &.active {
      color: @primary-color;
      border-color: @primary-color;
    }
  }
}
.button {
  width: 100%;
  display: block;
  background-image: linear-gradient(to right, @primary-color, #ab8a61);
  line-height: 88px;
  border-radius: 8px;
  color: #1e1e1e;
  font-size: 28px;
  font-weight: 500;
}

.section {
  color: #fff;
  font-size: 28px;
  margin-top: @space-gap;
  .lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    .empty{
      width:100%;
      text-align: center;
      .van-image{
        width:160px;
        margin: 100px 0 30px 0;
        p{
          font-size: 30px;
        }
      }
    }
    .item {
      position: relative;
      width: 100%;
      margin-bottom: @space-gap;
      padding-bottom: @space-gap;
      text-align: center;
      background-color: @bg-card-color;
      border-radius: 8px;
      overflow: hidden;
      .van-image {
        border-radius: 10px;
        overflow: hidden;
        width: 690px;
        height: 400px;
        margin-bottom: @space-gap;
        &.grayImage{
          /deep/img{
            -webkit-filter: grayscale(100%);
          }
        }
      }
      .desc {
        position: absolute;
        left: 0;
        top: 0;
        padding: @space-gap;
        font-size: 24px;
        text-align: left;
        line-height: 40px;
      }
      p {
        font-size: 28px;
      }
      dl {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 0 @space-gap;
        dt {
          width: 56%;
          text-align: left;
        }
        dd {
          width: 40%;
        }
        p {
          color: #666;
          font-size: 26px;
        }
      }
      h3 {
        font-size: 32px;
        font-weight: 500;
        margin: 0 0 20px;
        display: flex;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        > span {
          // display: inline-block;
          font-size: 24px;
          font-weight: 400;
          padding: 0 @space-gap / 2;
          line-height: 44px;
          border-radius: 4px;
          background: @primary-color;
          margin-right: 10px;
        }
      }
      button {
        display: inline-block;
        line-height: 64px;
        height: 64px;
        border: 2px solid @primary-color;
        color: @primary-color;
        font-weight: 500;
        padding: 0 40px;
        background-color: transparent;
        border-radius: 8px;
        &.end-button{
          border:2px solid #4d4c4d;
          color:#fff;
        }
      }
    }
  }
}
</style>