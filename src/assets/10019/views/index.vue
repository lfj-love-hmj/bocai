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
            <div class="wrapper">
                <img src="../img3_0/brand/h-tit01.png" alt="">
                <div class="desc">
                    <img src="../img3_0/brand/h-pic1.png" alt="">
                    <p>
                        澳门巴黎人综合度假村的建筑创意来源于著名的「光之城」法国巴黎的魅力和奇观，一大亮点是按照原建筑二分之一的比例建成的巴黎铁塔。我们提供齐全的综合度假村设施，包括近3,000间以当代法国格调设计的酒店客房及套房、国际餐厅美食、主题水上乐园、儿童天地、水疗中心、健身中心、设有1,200个座位的剧院、会议展览空间及多元化的娱乐选择。 
                    </p>
                </div>
            </div>
        </div>
        <div class="user">
            <div class="wrapper">
                <img src="../img3_0/brand/h-tit02.png" alt="">
                <div class="desc">
                    <img src="../img3_0/brand/h-pic01.png" alt="">
                    <div class="txt">
                        1970年1月11日（农历己酉年腊月四日），王璐瑶出生于艺术世家，她的父亲王戈情是剧作家，母亲路瑰迎是女高音歌唱家，她有二分之一的俄罗斯血统，她5岁开始学钢琴。1979年，9岁的王璐瑶考入国防科工委文工团，来到北京，学习舞蹈。1982年8月，科委舞蹈班解散，王璐瑶被广州战士歌舞团选中，成为一名部队的舞蹈演员，因为部队要求严格，不能随意出演影片。1985年6月，王璐瑶慎重地向单位申请转业。1990年，王璐瑶被分配到哈尔滨承轴厂工会。
                    </div>
                </div>
            </div>
        </div>
        <div class="pla">
            <div class="wrapper">
                <img src="../img3_0/brand/h-tit03.png" alt="">
                <ul class="list">
                    <li><img src="../img3_0/brand/h-pic02.png" alt=""></li>
                    <li><img src="../img3_0/brand/h-pic03.png" alt=""></li>
                    <li><img src="../img3_0/brand/h-pic04.png" alt=""></li>
                    <li><img src="../img3_0/brand/h-pic05.png" alt=""></li>
                </ul>
                <p>
                    澳门巴黎人娱乐场是全球第二大的娱乐场，占地55万平方呎，分「帝王殿」、「赤龙殿」、「凤凰殿」以及「金鳞殿」四个主题区。场内四区共设有约450张赌桌，有百家乐、廿一点、轮盘等博彩游戏，另外还设有超过2,500部角子老虎机。赌场楼底特高，置身其中有「一望无际」或「浩瀚」的感觉。<br>
                    娱乐场采用开放式管理，各个出入口均设有隐闭式电子安检系统，且有多名保安抽样作身分检查，赌场开放初期各出入口不设间隔，未成年人士在商场可以遥望赌场内景，因此这种开放式管理有商榷之点，到2016年起便设置间隔分隔公众通道及娱乐场。虽然娱乐场设有衣帽间，但娱乐场方面并不会强制规定入场人士存放非随身物品。
                </p>
                <img src="../img3_0/brand/h-pic06.png" alt="" class="numImg">
                <ul class="picList">
                    <li>
                        <img src="../img3_0/brand/h-pic7.png" alt="">
                        <p>梦幻巴黎特级篮球队</p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/h-pic08.png" alt="">
                        <p>肯肯舞、巴黎舞曲Burlesque</p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/h-pic09.png" alt="">
                        <p>国际巨星演唱会</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="lo">
            <img src="../img3_0/brand/h-pic10.png" alt="">
        </div>
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
                        <img src="../img3_0/brand/h-pic11.png" alt="">
                    </li>

                    <li>
                        <p>精英客服团队</p>
                        <p>
                            百老汇娱乐平台客服均经过严格的筛选及专业的培训，用心打造精英客服团队为玩家提供优质的服务质量。全天候24小时为您提供专业、贴心的VIP服务，让您有宾至如归的感觉。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/h-pic12.png" alt="">
                    </li>

                    <li>
                        <p>强大的专家技术团队</p>
                        <p>
                            我们在业内聘请了一批经验丰富的线上博彩专家和操盘手，为广大玩家提供最先进、最富娱乐性的游戏项目，并保证我们游戏平台里的赔率是市场最佳赔率，从而保证广大玩家的利益。百老汇娱乐平台全部游戏设计均采用世界最领先的软件。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/h-pic13.png" alt="">
                    </li>

                    <li>
                        <p>信息安全隐私</p>
                        <p>
                            提供平稳的加密安全通道(256位SSL加密标准)，服务器的镜像备份保证了数据库和客户信息的安全。玩家网上支付和银行交易由国际金融机构在高标准的安全和机密的网络中进行。另外，客户在本平台的所有活动均严格保密，我们不会向任何第三方包括政府透露客户任何的个人信息及资料。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/h-pic14.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="contact">
            <div class="wrapper">    
                <img src="../img3_0/brand/h-tit04.png" alt="">
                <div class="line .line1"></div>
                <div class="fun">
                    <div class="funCom">
                        <ul>
                            <li>商务接待</li>
                            <li>电话：+853 8111 2300</li>
                            <li>电邮：sales.inquiry@parisian.com.mo</li>
                        </ul>
                    </div>
                    <div class="line line2"></div>
                    <div class="funCom">
                        <ul>
                            <li>客户意见</li>
                            <li>电邮：customercare@parisian.com.mo</li>
                            <li>地址：澳门巴黎人 澳门路氹金光大道连贯公路</li>
                        </ul>
                    </div>
                </div>
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
    /deep/ .van-nav-bar .van-nav-bar__title{
        color:#000 !important;
    }
    /deep/ .van-nav-bar .van-nav-bar__right .van-icon{
        color:#000 !important;
    }
    .brand{
        padding-top:@height-nav-bar;
        padding-bottom:@height-nav-bar;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        background:#1F1B35;
        .banner{
            img{
                width:100%;
            }
        }
        .about{
            padding-top:60px;
            .wrapper{
                >img{
                    width:302px;
                    display:block;
                    margin:0 auto 60px;
                }
                .desc{
                    >img{
                        width:100%;
                        margin-bottom:30px;
                    }
                    p{
                        display:block;
                        padding:30px;
                        background:rgba(0,0,0,0.4);
                        font-size:24px;
                        color:#CDB99B;
                        line-height:48px;
                        text-align:left;
                    }
                }
            }
        }
        .user{
            padding-top:60px;
            .wrapper{
                >img{
                    width:362px;
                    display:block;
                    margin:0 auto;
                }
                .desc{
                    position:relative;
                    margin-top:-44px;
                    >img{
                        width:100%;
                    }
                    .txt{
                        position:absolute;
                        bottom:20px;
                        right:35px;
                        width:362px;
                        font-size:24px;
                        line-height:48px;
                        color:#fff;
                        text-align:left;
                    }
                }
            }
        }
        .pla{
            padding-top:50px;
            padding-bottom:60px;
            .wrapper{
                >img{
                    width:182px;
                    display:block;
                    margin:0 auto 50px;
                }
                .list{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    margin-bottom:30px;
                    li{
                        width:49%;
                        margin-right:2%;
                        margin-bottom:2%;
                        &:nth-child(2n){
                            margin-right:0;
                        }
                        img{
                            width:100%;
                        }
                    }
                }
                p{
                    font-size:24px;
                    line-height:48px;
                    color:#fff;
                    text-align:left;
                    margin:10px 0 70px;
                }
                .numImg{
                    width:585px;
                    display:block;
                    margin:50 auto 60px;
                }
                .picList{
                    display:flex;
                    justify-content:space-between;
                    align-items: flex-start;
                    li{
                        width:32%;
                        margin-right:2%;
                        &:last-child{
                            margin-right:0;
                        }
                        img{
                            width:100%;
                            margin-bottom:30px;
                        }
                        p{
                            font-size:24px;
                            color:#D9D8DD;
                            text-align:center;
                            margin-bottom:0;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
        .lo{
            img{
                width:100%;
            }
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
                            background:#CA0051;
                            min-height:342px;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                        }
                        &:nth-child(3),
                        &:nth-child(7){
                            background:#342D5D;
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
            padding:0 0 134px;
            .wrapper{
                img{
                    width:300px;
                    display:block;
                    margin:0 auto 100px;
                }
                .line{
                    width:100%;
                    height:1px;
                    background:rgba(255,255,255,0.2);
                    margin:43px 0 60px;
                }
                .line1{
                    margin-top:64px;
                }
                .fun{
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
    }
</style>