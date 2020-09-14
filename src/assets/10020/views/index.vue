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
            <img src="../img3_0/brand/h-pic01.png" alt="">
        </div>
        <div class="about">
            <div class="wrapper">
                <img src="../img3_0/brand/h-tit01.png" alt="">
                <div class="desc">
                    <img src="../img3_0/brand/h-pic02.png" alt="">
                    2015年5月27日，「澳门银河」第二期及「澳门百老汇」的开幕，将原来版图双倍扩展至超过110万平方米，总投资额超过430亿港元，并进一步向集团的1,000亿港元投资承诺迈进。三间全新五星级酒店品牌进驻后，「澳门银河」正式成为澳门唯一拥有六间世界级酒店的综合度假城，迎合旅客的不同需求。澳门丽思卡尔顿酒店是集团旗下首间全套房式酒店，设有逾250间套房，为澳门的奢华享受重新定义；亚洲最大的澳门JW万豪酒店提供逾1,000间客房及套房；全新「百老汇酒店」的320间客房设备齐全、适合家庭旅客。「澳门银河」的餐饮选择将增加至超过120间餐厅、食肆和酒吧，当中包括8间具米其林级的餐厅。此外，「澳门银河」的「时尚汇」购物中心包罗超过200家时尚品牌，并首度把世界流行的高格调下午茶文化引进澳门，让客人尽享购物乐趣，同时品味生活时尚享受。
                    <div style="clear:both;"></div>
                </div>
                <ul>
                    <li><img src="../img3_0/brand/h-pic03.png" alt=""></li>
                    <li><img src="../img3_0/brand/h-pic04.png" alt=""></li>
                    <li><img src="../img3_0/brand/h-pic05.png" alt=""></li>
                </ul>
            </div>
        </div>
        <div class="user">
            <div class="wrapper">
                <img src="../img3_0/brand/h-tit02.png" alt="" class="titleImg">
                <p>
                    吕志和，大紫荆勋贤，GBS，MBE，JP，LLD，DSSc，DAB（1929年－），原籍广东新会，出生于江门市，20世纪50年代创立首间嘉华公司，嘉华国际集团现任董事会主席和董事总经理，集团属下主要成员包括嘉华国际集团（股份编号：173.HK）、银河娱乐集团（股份编号：27.HK，为恒生指数成份股）、仕德福国际酒店集团、嘉华建材，分别从事地产、娱乐休闲、酒店及建筑材料等业务，附属公司超过200多间，全球员工近30,000人，投资的业务遍布香港、中国内地、澳门、北美洲及东南亚。吕志和及其家族在《福布斯》2019年全球亿万富豪榜中名列第82位，资产达到146亿美元。
                </p>
            </div>
        </div>
        <div class="enjoy">
            <img src="../img3_0/brand/enjoy-bg.png" alt="">
            <div class="wrapper">
                <img src="../img3_0/brand/h-tit03.png" alt="">
                <div class="txt">
                    <p>
                        银河娱乐集团(「银娱」或「集团」)是全球首屈一指的度假城、酒店及博彩企业，于香港联合交易所上市，并为恒生指数成份股。 <br><br>
                        作为澳门三家获得博彩批给合同的营运商之一，银娱一直以成功打造崭新、触目及屡获殊荣的项目、产品及服务见称，加上「傲视世界　情繫亚洲」的服务理念，令集团表现持续傲视同侪，引领澳门市场。
                    </p>
                </div>
                <h2>银娱于澳门经营三个旗舰项目</h2>
                <p>
                    包括位于路氹、全球其中一个规模最大的综合度假城「澳门银河」；<br>
                    毗邻「澳门银河」独一无二的娱乐及美食街新地标「澳门百老汇」；<br>
                    以及位于澳门半岛、屡获殊荣的尊尚项目澳门星际酒店。
                </p>
            </div>
        </div>
        <img src="../img3_0/brand/h-pic06.png" alt="" class="pla">
        <div class="safe">
            <div class="wrapper">
                <ul class="list3">
                    <li>
                        <p>高效存取款</p>
                        <p>
                            百老汇娱乐平台一直注重用户体验，高效快速的存取款业务是用户最实在的体验，所以我们一直致力于开发最新的收支业务和人员培训保证高效的存取款，保证5分钟存提款到账，为你快速享受游戏乐趣提供最大保证。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/h-pic07.png" alt="">
                    </li>

                    <li>
                        <p>精英客服团队</p>
                        <p>
                            百老汇娱乐平台客服均经过严格的筛选及专业的培训，用心打造精英客服团队为玩家提供优质的服务质量。全天候24小时为您提供专业、贴心的VIP服务，让您有宾至如归的感觉。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/h-pic08.png" alt="">
                    </li>

                    <li>
                        <p>强大的专家技术团队</p>
                        <p>
                            我们在业内聘请了一批经验丰富的线上博彩专家和操盘手，为广大玩家提供最先进、最富娱乐性的游戏项目，并保证我们游戏平台里的赔率是市场最佳赔率，从而保证广大玩家的利益。百老汇娱乐平台全部游戏设计均采用世界最领先的软件。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/h-pic09.png" alt="">
                    </li>

                    <li>
                        <p>信息安全隐私</p>
                        <p>
                            提供平稳的加密安全通道(256位SSL加密标准)，服务器的镜像备份保证了数据库和客户信息的安全。玩家网上支付和银行交易由国际金融机构在高标准的安全和机密的网络中进行。另外，客户在本平台的所有活动均严格保密，我们不会向任何第三方包括政府透露客户任何的个人信息及资料。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/h-pic10.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="contact">
            <div class="wrapper">
                <img src="../img3_0/brand/h-tit04.png" alt="" class="titleImg">
                <div class="fun">
                    <div class="funCom">
                        <ul>
                            <li>商务接待</li>
                            <li>电话：+853 8883 3338</li>
                            <li>传真: +853 8883 6668</li>
                        </ul>
                    </div>
                    <div class="line"></div>
                    <div class="funCom">
                        <ul>
                            <li>客户意见</li>
                            <li>电邮：bwfeedback@broadwaymacau.com.mo</li>
                            <li>地址: 「澳門百老匯」澳門路氹城蓮花海濱大馬路</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="groupBuss">
            <img src="../img3_0/brand/h-tit05.png" alt="">
            <ul class="list">
                <li>
                    <img src="../img3_0/brand/logo1.png" alt="" class="logo1">
                    <p>澳门银河</p>
                </li>
                <li>
                    <img src="../img3_0/brand/logo2.png" alt="" class="logo2">
                    <p>星际酒店</p>
                </li>
                <li>
                    <img src="../img3_0/brand/logo3.png" alt="" class="logo3">
                    <p>澳门百老汇</p>
                </li>
            </ul>
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
            img{
                width:100%;
            }
        }
        .about{
            position:relative;
            z-index: 2;
            background-image: url('../img3_0/brand/about-bg.png');
            background-repeat: no-repeat;
            background-size:cover;
            position:center;
            padding:14px 0 67px;
            margin-top:-10px;
            .wrapper{
                >img{
                    width:442px;
                    display:block;
                    margin:0 auto 51px;
                }
                .desc{
                    width:100%;
                    font-size:24px;
                    line-height:48px;
                    color:#fff;
                    margin-right:45px;
                    text-align:left;
                    word-break: break-all;
                    img{
                        width:272px;
                        float:right;
                        margin-left:48px;
                        margin-bottom:17px;
                    }
                }
                ul{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top:100px;
                    li{
                        width:208px;
                        margin-right:17px;
                        &:last-child{
                            margin-right: 0;
                        }
                        img{
                            width:100%;
                        }
                    }
                }
            }
        }
        .user{
            background-image: url('../img3_0/brand/user-bg.png');
            background-repeat: no-repeat;
            background-size:auto 100%;
            background-position:center bottom;
            padding:60px 0;
            .wrapper{
                .titleImg{
                    width:665px;
                    margin-bottom:251px;
                }
                p{
                    font-size:24px;
                    line-height: 48px;
                    color:#000;
                    text-align:left;
                }
            }
        }
        .enjoy{
            // background-image: url('../img3_0/brand/enjoy-bg.png');
            // background-repeat: no-repeat;
            // background-size:contain;
            // background-position:center;
            padding:0 0 60px;
            position:relative;
            background:#660044;
            >img{
                position:relative;
                z-index: 1;
                width:100%;
            }
            .wrapper{
                position:absolute;
                top:80px;
                left:50%;
                transform:translateX(-50%);
                z-index: 2;
                >img{
                    width:442px;
                    display:block;
                    margin:0 auto 50px;
                }
                .txt{
                    position:relative;
                    display:flex;
                    justify-content: flex-end;
                    margin-bottom:435px;
                    p{
                        display:block;
                        width:375px;
                        font-size:24px;
                        line-height:48px;
                        color:#fff;
                        text-align:left;
                    }
                }
                h2{
                    font-size:37px;
                    text-align:center;
                    margin:80px 0 80px;
                    color:#fff;
                }
                >p{
                    font-size:22px;
                    line-height:52px;
                    color:#fff;
                    text-align:center;
                    white-space:nowrap;
                }
            }
        }
        .pla{
            width:100%;
            display:block;
        }
        .safe{
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
                            background:#DC0363;
                            min-height:342px;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                        }
                        &:nth-child(3),
                        &:nth-child(7){
                            background:#670B45;
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
        .contact{
            background-image: url('../img3_0/brand/contact-bg.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center;
            padding:60px 0;
            .wrapper{
                .titleImg{
                    width:460px;
                    display:block;
                    margin:0 auto 58px;
                }
                .line{
                    width:100%;
                    height:1px;
                    background:rgba(255,255,255,0.2);
                    margin:43px 0 60px;
                }
                .fun{
                    display:flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    flex-direction: column;
                    .funCom{
                        width:50%;
                        flex-shrink: 0;
                        ul{
                            li{
                                font-size:24px;
                                line-height: 48px;
                                color:#fff;
                                text-align: left;
                                white-space: nowrap;
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
        .groupBuss{
            padding:60px 0 83px;
            >img{
                width:498px;
                display:block;
                margin:0 auto 50px;
            }
            .list{
                display:flex;
                justify-content: center;
                align-items:flex-end;
                li{
                    margin-right:110px;
                    &:last-child{
                        margin-right:0;
                    }
                    .logo1{
                        width:80px;
                    }
                    .logo2{
                        width:190px;
                    }
                    .logo3{
                        width:137px;
                    }
                    p{
                        font-size:24px;
                        color:#000;
                        margin-top:20px;
                        text-align:center;
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>