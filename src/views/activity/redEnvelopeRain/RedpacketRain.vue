<template>
  <div class="redPacketRain" v-show="popShow">
	  	<div class="top">
			  <span>剩余时间：{{tickTime}}秒</span>
			  <span>中奖金额：{{(totalMoney).toFixed(2)}}元</span>
		</div>
		<div id="bag-popup">
		</div>
		<img class="footer" src="./assets/bag-footer.png" alt="">
    <div class="pop" v-show="popShow">
      <div class="main">
        <img src="./assets/red_pop.png" alt="">
        <p class="bag-money">{{(totalMoney).toFixed(2)}}<span>元</span></p>
        <img class="icon" @click="closePop" src="./assets/red_close.png" alt="">
        <p v-if="!totalMoney" class="bag-tips">很遗憾您未抢到红包</p>
        <p v-else class="bag-success"><span>恭喜您</span>获得红包将直接发放到钱包</p>
      </div>
    </div>
  </div>
</template>

<script>
import { claimRedRain } from "@/api/activity";

export default {
    name: 'RedpacketRain',
    props: ['activityInfo', 'time'],
    data() {
        return {
            packetOption: {
                density:500,
                speed: 30,
                coinRate: 2
            },
            timer: null,
            flag: true,
            rainArr: [],
            totalMoney: 0,
            tickTime: 0,
            popShow: false
        }
    },
    watch: {
      time(val) {
        if(val === 'on') {
          this.startBag()
          this.countdown(this.activityInfo)
        }
      }
    },
    methods: {
        countdown(val) {
          this.tickTime = val.time_limit
          let timer = setInterval(() => {
            this.tickTime --
            if (this.tickTime <= 0) {
                this.popShow = true
                clearInterval(timer)
                this.stopBag()
                this.clearBag()
            }
          },1000)   
        },
        closePop() {
          this.popShow = false
          this.$emit('changeTime')
        },
        startBag() {
					this.timer = setInterval(() => {
						this.createBag()
					}, this.packetOption.density);
				},
				createBag() {
					const pop = document.getElementById('bag-popup')
          const nRed = document.createElement("div");
          // 随机生成金币/红包
          const type = Math.floor(Math.random() * (11 - 0) + 0)

          // 随机生成大小
          const scale = Math.floor(Math.random() * (10 -5) + 5)/10

          // 随机旋转角度
          const deg = Math.floor(Math.random() * (90 - 0) + 0)

					if (type > this.packetOption.coinRate) {
            nRed.className = 'redPacket'
            nRed.style.cssText = `
              position: absolute;
              display: block;
              width: 54px;
              height: 77px;
              transform: rotate(${deg}deg) scale(${scale});
              background-image:url(${require('./assets/redpacket.png')});
              background-size:contain;
              background-repeat:no-repeat`
            // nRed.src = require('./assets/redpacket.png')
            document.addEventListener('click',(e) => {
              if (e.target.className === 'redPacket') {
                this.clickBag(e.target)
              } else {
                return false
              }
            })
					} else {
            nRed.className = 'coin'
            nRed.style.cssText = `
              position: absolute;
              display: block;
              width: 40px;
              height: 40px;
              transform: rotate(${deg}deg) scale(${scale});
              background-image:url(${require('./assets/coin.png')});
              background-size:cover;
              background-repeat:no-repeat`
            // nRed.src = require('./assets/coin.png')
          }

					nRed.style.left = Math.random() * (pop.clientWidth - 30) + "px";
					nRed.style.top = -pop.clientHeight / 10 + "px";
					this.flag = true
					
					pop.appendChild(nRed)
					this.rainArr.push(nRed)
					this.moveBag(nRed)
				},
				moveBag(rains) {
					const pop = document.getElementById('bag-popup')
					let diffY = Math.random() + 1; // 垂直上的轻微偏移
					let diffX = Math.random(); // 水平上的轻微偏移
					rains.timer = setInterval(() => {
							if (diffY > 1.5) {
									rains.style.left = parseInt(rains.style.left) + parseInt(diffX * rains.clientHeight / 30) + "px";
							} else {
									rains.style.left = parseInt(rains.style.left) - parseInt(diffX * rains.clientHeight / 30) + "px";
							}
							rains.style.top = parseInt(rains.style.top) + parseInt(diffY * rains.clientHeight / 20) + "px";
							if (pop.clientHeight < parseInt(rains.style.top)) {
									// 超出 区域过后，关闭定时器，删除红包
									clearInterval(rains.timer);
									pop.removeChild(rains);
							}
							
					}, this.packetOption.speed);
				},
				stopBag() {
					clearInterval(this.timer)
					for (var i = 0; i < this.rainArr.length; i++) {
						clearInterval(this.rainArr[i].timer);
					}
				},
				clearBag() {
					let container = document.getElementById('bag-popup')
					let redItem = container.childNodes
					for ( let i = redItem.length - 1; i >= 0; i--) {
						container.removeChild(redItem[i]);
					}
				},
				clickBag(e) {
					if(this.flag === true) {
            e.className = 'redPacked'
            // e.src = require('./assets/redpacked.png')
						// setTimeout(async ()=> {
						// 	await this.sumBag(Math.random() + 1)
						// })
						claimRedRain().then(async res => {
              console.log(res)
              if(res.data.data.money) {
                // await this.sumBag(res.data.data.money)
                this.totalMoney = res.data.data.final_money * 1
                e.style.backgroundImage = `url(${require('./assets/redpacked.png')})`
                let moneyP = document.createElement('p')
                moneyP.innerHTML = `+${res.data.data.money}`
                moneyP.style.cssText = `
                  color: #fcf358;
                  font-size: 30px;
                  position: absolute;
                  width:100%;
                  text-align:center;
                  top: -10px;
                  animation: move .5s both linear;`
                e.appendChild(moneyP)
              } else {
                this.$toast.fail({
                  message: res.data.msg,
                  duration: 3000
                })
              }
						})
						this.flag = false
					} else {
						return 
					}
				},
				sumBag(m) {
					this.totalMoney += m
					console.log('sum', this.totalMoney)
				}
    }
}
</script>

