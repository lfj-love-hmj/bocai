
<style scoped lang="less">
  .steps{
    margin: 0 auto;
    width: 640px;
    ul{
      display: flex;
      align-items: center;
      justify-content: center;
      li{
        color: #CCCCCC;
        &:first-child{
          &:before{
            display: none;
          }
        }
        &.active{
          color: #F5F5F5;
          font-size: 30px;
          .iconfont{
            background-color: #BE8D24;
            color: #fff;
          }
          &:before{
            background-color: #BE8D24;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="steps">
    <ul>
      <template v-if="type == 1">
        <li v-for="(item, index) in steps1" :key="index" :class="{ active: step === index + 1  }">
          {{ item.title }}
        </li>
      </template>
      <template v-else-if="type == 2">
        <li v-for="(item, index) in steps2" :key="index" :class="{ active: step === index + 1  }">
          {{ item.title }}
        </li>
      </template>
      <template v-else-if="type == 3">
        <li v-for="(item, index) in steps3" :key="index" :class="{ active: step === index + 1  }">
          {{ item.title }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'securityStep',
  props: {
    step: {
      type: Number,
      default: 1
    },
    type: {
      type: Number,
      default: 1
    }
  },
  data () {
    const steps1 = [{
      icon: 'user',
      title: '输入您的账号'
    }, {
      icon: 'safety',
      title: '->身份验证'
    }, {
      icon: 'password',
      title: '->重置密码'
    }];
    const steps2 = [{
      icon: 'user',
      title: '输入您的账号'
    }, {
      icon: 'safety',
      title: '->身份验证'
    }, {
      icon: 'password',
      title: '->设置新密保问题'
    }];
    const steps3 = [{
      icon: 'user',
      title: '输入您的账号'
    }, {
      icon: 'safety',
      title: '->身份验证'
    }, {
      icon: 'password',
      title: '->设置新资金密码'
    }];
    return {
      steps1,
      steps2,
      steps3
    }
  }
}
</script>

