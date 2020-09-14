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
            <img src="../img3_0/brand/h-t-pic.png" alt="">
        </div>
        <div class="about">
            <img src="../img3_0/brand/h-tit01.png" alt="">
            <div class="wrapper">
                <img src="../img3_0/brand/h-pic01.png" alt="">
                <div class="desc">
                    <p>
                        云顶有限公司（GENTING）主要是一家投资控股与管理公司。云顶集团创立于1965年, 已故创办人丹斯里林梧桐实现了在马来西亚建设高原度假胜地的愿景，直到1968年才注册成立了云顶有限公司，并在1971年上市。目前，云顶集团由云顶有限公司及其旗下上市子公司组成，即云顶马来西亚有限公司（“云顶马来西亚”）、云顶种植有限公司（“云顶种植”）和云顶新加坡有限公司（“云顶新加坡”），以及其独资子公司云顶能源有限公司（“云顶能源”）和拉斯维加斯云顶世界有限责任公司（“拉斯维加斯云顶世界”）。
                    </p>
                </div>
            </div>
        </div>
        <div class="user">
            <div class="wrapper">
                <img src="../img3_0/brand/h-tit02.png" alt="" class="titleImg">
                <img src="../img3_0/brand/h-pic02.png" alt="" class="userImg">
                <p>
                    云顶集团由丹斯里林国泰掌舵，涉足休闲与娱乐、油棕种植、电力、油气、产业发展、以及生命科学和生物科技活动领域，业务遍布全球，包括马来西亚（云顶集团的发源地）、新加坡、印尼、印度、中国、美国、巴哈马、英国和埃及。
                </p>
            </div>
        </div>
        <div class="enjoy">
            <div class="enjoy-top">
                <div class="wrapper">
                    <img src="../img3_0/brand/h-tit03.png" alt="" class="titleImg">
                    <ul>
                        <li><img src="../img3_0/brand/h-pic03.png" alt=""></li>
                        <li><img src="../img3_0/brand/h-pic04.png" alt=""></li>
                        <li><img src="../img3_0/brand/h-pic05.png" alt=""></li>
                    </ul>
                    <h2>我们最新最大的博彩游戏空间</h2>
                    <p class="p1">云天娱乐场宽敞而优雅的博彩区，将为您提供亚洲最齐全的博彩选择。</p>
                    <p>其时尚而现代化的设计以“绿意森林”为主题，将室外的青葱绿意在室内巧妙地展现出来。</p>
                    <img src="../img3_0/brand/h-pic06.png" alt="" class="imgCom">
                    <img src="../img3_0/brand/h-pic07.png" alt="" class="imgCom">
                    <h2>专属的私人空间</h2>
                    <p class="p1">云天娱乐场3楼，只限地位超然的贵宾进入的私人空间，让您的博彩游戏提升至全新层次。</p>
                    <p>尽情享受每间富丽堂皇的主题贵宾房的独特品味，并让您的私人管家为您打点一切。</p>
                </div>
            </div>
            <img src="../img3_0/brand/h-pic08.png" alt="" class="enjoy-center">
            <div class="enjoy-bottom">
                <div class="wrapper">
                    <ul class="list3">
                        <li>
                            <p>高效存取款</p>
                            <p>
                                百老汇娱乐平台一直注重用户体验，高效快速的存取款业务是用户最实在的体验，所以我们一直致力于开发最新的收支业务和人员培训保证高效的存取款，保证5分钟存提款到账，为你快速享受游戏乐趣提供最大保证。
                            </p>
                        </li>
                        <li>
                            <img src="../img3_0/brand/h-pic-01.png" alt="">
                        </li>

                        <li>
                            <p>精英客服团队</p>
                            <p>
                                百老汇娱乐平台客服均经过严格的筛选及专业的培训，用心打造精英客服团队为玩家提供优质的服务质量。全天候24小时为您提供专业、贴心的VIP服务，让您有宾至如归的感觉。
                            </p>
                        </li>
                        <li>
                            <img src="../img3_0/brand/h-pic-02.png" alt="">
                        </li>

                        <li>
                            <p>强大的专家技术团队</p>
                            <p>
                                我们在业内聘请了一批经验丰富的线上博彩专家和操盘手，为广大玩家提供最先进、最富娱乐性的游戏项目，并保证我们游戏平台里的赔率是市场最佳赔率，从而保证广大玩家的利益。百老汇娱乐平台全部游戏设计均采用世界最领先的软件。
                            </p>
                        </li>
                        <li>
                            <img src="../img3_0/brand/h-pic-03.png" alt="">
                        </li>

                        <li>
                            <p>信息安全隐私</p>
                            <p>
                                提供平稳的加密安全通道(256位SSL加密标准)，服务器的镜像备份保证了数据库和客户信息的安全。玩家网上支付和银行交易由国际金融机构在高标准的安全和机密的网络中进行。另外，客户在本平台的所有活动均严格保密，我们不会向任何第三方包括政府透露客户任何的个人信息及资料。
                            </p>
                        </li>
                        <li>
                            <img src="../img3_0/brand/h-pic-04.png" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="contact">
            <div class="wrapper">
                <img src="../img3_0/brand/h-tit04.png" alt="" class="titleImg">
                <div class="fun">
                    <div class="funCom">
                        <ul>
                            <li>商务接待</li>
                            <li>电话：+ 603-21782288 / + 603-23332288</li>
                            <li>传真：+（60）3 2161 5304</li>
                        </ul>
                    </div>
                    <div class="line"></div>
                    <div class="funCom">
                        <ul>
                            <li>客户意见</li>
                            <li>电邮：ir.genm@genting.com</li>
                            <li>地址：云顶云顶24楼 惹兰苏丹·伊斯梅尔（Jalan Sultan Ismail），50250吉隆坡</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="wrapper">
                <img src="../img3_0/brand/h-tit05.png" alt="" class="titleImg">
                <img src="../img3_0/brand/footer-logo1.png" alt="" class="img1">
                <img src="../img3_0/brand/footer-logo2.png" alt="" class="img2">
                <img src="../img3_0/brand/logo1.png" alt="" class="logo1">
                <div class="line"></div>
                <img src="../img3_0/brand/logo2.png" alt="" class="logo2">
                <img src="../img3_0/brand/logo3.png" alt="" class="logo3">
                <div class="line"></div>
                <img src="../img3_0/brand/logo4.png" alt="" class="logo4">
                <img src="../img3_0/brand/logo5.png" alt="" class="logo5">
                <div class="line"></div>
                <img src="../img3_0/brand/logo6.png" alt="" class="logo6">
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
    .wrapper{
        width:100%;
        padding:0 46px;
    }
    .brand{
        padding-top:@height-nav-bar;
        padding-bottom:@height-nav-bar;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        .banner{
            width:100%;
            img{
                width:100%;
            }
        }
        .about{
            padding:120px 0 300px;
            text-align: center;
            background-image: url('../img3_0/brand/about.png');
            background-repeat: no-repeat;
            background-size:100% auto;
            background-position:center bottom;
            >img{
                margin-bottom:100px;
                width:314px;
            }
            .wrapper{
                position: relative;
                img{
                    width:100%;
                }
                .desc{
                    width:361px;
                    position:absolute;
                    right:46px;
                    bottom:-148px;
                    p{
                        font-size:24px;
                        line-height:48px;
                        color:#333;
                        text-align:left;
                    }
                }
            }
        }
        .user{
            margin-top:-116px;
            padding:44px 0 60px;
            .wrapper{
                .titleImg{
                    width:236px;
                    display:block;
                    margin:0 auto;
                }
                .userImg{
                    width:131px;
                    display:block;
                    margin:50px auto;
                }
                p{
                    width:100%;
                    margin:0 auto;
                    font-size:24px;
                    line-height:48px;
                    color:#333;
                    text-align:left;
                }
            }
        }
        .enjoy{
            .enjoy-top{
                background-image: url('../img3_0/brand/enjoy.png');
                background-repeat: no-repeat;
                background-size:cover;
                background-position:center;
                background-color:#A71A66;
                padding:60px 0 50px;
                .wrapper{
                    .titleImg{
                        width:275px;
                        display:block;
                        margin:0 auto 50px;
                    }
                    ul{
                        display:flex;
                        justify-content: center;
                        align-items:center;
                        li{
                            margin-right:15px;
                            img{
                                width:208px;
                            }
                            &:last-child{
                                margin-right:0;
                            }
                        }
                    }
                    h2{
                        margin:50px 0;
                        text-align:center;
                        font-size:28px;
                        color:#fff;
                    }
                    p{
                        margin-bottom:50px;
                        font-size:24px;
                        line-height:48px;
                        text-align:left;
                        color:#fff;
                    }
                    .p1{
                        margin-bottom:20px;
                    }
                    .imgCom{
                        width:100%;
                        display:block;
                        margin:50px auto 0;
                    }
                }
            }
            .enjoy-center{
                width:100%;
            }
            .enjoy-bottom{
                .wrapper{
                    padding:50px 46px;
                    .list3{
                        display:flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        li{
                            width:100%;

                            flex-shrink: 0;
                            img{
                                width:100%;
                            }
                            &:nth-child(2n){
                                margin-bottom:0.6rem;
                            }
                            &:last-child{
                                margin-bottom:0;
                            }
                            &:nth-child(1),
                            &:nth-child(3),
                            &:nth-child(5),
                            &:nth-child(7){
                                padding:0.65rem 0.4rem;
                                p{
                                    &:first-child{
                                        font-size:0.42rem;
                                        color:#fff;
                                        margin-bottom:0.4rem;
                                        text-align:center;
                                        font-weight: bold;
                                    }
                                    &:last-child{
                                        font-size:0.28rem;
                                        line-height:0.48rem;
                                        color:#fff;
                                    }
                                }
                            }
                            &:nth-child(1),
                            &:nth-child(5){
                                background:#9F1E5C;
                                min-height:342px;
                                display:flex;
                                justify-content: center;
                                align-items: center;
                                flex-direction: column;
                            }
                            &:nth-child(3),
                            &:nth-child(7){
                                background:#ED1D25;
                                min-height:342px;
                                display:flex;
                                justify-content: center;
                                align-items: center;
                                flex-direction: column;
                            }
                        }
                    }
                }
            }
        }
        .contact{
            background-image: url('../img3_0/brand/contact-bg.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center;
            padding:60px 0 56px;
            .wrapper{
                .titleImg{
                    width:314px;
                    display:block;
                    margin:0 auto 60px;
                }
                .line{
                    width:100%;
                    height:1px;
                    background:rgba(255,255,255,0.2);
                    margin:43px 0 59px;
                }
                .fun{
                    display:flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    flex-direction: column;
                    .funCom{
                        width:100%;
                        flex-shrink: 0;
                        ul{
                            li{
                                font-size:24px;
                                line-height: 48px;
                                color:#fff;
                                text-align: left;
                                &:first-child{
                                    font-size:36px;
                                    margin-bottom:48px;
                                }
                            }
                        }
                    }
                }
            }
        }
        .footer{
            background-image: url('../img3_0/brand/footer-bg.png');
            background-repeat: no-repeat;
            background-size:100% auto;
            background-position:center bottom;
            padding:60px 0 0;
            .wrapper{
                .titleImg{
                    width:471px;
                    display:block;
                    margin:0 auto 61px;
                }
                >img{
                    display:block;
                    margin:0 auto;
                }
                .img1{
                    width:81px;
                    margin-bottom:50px;
                }
                .img2{
                    width:75px;
                    margin-bottom:57px;
                }
                .line{
                    width:100%;
                    height:1px;
                    background:#C4B2A3;
                    margin:50px 0;
                }
                .logo1{
                    width:601px;
                }
                .logo2{
                    width:359px;
                    margin-bottom:63px;
                }
                .logo3{
                    width:444px;
                    margin-bottom:10px;
                }
                .logo4{
                    width:114px;
                    margin-bottom:63px;
                }
                .logo5{
                    width:444px;
                    margin-bottom: 10px;
                }
                .logo6{
                    width:444px;
                    margin-bottom:50px;
                }
            }

        }
    }
</style>