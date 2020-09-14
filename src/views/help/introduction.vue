<template>
    <div class="list" :style="{marginTop: $route.query.source && '10px'}">
      <template v-for="(item,i) in content">
        <van-image v-show="i != 0" fit="cover" lazy-load :key="i" :src="item.h5_index_pic" alt="" />
      </template>
    </div>
</template>

<script>
  import Lheader from '@/components/l-header'
  import { staticpage } from '@/api/personalData'
  import { strength } from '@/api'

  export default {
    components: {
      Lheader
    },
    data () {
      return {
        content: []
      }
    },
    created () {
      this.isLoading = true
      strength({
        merchant_no: process.env.VUE_APP_MERCHANT_NO
      }).then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.content = res.data.data
          // for (let i = 0; i < res.data.data.length; i++) {
          //   if (res.data.data[i].title === '关于我们') {
          //     this.content = res.data.data[i].content
          //     break
          //   }
          // }
        }
      }).finally(() => {
        this.isLoading = false
      })
    }
  }
</script>

<style scoped lang="less">
    .list {
      margin-top: 20px;
      font-size: 32px;
      font-weight: 400;
      color: @primary-text-color;
      line-height: 44px;
      /deep/h3{
        font-size: 30px;
        font-weight: bolder;
      }
      /deep/p{
        text-align:justify;
        font-size: 22px;
        text-indent: 44px;
      }
      /deep/a{
        color:@primary-color;
      }
      img{
        width:100%;
      }
    }
</style>
