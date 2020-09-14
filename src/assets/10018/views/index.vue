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
        <vtabbar class="m-footer" v-if="!$route.query.source" :index="3"></vtabbar>
        <div class="banner">
            <img src="../img3_0/brand/banner_01.png" alt="">
        </div>
        <div class="intro">
            <div class="wrapper">
                <img src="../img3_0/brand/title_jianjie.png" alt="" class="introImg">
                <div class="desc">
                    <div class="desc_l">
                        <img src="../img3_0/brand/intro_01.png" alt="">
                        <div class="txt">
                            <p>品牌形象代言人</p>
                            <p>梁朝伟</p>
                        </div>
                    </div>
                    <div class="desc_r">
                        <p>
                            
                                澳门星际座落于澳门核心商业及娱乐区－友谊大马路，以其优质的酒店服务、娱乐设施、酒店客房和食府闻名，是澳门半岛最受欢迎的酒店之一。自开业以来，酒店曾获诸多奖项殊荣，更因其独具特色的建筑和精彩纷呈的美食而备受推崇。<br><br>

                                酒店由著名建筑师倾力打造，外墙镶以幻化图文的双层玻璃，光影交叠及对比，带出远在天际的极光概念，配合大型液晶体灯效外墙，成为澳门新口岸繁华胜景中的耀目地标。<br><br>

                                汇集多家广受美誉的米其林餐厅于此，让你领略星厨手艺，大师匠心。各种缤纷美食，为你的舌尖打造一场惊喜之旅。<br><br>

                                专程接送的星际穿梭巴士，让你抵澳后即可直达酒店。你可以在客房内远眺宜人风光，在泳池尽赏水天一色，在餐厅尝遍星级美馔，在欢歌悦舞中放松身心……发现澳门的精彩，从澳门星际开始！
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="groupSize">
            <div class="box">
                <div class="wrapper">
                    <img src="../img3_0/brand/title_guimo.png" alt="" class="groupSizeImg">
                    <div class="desc">
                        <img src="../img3_0/brand/img1.png" alt="">
                        <div class="txt">
                            <h2>面积129万平方呎</h2>
                            <p>
                                星际赌场酒店（StarWorld Hotel）隶属银河娱乐集团首个五星级酒店，座落于澳门核心商业及娱乐区，耗资30亿圆投资建设，总楼面面积129万平方呎，内设酒店、餐厅、娱乐场和消闲娱乐中心等。自2006年开幕以来，星际酒店一直深受亚洲以至世界各地的旅客所欢迎。星际酒店的宗旨乃为旅客提供最专业细心的服务，精心打造优质享受，赢得不少著名奖项，致力让顾客感受”置身星际，我散发光芒”的尊贵享受。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="desc1 desc">
                    <div class="txt">
                        <h2>备有250张赌台<br>240台老虎机</h2>
                        <p>
                            星际娱乐城，面积达14万平方呎，备有250张赌台，提供百家乐、加勒比扑克等赌博项目，还有240台老虎机，场内设有多元化的娱乐游戏，以供选择，游戏包括：百家乐、廿一点、骰宝等。当然还有专为赫卡及尊卡会员打造的豪华娱乐专区”天峰贵宾会”、”天峰贵宾会”提供高额投注区，并为尊贵会员打造顶级服务设施
                        </p>
                    </div>
                    <img src="../img3_0/brand/img2.png" alt="">
                </div>
                <div class="desc2 desc">
                    <div class="txt">
                        <h2>超过507间客房和套房</h2>
                        <p>
                            澳门星际的设计风格混合了传统中国文化，设置有超过507间客房和套房，共有四种房型，分别是：星际套房、豪华套房、行政客房、豪华客房及两间面积6000平方呎的超级豪华天际套房，所有房间均可观看澳门景色。致力于提供宾客最宾至如归的待遇的星际酒店获奖无数
                        </p>
                    </div>
                    <img src="../img3_0/brand/img3.png" alt="">
                </div>
            </div>
        </div>
        <div class="groupBuss">
            <div class="wrapper">
                <img src="../img3_0/brand/title_yewu.png" alt="" class="titleImg">
                <ul>
                    <li>
                        <img src="../img3_0/brand/pic_yewu_01.png" alt="">
                        <div class="desc">
                            <img src="../img3_0/brand/mask_ywwu_click.png" alt="">
                            <div class="txt">
                                <p class="p1">住宿</p>
                                <p class="p2">星际视野 尽揽风光</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../img3_0/brand/pic_yewu_02.png" alt="">
                        <div class="desc">
                            <img src="../img3_0/brand/mask_ywwu_default.png" alt="">
                            <div class="txt">
                                <p class="p1">美食</p>
                                <p class="p2">半岛第一滋味</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="../img3_0/brand/pic_yewu_03.png" alt="">
                        <div class="desc">
                            <img src="../img3_0/brand/mask_ywwu_default.png" alt="">
                            <div class="txt">
                                <p class="p1">娱乐</p>
                                <p class="p2">星艺坊 精彩演出</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="pla">
            <img src="../img3_0/brand/title_yule_01.png" alt="">
            <div class="wrapper">
                <img src="../img3_0/brand/title_yule.png" alt="" class="titleImg">
                <p class="p1">
                    面积达14万平方呎，备有250张赌台，提供<br>百家乐、加勒比扑克等赌博项目
                </p>
                <img src="../img3_0/brand/pic_yulecheng_01.png" alt="" class="yuleC">
                <p class="p4 p5">还有240台老虎机，场内设有多元化的娱乐游戏，以</p>
                <p class="p4">供选择，游戏包括：百家乐、廿一点、骰宝等。当然</p>
                <p class="p4">还有专为赫卡及尊卡会员打造的豪华娱乐专区”天峰</p>
                <p class="p4">贵宾会”、”天峰贵宾会”提供高额投注区，并为尊贵</p>
                <p class="p3">会员打造顶级服务设施。</p>
                <ul>
                    <li><img src="../img3_0/brand/pic_yulecheng_02.png" alt=""></li>
                    <li><img src="../img3_0/brand/pic_yulecheng_03.png" alt=""></li>
                </ul>

            </div>
        </div>
        <div class="banner2">
            <img src="../img3_0/brand/banner_02.png" alt="">
            <div class="wrapper">
                <div class="txt">
                    <p>发现澳门的精彩 </p>
                    <p>从澳门星际开始</p>
                </div>
            </div>
        </div>
        <div class="contact">
            <div class="wrapper">
                <img src="../img3_0/brand/title_lianluo.png" alt="" class="titleImg">
                <h3>联系酒店</h3>
                <ul>
                    <li>
                        <div class="li_l">
                            <img src="../img3_0/brand/icon_address.png" alt="">
                            地址
                        </div>
                        <p>澳门友谊大马路</p>
                    </li>
                    <li>
                        <div class="li_l">
                            <img src="../img3_0/brand/icon_phone.png" alt="">
                            电话
                        </div>
                        <p>+853 2838 3838</p>
                    </li>
                    <li>
                        <div class="li_l">
                            <img src="../img3_0/brand/icon_fax.png" alt="">
                            传真
                        </div>
                        <p>+853 2838 3888</p>
                    </li>
                </ul>
                <h4>客房预订热线</h4>
                <ul class="list">
                    <li>
                        <div class="li_l">
                            <img src="../img3_0/brand/icon_phone.png" alt="">
                            澳门直线
                        </div>
                        <p>+853 2878 1111</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <img src="../img3_0/brand/pic_yewu.png" alt="">
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
    /deep/ .van-nav-bar .van-nav-bar__title{
        color:#000;
    }
    /deep/ .van-nav-bar .van-nav-bar__right .van-icon{
        color:#000;
    }
    .wrapper{
        width:100%;
        padding:0 30px;
    }
    .brand{
        padding-top:@height-nav-bar;
        padding-bottom:@height-nav-bar;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        .banner{
            img{
                width:100%;
            }
        }
        .intro{
            padding:106px 0 336px;
            background:#242424;
            margin-top:-10px;
            .wrapper{
                .introImg{
                    width:297px;
                    display:block;
                    margin:0 auto 23px;
                }
                .desc{
                    .desc_l{
                        position:relative;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            width:344px;
                        }
                        .txt{
                            position:absolute;
                            right:0;
                            bottom:27.5px;
                            text-align: left;
                            p{
                                font-size:18px;
                                color:#fff;
                                &:last-child{
                                    font-size:32px;
                                    margin-top:10px;
                                    font-weight: bold;
                                }
                            }
                        }
                    }
                    .desc_r{
                        width:100%;
                        padding:46px 28px 288px 40px;
                        background:#191919;
                        p{
                            font-size:24px;
                            line-height:42px;
                            color:#fff;
                            text-align:left;
                        }
                    }
                }
            }
        }
        .groupSize{
            .box{
                background-image: url('../img3_0/brand/bj_01.png');
                background-repeat: no-repeat;
                background-size:100% auto;
                background-position: center;
                margin-top:-534px;
                .wrapper{
                    padding:161px 46px 83px 0;
                    .groupSizeImg{
                        width:251px;
                        display:block;
                        margin:0 auto 63px;
                    }
                    .desc{
                        display:flex;
                        justify-content: space-between;
                        align-items:center;
                        img{
                            width:337px;
                            flex-shrink: 0;
                            margin-right:40px;
                        }
                        .txt{
                            h2{
                                font-size:40px;
                                color:#000;
                                margin-bottom:20px;
                                text-align:left;
                            }
                            p{
                                font-size:24px;
                                line-height:32px;
                                color:#58410C;
                                text-align:left;
                            }
                        }
                    }
                }
            }
            .wrapper{
                margin-top:-132px;
                padding:0;
                .desc{
                    display:flex;
                    justify-content: space-between;
                    align-items:flex-end;
                    .txt{
                        text-align: left;
                        padding-top:40px;
                        h2{
                            font-size:38px;
                            line-height:51px;
                            margin-bottom:21px;
                            color:#000;
                            text-align:left;
                            white-space: nowrap;
                            font-weight: bold;
                        }
                        p{
                            font-size:24px;
                            line-height: 42px;
                            color:#574012;
                            text-align:left;
                        }
                    }
                    &.desc1{
                        position:relative;
                        margin-bottom:95px;
                        padding-left:46px;
                        img{
                            position:absolute;
                            right:0;
                            bottom:87px;
                            width:457px;
                        }
                        .txt{
                            width:364px;
                        }
                    }
                    &.desc2{
                        position:relative;
                        padding-right: 46px;
                        justify-content: flex-end;
                        align-items: center;
                        img{
                            position:absolute;
                            left:0;
                            bottom:0px;
                            width:526px;
                        }
                        .txt{
                            width:344px;
                            padding-bottom:173px;
                            h2{
                                margin:0 0 21px;
                            }
                        }
                    }
                }
            }
        }
        .groupBuss{
            background-image: url('../img3_0/brand/bj_03.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position: center;
            padding:83px 0 72px;
            .wrapper{
                .titleImg{
                    width:251px;
                    display:block;
                    margin:0 auto 63px;
                }
                ul{
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                    li{
                        position: relative;;
                        width:32%;
                        margin-right:2%;
                        &:last-child{
                            margin-right:0;
                        }
                        &:first-child{
                            .desc{
                                .txt{
                                    p{
                                        color:#050608;
                                    }
                                }
                            }
                        }
                        >img{
                            width:100%;
                        }
                        .desc{
                            position: absolute;
                            bottom:0;
                            left:0;
                            width:100%;
                            img{
                                width:100%;
                            }
                            .txt{
                                position: absolute;
                                top:50%;
                                left:50%;
                                transform:translateX(-50%) translateY(-50%);
                                text-align:right;
                                width:100%;
                                padding:0 10px 0 0;
                                p{
                                    color:#FBFBFB;
                                }
                                .p1{
                                    font-size:30px;
                                    margin-bottom:10px;
                                    font-weight: bold;
                                }
                                .p2{
                                    font-size:24px;
                                    white-space: nowrap;
                                }
                            }
                        }
                    }
                }
            }
        }
        .pla{
            background:#242424;
            >img{
                width:100%;
            }
            .wrapper{
                padding:60px 30px 168px;
                .titleImg{
                    width:187px;
                    display:block;
                    margin:0 auto;
                }
                p{
                    text-align:center;
                }
                .p1{
                    font-size:24px;
                    line-height:34px;
                    color:#FFFFFE;
                    margin:15px 0  45px;   
                }
                >img{
                    width:100%;
                }
                .p4{
                    width:555px;
                    font-size:24px;
                    line-height: 32px;
                    color:#FFFFFE;
                    margin:0 auto;
                    text-align:justify;
                    text-align-last:justify;
                    white-space: nowrap;
                }
                .p5{
                    margin-top:55px;
                }
                .p3{
                    width:554px;
                    font-size:24px;
                    line-height: 32px;
                    color:#FFFFFE;
                    margin:0 auto 37px;
                    text-align:center;
                }
                ul{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    li{
                        width:49.5%;
                        margin-right:1%;
                        &:last-child{
                            margin-right:0;
                        }
                        img{
                            width:100%;
                        }
                    }
                }
            }
        }
        .banner2{
            position:relative;
            margin-top:-138px;
            >img{
                width:100%;
            }
            .wrapper{
                position:absolute;
                left:50%;
                bottom:10%;
                transform:translateX(-50%);
                .txt{
                    p{
                        color:#000;
                        text-align:left;
                        &:first-child{
                            font-size:44px;
                            font-weight: bold;
                        }
                        &:last-child{
                            font-size:28px;
                            margin-top:20px;
                        }
                    }
                }
            }
        }
        .contact{
            background-image: url('../img3_0/brand/bj_04.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position: center;
            padding:74px 0 52px;
            margin-top:-10px;
            .titleImg{
                width:150px;
                display:block;
                margin:0 auto;
            }
            h3{
                font-size:30px;
                color:#ECE08A;
                margin:74px 0 65px;
                text-align:center;
            }
            ul{
                display:flex;
                justify-content: center;
                align-items:center;
                li{
                    margin-right:51px;
                    &:last-child{
                        margin-right:0;
                    }
                    .li_l{
                        color:#fff;
                        font-size:24px;
                        margin-bottom:15px;
                        display:flex;
                        justify-content: flex-start;
                        align-items: center;
                        img{
                            width:20px;
                            margin-right:15px;
                        }
                    }
                    p{
                        font-size:24px;
                        color:#ECE185;
                    }
                }
            }
            h4{
                font-size:30px;
                color:#ECE185;
                margin:85px 0 36px;
                text-align:center;
                font-weight:normal;
            }
            .list{
                li{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    .li_l{
                        margin-bottom:0;
                        margin-right:10px;
                    }
                }
            }
        }
        .footer{
            img{
                width:100%;
            }
        }
    }
</style>