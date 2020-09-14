<style lang="less" scoped>
    .van-popup {
        height: 844px;
        display: flex;
        flex-direction: column;
        .aagames-login-header {
            height: 100px;
        }
        .aagames-nav-bar{
          background-color: @bg-card-color;
          color: #fff !important;
        }
        .index-bar {
            flex: 1;
            display: flex;
            height: 744px;
            .index-anchor {
                padding: 0 20px;
                font-size: 28px;
                font-weight: 400;
                color: @primary-text-color;
                line-height: 80px;
            }
            .wrapper {
                height: 744px;
                flex: 1;
                overflow: scroll;
                -webkit-overflow-scrolling: touch;
            }
            .cell {
                padding: 0 20px;
                font-size: 28px;
                font-weight: 400;
                color: #CCCCCC;
                line-height: 80px;
                display: flex;
                .left {
                    flex: 1;
                }
            }
            .select {
                color: rgba(245, 245, 245, 1);
            }
            .index-bar__sidebar {
                width: 40px;
                position: static;
                transform: none;
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: center;
                .index-bar__index {
                    text-align: right;
                    padding-right: 15px;
                    box-sizing: border-box;
                    font-size: 20px;
                    font-weight: 400;
                    color: rgba(82, 81, 82, 1);
                    line-height: 33px;
                    cursor: pointer;
                }
            }
        }
    }
    .btnCode{
        // min-width:80px;
        // height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .popup {

    }
</style>

<template>
    <div v-if="yaboShow || esportShow">
        <van-popup @click.stop="" position="bottom" v-model="show" :close-on-click-overlay="true" get-container="#app" class="yabo-phoneselect esport-phoneselect">
            <lheader id="phoneArea" title="选择号码地区" :isPopup="true" :step="2" :kefu="true" @goback="show =false"></lheader>
            <div class="index-bar">
                <div class="wrapper" ref="wrapper">
                    <div v-for="(i) in indexList" :key="i" :ref="'anchor'+i">
                        <div class="index-anchor">{{i === '*'?'常用':i}}</div>
                        <div class="cell" :class="{select:j[2] == value}" v-if="list[i]" v-for="(j,k) in list[i]"
                             :key="i + k"
                             @click="onConfirm(j[2])">
                            <div class="left">{{j[1]}}</div>
                            <div class="rigth">+{{j[2]}}</div>
                        </div>
                    </div>
                </div>
                <div class="index-bar__sidebar">
                    <div class="index-bar__index" v-for="(i,index) in indexList"
                         @click.stop="onShortcutStart(i)"

                         :key="index">{{i}}
                    </div>
                </div>
            </div>
        </van-popup>
        <div class="btnCode" @click="onShow">
            <slot></slot>
        </div>

    </div>
  <div v-else>
    <van-popup @click.stop="" v-model="show" position="bottom" :close-on-click-overlay="true" get-container="#app">
      <lheader id="phoneArea" title="选择号码地区" :isPopup="true" :step="2" :kefu="true" @goback="show =false"></lheader>
      <div class="index-bar">
        <div class="wrapper" ref="wrapper">
          <div v-for="(i) in indexList" :key="i" :ref="'anchor'+i">
            <div class="index-anchor">{{i === '*'?'常用':i}}</div>
            <div class="cell" :class="{select:j[2] == value}" v-if="list[i]" v-for="(j,k) in list[i]"
                 :key="i + k"
                 @click="onConfirm(j[2])">
              <div class="left">{{j[1]}}</div>
              <div class="rigth">+{{j[2]}}</div>
            </div>
          </div>
        </div>
        <div class="index-bar__sidebar">
          <div class="index-bar__index" v-for="(i,index) in indexList"
               @click.stop="onShortcutStart(i)"

               :key="index">{{i}}
          </div>
        </div>
      </div>
    </van-popup>
    <div class="btnCode" @click="onShow">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import { phoneareav3 } from '@/api/login'
  import Lheader from '@/components/l-header'

  phoneareav3
  export default {
    name: 'PhoneArea',
    components: {
      Lheader
    },
    data () {
      return {
        show: false,
        scroll: '',
        scrollY:0,
        list: {
          '*': []
        },
        indexList: [
          '*',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'R',
          'S',
          'T',
          // 'W',
          // 'X',
          'Y',
          'Z',
        ],
        yaboShow:['10024','10022','10023','10025','10026','10027','10028','10029','10033'].includes(process.env.VUE_APP_PROJECT_NAME),
        esportShow:['10050'].includes(process.env.VUE_APP_PROJECT_NAME),
      }
    },
    props: {
      value: {
        type: [Number, String],
        default: '86'
      }
    },
    mounted () {
      console.log(['10024'].includes(process.env.VUE_APP_PROJECT_NAME),process.env.VUE_APP_PROJECT_NAME)
      phoneareav3().then(({data}) => {
        if (data.code === 0) {
          data.data.forEach(item => {
            let items = item.split('-')
            let index = items[0].substring(0, 1)
            if (!this.list[index]) {
              this.list[index] = []
            }
            if (['中国', '香港', '日本', '台湾', '泰国', '韩国', '新加坡'].indexOf(items[1]) > -1 || items[1].indexOf('中国') > -1) {
              this.list['*'].push(items)
            }
            this.list[index].push(items)
          })
        }
      })
    },
    methods: {
      onShow () {
        this.show = true
        // this.$nextTick(() => {
        //   this.scroll = new BScroll(this.$refs.wrapper, {
        //     scrollY: true,
        //     click: true,
        //     probeType: 3,
        //   })
        //   // 监听Y轴偏移的值
        //   this.scroll.on('scroll', (pos) => {
        //     this.scrollY = pos.y
        //   })
        //
        // })
      },
      onShortcutStart (i) {
        // 获取到绑定的 index
        let index = this.$refs['anchor' + i]
        this.$refs.wrapper.scrollTop = index[0].offsetTop-100
      },
      onConfirm (val) {
        this.$emit('input', val - 0)
        this.show = false
      }
      ,
      onCancel () {

      }
    }
  }
</script>
