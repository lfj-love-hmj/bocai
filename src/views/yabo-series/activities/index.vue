
<template>
  <div class="activities">
    <van-nav-bar
      class="m-header a"
      :title="title"
      :fixed="true"
    />
    <vtabbar class="m-footer" :index="1"></vtabbar>
    <div class="m-body">
      <van-tabs
        class="custom-card-tabs"
        v-model="active"
        type="line"
        sticky
        animated
        swipeable
        :title-active-color="$colorjs.baseColor"
        title-inactive-color="#7B8BAB"
        :swipe-threshold="4"
      >
        <van-tab
          v-for="(item, index) in tabList"
          :key="index"
          :title="item.title"
        >
          <List :tab="item" />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vtabbar from "../components/v-tabbar"
import List from './components/list'
// import Loading from '@/components/loading'
// import TLoading from '@/components/t-loading'
import { allbenefit } from "@/api/activity"

export default {
  name: 'activity',
  components: {
    Vtabbar,
    // Loading,
    // TLoading,
    List
  },
  data () {
    return {
      title: '优惠活动',
      active: 0,
      tabList: [
        // 1: "新手红利"
        // 2: "常规红利"
        // 3: "专题红利"
        // 4: "限时红利"
        // 5: "VIP红利"
        {
          id: 0,
          title: "全部红利",
          img: '',
          imgActive: ''
        },
        {
          id: 5,
          title: "VIP红利",
          img: '',
          imgActive: ''
        },
        {
          id: 1,
          title: "新手红利",
          img: '',
          imgActive: ''
        },
        {
          id: 3,
          title: "专题红利",
          img: '',
          imgActive: ''
        },
        {
          id: 2,
          title: "常规红利",
          img: '',
          imgActive: ''
        },
        {
          id: 4,
          title: "限时红利",
          img: '',
          imgActive: ''
        },
      ]
    };
  },
  created() {
    // this.onRefresh();
  },
  methods: {
  }
};
</script>

<style scoped lang="less" src="@assets/styles/custom-tabs.less" />
<style scoped>
  /deep/ .van-nav-bar__title{
    font-weight: bold;
  }
  /deep/ .events.van-list{
    background-color: transparent;
  }
</style>
