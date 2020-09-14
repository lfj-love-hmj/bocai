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
            <img src="../img3_0/brand/h-t-pic@2x.png" alt="">
        </div>
        <div class="about">
            <img src="../img3_0/brand/h-tit01@2x.png" alt="">
            <div class="desc">
                <img src="../img3_0/brand/h-pic01@2x.png" alt="">
                <div class="txt">
                    <p>
                        11年的坚持与革新，是我们不断前进的动力<br>
                        与其说“分开”，不如说“独立”<br>
                        挣脱束缚，只是我们的第一步<br>
                        放手一搏，我们可以做到更多<br><br>

                        创新未来，开创在线娱乐新时代，不只是升级，更是一种变革
                    </p>
                </div>
            </div>
        </div>
        <div class="mac">
            <div class="wrapper">
                <img src="../img3_0/brand/h-tit02@2x.png" alt="">
                <div class="desc">
                    <img src="../img3_0/brand/h-pic02@2x.png" alt="">
                    <p>
                        万发老虎机成立于1994年，是一家较有游戏软件开发经验的老牌娱乐公司，我们所提供的在线博彩软件得到行业许多有效在线赌场采用，产品包罗万象，从赌场、扑克、宾果、真人荷官到体育博彩，已经创造出850款独特的赌场游戏及1200种变化。万发博彩主打电子游戏和真人视讯和超过上百种的电子游戏，其中首推与MG合作的真人版花花公子（Playboy），两款风格及玩法迥异的游戏，让玩家自由选择。
                        <br><br>
                        作为老牌游戏开发商万发与MG深度合作，万发在不断推陈出新的同时，打造许多脍炙人口的经典游戏，从“魔鬼终结者”、“花花公子”、“侏罗纪公园”等几款改编版权的游戏。当然，还有它们内部研发团队所研发的“avalon”、“thunderstruck”、“immotral romance”等具代表性的游戏品牌，都是牢牢抓住、吸引玩家不断回流的关键因数。
                    </p>
                </div>
            </div>
            <div class="mac_b">
                <div class="wrapper">
                    <img src="../img3_0/brand/h-pic03@2x.png" alt="" class="img1">
                    <div class="desc">
                        <div class="txt">
                            <p>
                                万发不仅在老虎机游戏有亮眼突出的表现，它们在网络扑克的领域也耕耘已久。2003年3月建立的MPN扑克网络，是由27个不同的扑克室组成，所有喜好扑克游戏的玩家都能选择畅玩免费、奖金、单打及锦标赛等各项赛事。<br><br>
                                此外，2006年推出的真人视讯赌场，提供包括：百家乐、21点、轮盘等游戏。最引人注目的是它们与美国花花公子（Playboy）的合作，玩家在万发可以看见穿着兔女郎打扮的真人荷官，下注过程中可以获得筹码以外更多的乐趣。
                            </p>
                        </div>
                        <img src="../img3_0/brand/h-pic04@2x.png" alt="">
                    </div>
                    <h2>Playboy兔女郎 X 万发老虎机，双重品牌多重视觉享受。</h2>
                    <p>
                        性感火辣Playboy兔女郎正式入驻MG直播室与万发老虎机合作，只为给玩家们带来更多重的感官盛宴。<br><br>
                        与Playboy兔女郎近距离接触，礼品爱心样样来，恍如置身于专属您的花花公子俱乐部，游戏多样化投注选择，奖金随机翻倍，爆奖刺激无上限！
                    </p>
                </div>
            </div>
        </div>
        <div class="act">
            <!-- <img src="../img3_0/brand/h-bg02@2x.png" alt=""> -->
            <div class="desc">
                <div class="title">
                    <div class="title_t">
                        <h3>与主播互动</h3>
                        <img src="../img3_0/brand/bikini-paradise_h_cocktail@2x.png" alt="">
                    </div>
                    <p class="title_b">
                        与主播一起玩游戏时，玩家能玩的更开心，特别主播是Playboy兔女郎！<br>
                        可与兔女郎聊天，送礼物、爱心、送礼记录可在消费记录中完整查询
                    </p>
                </div>
                <div class="spec">
                    <div class="wrapper">
                        <div class="specBox">
                            <h2>平台特色</h2>
                            <p>
                                1. 万发的全部游戏系统是eCOGRA的监督的，这是一个非盈利赌场监督和调节的机构。eCOGRA在行业内独立运作，以确保游戏的公平和玩家的安全。认为自己受到在线赌场的不公平待遇的玩家，可以将其情况报告至eCOGRA，事实证明eCOGRA通常都以保护玩家利益的方式来处理问题。通过参与线上赌场的管理，博彩现金网平台万发本身也能激励自己在为玩家提供乐趣的同时，也保证到游戏的公平和诚实。<br><br>
                                2. 万发承若对游戏负责，每一年万发都在扩展其世界赌场占有的规模，由此万发也成为了中国赌场网站的一个流行名字。许多亚洲站点现在配合万发的专有软件使用到他们的博彩现金网平台中。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="pro">
                    <div class="wrapper">
                        <div class="pro_l">
                            <img src="../img3_0/brand/h-pic05@2x.png" alt="">
                        </div>
                        <div class="pro_r">
                            <h2>平台重要产品</h2>
                            <p>
                                万发是全球知名网上老虎机品牌的赌场公司，近20年的持续成长，万发一直创新和不断更新自己的产品<br><br>
                                与MG合作Playboy授权-5轴拉霸游戏，2013年与Playboy共同合作，由Playboy授权，研发出5轴拉霸游戏，奢华狂野的风格，独特的原创音乐，以及243种获胜方式，满足玩家视觉与听觉上的享受。<br><br>
                                Playboy真人荷官-2013年推出的Playboy真人荷官现场游戏，即时与兔女郎一对一进行博彩体验。<br><br>
                                3D轮盘-透过3D的即时轮盘游戏，让玩家置身现场。<br><br>
                                拉霸游戏-黑暗骑士拉霸游戏以及3D拉霸之龙之传说，选择有特色与人气的游戏，开发游戏的多样性，符合玩家的各种口味。<br><br>
                                可以肯定的是，玩家总可以在所有赌场的所有经典游戏中找到数种自己喜爱的游戏，还有累积奖金，这也是万发的最大优点之一。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="safe">
            <div class="wrapper">
                <ul>
                    <li>
                        <img src="../img3_0/brand/h-pic06@2x.png" alt="">
                        <h2>高效存取款</h2>
                        <p>
                            万发娱乐平台一直注重用户体验，高效快速的存取款业务是用户最实在的体验，所以我们一直致力于开发最新的收支业务和人员培训保证高效的存取款，保证5分钟存提款到账，为你快速享受游戏乐趣提供最大保证。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/h-pic07@2x.png" alt="">
                        <h2>精英客服团队</h2>
                        <p>
                            万发娱乐平台客服均经过严格的筛选及专业的培训，用心打造精英客服团队为玩家提供优质的服务质量。全天候24小时为您提供专业、贴心的VIP服务，让您有宾至如归的感觉。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/h-pic08@2x.png" alt="">
                        <h2>强大的专家技术团队</h2>
                        <p>
                            我们在业内聘请了一批经验丰富的线上博彩专家和操盘手，为广大玩家提供最先进、最富娱乐性的游戏项目，并保证我们游戏平台里的赔率是市场最佳赔率，从而保证广大玩家的利益。万发娱乐平台全部游戏设计均采用世界最领先的软件。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/h-pic09@2x.png" alt="">
                        <h2>信息安全隐私</h2>
                        <p>
                            提供平稳的加密安全通道(256位SSL加密标准)，服务器的镜像备份保证了数据库和客户信息的安全。玩家网上支付和银行交易由国际金融机构在高标准的安全和机密的网络中进行。另外，客户在本平台的所有活动均严格保密，我们不会向任何第三方包括政府透露客户任何的个人信息及资料。
                        </p>
                    </li>
                </ul>
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
            img{
                width:100%;
            }
        }
        .about{
            padding:60px 0 0;
            margin-top:-81px;
            >img{
                width:219px;
                display:block;
                margin:0 auto;
            }
            .desc{
                position:relative;
                >img{
                    width:100%;
                }
                .txt{
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translateX(-50%) translateY(-50%);
                    p{
                        font-size:24px;
                        line-height:48px;
                        color:#fff;
                        text-align:center;
                    }
                }
            }
        }
        .mac{
            .wrapper{
                >img{
                    width:379px;
                    display:block;
                    margin:0 auto 50px
                }
                .desc{
                    margin-bottom:50px;
                    p{
                        width:100%;
                        font-size:24px;
                        line-height:48px;
                        color:#666;
                        text-align:left;
                    }
                    >img{
                        width:100%;
                        margin-bottom:50px;
                    }
                }
            }
            .mac_b{
                background-image:url('../img3_0/brand/h-bg01@2x.png');
                background-repeat: no-repeat;
                background-size:100% auto;
                background-position:center bottom;
                padding-bottom:308px;
                .wrapper{
                    .img1{
                        width:100%;
                        margin-bottom:128px;
                    }
                    .desc{
                        position:relative;
                        margin-bottom:60px;
                        .txt{
                            width:100%;
                            padding:45px 37px 220px 48px;
                            border-radius: 15px;
                            background:#FF3F28;
                            flex-shrink: 0;
                            p{
                                font-size:24px;
                                line-height:48px;
                                color:#fff;
                                text-align:left;
                            }
                        }
                        >img{
                            width:423px;
                            display:block;
                            margin:-220px auto 0;
                        }
                    }
                    h2{
                        font-size:48px;
                        color:#666;
                        margin-bottom:40px;
                        text-align:center;
                        line-height:68px;
                    }
                    p{
                        font-size:24px;
                        line-height:48px;
                        color:#666;
                        text-align:center;
                    }
                }
            }
        }
        .act{
            position:relative;
            margin-top:-280px;
            background-image:url('../img3_0/brand/h-bg02@2x.png');
            background-repeat: no-repeat;
            background-size:100% auto;
            background-position:center bottom;
            // >img{
            //     height:100%;
            //     width:auto;
            //     position: relative;
            //     z-index: 1;
            // }
            .desc{
                // position:absolute;
                // top:15%;
                // left:50%;
                // transform:translateX(-50%);
                // z-index: 2;
                padding-top:200px;
                .title{
                    padding:0 46px;
                    text-align: left;
                    .title_t{
                        display:flex;
                        justify-content: flex-start;
                        align-items:center;
                        width:399px;
                        img{
                            height:89px;
                            margin-left:20px;
                        }
                        h3{
                            font-size:48px;
                            color:#fff;
                            font-weight: bold;
                        }
                    }
                    .title_b{
                        width:399px;
                        font-size:24px;
                        line-height:48px;
                        color:#fff;
                        text-align:left;
                    }
                }
                .spec{
                    .wrapper{
                        display:flex;
                        justify-content: flex-start;
                        align-items: center;
                        .specBox{
                            width:100%;
                            margin-top:40px;
                            h2{
                                font-size:36px;
                                color:#fff;
                                margin:0 0 20px;
                                text-align:left;
                                font-weight: bold;
                            }
                            p{
                                font-size: 24px;
                                line-height: 48px;
                                color:#fff;
                                text-align:left;
                            }
                        }
                    }
                }
                .pro{
                    margin-top:30px;
                    padding-bottom:30px;
                    .wrapper{
                        .pro_l{
                            position:relative;
                            img{
                                width:409px;
                                display:block;
                                margin:0 auto;
                            }
                        }
                        .pro_r{
                            width:100%;
                            margin-top:30px;
                            h2{
                                font-size:36px;
                                color:#fff;
                                margin:0 0 20px;
                                text-align:left;
                                font-weight: bold;
                            }
                            p{
                                font-size: 24px;
                                line-height: 48px;
                                color:#fff;
                                text-align:left;
                            }
                        }
                    }
                }
            }
        }
        .safe{
            background-image:url('../img3_0/brand/h-bg03@2x.png');
            background-repeat: no-repeat;
            background-size:100% auto;
            background-position:center bottom;
            padding:60px 0 570px;
            .wrapper{
                ul{
                    display:flex;
                    justify-content: center;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    li{ 
                        width:100%;
                        margin-bottom:60px;
                        display:flex;
                        justify-content:center;
                        align-items: center;
                        flex-direction: column;
                        img{
                            width:216px;
                        }
                        h2{
                            font-size:36px;
                            color:#000;
                            margin:40px 0;
                            font-weight: bold;
                        }
                        p{
                            font-size:24px;
                            line-height:48px;
                            color:#000;
                            text-align: left;
                        }
                    }
                }
            }
        }
    }
</style>