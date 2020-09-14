<template>
    <div class="brand" :style="{paddingTop: $route.query.source && '0'}">
        <van-nav-bar
        class="m-header"
        :title="title"
        :fixed="true"
        @click-right="$openKefu"
        v-if="!$route.query.source"
        >
        <van-icon name="service" slot="right" class="kefu" />
        </van-nav-bar>
        <vtabbar class="m-footer" :index="3" v-if="!$route.query.source"></vtabbar>
        <div class="banner">
            <img src="../img3_0/brand/kv.png" alt="" class="bg">
            <div class="more">
                <img src="../img3_0/brand/logo.png" alt="" class="logo">       
                <!-- <div class="moreBtn"></div> -->
            </div>
        </div>
        <div class="about">
            <div class="about_t">
                <h3>关于我们</h3>
                <h3>ABOUT US</h3>
                <img src="../img3_0/brand/about-img.png" alt="">
                <div class="about_t_bg"></div>
            </div>
            <div class="light">
                <img src="../img3_0/brand/light.png" alt="">
            </div>
            <div class="about_b">
                <p>
                    葡京（GrandLisboa）是位于澳门葡京路端的一间赌场酒店，酒店正门向着嘉乐庇总督大桥（旧澳氹大桥），由澳门旅游娱乐有限公司所持有及营运。酒店设赌场及角子机娱乐场，由澳门博彩股份有限公司所营运。<br><br>
                    新葡京娱乐场于2007年2月11日落成，并由澳门行政长官何厚铧主持开幕启用仪式。而新葡京酒店预计于2008年落成，将成为澳门最高的酒店、商厦及楼宇，亦是在澳门首间打造“七星级”的五星级酒店。
                </p>
            </div>
        </div>
        <div class="user">
            <img src="../img3_0/brand/mr.he.png" alt="" class="userImg">
            <img src="../img3_0/brand/ORIGINATOR.png" alt="" class="side">
            <div class="name">
                <img src="../img3_0/brand/dot.png" alt="">
                创始人—何鸿燊
            </div>
            <img src="../img3_0/brand/line.png" alt="" class="dotLine">
            <p class="intro">
                “澳门赌王”、澳门博彩股份有限公司（SociedadedeJogosdeMacao）董事长何鸿燊（StanleyHo）巨资五十亿元兴建，<br>
                以金碧辉煌为卖点的巨蛋形新葡京赌场，11日晚在璀璨的烟花绽放下盛势开幕。近年由于美国、澳大利亚等公司相继进入澳门赌业，<br>
                何鸿燊意在用新葡京夺回被外国竞争对手抢占的市场份额。
            </p>
        </div>
        <div class="macau">
            <img src="../img3_0/brand/MACAU.png" alt="">
        </div>
        <div class="history">
            <div class="historyImg">
                <img src="../img3_0/brand/ls.png" alt="">
            </div>
            <div class="intro_r">
                此次开放的新葡京赌场，是2002年澳门赌博业开放以来赌王何鸿燊开设的首家大型赌场。在澳门博彩市场开放之前，何鸿燊垄断澳门赌博业达四十年之久。但美国的谢尔登·埃德森（SheldonAdelson）、永利度假村（WynnResorts）、美高梅梦幻（MGM）以及澳大利亚的出版广播公司（PublishingandBroadcastingLtd）等公司都有意与赌王争食。
                而2004年5月才进入澳门赌业的金沙集团，
            </div>
            <div class="title">
                <img src="../img3_0/brand/line-2.png" alt=""  class="line">
                <img src="../img3_0/brand/HISTORY.png" alt="" class="textImg">
            </div>
            <div class="intro_l">
                <div class="intro_l_bg"></div>
                <img src="../img3_0/brand/history-img.png" alt="">
            </div>
            <div class="intro_r">
                澳门新葡京xpj08.bet是业界最具规模、最具品牌实力、最值得信赖的线上投注平台之一，提供多元化的产品及在线赌场游戏，作为知名的大型现金网平台。我们致力为玩家提供最公正的 娱乐环境、最优质的服务体验，同时确保我们的客户可以在一个最保密、最安全的网络游戏空间尽情玩乐。澳门新葡京希望所有的客户都能够在一个安全愉快的环境中，享受本公司精心设计的产品、服务和优惠。<br><br>
            </div>
        </div>
        <div class="map">
            <img src="../img3_0/brand/map.png" alt="" class="map_bg">
            <div class="mapDesc">
                <div class="title">
                    <img src="../img3_0/brand/dot.png" alt="">
                    澳门新地标
                </div>
                <img src="../img3_0/brand/light.png" alt="" class="dotLine">
                <p>
                    新葡京在开幕初期至少会大派超过两百万元现金，每十五分钟抽一次细奖，赏金一万，每一小时一次大奖，赏金十万，令现场气氛变得疯狂。赌王何鸿燊表示，随着新葡京的开幕，澳门的博彩业再次改写历史，成为澳门的新地标。他认为，新葡京从事的不仅仅只是博彩业，而是为澳门带来新繁荣，提高市民的福利和生活水平。

                </p>
            </div>
        </div>
    </div>