<style lang="less">
	.redPacketRain{
		width:100%;
    height: 100%;
    background:rgba(0,0,0,.5);
    position:fixed;
    top:0;
    z-index: 999;
		.footer{
			position: absolute;
			width:100%;
			bottom:0;
		}
		.top{
			position: absolute;
			top:88px;
			display: flex;
			justify-content: space-between;
			color: #fff;
			width:100%;
			padding: 30px;
			font-size: 34px;
    }
    #bag-popup{
      width:100%;
      height: 100%;
      position:fixed;
      top:0;
  }
  // .redPacked{
  //   background-image: url('./assets/redpacked.png') !important;
  // }
  
  .pop{
      width: 500px;
      height: 60%;
      position: absolute;
      top: 100px;
      display: flex;
      left: 50%;
      margin-left: -250px;
      flex-direction: column;
      text-align: center;
      font-size: 60px;
      color: #7b3200;
      .bag-money{
        position: absolute;
        z-index: 999;
        top:230px;
        width:100%;
        span{
          font-size: 36px;
        }
      }
      .bag-tips{
        position: absolute;
        z-index: 999;
        top:440px;
        width:100%;
        font-size:32px;
        color: #fff;
      }
      .bag-success{
        position: absolute;
        z-index: 999;
        top:420px;
        width:100%;
        font-size:22px;
        color: #fff;
        span{
          font-size: 40px;
          font-weight: bold;
          display: block;
          margin-bottom: 10px;
        }
      }
      .main{
        width: 500px;
        margin-top: 230px;
        position:relative;
        img{
          width:100%;
        }
        .icon{
          width: 60px;
          position: absolute;
          bottom: -86px;
          left: 50%;
          margin-left: -30px;
        }
        .moveMoney{
          color: #fcf358;
          font-size: 30px;
          position: absolute;
          top: -10px;
          animation: move .5s both linear;
        }
      }
    }
	}
  @keyframes move {
    from {
      top:-10px;
      opacity: 1;
    }

    to {
      top:-70px;
      opacity: 0;
    }
  }
</style>