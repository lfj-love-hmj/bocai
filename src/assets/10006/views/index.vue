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
        <div class="topLine"></div>
        <div class="logo">
            <div class="logoImg">
                <img src="../img3_0/brand/logo.png" alt="">
            </div>
        </div>
        <div class="banner">
            <img src="../img3_0/brand/kv.png" alt="">
        </div>
        <!-- <div class="aboutLine"></div> -->
        <div class="about">
            <img src="../img3_0/brand/about-bg.png" alt="" class="about-bg">
            <div class="aboutDesc">
                <div class="desc_l">
                    <h2>关于我们 ABOUT US</h2>
                    <div class="line"></div>
                    <p>
                        本公司金光大道度假区的旗舰综合度假村澳门威尼斯人於二零零七年八月开幕。澳门威尼斯人距离氹仔临时客运码头大约三公里。澳门威尼斯人的娱乐场及博彩区面积约為374,000平方迟，包括专用贵宾厅及宽敞的中场博彩大堂。
                    </p>
                </div>
                <div class="desc_r">
                    <img src="../img3_0/brand/about-img.png" alt="">
                </div>
            </div>
        </div>
        <div class="brandStory">
            <div class="storyDesc">
                <div class="no1">
                    <h2>品牌故事</h2>
                    <h3>OUR STORY</h3>
                    <img src="../img3_0/brand/01.png" alt="" class="num1">
                    <img src="../img3_0/brand/-slice-line.png" alt="" class="line">
                </div>
                <div class="desc_common">
                    <img src="../img3_0/brand/jsylc.png" alt="" class="desc_img">
                    <div class="desc_text">
                        <h3>威尼斯人娱乐城</h3>
                        <p>
                            2005年3月18日，威尼斯人澳门连同七家世界知名酒店品牌于澳门金沙娱乐场举行新闻发布会，正式宣布一个名为路氹金光大道的重点发展项目，发展项目将会位于澳门两离岛（氹仔岛与路环岛）之间的填海区──路氹城（当时称之为：路氹新城），项目占地面积达到0.8平方公里，耗时约7至10年时间分3期发展7个地段，包括20间酒店，提供共约60,000间客房、多间商场、消闲设施及娱乐场。整个路氹金光大道项目的计划由威尼斯人（澳门）股份有限公司牵头发展，同时寻找不同的合作伙伴，项目的总投资额预计将达到120-150亿美元（折算约为澳门元1000亿元左右），整个项目计划将包括酒店、会展和娱乐场三大主要部分，集合消闲、娱乐、度假于一身。
                        </p>
                    </div>
                </div>
                <div class="no2">
                    <img src="../img3_0/brand/02.png" alt="" class="num2">
                </div>
                <div class="desc_common">
                    <img src="../img3_0/brand/jgdd.png" alt="" class="desc_img">
                    <div class="desc_text">
                        <h3>路凼金光大道</h3>
                        <p>
                            2005年5月26日“路氹金光大道”的首期项目──澳门威尼斯人酒店上盖工程正式举行动土仪式，标志着整个工程项目正式开展。工程期间使用的人力物力、工程的浩大都是澳门史无前例的。经过了2年多日以继夜地不停的赶工，首期工程项目──澳门威尼斯人度假村酒店，于2007年8月28日正式落成投入使用。其他项目工程亦同时展开，整个路氹金光大道发展项目预计于2010年全面落成。
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="address">
            <img src="../img3_0/brand/ylc-bg.png" alt="" class="address-bg">
            <div class="addressDesc">
                <h2>澳门威尼斯人娱乐场</h2>
                <h4>THE VENETIAN</h4>
                <div class="line"></div>
                <div class="desc_img">
                    <div class="desc_img_t">
                        <img src="../img3_0/brand/ylc-img-1.png" alt="">
                        <img src="../img3_0/brand/ylc-img-2.png" alt="">
                    </div>
                    <div class="desc_text">                        
                        澳门威尼斯人娱乐场是全球最大的娱乐场，占地55万平方呎，分“帝王殿”、“赤龙殿”、“凤凰殿”以及“金鳞殿”四个主题区。场内四区共设有约870张赌桌，有百家乐、廿一点、轮盘等博彩游戏，另外还设有超过3,400部角子老虎机。赌场楼底特高，置身其中有“一望无际”或“浩瀚”的感觉。值得一提的是，娱乐场内设有两条螺旋型的电动扶梯，也是全澳仅有的两条。<br>
                        娱乐场采用开放式管理，各个出入口均设有隐闭式电子安检系统，且有多名保安抽样作身份检查，赌场开放初期各出入口不设间隔，未成年人士在商场可以遥望赌场内景，因此这种开放式管理有商榷之点，到2009年起便设置间隔分隔公众通道及娱乐场。虽然娱乐场设有衣帽间，但娱乐场方面并不会强制规定入场人士存放非随身物品。
                    </div>
                    <div class="desc_img_b">
                        <img src="../img3_0/brand/ylc-img-3.png" alt="">
                    </div>
                    <div class="desc_data">
                        <div class="no">
                            <div class="item">
                                <p class="num">55W</p>
                                <p class="numDesc">平方呎</p>
                            </div>
                            <div class="item">
                                <p class="num">870</p>
                                <p class="numDesc">赌桌</p>
                            </div>
                            <div class="item">
                                <p class="num">3400+</p>
                                <p class="numDesc">角子老虎机</p>
                            </div>
                        </div>
                        <div class="info">
                            澳门望德圣母湾大马路
                            +853 2882-8888
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="other">
            <!-- <div class="cover"></div> -->
            <div class="otherDesc">
                <h2>威尼斯人其他产业</h2>
                <h4>THE VENETIAN</h4>
                <div class="line"></div>
                <div class="otherDesc_text">
                    除博彩设施之外，澳门威尼斯人亦设有下列设施:<br>
                    楼高39层的五星级酒店，提供超过2,900间套房<br>
                    64间御匾豪园套房，部分套房设有私人按摩室、健身室、游泳池及媒体／卡拉OK室<br>
                    多样化的文娱活动及设施<br>
                    面积约达1,000,000平方迟的威尼斯人购物中心，商店及餐厅林立。购物中心模仿威尼斯古旧街景兴建，餐厅及门店沿街而立，三条运河均可供乘坐贡多拉船泛舟其上。<br>
                    面积约1,200,000平方迟的综合展览中心及会议室。<br>
                    设有15,000个座位的金光综艺馆，在此上演包罗万有的文娱体育活动。<br>
                    设有1,800个座位的豪华剧院场。
                </div>
                <ul class="otherData">
                    <li>
                        <p>39F</p>
                        <p>五星级酒店</p>
                    </li>
                    <li>
                        <p>2900+</p>
                        <p>套房</p>
                    </li>
                    <li>
                        <p>64</p>
                        <p>御匾豪园套房</p>
                    </li>
                    <li>
                        <p>1,000,000</p>
                        <p>平方迟购物中心</p>
                    </li>
                    <li>
                        <p>1,200,000</p>
                        <p>平方迟综合展览中心</p>
                    </li>
                    <li>
                        <p>12,000</p>
                        <p>座的金光综艺馆</p>
                    </li>
                    <li>
                        <p>1,800</p>
                        <p>座的豪华剧院场</p>
                    </li>
                </ul>
                <ul class="otherImg">
                    <li>
                        <img src="../img3_0/brand/qt-img-1.png" alt="">
                        <div class="title">威尼斯人度假村酒店</div>
                    </li>
                    <li>
                        <img src="../img3_0/brand/qt-img-2.png" alt="">
                        <div class="title">威尼斯人大运河购物中心</div>
                    </li>
                    <li>
                        <img src="../img3_0/brand/qt-img-3.png" alt="">
                        <div class="title">威尼斯人综合展览中心</div>
                    </li>
                    <li>
                        <img src="../img3_0/brand/qt-img-4.png" alt="">
                        <div class="title">威尼斯人金光综艺馆</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <img src="../img3_0/brand/footer-logo.png" alt="">
        </div>
    </div>