</template>
<script>
import Vtabbar from "@/components/v-tabbar"
export default {
    data(){
        return {
            title:'品牌',
        }
    },
    components: {
        Vtabbar
    },
}
</script>
<style lang="less" scoped>
    .brand{
        background:#101010;
        padding-top:@height-nav-bar;
        padding-bottom:@height-nav-bar;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        .banner{
            position:relative;
            .bg{
                width:100%;
            }
            .more{
                position:relative;
                width:100%;
                position:absolute;
                top:36px;
                left:50%;
                transform:translateX(-50%);
                .logo{
                    position:absolute;
                    top:0.25rem;
                    left:0.46rem;
                    width:1.3rem;
                }
                .moreBtn{
                    position:absolute;
                    bottom:-480px;
                    left:50%;
                    transform:translateX(-50%);
                    width:184px;
                    height:42px;
                    background-image: url('../img3_0/brand/btn.png');
                    background-repeat: no-repeat;
                    background-size:100%;
                    background-position:center;
                    cursor: pointer;
                }
            }
        }
        .about{
            position:relative;
            width:100%;
            margin:1.44rem auto 0;
            padding:0 0.8rem;
            .about_b{
                margin-top:2rem;
                p{
                    color:#CECECE;
                    font-size:0.28rem;
                    line-height:0.48rem;
                    text-align: left;
                }
            }
            .about_t{
                position:relative;
                .about_t_bg{
                    width:6.4rem;
                    height:4.4rem;
                    background:#1C1C1C;
                    position: absolute;
                    left:0;
                    bottom:0.82rem;
                    z-index:0;
                }
                h3{
                    text-align: right;
                    margin-bottom:24px;
                    margin-top:0;
                    position: relative;
                    z-index:1;
                    margin-right:0.3rem;
                    &:first-child{
                        font-size:0.72rem;
                        color:#fff;
                    }
                    &:nth-child(2){
                        font-size: 0.72rem;
                        color:#A2885D;
                        font-weight: bold;
                    }
                }
                img{
                    width:7rem;
                    position: relative;
                    z-index:1;
                    margin-left:1.08rem;
                }
            }
            .light{
                position:relative;
                width:100%;
                img{
                    position:absolute;
                    top:28px;
                    left:50%;
                    transform:translateX(-50%);
                    width:100%;
                }
            }
        }
        .user{
            position:relative;
            padding:0 0.8rem;
            margin:183px 0 139px;
            text-align:center;
            .userImg{
                width:4rem;
                display:block;
                margin:0 auto;
            }
            .side{
                position:absolute;
                right:0.8rem;
                top:-0.7rem;
                width:0.7rem;
            }
            .name{
                font-size: 0.64rem;
                color:#fff;
                margin:45px 0 33px;
            }
            .name{
                position:relative;
                display:flex;
                justify-content:center;
                align-items:center;
                font-size: 0.58rem;
                color:#fff;
                margin:45px auto 0;
                display:inline-block;
                img{
                    position:absolute;
                    top:50%;
                    left:-0.6rem;
                    transform:translateY(-50%);
                    width:0.38rem;
                    height:0.38rem;
                    margin-right:10px;
                }
            }
            .dotLine{
                width:3.38rem;
                display:block;
                margin:0.2rem auto 0.67rem;
            }
            .intro{
                font-size: 0.28rem;
                line-height: 0.48rem;
                color:#CECECE;
            }
        }
        .macau{
            img{
                width:100%;
            }
        }
        .history{
            .historyImg{
                width:100%;
                margin:172px auto 158px;
                img{
                    width:100%;
                }
            }
            .title{
                position:relative;
                width:100%;
                padding:0 0.8rem;
                text-align:center;
                display:flex;
                justify-content: space-between;
                align-items:flex-start;
                margin-top:0.96rem;
                .line{
                    width:0.44rem;
                    margin-left:0.45rem;
                }
                .textImg{
                    width:7rem;
                    margin-top:1rem;
                }
            }
            
            .intro_r{
                width:100%;
                padding:0 0.8rem;
                font-size:0.28rem;
                color:#CECECE;
                line-height:0.48rem;
                text-align:left;
                margin-top:50px;
            }
            .intro_l{
                position:relative;
                padding:0 0.8rem;
                margin-top:-2rem;
                .intro_l_bg{
                    position:relative;
                    width:5rem;
                    height:5rem;
                    background:#202224;
                    z-index:1;
                }
                img{
                    position: absolute;
                    top:50%;
                    right:0.8rem;
                    transform:translateY(-50%);
                    z-index: 2;
                    width:7.6rem;
                }
            }
        }
        .map{
            position:relative;
            .map_bg{
                width:100%;
            }
            .mapDesc{
                width:100%;
                padding:0.54rem 0.8rem;
                position:absolute;
                top:50%;
                left:50%;
                transform:translateX(-50%) translateY(-50%);
                background:#101010;
                text-align:center;
                .title{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    img{
                        width:38px;
                        height:38px;
                        margin-right:10px;
                    }
                    font-size: 0.64rem;
                    color:#CECECE;
                }
                .dotLine{
                    width:3.6rem;
                    margin:0.05rem 0 0.2rem;
                }
                p{
                    font-size:0.28rem;
                    color:#CECECE;
                    line-height:0.48rem;
                    text-align:left;
                }
            }
        }
    }
</style>