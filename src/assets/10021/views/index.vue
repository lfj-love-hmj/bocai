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
            <img src="../img3_0/brand/banner_h5.png" alt="">
            <div class="wrapper">
                <img src="../img3_0/brand/LOGO@2x.png" alt="">
            </div>
        </div>
        <div class="user">
            <div class="wrapper">
                <div class="user_l">
                    <div class="title_common">
                        <h2>品牌形像代言人</h2>
                        <h3>/IMAGE SPOKESPERSON</h3>
                    </div>
                        <img src="../img3_0/brand/pic_daiyanr@2x.png" alt="">
                        周润发昔日在电影上的“Mark哥”、“赌神”形象深入民深，这些经典造型最近再活现眼前，发哥早前就化身Mark哥和赌神混合体拍摄迷你宣传电影，为澳门凯旋门集团担任广告代言人，推介六星级享受。<br>
                        发哥以代言人角色出席在澳门凯旋门大酒店，发哥在迷你电影故事中贯彻Mark哥兼赌神本色，眼明手快将冰块投入酒杯中，然后抛出摄人的眼神，摆出有型pose丢下筹码，扑克牌随即送到面前，引来神秘美女向他招手，真是艳福不浅。凯旋门与发哥合作愉快                                 
                 
                        <div style="clear:both;"></div>
                </div>
            </div>
        </div>
        <div class="about">
            <div class="wrapper">
                <div class="about_box">
                    <div class="about_r">
                        <div class="title_common">
                            <h2>关于澳门凯旋门</h2>
                            <h3>/ABOUT MACAU L'ARC TRIOMPHE</h3>
                        </div>
                        <div style="clear:both;"></div>
                        <img src="../img3_0/brand/pic_jianjie@2x.png" alt="">
                        澳门凯旋门于2009年9月21日正式开幕。雄伟壮观的建筑外观，内部富丽堂皇。荟萃高级服务式住宅、五星级尊贵豪华酒店、包罗万有的精彩娱乐及各国风味之极品美馔于一身。高级服务式住宅，提供舒适高雅的会所设施；娱乐场为客人提供精彩绝伦的娱乐游戏；<br>
                        澳门凯旋门酒店共设有283间装潢华丽的酒店客房，采用现代时尚的设计风格，充满高雅优美的欧陆风情；各具特色的餐厅提供环球的佳肴美食。澳门凯旋门提供优质专业的服务，打造舒适奢华的住宿体验，绝对满足宾客的尊贵享受。
                    </div>
                </div>
                <div class="pla">
                    <div class="title_common">
                        <h2>凯旋门娱乐场</h2>
                        <h3>L'Arc Triomphe Casino</h3>
                    </div>
                    <p>
                        澳门凯旋门的娱乐场部分名为凯旋门娱乐场（葡萄牙语：Casino L'Arc），是澳门首间（也是现时唯一一间）集合于住宅、酒店、商场内的一间娱乐场，由澳门博彩持牌；娱乐场已于2009年9月21日开业；娱乐场位于该大楼的首三层    
                    </p>
                    <ul>
                        <li>
                            <img src="../img3_0/brand/pic_duchang@2x.png" alt="">
                            <div class="txt">
                                <div class="txt_t">
                                    <h3>180</h3>
                                    <h4>张赌桌</h4>
                                </div>
                                <p>其中30张为贵宾厅赌桌 153张为中场赌台</p>
                            </div>
                        </li>
                        <li>
                            <img src="../img3_0/brand/pic_jiazhiji@2x.png" alt="">
                            <div class="txt">
                                <div class="txt_t">
                                    <h3>420</h3>
                                    <h4>台</h4>
                                </div>
                                <p>角子机</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="hotel">
            <div class="wrapper">
                <div class="title_common">
                    <h2>澳门凯旋门酒店</h2>
                    <h3>ARC DE TRIOMPHE MACAU</h3>
                </div>
                <p>
                    澳门凯旋门的酒店部分名为澳门凯旋门酒店（L'Arc Hotel Macau），并由香港新世界发展管理。酒店部分设于娱乐场之上及住宅部分之下，即酒店「最高层数」是为21楼，以古罗马人为庆祝战争胜利而建造出来的纪念性建筑物凯旋门、巴黎凯旋门及维多利亚式建筑作为建筑主题。<br><br>
                    此外，澳门凯旋门酒店会设有餐厅及酒吧；酒店大堂设有咖啡室、酒吧、中式菜餐厅，在国际餐厅内设有各式环球地方美食；此外，酒店也设有宴会厅、会议室和多用途会议室、卡拉OK室、夜总会
                </p>
            </div>
        </div>
        <div class="centerImg">
            <div class="wrapper">
                <img src="../img3_0/brand/pic_yulechang@2x.png" alt="">
            </div>
        </div>
        <div class="history">
            <div class="storyDesc">
                <div class="title_common">
                    <h2>品牌故事</h2>
                    <h3>BRAND STORY</h3>
                </div>
                <div class="lineBox">
                    <div class="line"></div>
                    <div class="common">
                        <div class="imgBox">
                            <img src="../img3_0/brand/pic_gushi_01@2x.png" alt="" class="storyImg">
                        </div>
                        <div class="circle"></div>
                        <div class="common_text">
                            <h2>澳门凯旋门于2009年9月21日正式开幕</h2>
                            <p>雄伟壮观的建筑外观，内部富丽堂皇。荟萃高级服务式住宅、五星级尊贵豪华酒店、包罗万有的精彩娱乐及各国风味之极品美馔于一身。。高级服务式住宅，提供舒适高雅的会所设施；娱乐场为客人提供精彩绝伦的娱乐游戏；</p>
                        </div>
                    </div>
                    <div class="common">
                        <div class="common_text">
                            <h2>筵开百席招待1400位贵宾</h2>
                            <p>
                                总建筑面积（连停车场）近16万5千平方米。娱乐场位于该大楼的首三层，总共开设183张赌桌（其中30张为贵宾厅赌桌，153张为中场赌台）以及420台角子机。娱乐场虽然昨晚十时才开幕，现场所见，傍晚已吸引数人排队等候入场。
                            </p>
                        </div>
                        <div class="circle"></div>
                        <div class="imgBox">
                            <img src="../img3_0/brand/pic_gushi_02@2x.png" alt="" class="storyImg">
                        </div>
                    </div>
                    <div class="common">
                        <div class="imgBox">
                            <img src="../img3_0/brand/pic_gushi_03@2x.png" alt="" class="storyImg">
                        </div>
                        <div class="circle"></div>
                        <div class="common_text">
                            <h2>筵开百席招待1400位贵宾</h2>
                            <p>
                                并邀请香港歌星容祖儿、古巨基及房祖名为晚宴嘉宾献唱名曲，增添场内欢乐热闹气氛。相信以华丽的姿态和精诚的服务能吸引海内外的游客，为澳门繁荣兴盛增添动力。
                            </p>
                        </div>
                    </div>
                    <div class="common">
                        <div class="common_text">
                            <h2>澳门博彩业取得了233亿澳门元的总收入</h2>
                            <p>是澳门首间（也是现时唯一一间）汇集豪华住宅、酒店、商场以及娱乐场于一身的物业发展计划。由香港新世界集团于2006年年底开始进行发展，预计于2008年年底落成。</p>
                        </div>
                        <div class="circle"></div>
                        <div class="imgBox">
                            <img src="../img3_0/brand/pic_gushi_04@2x.png" alt="" class="storyImg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="choseReson">
            <div class="wrapper">
                <div class="title_common">
                    <h2>选择澳门凯旋门  十大放心理由</h2>
                    <h3>TEN REASONS FOR CHOOSING THE ARC DE TRIOMPHE IN MACAU</h3>
                </div>
                <ul>
                    <li>
                        <div class="num">1</div>
                        <div class="txt">
                            <img src="../img3_0/brand/icon_renzheng@2x.png" alt="">
                            <div class="txt_b">
                                <h2>平台足够权威</h2>
                                <p>澳门凯旋门与亚洲三大在线运营商GPK平台进行技术合作，并获得GEOTRUST国际认证，确保网站公平、公正、公开。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="num">2</div>
                        <div class="txt">
                            <img src="../img3_0/brand/icon_paiming@2x.png" alt="">
                            <div class="txt_b">
                                <h2>排名足够靠前</h2>
                                <p>澳门凯旋门作为亚洲最具公信力品牌之一，信誉领先排名，在海量娱乐场信息中独占前茅。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="num">3</div>
                        <div class="txt">
                            <img src="../img3_0/brand/icon_anquan@2x.png" alt="">
                            <div class="txt_b">
                                <h2>资金足够安全</h2>
                                <p>澳门凯旋门雄厚的资金链信誉良好，大额存款无忧，资金安全有保障，免去您一切后顾之忧。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="num">4</div>
                        <div class="txt">
                            <img src="../img3_0/brand/icon_qukuan@2x.png" alt="">
                            <div class="txt_b">
                                <h2>取款足够自由</h2>
                                <p>澳门凯旋门24小时不限次数自由取款0-5分钟火速到帐，且终身免手续费。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="num">5</div>
                        <div class="txt">
                            <img src="../img3_0/brand/icon_gl@2x.png" alt="">
                            <div class="txt_b">
                                <h2>活动足够给力</h2>
                                <p>澳门凯旋门时时推出各项给力活动，优惠送不停，让您真正赚翻天。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="num">6</div>
                        <div class="txt">
                            <img src="../img3_0/brand/icon_baozhang@2x.png" alt="">
                            <div class="txt_b">
                                <h2>安全足够保障</h2>
                                <p>澳门凯旋门采用128位SSL加密技术和严格的安全管理体系，确保客户资料安全得到最完善的保障</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="num">7</div>
                        <div class="txt">
                            <img src="../img3_0/brand/icon_fuwu@2x.png" alt="">
                            <div class="txt_b">
                                <h2>服务足够贴心</h2>
                                <p>澳门凯旋门提供7X24小时客服贴心的服务，温馨的呵护每一位玩家。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="num">8</div>
                        <div class="txt">
                            <img src="../img3_0/brand/icon_vip@2x.png" alt="">
                            <div class="txt_b">
                                <h2>VIP足够至尊</h2>
                                <p>澳门凯旋门VIP尊享贵宾级的专属服务让您享有宾至如归般的帝王享受。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="num">9</div>
                        <div class="txt">
                            <img src="../img3_0/brand/icon_cz@2x.png" alt="">
                            <div class="txt_b">
                                <h2>操作足够简单</h2>
                                <p>澳门凯旋门秉承以客户为中心的宗旨，在开发之初就设计了诸多人性化的功能和特性，省去繁琐的麻烦，让您轻松操作。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="num">10</div>
                        <div class="txt">
                            <img src="../img3_0/brand/icon_hefa@2x.png" alt="">
                            <div class="txt_b">
                                <h2>营业足够合法</h2>
                                <p>澳门澳门凯旋门直营线上合法互联网博彩公司。</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="contact">
            <div class="wrapper">
                <div class="title_common">
                    <h2>联络我们</h2>
                    <h3>CONTACT US</h3>
                </div>
                <ul>
                    <li>
                        <img src="../img3_0/brand/icon_dizhi@2x.png" alt="">
                        <h3>地址</h3>
                        <p>澳门新口岸皇朝区城市日大马路278号</p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/icon_email@2x.png" alt="">
                        <h3>电邮</h3>
                        <p>ENQUIRY@LARCMACAU.COM</p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/icon_phone@2x.png" alt="">
                        <h3>电话</h3>
                        <p>(853) 2880 8888</p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/icon_fax@2x.png" alt="">
                        <h3>传真</h3>
                        <p>(853) 2822 3366</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <div class="wrapper">
                <ul>
                    <li>
                        <img src="../img3_0/brand/pic_yewu_Logo-01@2x.png" alt="">
                        <p>凯旋门新世界酒店</p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/pic_yewu_Logo-02@2x.png" alt="">
                        <p>凯旋门娱乐城</p>
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
    @font-face {
        font-family: 'newfont';
        src: url('../../font/PingFang Medium.otf');
    }
    .wrapper{
        width:100%;
        padding:0 30px;
    }
    // .clearfix{
    //     content:'';
    //     display:block;
    //     height:0;
    //     clear:both;
    // }
    .brand{
        padding-top:@height-nav-bar;
        padding-bottom:@height-nav-bar;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        .banner{
            position:relative;
            z-index: 2;
            >img{
                width:100%;
            }
            .wrapper{
                position:absolute;
                top:34px;
                left:50%;
                transform:translateX(-50%);
                display:flex;
                justify-content: flex-start;
                >img{
                    // width:250px;
                    // height:auto;
                    height:64px;
                    width:auto;
                }
            }
        }
        .title_common{
            display:flex;
            justify-content: flex-start;
            align-items:flex-start;
            flex-direction: column;
            h2{
                font-size:40px;
                color:#6C3E2B;
                margin:0 11px 0 0;
            }
            h3{
                font-size:16px;
                color:#BD9477;
                margin:0;
            }
        }
        .user{
            position:relative;
            // z-index:1;
            background-image:url('../img3_0/brand/bj_01@2x.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center top;
            padding:91px 0 125px;
            .wrapper{
                .user_l{
                    text-align:left;
                    font-size:26px;
                    line-height:36px;
                    color:#6D3E29;
                    .title_common{
                        margin-bottom:40px;
                    }
                    img{
                        position:relative;
                        z-index: 3;
                        width:336px;
                        float:right;
                        margin-left:53px;
                        margin-bottom:43px;
                        margin-top:-320px;
                    }
                }
            }
        }
        .about{
            background-image:url('../img3_0/brand/bj_02@2x.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center bottom;
            background-color:#82614C;
            padding:50px 0 122px;
            .wrapper{
                .about_box{
                    .about_r{
                        text-align:left;
                        .title_common{
                            width:305px;
                            margin-bottom:44px;
                            margin-left:66px;
                            float:right;
                            text-align:left;
                            h2{
                                color:#FFFBF8;
                            }
                        }
                        font-size:26px;
                        line-height:38px;
                        color:#FFFBF8;
                    }
                    img{
                        position:relative;
                        z-index: 3;
                        width:317px;
                        float:left;
                        margin:-243px 66px 23px 0;
                    }
                }
                .pla{
                    margin-top:108px;
                    .title_common{
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        margin-bottom:39px;
                        h2{
                            margin-bottom:23px;
                            margin-right:0;
                            color:#FFFBF8;
                        }
                    }
                    >p{
                        width:100%;
                        margin:0 auto 57px;
                        font-size:26px;
                        line-height:38px;
                        color:#FFFBF8;
                        text-align:center;
                    }
                    ul{
                        li{
                            position:relative;
                            width:100%;
                            &:first-child{
                                margin-bottom:14px;
                            }
                            img{
                                width:100%;
                            }
                            .txt{
                                position:absolute;
                                bottom:51px;
                                left:35px;
                                color:#fff;
                                text-align:left;
                                .txt_t{
                                    display:flex;
                                    justify-content: flex-start;
                                    align-items:flex-end;
                                    margin-bottom:20px;
                                    h3{
                                        font-size:111px;
                                        margin:0;
                                        font-weight: bold;
                                    }
                                    h4{
                                        font-size:48px;
                                        margin:0 0 10px 10px;
                                    }
                                }
                                p{
                                    font-size:24px;
                                }
                            }
                        }
                    }
                }
            }
        }
        .hotel{
            position:relative;
            z-index: 1;
            padding:67px 0 450px;
            background:#FFF9DD;
            .wrapper{
                .title_common{
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom:43px;
                    h2{
                        margin-bottom:17px;
                        margin-right:0;
                    }
                }
                p{
                    width:100%;
                    margin:0 auto;
                    font-size:24px;
                    line-height:38px;
                    color:#6D3E29;
                    text-align:center;
                }
            }
        }
        .centerImg{
            position:relative;
            .wrapper{
                position:absolute;
                bottom:-74px;
                left:0;
                z-index: 3;
                img{
                    width:100%;
                }
            }
        }
        .history{
            background:#83624D;
            padding:145px 0 87px;
            .storyDesc{
                position:relative;
                width:100%;
                padding:0 30px;
                .title_common{
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom:73px;
                    h2{
                        margin-bottom:22px;
                        color:#FFFBF8;
                        margin-right:0;
                    }
                }
                .lineBox{
                    position: relative;
                    width:100%;
                    // padding:93px 0 0;
                    .line{
                        position:absolute;
                        top:0;
                        left:50%;
                        transform:translateX(-50%);
                        width:2px;
                        height:100%;
                        background:#FFFBF8;
                    }
                    .common{
                        width:100%;
                        display:flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        margin-bottom:69px;
                        &:last-child{
                            margin-bottom:0;
                        }
                        &:nth-child(2n+1){
                            text-align:left;
                            .common_text{
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                            }
                        }
                        &:nth-child(2n){
                            text-align: left;
                        }
                        // &:nth-child(3),
                        // &:nth-child(4){
                        //     .common_text{
                        //         margin-right:-10px;
                        //         h2{
                        //             white-space: nowrap;       
                        //         }
                        //     }
                        // }
                        .imgBox{
                            flex:1;
                            flex-shrink: 0;
                            .storyImg{
                                width:100%;
                            }
                        }
                        .circle{
                            position:relative;
                            width:26px;
                            height:26px;
                            background:rgba(255, 251, 248, 0.3);
                            margin:47px 14px 0;
                            border-radius:50%;
                            flex-shrink: 0;
                            &::before{
                                content:'';
                                position:absolute;
                                top:50%;
                                left:50%;
                                transform:translateX(-50%) translateY(-50%);
                                width:17px;
                                height:17px;
                                background:rgba(255, 251, 248, 1);
                                border-radius:50%;
                            }
                        }
                        .common_text{
                            flex:1;
                            flex-shrink: 0;
                            h2{
                                font-size:30px;
                                line-height:37px;
                                color:#FFFBF8;
                                margin-bottom:20px;
                                font-weight: bold;
                            }
                            p{
                                font-size:26px;
                                color:#FFFBF8;
                                line-height: 35px;
                            }
                        }
                    }
                }
            }
        }
        .choseReson{
            padding:78px 0 118px;
            background:#FFF8DD;
            .wrapper{
                .title_common{
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom:121px;
                    h2{
                        margin-bottom:22px;
                        margin-right:0;
                    }
                }
                ul{
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                    flex-wrap: wrap;
                    li{
                        position:relative;
                        width:49%;
                        margin-right:2%;
                        margin-bottom:2%;
                        height:392px;
                        background:#6D3E29;
                        padding-top:56px;
                        .txt{
                            // position:absolute;
                            // top:50%;
                            // left:50%;
                            // transform:translateX(-50%) translateY(-50%);
                            >img{
                                width:75px;
                                display:block;
                                margin:0 auto 31px;
                            }
                            .txt_b{
                                text-align:center;
                                h2{
                                    font-size:30px;
                                    color:#FFFBF8;
                                    margin-bottom:16px;
                                    font-weight: bold;
                                }
                                p{
                                    width:284px;
                                    margin:0 auto;
                                    font-size:26px;
                                    line-height:31px;
                                    color:rgba(255, 251, 248, 0.7);
                                }
                            }
                        }
                        &:nth-child(2n){
                            margin-right:0;
                        }

                        &:nth-child(1){
                            padding-top:56px;
                            .txt{
                                img{
                                    width:57px;
                                    margin-bottom:33px;
                                }
                            }
                        }
                        &:nth-child(2){
                            padding-top:56px;
                            .txt{
                                img{
                                    width:65px;
                                    margin-bottom:27px;
                                }
                            }
                        }
                        &:nth-child(3){
                            padding-top:50px;
                            .txt{
                                img{
                                    width:58px;
                                    margin-bottom:33px;
                                }
                            }
                        }
                        &:nth-child(4){
                            padding-top:56px;
                            .txt{
                                img{
                                    width:76px;
                                    margin-bottom:33px;
                                }
                            }
                        }
                        &:nth-child(5){
                            padding-top:49px;
                            .txt{
                                img{
                                    width:74px;
                                    margin-bottom:34px;
                                }
                            }
                        }
                        &:nth-child(6){
                            padding-top:49px;
                            .txt{
                                img{
                                    width:75px;
                                    margin-bottom:29px;
                                }
                            }
                        }
                        &:nth-child(7){
                            padding-top:58px;
                            .txt{
                                img{
                                    width:84px;
                                    margin-bottom:29px;
                                }
                            }
                        }
                        &:nth-child(8){
                            padding-top:56px;
                            .txt{
                                img{
                                    width:77px;
                                    margin-bottom:32px;
                                }
                            }
                        }
                        &:nth-child(9){
                            padding-top:51px;
                            .txt{
                                img{
                                    width:63px;
                                    margin-bottom:27px;
                                }
                            }
                        }
                        &:nth-child(10){
                            padding-top:55px;
                            .txt{
                                img{
                                    width:75px;
                                    margin-bottom:35px;
                                }
                            }
                        }
                        .num{
                            position:absolute;
                            top:27px;
                            left:29px;
                            font-size:70px;
                            font-family:'newfont';
                            font-weight: 500;
                            font-style:italic;
                            color:rgba(255, 251, 248, 0.2);
                        }
                    }
                }
            }
        }
        .contact{
            padding:65px 0 95px;
            background-image: url('../img3_0/brand/bj_04@2x.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center bottom;
            .wrapper{
                .title_common{
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin-bottom:91px;
                    h2{
                        margin-bottom:22px;
                        color:#FFFBF8;
                        margin-right:0;
                    }
                }
                ul{
                    li{
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom:37px;
                        &:last-child{
                            margin-right:0;
                        }
                        img{
                            width:28px;
                            margin-right:12px;
                        }
                        h3{
                            font-size:31px;
                            color:#FFFBF8;
                            margin:0 15px 0 0;
                        }
                        p{
                            font-size:24px;
                            color:rgba(255, 251, 248, 0.7);
                        }
                    }
                }
                .list2{
                    margin-top:78px;
                }
            }
        }
        .footer{
            padding:27px 0 40px;
            background:#27170F;
            .wrapper{
                ul{
                    display:flex;
                    justify-content: center;
                    align-items:flex-end;
                    li{
                        img{
                            margin-bottom:24px;
                        }
                        p{
                            font-size:20px;
                            color:#FFFBF8;
                            text-align:center;
                        }
                        &:first-child{
                            margin-right:126px;
                            img{
                                width:262px;
                            }
                        }
                        &:last-child{
                            img{
                                width:151px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>