</template>
<script>
import Vtabbar from "@/components/v-tabbar"
export default {
    data(){
        return {
            title:'品牌'
        }
    },
    components: {
        Vtabbar
    },
    created() {
      this.getData()
    }
}
</script>
<style lang="less" scoped>
    .brand{
        overflow-x:hidden;
        padding-top:@height-nav-bar;
        padding-bottom:@height-nav-bar;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        .topLine{
            width:100%;
            height:10px;
            background:#BE9E58;
        }
        .logo{
            width:100%;
            background:#011C54;
            .logoImg{
                width:100%;
                padding:0.2rem 0.4rem;
                margin:0 auto;
                text-align:left;
                img{
                    width:1.8rem;
                }
            }
        }
        .banner{
            img{
                width:100%;
            }
        }
        .aboutLine{
            width:100%;
            height:10px;
            background:#BE9E58;
        }
        .about{
            position:relative;
            // background-image:url('../img3_0/brand/about-bg.png');
            // background-repeat: no-repeat;
            // // background-size:100% auto;
            // background-size:contain;
            // background-position: center;
            .about-bg{
                width:100%;
            }
            .aboutDesc{
                position:absolute;
                top:50%;
                left:50%;
                transform:translateX(-50%) translateY(-50%);
                width:100%;
                padding:0 0.4rem;
                display:flex;
                justify-content: space-between;
                align-items:center;
                .desc_l{
                    width:5rem;
                    margin-right:0.43rem;
                    h2{
                        font-size:0.42rem;
                        color:#fff;
                        margin:0;
                        line-height:40px;
                        text-align:left;
                    }
                    .line{
                        width:2rem;
                        height:0.12rem;
                        background:#C1AE61;
                        margin:0.32rem 0 0.45rem;
                    }
                    p{
                        font-size:0.28rem;
                        color:#fff;
                        line-height:0.44rem;
                        text-align:left;
                    }

                }
                .desc_r{
                    img{
                        width:4rem;
                    }
                }
            }
        }
        .brandStory{
            position:relative;
            background:#121212;
            .story-bg{
                width:100%;
            }
            .storyDesc{
                position:relative;
                width:100%;
                padding:0 0.4rem 0.72rem;
                margin:0 auto;
                .no1{
                    position:relative;
                    text-align: center;
                    padding:0.6rem 0 0.1rem;
                    h2{
                        position:absolute;
                        left:50%;
                        transform:translateX(-103%);
                        bottom:0.5rem;
                        font-size:0.42rem;
                        font-weight: bold;
                        margin:0 0.8rem 0 0;
                        color:#BD9D57;
                    }
                    h3{
                        position:absolute;
                        left:50%;
                        transform:translateX(-103%);
                        bottom:0.1rem;
                        font-size:0.24rem;
                        margin:0 0.8rem 0 0;
                        color:#fff;
                    }
                    .line{
                        position:absolute;
                        left:50%;
                        transform:translateX(-50%);
                        top:-20%;
                        width:0.09rem;
                        z-index:2;
                    }
                    .num1{
                        width:1.2rem;
                    }
                }
                .no2{
                    text-align:right;
                    .num2{
                        width:1.38rem;
                        margin:-0.8rem 1rem 0.1rem 0;
                    }
                }
                .desc_common{
                    position:relative;
                    &:first-child{
                        margin-bottom:35px;
                        .desc_text{
                            padding-left:53px;
                            display:flex;
                            justify-content:center;
                            flex-direction: column;
                            align-items:flex-end;
                            h3{
                                width:100%;
                            }
                        }
                    }
                    .desc_img{
                        width:100%;
                        flex-shrink: 0;
                        margin-bottom:0.41rem;
                    }
                    .desc_text{
                        position:relative;
                        width:100%;
                        flex-shrink: 0;
                        text-align:left;
                        h3{
                            font-size:0.42rem;
                            color:#C1AD60;
                            line-height:30px;
                        }
                        p{
                            width:100%;
                            font-size:0.28rem;
                            color:#fff;
                            line-height:0.48rem;
                        }
                    }
                }
            }
        }
        .address{
            position:relative;
            // background-image:url('../img3_0/brand/ylc-bg.png');
            // background-repeat: no-repeat;
            // // background-size:100% auto;
            // background-size:cover;
            // background-position: center;
            // padding:107px 0;
            .address-bg{
                width:100%;
            }
            .addressDesc{
                position:relative;
                position:absolute;
                top:0.82rem;
                left:50%;
                transform:translateX(-50%);
                width:100%;
                padding:0 0.4rem;
                h2{
                    font-size: 0.42rem;
                    color:#BE9E58;
                    text-align:center;
                    font-weight: bold;
                }
                h4{
                    font-size:0.2rem;
                    color:#fff;
                    margin:8px 0 15px;
                    text-align:center;
                }
                .line{
                    width:0.6rem;
                    height:3px;
                    background:#C1AE61;
                    margin:0 auto 37px;
                }
                .desc_img{
                    position:relative;
                    .desc_img_t{
                        position:absolute;
                        top:0;
                        left:0;
                        width:100%;
                        display:flex;
                        justify-content: space-between;
                        align-items:flex-start;
                        img{
                            &:first-child{
                                position:absolute;
                                top:-1.42rem;
                                left:-0.4rem;
                                width:3.6rem;
                            }
                            &:last-child{
                                position:absolute;
                                top:-0.46rem;
                                right:-0.4rem;
                                width:3.4rem;
                            }
                        }
                    }
                }
                .desc_img_b{
                    text-align:right;
                    img{
                        width:8rem;
                        margin-top:-0.4rem;
                        margin-right:-0.4rem;
                    }
                }
                .desc_text{
                    margin-top:1.7rem;
                    z-index:2;
                    width:100%;
                    padding:0.44rem 0.52rem;
                    background:#BE9E58;
                    color:#fff;
                    font-size:0.28rem;
                    line-height:0.58rem;
                }
                .desc_data{
                    text-align:left;
                    .no{
                        display:flex;
                        justify-content: center;
                        align-items:flex-start;
                        margin:0.73rem 0 0.42rem;
                        .num{
                            font-size:0.72rem;
                            color:#DCB768;
                            font-weight: bold;
                        }
                        .numDesc{
                            font-size:0.27rem;
                            color:#DCB768;
                            font-weight: bold;
                        }
                        .item{
                            margin-right:1.4rem;
                            &:last-child{
                                margin-right:0;
                            }
                        }
                    }
                    .info{
                        font-size:0.24rem;
                        color:#DCB768;
                        font-weight: bold;
                        text-align:center;
                    }
                }
            }
        }
        .other{
            position:relative;
            background-image:url('../img3_0/brand/qt-bg.png');
            background-repeat: no-repeat;
            background-size:100% auto;
            background-position: center top;
            padding:112px 0 126px;
            .cover{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background:rgba(0,0,0,0);
                z-index:1
            }
            .otherDesc{
                position:relative;
                z-index: 2;
                width:100%;
                padding:0 0.4rem;
                margin:0 auto;
                h2{
                    font-size: 0.42rem;
                    color:#BE9E58;
                    text-align:center;
                    font-weight: bold;
                }
                h4{
                    font-size:0.2rem;
                    color:#fff;
                    margin:8px 0 15px;
                    text-align:center;
                }
                .line{
                    width:0.6rem;
                    height:3px;
                    background:#C1AE61;
                    margin:0 auto 37px;
                }
                .otherDesc_text{
                    font-size:0.28rem;
                    color:#fff;
                    line-height:0.48rem;
                    text-align:center;
                }
                .otherData{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    margin:1rem 0;
                    li{
                        padding:0 0.24rem;
                        border-right:1px solid #DCB768;
                        margin-bottom:0.46rem;
                        &:last-child{
                            border-right:none;
                        }
                        &:nth-child(4){
                            border-right:none;
                        }
                        p{
                            color:#DCB768;
                            text-align:center;
                            &:first-child{
                                font-size: 0.5rem;
                                font-weight: bold;
                                margin-bottom:7px;
                            }
                            &:last-child{
                                font-size:0.24rem;
                                white-space: nowrap;
                            }
                        }
                    }
                }
                .otherImg{
                    display:flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    li{
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        width:48%;
                        margin-right:3%;
                        margin-bottom:4%;
                        &:nth-child(2n){
                            margin-right:0;
                        }
                        img{
                            width:100%;
                            margin-bottom:0.36rem;
                        }
                        .title{
                            padding:0.15rem 0.28rem;
                            border:1px solid #C1AE61;
                            color:#C1AE61;
                            font-size:0.24rem;
                        }
                    }
                }
            }
        }
        .bottom{
            background:#011C54;
            text-align:center;
            padding:22px;
            img{
                width:522px;
            }
        }
    }
</style>