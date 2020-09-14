<template>
  <div class="notice" @click="noticeView">
    <img v-if="$projectname === '10050'" :src="$imgs['otherIcon/icon_info@2x']" alt="">
    <van-icon v-else name="volume-o" />
    <van-swipe
      v-if="lists.length"
      :autoplay="4000"
      vertical
      @change="onChange"
      :show-indicators="false"
    >
      <van-swipe-item
        v-for="(item, index) in lists"
        :key="index"
      >{{ item.content }}</van-swipe-item>
    </van-swipe>
    <a class="action">查看<van-icon name="arrow" /></a>
  </div>
</template>

<script>
import { sitenotice } from '@/api/news'
export default {
  data () {
    return {
      lists: [],
      selected: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      sitenotice({
        merchant_no: process.env.VUE_APP_MERCHANT_NO,
        page: 1,
        size: 10000
      }).then(res => {
        if (res.data.code === 0) {
          this.lists = res.data.data.data
          this.onChange(0)
        }
      })
    },
    noticeView () {
      const { selected } = this
      this.$router.push({
        name: 'newsDetail',
        query: {
          id: selected.id,
          type: 1,
          title: selected.title,
          content: selected.content,
          created_at: selected.created_at,
          updated_at: selected.updated_at,
          from:'Home'
        }
      })
    },
    onChange (index) {
      this.selected = this.lists[index]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@assets/styles/notice/index.less';

  .notice{
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 15px;
  line-height: 50px;
  color: #ccc;
  margin-top: 30px;
  border: 2px solid @color-notice;
  border-radius: 70px;
  box-shadow: 0px 0.1067rem 0.4267rem 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  /deep/ .van-icon {
    width: 30px;
    height: 30px;
    font-size: 30px;
  }
  .van-swipe{
    width: 100%;
    height: 50px;
    margin: 0 15px;
    /deep/ .van-swipe-item{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  a{
    position: relative;
    display: flex;
    white-space: nowrap;
    align-items: center;
    padding-left: 15px;
    .van-icon{
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    &:before{
      content: '';
      width: 2px;
      height: 28px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: @bg-color;
    }
  }
}
</style>
