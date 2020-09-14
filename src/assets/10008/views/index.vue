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
            <img src="../img3_0/brand/banner.png" alt="">
        </div>
        <div class="about">
            <div class="aboutDesc">
                <img src="../img3_0/brand/about-1.png" alt="" class="about-1">
                <div class="about-desc">
                    <div class="txt">
                        <img src="../img3_0/brand/Brandintroduction@2x.png" alt="">
                        <p>
                            御匾会PAIZA之名来源于几个世纪前，中国皇帝赐予马可波罗的通行证："御匾"。御匾会作为金沙集团旗下的高级贵宾俱乐部在金沙中国旗下各酒店都设定了专属贵宾厅以及专属贵宾客房为我们的尊贵会员提供所有尊荣服务及体验。御匾会套房极其宽敞，提供最优质的个性化服务。经过Porte门廊，抵达御匾会的接待处，可以乘坐套房专用电梯抵达，同时在入住期间还配备专属管家为其提供最高标准的优质服务。
                        </p>
                    </div>
                    <img src="../img3_0/brand/about-2.png" alt="" class="about-2">
                </div>
            </div>
        </div>
        <div class="dev">
            <div class="devDesc">
                <img src="../img3_0/brand/dev-1.png" alt="" class="dev-1">
                <img src="../img3_0/brand/dev-2.png" alt="" class="dev-2">
            </div>
        </div>
        <div class="pa">
            <img src="../img3_0/brand/pa.png" alt="">
        </div>
        <div class="list">
            <div class="listDesc">
                <ul class="list1">
                    <li>
                        <img src="../img3_0/brand/list-1.png" alt="">
                    </li>
                    <li>
                        <img src="../img3_0/brand/list-2.png" alt="">
                    </li>
                    <li>
                        <img src="../img3_0/brand/list-3.png" alt="">
                    </li>
                </ul>
                <p class="txt">御匾会套房极其宽敞，可为提供最优质的个性化服务。</p>
                <div class="list2">
                    <ul>
                        <li><img src="../img3_0/brand/list-4.png" alt=""></li>
                        <li><img src="../img3_0/brand/list-5.png" alt=""></li>
                        <li><img src="../img3_0/brand/list-6.png" alt=""></li>
                        <li><img src="../img3_0/brand/list-7.png" alt=""></li>
                    </ul>
                    <p>御匾会贵宾厅在2018年7月18日，将旗下所有实体贵宾厅娱乐项目转至线上娱乐，为所有贵宾提供更方便快捷的游戏体验。御匾会娱乐平台以为所有会员提供最安全有保障的游戏环境为集团宗旨，让会员安心体验集团精心打造的刺激游戏与贴心服务。</p>
                </div>
                <ul class="list3">
                    <li>
                        <p>高效存取款</p>
                        <p>
                            御匾会娱乐平台一直注重用户体验，高效快速的存取款业务是用户最实在的体验，所以我们一直致力于开发最新的收支业务和人员培训保证高效的存取款，保证5分钟存提款到账，为你快速享受游戏乐趣提供最大保证。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/list-8.png" alt="">
                    </li>

                    <li>
                        <p>精英客服团队</p>
                        <p>
                            御匾会娱乐平台客服均经过严格的筛选及专业的培训，用心打造精英客服团队为玩家提供优质的服务质量。全天候24小时为您提供专业、贴心的VIP服务，让您有宾至如归的感觉。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/list-9.png" alt="">
                    </li>

                    <li>
                        <p>强大的专家技术团队</p>
                        <p>
                            我们在业内聘请了一批经验丰富的线上博彩专家和操盘手，为广大玩家提供最先进、最富娱乐性的游戏项目，并保证我们游戏平台里的赔率是市场最佳赔率，从而保证广大玩家的利益。御匾会娱乐平台全部游戏设计均采用世界最领先的软件。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/list-10.png" alt="">
                    </li>

                    <li>
                        <p>信息安全隐私</p>
                        <p>
                            提供平稳的加密安全通道(256位SSL加密标准)，服务器的镜像备份保证了数据库和客户信息的安全。玩家网上支付和银行交易由国际金融机构在高标准的安全和机密的网络中进行。另外，客户在本平台的所有活动均严格保密，我们不会向任何第三方包括政府透露客户任何的个人信息及资料。
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/list-11.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <img src="../img3_0/brand/bottom-1.png" alt="" class="bottom-1">
            <img src="../img3_0/brand/bottom-2.png" alt="" class="bottom-2">
            <p class="p1">澳門金沙（Sands Macau）</p>
            <img src="../img3_0/brand/bottom-3.png" alt="" class="bottom-3">
            <p class="p2">威尼斯人（The Venetian Macau）</p>
            <img src="../img3_0/brand/bottom-4.png" alt="" class="bottom-4">
            <p class="p3">金沙城中心（Sands Cotai Central）</p>
            <img src="../img3_0/brand/bottom-5.png" alt="" class="bottom-5">
            <p class="p4">四季酒店（Four Seasons Macau）</p>
            <img src="../img3_0/brand/bottom-6.png" alt="" class="bottom-6">
            <p class="p5">巴黎人（The Parisian Macau）</p>
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
        padding-top:@height-nav-bar;
        padding-bottom:@height-nav-bar;
        background:#2C150D;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        .banner{
            img{
                width:100%;
            }
        }
        .about{
            padding:100px 0;
            .aboutDesc{
                width:100%;
                padding:0 0.4rem;
                margin:0 auto;
                .about-1{
                    width:6.22rem;
                    margin:0 auto 1rem;
                    display:block;
                }
                .about-desc{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    background:rgba(0,0,0,0.23);
                    padding:0.33rem 0.43rem;
                    .txt{
                        text-align:left;
                        margin-right:0.25rem;
                        img{
                            width:5.34rem;
                            margin-bottom:0.2rem;
                        }
                        p{
                            font-size: 0.28rem;
                            color:#fff;
                            line-height:0.48rem;
                        }
                    }
                    .about-2{
                        width:2.18rem;
                        flex-shrink: 0;
                    }
                }
            }
        }
        .dev{
            width:100%;
            padding:0 0 1.3rem;
            .devDesc{
                width:100%;
                padding:0 0.4rem;
                img{
                    width:100%;
                }
                .dev-1{
                    margin-bottom:1rem;
                }
            }
        }
        .pa{
            width:100%;
            img{
                width:100%;
            }
        }
        .list{
            padding:1.6rem 0 1rem;
            .listDesc{
                width:100%;
                padding:0 0.4rem;
                .list1{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    li{
                        width:30%;
                        margin-right:5%;
                        &:last-child{
                            margin-right:0;
                        }
                        flex-shrink: 0;
                        img{
                            width:100%;
                        }
                    }
                }
                .txt{
                    margin:0.4rem 0 0.6rem;
                    font-size:0.28rem;
                    color:#fff;
                    text-align:center;
                }
                .list2{
                    background:rgba(0,0,0,0.2);
                    ul{
                        display:flex;
                        justify-content: space-between;
                        align-items: center;
                        li{
                            width:25%;
                            img{
                                width:100%;
                            }
                        }
                    }
                    p{
                        padding:0.3rem;
                        font-size:0.28rem;
                        color:#fff;
                        line-height:0.48rem;
                        text-align:left;
                    }
                }
                .list3{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    margin:0.6rem 0 0.67rem;
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
                            background:#9B5133;
                        }
                        &:nth-child(3),
                        &:nth-child(7){
                            background:#B38A58;
                        }
                    }
                }
            }
        }
        .bottom{
            text-align:center;
            padding-bottom:2rem;
            .bottom-1{
                width:7rem;
                display:block;
                margin:0 auto 1rem;
            }
            .bottom-2{
                width:1.20rem;
            }
            .bottom-3{
                width:2.02rem;
            }
            .bottom-4{
                width:2.94rem;
            }
            .bottom-5{
                width:2.56rem;
            }
            .bottom-6{
                width:2.23rem;
            }
            p{
                font-size:0.28rem;
                margin-bottom:0.4rem;
                margin-top:0.2rem;
                color:#fff;
            }
        }
    }
</style>