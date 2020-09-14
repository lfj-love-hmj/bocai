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
            <img src="../img3_0/brand/Banner.png" alt="">
        </div>
        <div class="intro">
            <div class="introDesc">
                <div class="title">
                    <img src="../img3_0/brand/dot.png" alt="">
                    <h2>集团简介</h2>
                    <img src="../img3_0/brand/dot.png" alt="">
                </div>
                <img src="../img3_0/brand/intro-1.png" alt="" class="intro-1">
                <div class="intro_text">
                    <!-- <img src="../img3_0/brand/intro-2.png" alt="" class="intro_2"> -->
                    <div class="intro_text_box">
                        <div class="box_l">
                            <div class="head">
                                <h2>集团简介</h2>
                                <span>/Group profile</span>
                            </div>
                            <div class="line"></div>
                            <p>

                                澳门金沙（SandsMacau）是位于澳门新口岸的一家赌场酒店，澳门股份有限公司所持有及营运。“金沙 (Sands)”这个名字是来源于位于美国内华达州拉斯维加斯的金沙赌场酒店。<br>
                                2006年3月，金沙娱乐场与葡京娱乐场以及文华东方娱乐场同时入选由《福布斯》杂志所选出的全球最热门(Hottest)的13间赌场名单。
                                                            
                            </p>
                            <div class="btn">形象代言：贝克汉姆</div>
                        </div>
                    </div>
                    <img src="../img3_0/brand/intro-4.png" alt="" class="intro_4">
                </div>
            </div>
        </div>
        <div class="about">
            <div class="aboutDesc">
                <div class="title">
                    <img src="../img3_0/brand/dot.png" alt="">
                    <h2>资质实力</h2>
                    <img src="../img3_0/brand/dot.png" alt="">
                </div>
                <img src="../img3_0/brand/about-1.png" alt="" class="about-1">
                <ul class="list">
                    <li>
                        <img src="../img3_0/brand/about-2.png" alt="">
                    </li>
                    <li>
                        <img src="../img3_0/brand/about-3.png" alt="">
                    </li>
                    <li>
                        <img src="../img3_0/brand/about-4.png" alt="">
                    </li>
                </ul>
                <img src="../img3_0/brand/about-5.png" alt="" class="about-5">
                <p>
                    澳门金沙娱乐场(Sands Casino) 是位于澳门新口岸区的一家赌场，由威尼斯人（澳门）股份有限公司所持有及营运。赌场于2004年5月18日开幕，
                    <span>总投资逾2.6亿美元，</span>美国拉斯维加斯金沙公司属下  。赌场<span>面积接近180,000平方英尺，</span>合共设有<span>438张中西式赌台、</span>
                    以及<span>921台角子机。</span>赌场内除了1楼中场之外，另还设有<span>贵宾区域“御匾会”</span>(Paiza Club)、<span>非吸烟区“明珠坊”</span>
                    (Pearl Room)以及新增建位于2楼的<span>“如意坊”(Level of Fortune)。</span>
                </p>
            </div>
            <img src="../img3_0/brand/about-6.png" alt="" class="about-6">
        </div>
        <div class="line_0">
            <img src="../img3_0/brand/line.png" alt="">
        </div>
        <div class="bannerBox">
            <div class="title">
                <img src="../img3_0/brand/dot.png" alt="">
                <h2>实景图</h2>
                <img src="../img3_0/brand/dot.png" alt="">
            </div>
            <img src="../img3_0/brand/swiper-4.png" alt="" class="swiper-4">
            <div class="bannerBoxContent">
                <swiper :height="250" :options="swiperOption" class="swiper-container swiper_h5">
                    <swiper-slide v-for="(item, index) in bannerList" :key="index">
                        <img :src="item"/>
                        <div class="cover"></div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="mac">
            <div class="macDesc">
                <div class="title">
                    <img src="../img3_0/brand/dot.png" alt="">
                    <h2>服务设施</h2>
                    <img src="../img3_0/brand/dot.png" alt="">
                </div>
                <img src="../img3_0/brand/mac-1.png" alt="" class="mac-1">
                <ul class="list1">
                    <li>
                        <img src="../img3_0/brand/mac-2.png" alt="">
                        <div class="li_r">
                            <h2>水疗美容</h2>
                            <div class="line"></div>
                            <p>
                                金沙“御匾会”水疗及美发中心是为酒店房客而设，其中位于8楼的“金沙御匾会水疗中心”设有8间雅致的水疗房间，每间都拥有独立的淋浴间
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="li_r">
                            <h2>贵宾室</h2>
                            <div class="line"></div>
                            <p>
                                设有部份贵宾专享的餐厅，其中“御匾会”专享的就是“御景台”，位于酒店顶层，提供菜肴及特色鸡尾酒，晚上更有流行曲组合SONATA现场演绎流行欧美歌曲
                            </p>
                        </div>
                        <img src="../img3_0/brand/mac-3.png" alt="">
                    </li>
                    <li>
                        <img src="../img3_0/brand/mac-4.png" alt="">
                        <div class="li_r">
                            <h2>周边环境</h2>
                            <div class="line"></div>
                            <p>
                                邻近建筑及景点主要有，澳门渔人码头，外港码头，澳门文华东方酒店，盛世莲花，华都酒店，澳门文化中心
                            </p>
                        </div>
                    </li>
                </ul>
                <ul class="list2">
                    <li>
                        <img src="../img3_0/brand/mac-5.png" alt="">
                        <h2>餐饮</h2>
                        <div class="line"></div>
                        <p>
                            金沙娱乐场亦附设有八间中西式餐厅和酒吧，为客人提供餐饮服务。金沙阁、金帆船餐厅、仙乐都酒廊 (Xanadu)、高雅扒房、至尊吧、888拉斯维加斯自助餐厅
                        </p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/mac-6.png" alt="">
                        <h2>娱乐场</h2>
                        <div class="line"></div>
                        <p>
                            赌场面积229,000平方英呎，合共设有740张中西式赌台、以及1254台角子机。赌场内除了1楼中场之外，另还设有贵宾区域“御匾会”、地下非吸烟区“明珠坊”，另于2006年8月新增扩建位于2楼的“如意坊”以及于3楼的“百乐坊”。
                        </p>
                    </li>
                </ul>
            </div>
            <img src="../img3_0/brand/story-7.png" alt="" class="mac-7">
        </div>
        <div class="story">
            <div class="storyDesc">
                <div class="title">
                    <img src="../img3_0/brand/dot.png" alt="">
                    <h2>品牌故事</h2>
                    <img src="../img3_0/brand/dot.png" alt="">
                </div>
                <img src="../img3_0/brand/story-6.png" alt="" class="story-1">
                <div class="lineBox">
                    <div class="line"></div>
                    <div class="common">
                        <img src="../img3_0/brand/story-1.png" alt="" class="storyImg">
                        <img src="../img3_0/brand/circle.png" alt="" class="circle">
                        <div class="common_text">
                            <h2>2000年开放赌权</h2>
                            <div class="line2"></div>
                            <p>澳门特区政府于2000年开放赌权，发出三张赌牌予投资者竞投，吸引了一大批本地以及外来投资者参与投标。最后，分别由澳博、银河以及永利投得三张赌牌。</p>
                        </div>
                    </div>
                    <div class="common">
                        <div class="common_text">
                            <h2>赌牌分拆</h2>
                            <div class="line2"></div>
                            <p>由于澳门政府允许每张赌牌分拆一次，故与银河属合作伙伴的威尼斯人澳门获得其分拆的半张赌牌，并立即开始其于澳门的发展计划，成为日后各赌牌分拆的先例</p>
                        </div>
                        <img src="../img3_0/brand/circle.png" alt="" class="circle">
                        <img src="../img3_0/brand/story-2.png" alt="" class="storyImg">
                    </div>
                    <div class="common">
                        <img src="../img3_0/brand/story-3.png" alt="" class="storyImg">
                        <img src="../img3_0/brand/circle.png" alt="" class="circle">
                        <div class="common_text">
                            <h2>2004年5月18日正式开幕</h2>
                            <div class="line2"></div>
                            <p>
                                在澳门金沙的发展计划中，威尼斯人获得位于澳门新口岸港澳码头附近的蒙地卡罗前地一幅6公顷的海滨花园作发展用途<br><br>
                                于2004年5月18日正式开幕，成为了到访澳门的游客一个新的博彩去处。据报章报道，金沙开幕当天吸引了25,000名客人入场，盛况空前。
                            </p>
                        </div>
                    </div>
                    <div class="common">
                        <div class="common_text">
                            <h2>2006年3月</h2>
                            <div class="line2"></div>
                            <p>金沙娱乐场与葡京娱乐场以及文华东方娱乐场同时入选由《福布斯》杂志所选出的全球最热门(Hottest)的13间赌场名单</p>
                        </div>
                        <img src="../img3_0/brand/circle.png" alt="" class="circle">
                        <img src="../img3_0/brand/story-4.png" alt="" class="storyImg">
                    </div>
                    <div class="common">
                        <img src="../img3_0/brand/story-5.png" alt="" class="storyImg">
                        <img src="../img3_0/brand/circle.png" alt="" class="circle">
                        <div class="common_text">
                            <h2>2007年再扩建</h2>
                            <div class="line2"></div>
                            <p>2006年8月再扩建位于2楼和3楼的中场部分，曾使得娱乐场的赌台数目成为全球之冠。而酒店初期只有51间套房，及后于2007年再扩建至289间套房。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="bottomDesc">
                <img src="../img3_0/brand/local.png" alt="" class="local">
                <p class="p1">澳门蒙地卡羅前地203號   +853 2888 3330</p>
                <p class="p2">内华达州拉斯维加斯，金沙大道201号 +02-414-4021</p>
                <img src="../img3_0/brand/logo.png" alt="" class="logo">
            </div>
            <!-- <img src="../img3_0/brand/story-7.png" alt="" class="story-7"> -->
        </div>
    </div>
