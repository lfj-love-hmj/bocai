<template>
  <div class="aa-group">
    <h2><span>集团旗下</span></h2>
    <ul class="groups">
      <li
        v-for="(item, index) in groups"
        :key="index"
        :class="[item.name]"
        @click="go(item.link)"
      >
        <van-image
          fit="cover"
          lazy-load
          :src="require(`@assets/img3_0/footer/${item.icon}`)"
        />
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AAGroup',
  data () {
    return {
      groups: [{
        title: 'AA集团',
        name: 'aa',
        icon: 'icon-aa@2x.png',
        link: 'https://m.ace-advanture.com/'
      }, {
        title: 'AA贵宾厅',
        name: 'aavip',
        icon: 'icon-aavip@2x.png',
        link: 'https://m.aagbt.com/'
      }, {
        title: 'AA电投',
        name: 'aadt',
        icon: 'icon-aadt@2x.png',
        link: 'https://m.aadiantou.com/'
      }, {
        title: 'AA游艇会',
        name: 'aayt',
        icon: 'icon-aayt@2x.png',
        link: 'https://m.aayth.com/'
      }, {
        title: 'AA俱乐部',
        name: 'aaclub',
        icon: 'icon-aaclub@2x.png',
        link: 'https://m.aavipjlb.com/'
      }]
    }
  },
  methods:{
    go(val) {
      window.open(val,'_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.aa-group{
  background-color: @bg-color;
  border-radius: 8px;
  padding: @space-gap;
  margin-bottom: @space-gap;
  h2{
    position: relative;
    text-align: center;
    margin: 0 0 @space-gap;
    span{
      position: relative;
      z-index: 2;
      background-color: @bg-color;
      padding: 0 20px;
      font-size: 32px;
      font-weight: 500;
      color:#ccc;
    }
    &:before,
    &:after{
      content: '';
      width: 45%;
      height: 2px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    &:before{
      left: 0;
      background-image: linear-gradient(to right, rgba(#C8962B, 0), #C8962B);
    }
    &:after{
      right: 0;
      background-image: linear-gradient(to right, #C8962B, rgba(#C8962B, 0));
    }
  }
  .groups{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    >li{
      width: percentage(1/3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: #CCC;
      margin: 15px 0;
      .van-image{
        margin-right: 10px;
      }
      &.aa{
        .van-image{
          width: 32px;
          height: 38px;
        }
      }
      &.aavip{
        .van-image{
          width: 28px;
          height: 38px;
        }
      }
      &.aadt{
        .van-image{
          width: 40px;
          height: 42px;
        }
      }
      &.aayt{
        .van-image{
          width: 54px;
          height: 26px;
        }
      }
      &.aaclub{
        .van-image{
          width: 42px;
          height: 36px;
        }
      }
    }
  }
}
</style>