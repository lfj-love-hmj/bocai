
<style scoped lang="less">
  .steps{
    margin: 0 auto;
    width: 100%;
    padding: 60px 30px;
    background: #fff;
    ul{
      display: flex;
      align-items: flex-start;
      justify-content: center;
      li{
        color: #999 !important;
        flex: 1;
        text-align: center;
        font-size: 24px;
        p{
          position: relative;
          height: 60px;
          margin-bottom: 10px;
          color: #fff;
          &:before{
            content: '';
            position: absolute;
            width: 100%;
            height: 8px;
            background: #999999;
            left: 0;
            top: 50%;
            margin-top: -4px;
          }
          &:after{
            content: '';
            position: absolute;
            width: 50px;
            height: 50px;
            background: #999999;
            left: 50%;
            margin: -25px 0 0 -25px;
            top: 50%;
            border-radius: 8px;
            transform: rotate(45deg);
          }
          span{
            position: relative;
            z-index: 2;
            font-size: 24px;

            font-weight: bold;
            line-height: 60px;
          }
        }
        &:first-child{
          &:before{
            display: none;
          }
        }
        &.active{
          color: #fff;
          .iconfont{
            background-color: #BE8D24;
            color: #fff;
          }
          &:before{
            background-color: #BE8D24;
          }
          p{
            color: #fff;
            &:before,&:after{
              background-color: #0FC59E;
            }
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
        <li v-for="(item, index) in steps1" :key="index" :class="{ active: step >= index + 1  }">
          <p><span>{{index+1}}</span></p>
          {{ item.title }}
        </li>
        <!--<van-steps :active="active" active-color="#4B93FF">-->
          <!--<van-step v-for="(item, index) in steps1" :key="index">{{ item.title }}</van-step>-->
        <!--</van-steps>-->
      </template>
      <template v-else-if="type == 2">
        <li v-for="(item, index) in steps2" :key="index" :class="{ active: step >= index + 1  }">
          <p><span>{{index+1}}</span></p>
          {{ item.title }}
        </li>
        <!--<van-steps :active="active">-->
          <!--<van-step v-for="(item, index) in steps2" :key="index">{{ item.title }}</van-step>-->
        <!--</van-steps>-->
      </template>
      <template v-else-if="type == 3">
        <li v-for="(item, index) in steps3" :key="index" :class="{ active: step >= index + 1  }">
          <p><span>{{index+1}}</span></p>
          {{ item.title }}
        </li>
        <!--<van-steps :active="active">-->
          <!--<van-step v-for="(item, index) in steps3" :key="index">{{ item.title }}</van-step>-->
        <!--</van-steps>-->
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
      title: '身份验证'
    }, {
      icon: 'password',
      title: '重置密码'
    }];
    const steps2 = [{
      icon: 'user',
      title: '输入您的账号'
    }, {
      icon: 'safety',
      title: '身份验证'
    }, {
      icon: 'password',
      title: '设置新密保问题'
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
      steps3,
      active:0
    }
  }
}
</script>

