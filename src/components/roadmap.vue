<template>
  <div class="roadmap">
    <div class="roadmap-item">
      <div class="canvas">
        <canvas ref="canvas"></canvas>
        <div v-if="roadmapDatas.noopen" data-noopen ref="noopen">发牌中...</div>
      </div>
      <div class="mapinfo" ref="mapinfo" v-if="canvasOnReady">
        <div class="countdown">{{ secondsStr }}</div>
        <!-- <p>第<span data-round>{{ roadmapDatas.roundCount }}</span>局，距离本局结束</p> -->
        <p>距离本局结束</p>
        <a @click="play">快速入桌</a>
      </div>
      <div class="table-info" v-if="canvasOnReady">
        <h4>
          <em>{{ vid.replace('00', '0') }}</em>
          <span>{{ tableTtileMaps[roadmapDatas.gameType] }}</span>
          <!-- <span @click="randomVid">换一换</span> -->
        </h4>
        <div class="roadmap-statistics">
          <label data-banker>
            <span>庄</span>
            <span class="c-banker">{{ statistics.bankerNum }}</span>
          </label>
          <label data-tie>
            <span>和</span>
            <span class="c-tie">{{ statistics.tieNum }}</span>
          </label>
          <label data-player>
            <span>闲</span>
            <span class="c-player">{{ statistics.playerNum }}</span>
          </label>
        </div>
      </div>
    </div>
    <Loading :isShow="!canvasOnReady" />
  </div>
</template>

