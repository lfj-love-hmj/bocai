<template>
  <div id="brand">
        <lheader
            v-if="
                !$route.query.source
            "
            :title="`${$config[$projectname].project}`"
            :goback="true"
        ></lheader>
        <div class="m-body">
            <img src="./assets/top@2x.png" alt="">
            <div class="main">
                <p v-html="content"></p>
                <img src="./assets/title@2x.png" alt="">
                <div class="wrap" v-for="(item,index) in 5" :key="index">
                    <div>
                        <div></div>
                        <img :src="`${require(`./assets/pic-${item}@2x.png`)}`" alt="">
                        
                    </div>
                    <div>
                        <div></div>
                        <img :class="`game${item}`" :src="`${require(`./assets/game-${item}@2x.png`)}`" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- <vtabbar class="m-footer" :index="3"></vtabbar> -->
  </div>
</template>

<script>
import Vtabbar from "@/components/v-tabbar"
import Lheader from "@/components/l-header";
export default {
    components: {
        Lheader
    },
    data() {
        return {
            title: '品牌',
            content:`叉烧电竞很荣幸于2019年8月1日鼎力赞助马来西亚著名电子竞技战队Kuala Lumpur Hunters。作为全球战略合作伙伴，叉烧电竞将利用其社交媒体和独家平台来帮助Kuala Lumpur Hunters。<br/><br/>
Kuala Lumpur Hunters，由Mervyn Lai与他的管理团队创建于2012年。在看到移动电竞的发展潜力后，他们集结了《英雄联盟》项目中天梯排名极高的年轻人，组建起KLH战队，并开启征战各项赛事的脚步。<br/><br/>
从本月开始，它还将通过其Clash Royale League（CRL）团队的冠名赞助支持该组织，并支持包括Nova Arena of Valor（AOV）和Nova FIFA在内的其他团队。<br/><br/>
Kuala Lumpur Hunters首席运营官Leon Lee 表示：“我们非常乐意与叉烧电竞结盟，这是我们一直想要尝试与渴望的革命性突破。”<br/><br/>
“叉烧电竞一直致力于支持和赞助各种顶级赛事，无论是体育赛事还是娱乐赛事; 而kuala Lumpur Hunters绝对是为数不多致力于为电子竞技团队亚洲品牌之一，因此，我们很高兴能够获得叉烧电竞的支持。”<br/><br/>
叉烧电竞声明补充道：“电子竞技越来越受欢迎; 选手们的激情和活力非常敏锐，可以与任何其他主流运动相媲美。作为亚洲领先的在线游戏提供商，我们预见到自己将为全球数百名电竞迷带来非凡的体验。”`
        }
    }
}
</script>

<style lang="less" scoped>
    #brand{
        background-color: #433D71;
        // min-height: 100vh;
        .m-header{
            z-index: 2 !important;
        }
        img{
            width: 100%;
        }
        .main{
            padding: 115px 60px 0;
            color: #fff;
            font-size: 24px;
            line-height: 38px;
            text-align: center;
            p{
                text-align: justify;
            }
            >img{
                width: 400px;
                padding: 80px 0 126px;
            }
            .wrap{
                margin-bottom: 64px;
                >div{
                    width:574px;
                    height:400px;
                    margin: 0 auto;
                    padding: 8px;
                    border:2px solid rgba(130,115,216,1);
                    margin-bottom: 64px;
                    position: relative;
                    >div{
                        background-color: #534B95;
                        width: 560px;
                        height: 386px;
                        top:50%;
                        left: 50%;
                        margin-top: -193px;
                        margin-left:-280px;
                        position: absolute;
                    }
                    img{
                        position: relative;
                        // z-index: 1;
                        &.game1{
                            width: 429px;
                            top:-30px;
                            left: 50px;
                        }
                        &.game2{
                            width: 488px;
                            top: 20px;
                            left: 50px;
                        }
                        &.game3{
                            width: 324px;
                            top: -60px;
                        }
                        &.game4{
                            width: 496px;
                            top:-60px;
                        }
                        &.game5{
                            width: 462px;
                            top:30px;
                        }
                    }
                    
                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
</style>
