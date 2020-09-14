<template>
  <div class="xchangepopup">
    <van-popup
      class="custom"
      v-model="show"
      closeable
      round
      close-icon-position="top-left"
      position="bottom"
      get-container="#app"
    >
        <div class="pop-head">
            <h2>X币兑换</h2>
        </div>
        <div class="pop-body list-cells">
            <van-loading v-if="!xchangeData" vertical>加载中...</van-loading>
            <table v-else>
                <thead>
                    <tr>
                        <th>可兑换额度<van-icon @click="showTips" name="question-o" /></th>
                        <th>X币余额</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{xchangeData.canXCoin}}</td>
                        <td>{{xchangeData.xCoinRemain}}</td>
                    </tr>
                </tbody>
            </table>
            <p>兑换X币</p>
            <div class="aagames-form">
                <div class="input">
                    <input type="text" v-model="xcoin" placeholder="请输入兑换X币">
                </div>
            </div>
            <p>等于{{(xcoin/xchangeData.exchange_rate*1).toFixed(2)}}元<span>(兑换比例{{xchangeData.exchange_rate*1}}:1)</span></p>
            <div class="aagames-button-box">
                <van-button :loading="loading" @click="xcoinexchange" type="button" class="aagames-button">立即兑换</van-button>
            </div>
        </div>
    </van-popup>
  </div>
</template>

<script>
import { getxcoininfo, xcoinexchange } from '@/api/memberCenter'
export default {
    name: 'xchangepopup',
    props: ['showXcoin'],
    data() {
        return {
            xchangeData: null,
            show: false,
            xcoin: '',
            loading: false
        }
    },
    watch:{
        showXcoin(val) {
            this.show = val
        },
        show(val) {
            if(val) {
                this.getxcoininfo()
            } else {
                this.$emit('setShow', false)
            }
        }
    },
    methods: {
        getxcoininfo() {
            getxcoininfo().then( res => {
                console.log(res)
                this.xchangeData = res.data.data
            })
        },
        xcoinexchange() {
            this.loading = true
            xcoinexchange({money: this.xcoin}).then(res => {
                this.loading = false
                this.xcoin = ''
                this.$emit('setShow', false)
                this.$store.dispatch("users/getUserInfo");
                this.$toast('兑换成功')
                console.log(res)
            }, err => {
                this.loading = false
            })
        },
        showTips() {
            this.$dialog
                .confirm({
                    title: "兑换提示",
                    message: `按累计充值金额1:1增加可兑换人民币的额度。未充值用户，最多可兑换100人民币(${this.xchangeData.exchange_rate*1*100}X币)。`,
                    messageAlign:'center',
                    showCancelButton: false
                })
                .then(() => {
                // on confirm
                })
                .catch(() => {
                    // this.$openKefu();
                });
        }
    }
}
</script>

<style lang="less" scoped>
    .pop-body {
        flex: 1;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        .aagames-form,.aagames-button-box{
            padding:0;
        }
        .van-loading__text{
            margin-top: 20px;
        }
        p{
            margin: 30px 0;
        }
        table {
            border-radius: 4px;
            border: 2px solid rgba(53, 52, 53, 1);
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
            .van-icon{
                color: @primary-color;
                font-size: 36px;
                position: relative;
                top:8px;
            }
            thead {
            tr {
                th {
                    width: 25%;
                    line-height: 96px;
                    text-align: center;
                    border-top: 2px solid rgba(53, 52, 53, 1);
                    border-right: 2px solid rgba(53, 52, 53, 1);
                    border-bottom: 2px solid rgba(53, 52, 53, 1);
                }
            }
            }
            tbody {
            tr {
                td {
                    text-align: center;
                    line-height: 100px;
                    border-top: 2px solid rgba(53, 52, 53, 1);
                    border-right: 2px solid rgba(53, 52, 53, 1);
                    border-bottom: 2px solid rgba(53, 52, 53, 1);
                }
            }
            }
            tfoot {
            tr {
                td {
                text-align: center;
                font-size: 28px;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 80px;
                }
            }
            }
        }
    }
</style>