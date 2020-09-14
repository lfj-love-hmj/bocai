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
      <van-cell v-for="(item, index) in lists" :key="index">
        <div class="event-item" slot="default" @click="onClick(item)">
          <van-image :src="item.h5_index_pic" fit="cover" lazy />
          <!-- <template v-if="nav && nav.name === 'latest'">
          <span v-if="item.is_new" :class="['tag', 'new']">new</span>
          <span v-else-if="item.is_hot" :class="['tag', 'hot']">hot</span>
        </template>
        <template v-else>
          <span v-if="item.is_hot" :class="['tag', 'hot']">hot</span>
          <span v-else-if="item.is_new" :class="['tag', 'new']">new</span>
        </template> -->
          <div class="info">
            <h3>
              <!-- <span
                :class="[
                  { vip: tab.title.slice(0, -2) == 'VIP' },
                  { new: tab.title.slice(0, -2) == '新手' },
                  { special: tab.title.slice(0, -2) == '专题' },
                  { original: tab.title.slice(0, -2) == '常规' },
                  { limit: tab.title.slice(0, -2) == '限时' }
                ]"
              > -->
              <span
                v-if="item.b_type"
                :class="[tagType[item.b_type].text]"
              >
                <!-- {{ tab.title.slice(0, -2) }} -->
                {{tagType[item.b_type].name}}
              </span>
              {{ item.name }}
            </h3>
            <div class="subinfo">
              <p>{{ item.h5_sub_title }}</p>
              <div class="action">
                <span>查看详情</span>
                <van-icon name="arrow" />
              </div>
            </div>
          </div>
        </div>
      </van-cell>
    </van-list>
    <div class="list-empty" v-if="!loading && lists.length === 0">
      <p>我们正在为您准备更多活动哦！</p>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import { allbenefit } from "@/api/activity";
export default {
  name: "EventList",
  props: ["tab"],
  data() {
    return {
      lists: [],
      // finishedText: '我们正在为您准备更多活动哦！',
      finishedText: "",
      total: 0,
      pageNo: 1,
      loading: false,
      finished: false,
      tagType: {
        5: {text: 'vip', name: 'VIP'},
        1: {text: 'new', name: '新手'},
        3: {text: 'special', name: '专题'},
        2: {text: 'original', name: '常规'},
        4: {text: 'limit', name: '限时'},
      }
    };
  },
  created() {
    this.loadData();
  },
  // computed: {
  //   ...mapState('games', ['gameCatesPlatforms']),
  //   ...mapState('global', ['gameSearch'])
  // },
  methods: {
    // ...mapActions('games', [
    //   'getAllGameCatesPlatforms'
    // ]),
    onLoad() {
      // this.loadData()
    },
    loadData(reload) {
      this.$loading({
        mask: false
      });
      const { tab, pageNo } = this;
      const params = {
        b_type: tab.id,
        page: pageNo
      };
      allbenefit(params).then(res => {
        const { code, data, msg } = res.data;
        console.log(888, data, this.loading)
        if (code === 0) {
          this.lists = reload ? data.data : this.lists.concat(data.data);
          this.total = data.total;
          this.pageNo++;
          // if (this.pageNo > data.last_page) {
          //   this.finished = true
          // }
          this.finished = true;
          this.loading = false;
        } else {
          console.log(msg);
        }
        this.$toast.clear();
      });
    },
    onClick(item) {
      const { url, id } = item;
      const activityMaps = {
        // 玩趣聚宝盆
        52: "interestRate",
        // 对冲基金
        53: "fund",
        // vip多重礼金
        // 54: '',
        // 好友推荐
        55: "invitation",
        // 签到活动
        56: "sign",
        // 顶级模特、美女派送
        57: "welfare",
        // 六重奖
        61: "sixGift",
        // 借贷宝
        69: "loanTreasure",
        // VIP专享福利
        70: "VIP专享福利"
        // 新手注册
        // /activity/seminar
      };

      // 后台配置了url的
      if (url) {
        // 第三方链接url
        if (url.startsWith("http") || url.startsWith("//")) {
          window.open(url, "thirdActivity");
        } else if (url.startsWith("/")) {
          this.$router.push({
            path: url,
            query: {
              id
            }
          });
        } else {
          this.$router.push({
            path: url
          });
        }
        return;
      }

      // 后台没有配置url
      if (id in activityMaps) {
        this.$router.push({
          name: activityMaps[id],
          query: {
            id
          }
        });
        return;
      }

      this.$router.push({
        name: "activitiesDetails",
        params: {
          id
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.events {
  display: flex;
  flex-wrap: wrap;
  /deep/ .van-cell {
    position: relative;
    width: 100%;
    margin-bottom: @space-gap;
    background: @bg-card-color;
    border: 2px solid @border-color-base;
    padding: 0;
    border-radius: 8px;
    overflow: hidden;
    &:after {
      border-bottom: none !important;
    }
    .event-item {
      color: #fff;
      position: relative;
      .tag {
        width: 100px;
        height: 100px;
        position: absolute;
        right: 0;
        top: 0;
        text-align: center;
        padding-top: 70px;
        line-height: 30px;
        font-size: 20px;
        background-image: linear-gradient(to right, #ff9a5d, #ff3937);
        text-transform: uppercase;
        transform: rotate(45deg) translate(-20%, -20%);
        transform-origin: 100% 100%;
        &.new {
          background-image: linear-gradient(to right, #05d0da, #279cf8);
        }
      }
      .info {
        padding: @space-gap;
        font-size: 26px;
        color: #666;
        h3 {
          font-size: 32px;
          margin: 0;
          color: #fff;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          span {
            width: 88px;
            height: 44px;
            border-radius: 4px;
            font-size: 24px;
            line-height: 44px;
            text-align: center;
            margin-right: 20px;
            &.vip {
              background: linear-gradient(
                90deg,
                rgba(200, 167, 127, 1) 0%,
                rgba(171, 138, 97, 1) 99%
              );
            }
            &.new {
              background: linear-gradient(
                135deg,
                rgba(255, 154, 93, 1) 0%,
                rgba(255, 57, 55, 1) 100%
              );
            }
            &.special {
              background: linear-gradient(
                135deg,
                rgba(123, 133, 232, 1) 0%,
                rgba(85, 96, 209, 1) 100%
              );
            }
            &.original {
              background: linear-gradient(
                135deg,
                rgba(70, 70, 70, 1) 0%,
                rgba(56, 56, 56, 1) 100%
              );
            }
            &.limit {
              background: linear-gradient(
                130deg,
                rgba(215, 93, 255, 1) 0%,
                rgba(181, 67, 226, 1) 100%
              );
            }
          }
        }
      }
      .subinfo {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding-top: @space-gap / 2;
        p {
          padding-right: 20px;
          line-height: 40px;
        }
        .action {
          color: #b1b1b1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 160px;
          line-height: 40px;
          white-space: nowrap;
        }
        .van-icon {
          font-size: 36px;
          color: #666;
        }
      }
    }
  }
  .van-image {
    width: 690px;
    height: 240px;
  }
  /deep/ .van-list__loading {
    width: 100%;
    margin-left: @space-gap;
    padding-bottom: @space-gap;
  }
}

.list-empty {
  width: 100%;
  color: #666;
  text-align: center;
}
</style>