<script>
import RoadMap from '@/utils/roadmap'
import Loading from '@/components/loading'
import io from 'socket.io-client'
export default {
  props: {
    // vids: {
    //   type: Array,
    //   default: () => ['B001']
    // },
    defaultVid: {
      type: String,
      default: ''
    },
    canvasWidth: {
      type: Number,
      default: 380
    },
    canvasHeight: {
      type: Number,
      default: 140
    },
    cellSize: {
      type: Number,
      default: 20
    },
    lineWidth: {
      type: Number,
      default: .5
    },
    zoom: {
      type: Number,
      default: 2
    },
    gameData: {
      type: [Object, Array]
    },
    type: {
      type: String,
      default: 'index'
    }
  },
  components: {
    Loading
  },
  data () {
    const tableTtileMaps = {
      'BAC' : '经典百家乐',
      'CBAC': '包桌百家乐',
      'TBAC': '竞咪百家乐',
      'LBAC': '现场百家乐',
      'SBAC': '保险百家乐',
      'BBAC': '龙宝百家乐',
      'SHB' : '骰宝',
      'DT'  : '龙虎',
      'ROU' : '轮盘',
      'TEB' : '二八杠',
      'NN'  : '牛牛'
    }
    return {
      tableTtileMaps,
      canvas: null,
      roadmap: null,
      canvasOnReady: false,
      // canvasCached: [],
      // roadmapCached: []
      vid: '',
      vids: [],
      allTables: null,
      tableTypes: [],
      timer: null,
      secondsStr: '00:00',
      // 庄、闲、和
      statistics: {},
      roadmapDatas: {}
    }
  },
  mounted () {
    this.getVid()
    // this.initRoadMap()
    // const { canvasWidth, canvasHeight, zoom } = this
    const { cellSize, lineWidth } = this
    const { canvasHeight, zoom } = this
    let offsetWidth = null
    if(['wanqu'].includes(this.$projectname) && this.type === 'casion') {
      offsetWidth = document.getElementsByClassName('canvas')[1].offsetWidth
    } else {
      offsetWidth = document.getElementsByClassName('canvas')[0].offsetWidth
    }
    const size = cellSize + lineWidth
    const canvasWidth = Math.floor(offsetWidth / size) * size
    const canvas = this.$refs.canvas 

    this.noopen = this.$refs.noopen

    canvas.width = canvasWidth * zoom
    canvas.height = canvasHeight * zoom
    canvas.style.zoom = 1/zoom

    this.canvas = canvas.getContext('2d')

    this.connectSocket()
  },
  methods: {
    play () {
      this.$playGame(this.gameData,'真人')
    },
    // 随机vid
    randomVid () {
      this.$emit('change')
      this.$forceUpdate()
    },
    getVid () {
      const vids = ['D051', 'D052', 'D053','D054','D055','D056','D058']
      const { defaultVid } = this
      return this.vid = defaultVid ? defaultVid : vids[Math.floor(Math.random() * vids.length)]
    },
    initRoadMap (data) {
      this.getGameTables(data)
      const { canvas, canvasWidth, canvasHeight, zoom, cellSize, vid, allTables } = this
      const gameType = allTables[vid]
      this.roadmap = RoadMap({
        canvas,
        canvasWidth,
        canvasHeight,
        cellSize,
        gameType,
        // strokeWidth: 2,
        // lineWidth: 1,
        // gridColor: '#000000',
        zoom: zoom
      })
      // window.roadmap = this.roadmap
      this.canvasOnReady = true
    },
    getGameTables (datas) {
      const vids = []
      const allTables = {}
      const { tableTypes, vid } = this
      for (const key in datas) {
        if (datas.hasOwnProperty(key)) {
          const data = datas[key]
          const gameType = data['gameType']
          allTables[key] = gameType
          if (tableTypes.indexOf(gameType) < 0) {
            tableTypes.push(gameType)
          }
          if (data.roundCount > 0) {
            if (gameType == 'BAC' || gameType == 'CBAC') {
              vids.push(key)
            }
          }
        }
      }

      // 如果没有默认的桌台
      if (!vid) {
        const idx = Math.floor(Math.random() * vids.length)
        vid = vids[idx]
      }

      this.vid = vid
      this.allTables = allTables
      this.vids = vids
    },
    countdown () {
      const vm = this
      vm.countdownStop()
      vm.timer = setInterval(() => {
        vm.roadmapDatas.seconds--
        if (vm.roadmapDatas.seconds <= 0) {
          vm.roadmapDatas.seconds = 0
          vm.countdownStop()
        }
        this.formatSeconds()
      }, 1000)
    },
    countdownStop () {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    formatSeconds () {
      let { seconds } = this.roadmapDatas
      // 不存在或为0
      if (!seconds) {
        return this.secondsStr = '00:00'
      }
      const str = '0000'
      seconds += ''
      seconds = str.substr(0, str.length - seconds.length) + seconds
      seconds = seconds.split('')
      this.secondsStr = seconds[0] + seconds[1] + ':' + seconds[2] + seconds[3]
    },
    formatStatistics (vid) {
      // this.sumbig = 0
      // this.sumsmall = 0
      // this.sumdan = 0
      // this.sumshuang = 0
      // this.baozi = 0
      // this.diceDrawCount = 0
      const { roadmap, statistics } = this
      const { gameType } = this.roadmapDatas
      const {
        sumbig,
        sumsmall,
        sumdan,
        sumshuang,
        baozi,
        bankerNum,
        playerNum,
        tieNum
      } = roadmap
      Object.assign(statistics, {
        sumbig,
        sumsmall,
        sumdan,
        sumshuang,
        baozi,
        bankerNum,
        playerNum,
        tieNum
      })
    },
    connectSocket () {
      const socketHost = window.location.protocol === 'http' ?
        'http://roadmap.9mbv.com:8080' : 'https://roadmap.9mbv.com:7070'
      const socket = io(socketHost)
      socket.on('connect', () => {
        console.log('socket connected')
      })
      socket.on('connect_error', () => {
        console.log('服务器链接失败！请点击刷新按钮重试')
      })
      socket.on('result list', (msg) => {
        this.onResultList(msg)
      })
      socket.on('new shoes', (msg) => {
        this.onNewShoes(msg)
      })
      socket.on('new round', (msg) => {
        this.onNewRound(msg)
      })
      socket.on('close round', (msg) => {
        this.onCloseRound(msg)
      })
    },
    // 初始化获取到结果
    onResultList (msg) {
      const datas = JSON.parse(msg)

      !this.canvasOnReady && this.initRoadMap(datas)

      const { canvas, roadmap, vid, canvasWidth, canvasHeight } = this
      const data = datas[vid]
      // {
      //   dealer: "Gabby"
      //   gameType: "BAC"
      //   gmcode: "GB001198100M0"
      //   roundCount: 68
      //   roundRes: {…}
      //   seconds: 23
      //   shoeCode: "32285Hí	,õ0í"
      //   vid: "B001"
      // }
      // console.log('result list: ' + vid, data)

      if (data['roundCount']) {
        this.roadmapDatas.noopen = false
      }

      // 清除所有数据
      roadmap.removeAll()
      // 设置数据
      roadmap.setIList(data)
      // 清空画布
      roadmap.clearDraw(canvas, canvasWidth, canvasHeight)
      // countdown(vid)
      // 画网格线
      roadmap.drawPath()
      // 画露珠图
      roadmap.drawBeads()
      // 到计时
      // secondsCached[vid] = data['seconds']
      // this.roadmapDatas.
      // 显示总局数等信息
      // roadmap.drawTotal(_cvs)
      // roundCached[vid].text(data['roundCount'])
      this.roadmapDatas = Object.assign({}, this.roadmapDatas, {
        gameType: data.gameType,
        gmcode: data.gmcode,
        roundCount: data.roundCount,
        seconds: data.seconds
      })
      this.countdown()
      this.formatStatistics()
    },
    // 新牌靴
    onNewShoes(msg) {
      const data = JSON.parse(msg)
      const _vid = data['vid']
      const { canvas, roadmap, vid, canvasWidth, canvasHeight } = this
      if (vid === _vid) {
        // dealer: "Gabby"
        // gameType: "BAC"
        // gmcode: "GB001198100M3"
        // roundCount: 0
        // roundRes: {}
        // seconds: 23
        // shoeCode: "32286o.cp"
        // vid: "B001"
        // console.log('new shoes', data)

        this.roadmapDatas.noopen = true

        // 清除所有数据
        roadmap.removeAll()
        // 清空画布
        roadmap.clearDraw(canvas, canvasWidth, canvasHeight)
        // countdown(vid)
        // 画网格线
        roadmap.drawPath()
        // 画露珠图
        roadmap.drawBeads()
        this.roadmapDatas = Object.assign({}, this.roadmapDatas, {
          gameType: data.gameType,
          gmcode: data.gmcode,
          // roundCount: data.roundCount,
          roundCount: 1,
          seconds: data.seconds
        })
        this.formatStatistics()
      }
    },
    // 开始新局（发牌）
    onNewRound(msg) {
      const data = JSON.parse(msg)
      const _vid = data['vid']
      // const { canvas, roadmap, vid, canvasWidth, canvasHeight } = this
      // {vid: "B001", dealer: "Mara", gmcode: "GB001198100JC", seconds: 23}
      if (_vid === this.vid) {
        // console.log('new round', data)
        this.roadmapDatas = Object.assign({}, this.roadmapDatas, {
          // gmcode: data.gmcode,
          seconds: data.seconds,
          noopen: false
        })
        this.countdown()
      }
    },
    // 结束一局
    onCloseRound(msg) {
      const data = JSON.parse(msg)
      const _vid = data['vid']
      const _gmcode = data['gmcode']
      const { canvas, roadmap, vid, canvasWidth, canvasHeight } = this
      // {
      //   banker_val: "1",
      //   card_num: "5",
      //   gmcode: "GB001198100L9",
      //   pair: "0",
      //   player_val: "7",
      //   round: 42,
      //   timestamp: 1565445242912,
      //   vid: "B001"
      // }
      if (vid === _vid && _gmcode !== this.roadmapDatas.gmcode) {
        // console.log('close round', data)
        // // 清除所有数据
        // roadmap.removeAll()
        // if (data['roundCount']) {
        //   this.roadmapDatas.noopen = false
        // }

        // 停止倒计时
        this.countdownStop()

        // 清除除data外所有数据
        roadmap.removeAllNotDataList()
        // 设置数据
        roadmap.appendIList(data)
        // 清空画布
        roadmap.clearDraw(canvas, canvasWidth, canvasHeight)
        // countdown(vid)
        // 画网格线
        roadmap.drawPath()
        // 画露珠图
        roadmap.drawBeads()
        this.roadmapDatas = Object.assign({}, this.roadmapDatas, {
          gmcode: _gmcode,
          roundCount: data.round,
          noopen: true
        })
        this.formatStatistics()
      }
    }
  }
}
</script>

<style lang="less" scoped>
.roadmap{
  position: relative;
  width: 100%;
  // height: 100%;
  // clear float
  padding: 25px;
  overflow: hidden;
  *{
    font-family: "Din Alternate",Quicksand,"PingFang SC","Hiragino Sans GB","Helvetica Neue","Microsoft Yahei",sans-serif,arial;
  }
  .roadmap-item{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .mapinfo{
    width: 40%;
    text-align: center;
    height: 100%;
    text-align: center;
    font-size: 14px;
    h4,p{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    // h4{
    //   // font-size: 12px;
    //   font-weight: 400;
    //   color: #999;
    //   line-height: 25px;
    //   // margin-top: 20px;
    //   em,span{
    //     display: inline-block;
    //     vertical-align: middle;
    //   }
    //   em{
    //     // @include bootstrap-linear-gradient(#FF6680,rgba(#FF6680,.4),135deg);
    //     background-image: linear-gradient(135deg,#ff6680,rgba(#FF6680,.4));
    //     font-style: normal;
    //     color: #fff;
    //     line-height: 1;
    //     padding: 2px 5px;
    //     border-radius: 2px;
    //     text-transform: uppercase;
    //     margin-right: 5px;
    //   }
    // }
    p{
      color: #999;
      font-size:24px;
      line-height: 40px;
    }
    [data-round]{
      color: #FF6680;
    }
    .countdown{
      color: #fff;
      line-height: 32px;
      font-size: 40px;
      font-weight: 300;
      margin-bottom: 10px;
    }
    a{
      background-color: @primary-color;
      color: @button-color-active;
      width: 160px;
      line-height: 60px;
      text-align: center;
      border-radius: 8px;
      display: inline-block;
      font-size: 28px;
    }
  }
  .canvas{
    width: 60%;
    // height: 80px;
    position: relative;
    [data-noopen]{
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      line-height: 30px;
      text-align: center;
      color: #999;
      font-weight: 300;
      font-size: 30px;
      letter-spacing: 5px;
      transform: translateY(-50%);
      // display: none;
    }
  }
  .roadmap-statistics{
    // @include onepixelboder(#eee,top);
    width: 40%;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    label{
      // width: 50%;
      white-space: nowrap;
      span{
        color: #999;
        display: inline-block;
        vertical-align: middle;
        padding-right: 5px;
      }
    }
    .c-banker{
      color: #FF6666;
    }
    .c-player{
      color: #8095FF;
    }
    .c-tie{
      color: #24b253;
    }
  }
  .table-info{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    h4{
      width: 60%;
      margin: 0;
      font-weight: 400;
      color: #999;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      em,span{
        margin-right: 10px;
      //   display: inline-block;
      //   vertical-align: middle;
      }
      em{
        // @include bootstrap-linear-gradient(#FF6680,rgba(#FF6680,.4),135deg);
        background-image: linear-gradient(135deg,#ff6680,rgba(#FF6680,.4));
        font-style: normal;
        color: #fff;
        line-height: 1;
        padding: 2px 5px;
        border-radius: 2px;
        text-transform: uppercase;
        margin-right: 5px;
      }
    }
  }
  /deep/ .loading{
    position: absolute;
    .logo{
      width: 100px;
      height: 100px;
    }
    .title{
      font-size: 24px;
    }
  }
}
</style>
