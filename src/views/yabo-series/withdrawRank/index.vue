<template>
  <div class="profits-rank">
    <Header :title="title" />
    <div class="m-body">
      <ul class="rank-info">
        <li>
          <label>{{ info && info.withdraw_today_times | currency('', 0) }}</label>
          <span>今日取款笔数(笔)</span>
        </li>
        <li>
          <label>{{ info && info.withdraw_times | currency('', 0) }}</label>
          <span>当前提款笔数(笔)</span>
        </li>
        <li>
          <label>{{ info && info.time | currency('', 0) }}</label>
          <span>平均到账时间(分)</span>
        </li>
      </ul>
      <div class="ranks">
        <van-image :src="$imgs['memberCenter/ranks@2x']" fit="cover" />
        <ul>
          <li
            v-for="(item, index) in dataRanks"
            :key="index"
            :class="`rank${index + 1}`"
          >
            <span class="amount">{{ item.money | currency('¥') }}</span>
            <b>{{ index + 1 }}</b>
            <span class="name">{{ item.username.slice(-6) }}</span>
          </li>
        </ul>
      </div>
      <div class="latest">
        <h2>最新动态</h2>
        <div class="item"
          v-for="(item, index) in list"
          :key="index"
        >
          <dl class="item-head">
            <dt>
              取款-{{ item.username }}
              <van-image class="yaboUi-levelicon" v-if="yaboUi || esportUi" :src="$imgs['vip/newLevel/grade_normal'+(item.level+1)+'@2x']" />
            </dt>
            <dd>{{ item.money | currency('') }}</dd>
          </dl>
          <dl class="item-body">
            <dt>{{ item.created_at }}</dt>
            <dd>
              <span class="processing green">
                出款成功
                <!-- 处理中( -->
                <!-- <span class="processing-time">14:56</span> -->
                <!-- <van-count-down
                  :time="timeArr[index]"
                  format="mm:ss"/>) -->
              </span>
            </dd>
          </dl>
        </div>
      </div>
      <div class="float-button">
        <van-icon name="youzan-shield" />
        <span>诚信经营 资金保障</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/n-header'
import { withdrawlistinfo, withdrawtopinfo } from '@/api/memberCenter'
import { mapState, mapActions } from 'vuex'

export default {
  name: "WithdrawRank",
  data() {
    return {
      title: '取款排行榜',
      dataRanks: null,
      info: null,
      list: [],
      timeArr:[],
      yaboUi:['10024','10022','10023','10025','10026','10027','10028','10029','10033'].includes(process.env.VUE_APP_PROJECT_NAME),
      esportUi: ['10050'].includes(process.env.VUE_APP_PROJECT_NAME)
    }
  },
  components: {
    Header
  },
  created() {
    this.getData()
  },
  methods: {
    getData () {
      this.$loading()
			Promise.all([
				this.getRanks(),
				this.getLists()
			]).then(res => {
				this.loading = false
				this.$toast.clear()
			});
    },
    getRanks () {
      withdrawtopinfo().then(res => {
        const { code, data } = res.data
        if (code === 0) {
          this.dataRanks = data
        }
      })
    },
    getLists () {
      withdrawlistinfo().then(res => {
        const { code, data } = res.data
        if (code === 0) {
          this.list = data.list
          this.info = data.info
          this.list.map(item => {
            this.timeArr.push(Math.floor(Math.random() * (900000 - 700000+1)) + 700000)
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
@import '~@assets/styles/withdrawRank/index.less';
.m-header.van-nav-bar{
  background-color: @primary-color;
}
.rank-info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: @primary-color;
  >li{
    width: percentage(1/3);
    height: 140px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    label{
      font-size: 60px;
      font-weight: 500;
      margin-bottom: 10px;
    }
  }
}
.ranks{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  // margin-bottom: -140px;
  color: #fff;
  background-color: @primary-color;
  .van-image{
    margin-top: -330px;
  }
  ul{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    padding: 0 @space-gap * 2;
  }
  li{
    width: percentage(1/3);
    display: flex;
    flex-direction: column;
    text-align: center;
    .amount{
      font-size: 24px;
      text-align: center;
      margin-bottom: 80px;
    }
    b{
      font-size: 60px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    &.rank1{
      .amount{
        padding-top: 140px;
      }
      b{
        padding-top: 40px;
      }
    }
    &.rank2{
      order: -1;
      .amount{
        padding-top: 270px;
      }
      b,.name{
        padding-left: 80px;
      }
    }
    &.rank3{
      .amount{
        padding-top: 270px;
      }
      b,.name{
        padding-right: 80px;
      }
    }
  }
}
.latest{
  padding-left: @space-gap;
  padding-top: @space-gap;
  margin-bottom: 150px;
  h2{
    font-weight: 500;
    margin: 0;
    line-height: 40px;
  }
  .item{
    border-bottom: 2px solid #3a3a3a;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .van-image{
      width: 44px;
      height: 44px;
      margin-left: 10px;
    }
  }
  dl{
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #B1B1B1;
    padding-right: @space-gap;
    margin: 0;
    &.item-head{
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 10px;
      dt{
        display: flex;
        align-items: center;
      }
    }
    &.item-body{
      color: #666666;
      .processing{
        .van-count-down{
          font-size: 16px;
        }
        &.green{
          color:#30AD8F;
        }
      }
    }
    dt{
      width: 55%;
    }
    dd{
      width: 45%;
      text-align: right;
    }
  }
}

.float-button{
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 60px;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: @primary-color;
  font-size: 26px;
  color: #1E1E1E;
  text-align: center;
  border-radius: 60px;
  .van-icon{
    font-size: 40px;
  }
}
.latest .item .van-image.yaboUi-levelicon{
  width: 60px;
  height: 64px;
  position: relative;
  top: 50%;
  left: 20px;
  /deep/ img{
    height: auto;
  }
}
</style>