</template>
<script>
import Vtabbar from "@/components/v-tabbar"

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    data(){
        return {
            title:'品牌',
            bannerList:[
                require('../img3_0/brand/swiper-1.png'),
                require('../img3_0/brand/swiper-2.png'),
                require('../img3_0/brand/swiper-3.png'),
            ],
            swiperOption: {
                slidesPerView: 'auto',
                spaceBetween: 0,
                centeredSlides: true,
                loop: true,
                loopAdditionalSlides: 100,
                autoplay: false, //可设置数值来指定播放速度
                speed: 500,
            },
        }
    },
    components: {
        Vtabbar,
        swiper,
        swiperSlide
    },
}
</script>
<style lang="less" scoped>
    .brand{
        padding-top:@height-nav-bar;
        padding-bottom:@height-nav-bar;
        overflow-x:hidden;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        .banner{
            position:relative;
            // z-index: 2;
            img{
                width:100%;
            }
        }
        .intro{
            position:relative;
            z-index: 1;
            background-image: url('../img3_0/brand/intro-bg.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center;
            padding:0.85rem 0.4rem 0.81rem;
            margin-top:-0.2rem;
            .introDesc{
                position:relative;
                width:100%;
                .title{
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    margin-bottom:25px;
                    img{
                        width:0.23rem;
                        height:0.23rem;
                    }
                    h2{
                        font-size:0.48rem;
                        color:#C7A462;
                        margin:0 10px;
                    font-weight: bold;
                    }
                }
                .intro-1{
                    width:5.65rem;
                    margin-bottom:23px;
                    margin:0 auto;
                    display:block;
                }
                .intro_text{
                    position:relative;
                    background-image: url('../img3_0/brand/intro-2.png');
                    background-repeat: no-repeat;
                    background-size:cover;
                    background-position:center;
                    .intro_text_box{
                        width:100%;
                        padding:0.8rem 0.46rem;
                        display:flex;
                        justify-content: space-between;
                        align-items:center;
                        .box_l{
                            width:5.6rem;
                            text-align:left;
                            .head{
                                display:flex;
                                justify-content:flex-start;
                                align-items: flex-end;
                                h2{
                                    font-size:0.42rem;
                                    color:#fff;
                                    margin:0;
                                }
                                span{
                                    font-size:0.24rem;
                                    color:#fff;
                                    margin-left:10px;
                                }
                            }
                            .line{
                                width:60px;
                                height:8px;
                                background:#fff;
                                margin:23px 0 35px;
                            }
                            p{
                                font-size:0.28rem;
                                color:#fff;
                                line-height:0.48rem;
                            }
                            .btn{
                                padding:0.15rem 0.2rem;
                                background:#fff;
                                color:#C7A463;
                                font-size:0.28rem;
                                display:inline-block;
                                margin-top:0.3rem;
                            }
                        }
                    }
                }
                .intro_4{
                    position:absolute;
                    bottom:-0.4rem;
                    left:-0.5rem;
                    width:1rem;
                }
            }
        }
        .about{
            position:relative;
            background-image: url('../img3_0/brand/about-bg.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center;
            padding:0.8rem 0.4rem 0.98rem;
            margin-top:-3px;
            .aboutDesc{
                position:relative;
                width:100%;
                .title{
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    margin-bottom:25px;
                    img{
                        width:0.23rem;
                        height:0.23rem;
                    }
                    h2{
                        font-size:0.48rem;
                        color:#C7A462;
                        margin:0 10px;
                    font-weight: bold;
                    }
                }
                .about-1{
                    width:2.36rem;
                    margin:0.14rem auto 0.35rem;
                    display:block;
                }
                .list{
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    margin-bottom:0.78rem;
                    li{
                        width:32%;
                        margin-right:2%;
                        &:last-child{
                            margin-right:0;
                        }
                        img{
                            width:100%;
                        }
                    }
                }
                .about-5{
                    width:4.17rem;
                    margin:0 auto 0.3rem;
                    display:block;
                }
                p{
                    width:100%;
                    margin:0 auto;
                    font-size:0.28rem;
                    color:#fff;
                    line-height:0.48rem;
                    text-align:center;
                    span{
                        color:#D9C17B;
                    }
                }
            }
            .about-6{
                position:absolute;
                right:0;
                bottom:-2rem;
                width:2.32rem;
            }
        }
        .line_0{
            width:100%;
            padding:0 0.4rem;
            background:#131315;
            img{
                width:100%;
            }
        }
        .bannerBox{
            background:#131315;
            padding-top:0.73rem;
            .title{
                display:flex;
                justify-content: center;
                align-items:center;
                margin-bottom:25px;
                img{
                    width:0.23rem;
                    height:0.23rem;
                }
                h2{
                    font-size:0.48rem;
                    color:#C7A462;
                    margin:0 10px;
                    font-weight: bold;
                }
            }
            .swiper-4{
                width:3.45rem;
                margin:0.14rem auto 0.35rem;
                display:block;
            }
            .bannerBoxContent{
                width:70%;
                margin:0 auto;
                position: relative;
                font-size:0;
                display:flex;
                justify-content: center;
                align-items: center;
                overflow:visible !important;
                min-height:250px;
                .swiper_h5{
                    overflow:visible !important;
                    pointer-events: none;
                    .swiper-slide{
                        position:relative;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        width:100%;
                        img{
                            position:relative;
                            z-index:1;
                            width:100%;
                        }
                        .cover{
                            position:absolute;
                            top:0;
                            left:0;
                            width:100%;
                            height:100%;
                            background:rgba(0,0,0,0.6);
                            z-index:2;
                        }
                        &.swiper-slide-active{
                            .cover{
                                display:none;
                            }
                        }
                    }
                }
            }
        }
        .mac{
            position:relative;
            background-image: url('../img3_0/brand/mac-bg.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center;
            padding:0.71rem 0 0.68rem;
            .macDesc{
                position:relative;
                width:100%;
                .title{
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    margin-bottom:25px;
                    img{
                    width:0.23rem;
                    height:0.23rem;
                }
                h2{
                    font-size:0.48rem;
                    color:#C7A462;
                    margin:0 10px;
                    font-weight: bold;
                }
                }
                .mac-1{
                    width:6.85rem;
                    margin:0.14rem auto 0.53rem;
                    display:block;
                }
                .list1{
                    display:flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    flex-direction: column;
                    padding:0 0.4rem;
                    li{
                        width:100%;
                        display:flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        margin-bottom:0.4rem;
                        &:nth-child(2n+1){
                            .li_r{
                                margin-left:0.35rem;
                                display:flex;
                                flex-direction: column;
                                align-items: flex-start;
                                p{
                                    text-align: left;
                                }
                            }
                        }
                        &:nth-child(2n){
                            .li_r{
                                margin-right:0.35rem;
                                display:flex;
                                flex-direction: column;
                                align-items: flex-end;
                                p{
                                    text-align: right;
                                }
                            }
                        }
                        img{
                            width:2.8rem;
                            margin-bottom:30px;
                        }
                        .li_r{
                            h2{
                                font-size:0.42rem;
                                color:#D9C17B;
                                margin:0;
                            }
                            .line{
                                width:0.6rem;
                                height:8px;
                                background:#D9C17B;
                                margin:0.2rem 0 0.25rem;
                            }
                            p{
                                font-size:0.28rem;
                                line-height:0.48rem;
                                color:#fff;
                            }
                        }
                    }
                }
                .list2{
                    display:flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding:0 0.4rem;
                    li{
                        width:48%;
                        margin-right:4%;
                        text-align: left;
                        &:last-child{
                            margin-right:0;
                        }
                        img{
                            width:100%;
                            margin-bottom:0.3rem;
                        }
                        h2{
                            font-size:0.42rem;
                            color:#D9C17B;
                            margin:0;
                        }
                        .line{
                            width:0.6rem;
                            height:8px;
                            background:#D9C17B;
                            margin:0.2rem 0 0.25rem;
                        }
                        p{
                            font-size:0.28rem;
                            line-height:0.48rem;
                            color:#fff;
                        }
                    }
                }
            }
            .mac-7{
                position:absolute;
                bottom:-1rem;
                left:-0.9rem;
                width:2.26rem;
            }
        }
        .story{
            background:#1F1F1E;
            padding:127px 0 129px;
            .storyDesc{
                position:relative;
                width:100%;
                padding:0 0.4rem;
                .title{
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    margin-bottom:25px;
                    img{
                        width:0.23rem;
                        height:0.23rem;
                    }
                    h2{
                        font-size:0.48rem;
                        color:#C7A462;
                        margin:0 10px;
                        font-weight:bold;
                    }
                }
                .story-1{
                    width:3.45rem;
                    margin:0.14rem auto -0.13rem;
                    display:block;
                }
                .lineBox{
                    position: relative;
                    width:100%;
                    padding:93px 0 0;
                    .line{
                        position:absolute;
                        top:0;
                        left:50%;
                        transform:translateX(-50%);
                        width:2px;
                        height:100%;
                        background:#D9C17B;
                    }
                    .common{
                        width:100%;
                        display:flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        margin-bottom:1rem;
                        &:last-child{
                            margin-bottom:0;
                        }
                        &:nth-child(2n+1){
                            text-align:right;
                            .common_text{
                                display: flex;
                                flex-direction: column;
                                align-items: flex-end;
                            }
                        }
                        &:nth-child(2n){
                            text-align: left;
                        }
                        .storyImg{
                            width:45%;
                            flex-shrink: 0;
                        }
                        .circle{
                            width:0.3rem;
                            height:0.3rem;
                            // margin:0 0.17rem;
                        }
                        .common_text{
                            width:45%;
                            flex-shrink: 0;
                            h2{
                                font-size:0.42rem;
                                color:#D9C17B;
                                margin:0;
                            }
                            .line2{
                                width:0.6rem;
                                height:8px;
                                background:#D9C17B;
                                margin:0.2rem 0 0.26rem;
                            }
                            p{
                                font-size:0.28rem;
                                color:#fff;
                                line-height: 0.48rem;
                            }
                        }
                    }
                }
            }
        }
        .bottom{
            position:relative;
            background:#181817;
            padding-top:80px;
            .bottomDesc{
                width:100%;
                text-align:center;
                .local{
                    width:0.53rem;
                    margin-bottom:0.3rem;
                }
                .p1{
                    font-size:0.42rem;
                    color:#fff;
                    margin-bottom:0.22rem;
                }
                .p2{
                    font-size:0.28rem;
                    color:#fff;
                    margin-bottom:0.23rem;
                }
                .logo{
                    width:2.83rem;
                }
            }
            .story-7{
                position: absolute;
                right:-70px;
                top:-118px;
                width:2.83rem;
            }
        }
    }
</style>