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
            <div class="logo">
                <img src="../img3_0/brand/LOGO.png" alt="">
            </div>
            <div class="desc">
                <h2>Welcome Wynn Macau</h2>
                <div class="til">
                    <span>/</span>
                    <span>永</span>
                    <span>利</span>
                    <span>澳</span>
                    <span>门</span>
                    <span>/</span>
                </div>
                <p>璀璨与瑰丽的细腻设计，演绎您梦寐以求的恬静与活力</p>
            </div>
        </div>
        <div class="goldLine"></div>
        <div class="about">
            <div class="about1">
                <div class="goldLine"></div>
                <h2>关于永利</h2>
                <div class="lineTxt">
                    <div class="line"></div>
                    <h3>About  us</h3>
                    <div class="line"></div>
                </div>
                <p>
                    永利澳门（Wynn Macau），前称永利澳门度假村（Wynn Macau resort）是一座位于澳门新口岸仙德丽街的赌场度假村，由永利澳门有限公司兴建营运。该酒店于2004年6月24日动工，于2006年9月5日揭幕，9月6日对外开放，当晚举行的烟花汇演，外界评为澳门史上最盛大的一次性烟花汇演，吸引不少居民和游客驻足欣赏。
                </p>
            </div>
            <div class="about2">
                <img src="../img3_0/brand/ylds.png" alt="">
                <ul>
                    <li>16英亩</li>
                    <li>56亿元</li>
                    <li>澳门首家</li>
                </ul>
                <p>

                    永利澳门（Wynn Macau）， 整个发展计划占地16英亩，<br>
                    第一期工程占地11英亩，由塔楼的酒店及裙楼的娱乐场与其他配套设施组成，<br>
                    总投资额达56亿元，<br>
                    这是澳门首家拉斯维加斯综合度假村模式的赌场酒店。
                            
                </p>
            </div>
        </div>
        <div class="dev">
            <div class="devWrapper">
                <h2>永利发展</h2>
                <div class="lineTxt">
                    <div class="line"></div>
                    <h3>Brand</h3>
                    <div class="line"></div>
                </div>
                <p>
                    永利澳门位处澳门核心地段，是市内瞩目的豪华娱乐场度假酒店，周边汇聚全城顶尖的购物、饮食、观光热点及世界遗产建筑。<br><br>

                    永利澳门由全球最顶尖的独立酒店品牌Wynn Resorts营运管理，<br>
                    云集了多家米其林星级餐厅、国际顶级品牌店铺及荣获福布斯五星奖的水疗中心，宾客可在此体验包括表演湖的动感表演，尽情投入享乐之旅。<br>
                    永利澳门集优雅与悠闲于一身，其优越的地利位置让宾客能轻松前往巿内各旅游娱乐热点，尽情发掘澳门的多姿多彩。
                            
                </p>
            </div>
            <img src="../img3_0/brand/ylfz.png" alt="">
            <div class="devTxt">
                <p>
                                ——永利皇宫<br>
                    是继在拉斯维加斯和澳门创造屡获殊荣的奢华度假村后，永利渡假村于2016年再添另一崭新的经典。
                </p>
            </div>
            <img src="../img3_0/brand/ylhg.png" alt="">
            <div class="devTxt devTxt1">
                <p>
                               
                    永利皇宫为尊贵旅客提供超过1,706间设计豪华的客房与套房，云集顶尖的星级食府与水疗设施，再加上时尚汇萃的永利名店街，呈献无可比拟的非凡体验。<br>
                    作为永利品牌下的瞩目新星，永利皇宫将秉承集团享誉国际的口碑，开拓尊贵住宿体验新里程，延续永利渡假村坐拥全球最多<br>
                    《福布斯旅游指南》五星荣誉的传奇成就。
                            
                </p>
            </div>
        </div>
        <div class="enjoy">
            <div class="wrapper wrapper1">
                <h2>永利娱乐</h2>
                <div class="lineTxt">
                    <div class="line"></div>
                    <h3>Entertainment</h3>
                    <div class="line"></div>
                </div>
                <p>
                    
                    佔地約272,000平方呎的娛樂場，提供24小時博彩及各式各樣的博彩遊戲，<br>
                    包括私人博彩廳、天際娛樂場及一個撲克區；<br>
                    兩間豪華酒店，合共1,008間客房及套房；12間餐飲店；<br>
                    佔地約59,000平方呎的高端品牌零售空間；<br>
                    佔地約31,000平方呎的會議空間；<br>
                    康體及休閒設施，包括兩間健身中心、水療康體中心、一間髮廊及一個泳池；<br>
                    圓拱形大堂設有一個以中國十二生肖為主題的特色天花以及以黃金「吉祥樹」及「富貴龍」為主題的表演項目。
                            
                            
                </p>
            </div>
            <div class="step1 stepCommon">
                <div class="title">
                    <div class="num">1</div>
                    激情博彩
                </div>
                <div class="line"></div>
                <div class="sec_title">感受博彩激情</div>
                <img src="../img3_0/brand/ylbc.png" alt="">
            </div>
            <div class="step2 stepCommon step_b">
                <div class="step_l">
                    <div class="num">2</div>
                    <div class="title">豪华酒店</div>
                    <div class="line"></div>
                    <div class="sec_title">呈獻尊貴享受</div>
                </div>
                <img src="../img3_0/brand/yljd-1.png" alt="">
            </div>
            <div class="step3 stepCommon step_b step_bg">
                <img src="../img3_0/brand/yljd-2.png" alt="">
                <div class="step_l">
                    <div class="num">3</div>
                    <div class="title">永利瑰宝</div>
                    <div class="line"></div>
                    <div class="sec_title">細賞珍稀藏品</div>
                </div>
            </div>
            <div class="step4 stepCommon step_b">
                <div class="step_l">
                    <div class="num">4</div>
                    <div class="title">环球名牌</div>
                    <div class="line"></div>
                    <div class="sec_title">尽享购物乐趣</div>
                </div>
                <img src="../img3_0/brand/yljd-3.png" alt="">
            </div>
            <div class="step5 stepCommon step_b step_bg">
                <img src="../img3_0/brand/yljd-2.png" alt="">
                <div class="step_l">
                    <div class="num">5</div>
                    <div class="title">顶级美食</div>
                    <div class="line"></div>
                    <div class="sec_title">品尝丰盛美食</div>
                </div>
            </div>
        </div>
        <div class="pla">
            <div class="wrapper">
                <h2>永利皇宮</h2>
                <div class="lineTxt">
                    <div class="line"></div>
                    <h3>Palace</h3>
                    <div class="line"></div>
                </div>
                <p>
                    
                    
                    佔地約424,000平方呎的娛樂場，包括私人博彩廳及天際娛樂場；<br>
                    一間豪華酒店，合共1,706間客房、套房及別墅；<br>
                    14間餐飲店；<br>
                    佔地約106,000平方呎的高端品牌零售空間；<br>
                    佔地約37,000平方呎的會議空間；<br>
                    康體及休閒設施，包括纜車、一間健身中心、一間水療康體中心、一間髮廊及一個泳池；及公眾景點包括一個表演湖及花卉藝術展示。
                                                    
                </p>
            </div>
        </div>
        <div class="img">
            <div class="img1">
                <div class="img1_l">
                    <img src="../img3_0/brand/ylhg-1.png" alt="">
                    <img src="../img3_0/brand/ylhg-2.png" alt="">
                </div>
                <img src="../img3_0/brand/ylhg-3.png" alt="">
            </div>
            <div class="img2">
                <div class="img2_l">
                    <div class="img2_l_t">
                        <img src="../img3_0/brand/ylhg-8.png" alt="">
                        <img src="../img3_0/brand/ylhg-5.png" alt="">
                    </div>
                    <div class="img2_l_b">
                        <img src="../img3_0/brand/ylhg-4.png" alt="">
                        <img src="../img3_0/brand/ylhg-7.png" alt="">
                    </div>
                </div>
                <img src="../img3_0/brand/ylhg-6.png" alt="">
            </div>
        </div>
        <div class="ser">
            <div class="wrapper">
                <h2>专属服务</h2>
                <div class="lineTxt">
                    <div class="line"></div>
                    <h3>Service</h3>
                    <div class="line"></div>
                </div>
                <ul>
                    <li>
                        <div class="li_box">
                            <div class="li_t">
                                <p>博彩</p>
                            </div>
                            <div class="li_b">
                                <p>永利娛樂場</p>
                                <p>24小时服务</p>
                            </div>
                        </div>
                        <p>提供24小時博彩及各式各樣的博彩遊戲，</p>
                    </li>
                    <li>
                        <div class="li_box">
                            <div class="li_t">
                                <p>私人</p>
                            </div>
                            <div class="li_b">
                                <p>私人博彩廳</p>
                                <p>24小时服务</p>
                            </div>
                        </div>
                        <p>私人博彩廳，高端私人服务，尊享个人空间；</p>
                    </li>
                    <li>
                        <div class="li_box">
                            <div class="li_t">
                                <p>娱乐</p>
                            </div>
                            <div class="li_b">
                                <p>天際娛樂場</p>
                                <p>24小时服务</p>
                            </div>
                        </div>
                        <p>在繁忙的商務旅遊或觀光行程中，盡情舒展身心。</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <img src="../img3_0/brand/footer-logo.png" alt="">
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
        overflow-x:hidden;
        padding-top:@height-nav-bar;
        padding-bottom:1.17333rem;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        background:#2F1710;
        .banner{
            position:relative;
            >img{
                position:relative;
                z-index:1;
                width:100%;
            }
            .logo{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:15px;
                z-index:2;
                background:#2F1810;
                img{
                    position:absolute;
                    top:0;
                    left:50%;
                    transform:translateX(-50%);
                    width:196px;
                }
            }
            .desc{
                position:absolute;
                top:50%;
                left:50%;
                transform:translateX(-50%) translateY(-50%);
                z-index:2;
                text-align:center;
                h2{
                    font-size:48px;
                    color:#F2F0F0;
                    font-family:'Arial Narrow';
                    white-space: nowrap;
                    font-weight: bold;
                }
                .til{
                    margin:20px 0 31px;
                    span{
                        font-size:24px;
                        color:#fff;
                        margin-right:50px;
                        &:first-child{
                            margin-right:35px;
                        }
                        &:nth-child(5){
                            margin-right:35px;
                        }
                        &:last-child{
                            margin-right:0;
                        }
                    }
                }
                p{
                    font-size:20px;
                    color:#fff;
                }
            }
        }
        .goldLine{
            width:100%;
            height:2px;
            background:#D1B863;
        }
        .about{
            position: relative;
            z-index: 2;
            .about1{
                position:relative;
                width:68%;
                margin:-15px auto 0;
                padding:40px 30px 53px;
                text-align:center;
                background:#26130D;
                .goldLine{
                    position:absolute;
                    top:0;
                    left:0;
                    z-index:3;
                }
                h2{
                    font-size:0.42rem;
                    color:#FEFEFE;
                }
                .lineTxt{
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    margin:15px 0 30px;
                    .line{
                        width:24%;
                        height:1px;
                        background:rgba(230, 227, 227, 0.5);
                    }
                    h3{
                        font-size:0.24rem;
                        color:rgba(254, 254, 254, 0.5);
                        margin:0 16px;
                    }
                }
                p{
                    font-size:0.28rem;
                    line-height:0.48rem;
                    color:#FEFEFE;
                    // font-weight: 300;
                    color:#F2F1F1;
                }
            }
            .about2{
                padding-bottom:61px;
                img{
                    width:100%;
                }
                ul{
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    margin:60px 0 40px;
                    li{
                        padding:0 57px;
                        border-right:1px solid #fff;
                        &:last-child{
                            border-right:none;
                        }
                        font-size:0.42rem;
                        color:#fff;
                    // font-weight: 300;
                    color:#F2F1F1;
                    }
                }
                p{
                    font-size:0.28rem;
                    line-height:0.48rem;
                    color:#FEFEFE;
                    padding:0 0.4rem;
                    text-align: center;
                    // font-weight: 300;
                    color:#F2F1F1;
                }
            }
        }
        .dev{
            .devWrapper{
                padding:60px 0.4rem 45px;
                background:#26130D;
                text-align:center;
                h2{
                    font-size:0.42rem;
                    color:#FEFEFE;
                }
                .lineTxt{
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    margin:15px 0 30px;
                    .line{
                        width:24%;
                        height:1px;
                        background:rgba(230, 227, 227, 0.5);
                    }
                    h3{
                        font-size:0.24rem;
                        color:rgba(254, 254, 254, 0.5);
                        margin:0 16px;
                    }
                }
                p{
                    font-size:0.28rem;
                    line-height:0.48rem;
                    color:#FEFEFE;
                    // font-weight: 300;
                    color:#F2F1F1;
                }
            }
            >img{
                width:100%;
            }
            .devTxt{
                padding:79px 0.4rem 42px;
                text-align:center;
                &.devTxt1{
                    padding:39px 0.4rem 50px;
                }
                p{
                    font-size:0.28rem;
                    line-height:0.48rem;
                    color:#FEFEFE;
                    // font-weight: 300;
                    color:#F2F1F1;
                }
            }
        }
        .enjoy{
            .wrapper{
                padding:0 0.4rem;
                text-align:center;
                h2{
                    font-size:0.42rem;
                    color:#FEFEFE;
                    text-align:center;
                }
                .lineTxt{
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    margin:15px 0 30px;
                    .line{
                        width:24%;
                        height:1px;
                        background:rgba(230, 227, 227, 0.5);
                    }
                    h3{
                        font-size:0.24rem;
                        color:rgba(254, 254, 254, 0.5);
                        margin:0 16px;
                    }
                }
                p{
                    font-size:0.28rem;
                    line-height:0.48rem;
                    color:#FEFEFE;
                    // font-weight: 300;
                    color:#F2F1F1;
                }
            }
            .wrapper1{
                padding:60px 0.4rem 58px;
            }
            .step1{
                img{
                    width:100%;
                }
                .line{
                    margin-right:-45px;
                }
            }
            .stepCommon{
                margin-bottom:60px;
                .num{
                    width:33.5px;
                    height:33.5px;
                    background:#fff;
                    font-size:28px;
                    color:#2F1810;
                    text-align:center;
                    line-height:33.5px;
                    border-radius: 50%;
                    margin-right:10px;
                }
                .title{
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    font-size:28px;
                    color:#fff;
                }
                .line{
                    width:80px;
                    height:1px;
                    background:rgba(230, 227, 227, 0.8);
                    margin:12px auto;
                }
                .sec_title{
                    font-size:20px;
                    color:#FFF8F8;
                    margin-bottom:22px;
                    text-align:center;
                    font-weight: 300;
                    color:#F2F1F1;
                }
                .step_l{
                    flex:1;
                    text-align:center;
                }
            }
            .step_b{
                display:flex;
                justify-content: space-between;
                align-items:center;
                padding:0 0.4rem;
                .num{
                    margin:0 auto 15px;
                }
                >img{
                    width:59%;
                    flex-shrink: 0;
                }
            }
            .step_bg{
                background:#26130D;
            }
        }
        .pla{
            .wrapper{
                padding:58px 0.4rem 44px;
                text-align:center;
                h2{
                    font-size:0.42rem;
                    color:#FEFEFE;
                    text-align:center;
                }
                .lineTxt{
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    margin:15px 0 30px;
                    .line{
                        width:24%;
                        height:1px;
                        background:rgba(230, 227, 227, 0.5);
                    }
                    h3{
                        font-size:0.24rem;
                        color:rgba(254, 254, 254, 0.5);
                        margin:0 16px;
                    }
                }
                p{
                    font-size:0.28rem;
                    line-height:0.48rem;
                    color:#FEFEFE;
                    // font-weight: 300;
                    color:#F2F1F1;
                }
            }
        }
        .img{
            .img1{
                display:flex;
                justify-content: space-between;
                align-items: flex-end;
                .img1_l{
                    width:69%;
                    img{
                        width:100%;
                        margin-right:7.5px;
                        margin-bottom:7.5px;
                    }
                }   
                >img{
                    width:30%;
                    margin-bottom:1%;
                }
            }
            .img2{
                display:flex;
                justify-content: space-between;
                align-items: flex-end;
                >img{
                    width:44%;
                    margin-bottom:1%;
                }
                .img2_l{
                    width:56%;
                    .img2_l_t{
                        display:flex;
                        justify-content: space-between;
                        align-items:flex-end;
                        img{
                            margin-right:7.5px;
                            margin-bottom:7.5px;
                            &:first-child{
                                width:37%;
                            }
                            &:last-child{
                                width:60%;
                            }
                        }
                    }
                    .img2_l_b{
                        display:flex;
                        justify-content: space-between;
                        align-items:flex-end;
                        img{
                            margin-right:7.5px;
                            margin-bottom:7.5px;
                            &:first-child{
                                width:60%;
                            }
                            &:last-child{
                                width:37%;
                            }
                        }
                    }
                }
            }
        }
        .ser{
            padding:59px 0 98px;
            .wrapper{
                text-align:center;
                h2{
                    font-size:0.42rem;
                    color:#FEFEFE;
                    text-align:center;
                }
                .lineTxt{
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    margin:15px 0 30px;
                    .line{
                        width:24%;
                        height:1px;
                        background:rgba(230, 227, 227, 0.5);
                    }
                    h3{
                        font-size:0.24rem;
                        color:rgba(254, 254, 254, 0.5);
                        margin:0 16px;
                    }
                }
                ul{
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    li{
                        text-align:center;
                        margin-bottom:42px;
                        .li_box{
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            margin-bottom:15px;
                            .li_t{
                                padding:0 16px;
                                p{
                                    color:#fff;
                                    font-size:36px;
                                    font-weight: normal;
                                }
                            }
                            .li_b{
                                padding:0 16px;
                                text-align: left;
                                display:flex;
                                flex-direction: column;
                                justify-content: space-between;
                                border-left:2px solid #fff;
                                p{
                                    font-size:20px;
                                    color:#FFF;
                                    // font-weight: 300;
                                    color:#F2F1F1;
                                    &:first-child{
                                        margin-bottom:10px;
                                    }
                                }
                            }
                        }
                        p{
                            color:#F2F1F1;
                            font-size:24px;
                        }
                    }
                }
            }
        }
        .footer{
            width:100%;
            padding:38px 0;
            background:#26130D;
            img{
                width:212px;
                display:block;
                margin:0 auto;
            }
        }
    }
</style>