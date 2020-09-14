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
        <img src="../img3_0/brand/KV.png" alt  class="bg"/>
        <img src="../img3_0/brand/LOGO.png" alt  class="logo"/>
    </div>
    <h2>尊崇玩乐·唯您独尊</h2>
    <div class="about">
        <img src="../img3_0/brand/ABOUT.png" alt="" class="aboutImg">
        <div class="list">
            <div class="list_item">
                <img src="../img3_0/brand/jianjie-1.png" alt="">
                <div class="list_item_desc">
                    <p>2007</p>
                    <p>集团成立</p>
                </div>
            </div>
            <div class="list_item">
                <img src="../img3_0/brand/jianjie-2.png" alt="">
                <div class="list_item_desc">
                    <p>11</p>
                    <p>贵宾间</p>
                </div>
            </div>
            <div class="list_item">
                <img src="../img3_0/brand/jianjie-3.png" alt="">
                <div class="list_item_desc">
                    <p>150+</p>
                    <p>赌台</p>
                </div>
            </div>
        </div>
        <img src="../img3_0/brand/TAK CHUN.png" alt="" class="takchunImg">
        <p class="intro">
            德晋集团成立于2007年，作为扎根澳门的领导成员，拥有11间贵宾厅和逾150张赌台。<br>
            它还是目前为止经受住澳门衰退打击、为数不多的中介人运营商之一。<br>
            事实上，在其他一些中介人关闭贵宾厅或退出澳门之际，德晋却在逆境中蓬勃发展，在今年1月集团<br>
            还荣膺凤凰天空最具影响力娱乐博彩业品牌大奖，愿景旨在成为更优秀的综合娱乐企业，<br>
            向世界出发，持续增值并回馈澳门，不断为慈善出力。
        </p>
    </div>
    <div class="mission">
        <h3>德晋使命</h3>
        <div class="line"></div>
        <div class="missionIntro">
            为实现愿景，集团明确设定「德晋使命」<br>
            就是要致力建立智慧型的德晋管理及凝聚人心的德晋文化；
        </div>
        <div class="step">
            <img src="../img3_0/brand/sm-01.png" alt="">
            <p>以德晋为家，为众持份者提供致胜平台</p>
            <img src="../img3_0/brand/sm-02.png" alt="">
            <p>完善VIP 服务配套，创造最佳客户体验</p>
            <img src="../img3_0/brand/sm-03.png" alt="">
            <p>知人善用，培育人才</p>
        </div>
        <div class="message">
            <img src="../img3_0/brand/mr.chen.png" alt="">
            <div class="messageInfo">
                <p>行政總裁寄語</p>
                <p>陳榮煉先生<br>德晉集團行政總裁</p>
            </div>
        </div>
        <div class="history">
            回望自2007年，德晉集團的成長及成就，我非常引以為傲，並對將來集團發展的前景充滿信心。<br><br>
            我們建設智慧型的德晉管理及凝聚人心的德晉文化，並在此基礎上提高自身的服務、企劃能力以及市場開拓的能力，從而創造出真正的核心價值，打造成為優秀綜合娛樂企業。<br><br>
            這些年間，德晉集團努力提升股東和客人對集團的期待和信任，努力向社會展示集團的成績，成為一個與社會共同發展的企業，同時，德晉集團以國際化的視野開展海外業務，取得高度纘揚，成功在國際市場建立重要的地位。<br><br>
            德晉集團能創造出一個又個的輝煌業績，全因為背後擁有一群目標一致、合作無間的團隊，感謝一直全力支持集團的股東及同事。我們將繼續為員工提供個多姿多采的舞壹，使他們能充分發揮自身的能力，積累經驗，獲取成就。欠缺變革和創意，業務將會停滯不前，所以集團定當不断向前，持續進步。
        </div>
        <div class="bannerBox">
            <div class="bannerCard">
                <swiper :height="250" :options="swiperOption" class="swiper-container swiper_h5">
                    <swiper-slide v-for="(item,index) in bannerList" :key="index">
                        <img
                        :src="item"
                        alt=""
                        >
                        <div class="covering"></div>
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
            </div>
            <div class="desc">
                德晋团队不断创新求进、追求卓越，扩展世界网络，为众持份者带来理想回报，为员工谋福祉，履行企业社会责任。
            </div>
        </div>
        <div class="area">
            <img src="../img3_0/brand/vip.png" alt="">
            <h3>贵宾厅分布</h3>
            <div class="areaList">
                <ul>
                    <li v-for="(item,index) in areaList" :key="index">
                        <div class="li" v-for="(item1,index1) in item" :key="index1">
                            <div class="li_t">
                                <i class="local"></i>
                                {{item1.address}}
                            </div>
                            <div class="li_b">
                                <div class="li_b_common" v-for="(item3,index3) in item1.tel" :key="index3">
                                    <i class="fax" v-if="index3==2"></i>
                                    <i class="tel" v-else></i>
                                    {{item3}}
                                    <span class="tipMsg tipMsg1" v-if="item1.isTip&&index3==0">客户服务部</span>
                                    <span class="tipMsg tipMsg2" v-if="item1.isTip&&index3==1">账房</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
    import Vtabbar from "@/components/v-tabbar"

    import "swiper/dist/css/swiper.css";
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    export default {
        name: 'brand',
        data(){
            return{
                title:'品牌',
                bannerList:[
                    require('../img3_0/brand/h5-1.jpg'),
                    require('../img3_0/brand/h5-2.jpg'),
                    require('../img3_0/brand/h5-3.jpg'),
                ],
                areaList:[
                    [
                        {
                            address:'星际德晋贵宾会星际酒店15楼3及4厅',
                            tel:[
                                '+853 6233 0308',
                                '+853 2828 2868'
                            ],
                            isTip:false
                        },
                        {
                            address:'新葡京德晋贵宾会新葡京娱乐场38楼',
                            tel:[
                                '+853 6282 3202',
                                '+853 2888 2833'
                            ],
                            isTip:false
                        },
                    ],
                    [
                        {
                            address:'凯旋门德晋贵宾会凯旋门酒店4楼',
                            tel:[
                                '+853 6286 6332',
                                '+853 2875 5005'
                            ],
                            isTip:false
                        },
                        {
                            address:'永利德晋贵宾会永利度假村地下89区',
                            tel:[
                                '+853 6666 9112',
                                '+853 2878 5550'
                            ],
                            isTip:false
                        },
                    ],
                    [
                        {
                            address:'永利皇宫帝昭德晋贵宾会永利皇宫1楼39区',
                            tel:[
                                '+853 6288 4382',
                                '+853 2877 2366'
                            ],
                            isTip:false
                        },
                        {
                            address:'银河一期德晋贵宾会澳门银河TM1期综合度假城西翼贵宾会入口地下',
                            tel:[
                                '+853 6272 2993',
                                '+853 2888 8666'
                            ],
                            isTip:false
                        },
                    ],
                    [
                        {
                            address:'银河二期德晋贵宾会澳门银河TM2期综合度假城西翼贵宾会2楼',
                            tel:[
                                '+853 6201 2888',
                                '+853 2883 9997'
                            ],
                            isTip:false
                        },
                        {
                            address:'新濠天地德晋贵宾会新濠天地滚石酒店2楼',
                            tel:[
                                '+853 6663 9778',
                                '+853 2828 5678'
                            ],
                            isTip:false
                        },
                    ],
                    [
                        {
                            address:'新濠锋德晋贵宾会新濠锋娱乐场3楼',
                            tel:[
                                '+853 6555 6116',
                                '+853 2883 7006'
                            ],
                            isTip:false
                        },
                        {
                            address:'新濠影汇德晋贵宾会新濠影汇巨星汇二楼',
                            tel:[
                                '+853 6811 0288',
                                '+853 2883 9268'
                            ],
                            isTip:false
                        },
                    ],
                    [
                        {
                            address:'威尼斯人德晋贵宾会威尼斯人度假村御匾会801及803室山东厅',
                            tel:[
                                '+853 6280 3688',
                                '+853 2857 6170'
                            ],
                            isTip:false
                        },
                        {
                            address:'金沙城中心德晋贵宾会金沙城中心3楼御匾会921及922室',
                            tel:[
                                '+853 6309 1302',
                                '+853 2882 8066'
                            ],
                            isTip:false
                        },
                    ],
                    [
                        {
                            address:'巴黎人德晋贵宾会澳门巴黎人御匾会3楼895区',
                            tel:[
                                '+853 6811 0228',
                                '+853 2897 2897'
                            ],
                            isTip:false
                        },
                        {
                            address:'金沙城中心德晋贵宾会金沙城中心3楼御匾会921及922室',
                            tel:[
                                '+853 6309 1302',
                                '+853 2882 8066'
                            ],
                            isTip:false
                        },
                    ],
                    [
                        {
                            address:'四季德晋贵宾会百利宫御匾会1楼738室',
                            tel:[
                                '+853 6299 9862',
                                '+853 6299 9830'
                            ],
                            isTip:false
                        },
                        {
                            address:'美高梅德晋贵宾会澳门孙逸仙大马路澳门美高梅娱乐场2楼5号厅',
                            tel:[
                                '+853 6881 7638',
                                '+853 6881 7662'
                            ],
                            isTip:true
                        },
                    ],
                    [
                        {
                            address:'晨丽德晋贵宾会(菲律宾)马尼拉晨丽娱乐场及度假城2楼VIP 9',
                            tel:[
                                '+63 927 606 1222',
                                '+63 2828 3838',
                                '+63 2828 3939'
                            ],
                            isTip:false
                        },
                        {
                            address:'新濠天地德晋贵宾会（菲律宾）马尼拉新濠天地UG层',
                            tel:[
                                '+63 915 788 8833',
                                '+63 2828 3866'
                            ],
                            isTip:false
                        },
                    ],
                    [
                        {
                            address:'华克山庄德晋贵宾会(韩国)首尔百乐达斯娱乐场1&2楼华克山庄',
                            tel:[
                                '+82 10 9846 8338',
                                '+82 2455 9889',
                                '+82 2455 4994'
                            ],
                            isTip:false
                        },
                        {
                            address:'冈田德晋贵宾会（菲律宾）马尼拉冈田娱乐场度假贵宾会LG层VIP 1',
                            tel:[
                                '+63 995 7169 888',
                                '+63 2828 0666',
                                '+63 2828 1666'
                            ],
                            isTip:true
                        },
                    ],
                    [
                        {
                            address:'越南岘港皇冠德晋贵宾会越南岘港市五行山郡奎美坊武元甲路8号岘 港皇冠假日酒店3楼8区客户',
                            tel:[
                                '+84 162 938 5928',
                                '+84 236 391 8222',
                                '+84 236 391 8818'
                            ],
                            isTip:true
                        }
                    ],
                ],
                swiperOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    centeredSlides: true,
                    loop: true,
                    loopAdditionalSlides: 100,
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                      bulletClass: 'my-bullet',
                      bulletActiveClass: 'my-bullet-active'  
                    },
                    autoplay: true, //可设置数值来指定播放速度
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
<style scoped lang="less" src="@assets/styles/custom-tabs.less"></style> 
<style lang="less" scoped>
    @font-face {
        font-family: 'newfont'; //自定义字体名称
        src: url('../../font/impact.ttf'); //注意引入正确位置
    }
    .brand{
        background:#000;
        padding-top:@height-nav-bar;
        overflow-x:hidden;
        /deep/ .van-nav-bar{
            line-height: @height-nav-bar !important;
        }
        .banner{
            position:relative;
            width:100%;
            .bg{
                width:100%;
            }
            .logo{
                position:absolute;
                top:0.6rem;
                left:0.6rem;
                height:0.9rem;
            }
        }
        h2{
            font-size: 0.72rem;
            font-weight:bold;
            text-align:center;
            color:@primary-color;
        }
        .about{
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
            margin-top:55px;
            .aboutImg{
                width:6rem;
            }
            .takchunImg{
                width:85%;
                margin-top:18.5px;
            }
            .list{
                display:flex;
                justify-content: center;
                align-items:center;
                .list_item{
                    position:relative;
                    width:28%;
                    img{
                        width:100%;
                    }
                    margin-right:15px;
                    &:last-child{
                        margin-right:0;
                    }
                    .list_item_desc{
                        position: absolute;
                        left:16px;
                        top:50%;
                        transform:translateY(-50%);
                        p{
                            color:#fff;
                            text-align:left;
                            &:first-child{
                                font-family: 'newfont';
                                font-size: 0.48rem;
                                margin-bottom:10.5px;
                            }
                            &:last-child{
                                font-size:0.24rem;
                            }
                        }
                    }
                }
            }
            .intro{
                width:85%;
                font-size: 0.24rem;
                line-height:40px;
                text-align:center;
                color:#fff;
                margin-bottom:88.5px;
            }
        }
        .mission{
            background-image:url('../img3_0/brand/bg.png');
            background-size:0.5rem auto;
            padding-top:53px;
            padding-bottom:1.5rem;
            h3{
                font-size:0.64rem;
                color:#00A0B0;
                text-align:center;
            }
            .line{
                width:0.44rem;
                height:2px;
                background:#00A0B0;
                margin:0 auto 0.4rem;
            }
            .missionIntro{
                font-size:0.24rem;
                line-height: 40px;
                color:#00A0B0;
                text-align: center;
                margin-bottom:45.5px;
            }
            .step{
                text-align:center;
                img{
                    width:1.2rem;
                }
                p{
                    margin-bottom:23.5px;
                    font-size: 0.42rem;
                    color:#fff;
                    font-weight: bold;
                }
            }
            .message{
                position:relative;
                width:85%;
                margin: 0 auto 38px;
                img{
                    width:100%;
                }
                .messageInfo{
                    position:absolute;
                    left:25px;
                    top:1.2rem;
                    p{
                        color:#00A0B0;
                        text-align: left;
                        &:first-child{
                            font-size:0.64rem;
                            margin-bottom:1.4rem;
                            font-weight: bold;
                        }
                        &:last-child{
                            font-size:0.32rem;
                            line-height:0.4rem;
                        }
                    }
                }
            }
            .history{
                width:85%;
                margin:0 auto 72px;
                text-align: left;
                font-size: 0.24rem;
                line-height: 0.42rem;
                color:#fff;
            }
            .bannerBox{
                padding-bottom:42px;
                background:#000;
                position:relative;
                z-index: 3;
                .bannerCard{
                    width: auto;
                    max-width: 100%;
                    height:4rem;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    margin-bottom:1.2rem;
                    .swiper_h5{
                        overflow:visible !important;
                        position:relative;
                        /deep/ .swiper-slide{
                            position:relative;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                            width:100%;
                            img{
                                width:100%;
                            }
                        }
                        /deep/ .swiper-pagination{
                            position: absolute;
                            bottom:-40px;
                            left:50%;
                            transform:translateX(-50%);
                            height: 20px;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                            .my-bullet{
                                display: block;
                                width: 0.4rem;
                                height: 0.1rem;
                                border-radius: 8px;
                                margin-top: 5px;
                                background:rgba(0, 160, 176, 0.3);
                                opacity:1;
                                margin-right:0.2rem;
                                &:last-child{
                                    margin-right:0;
                                }
                            }
                            .my-bullet-active{
                                background:rgba(0, 160, 176, 1);
                                opacity:1;
                            }
                        }
                    }
                }
                .desc{
                    width:85%;
                    margin:0 auto;
                    font-size:0.24rem;
                    color:#fff;
                    text-align:center;
                    line-height:0.42rem;
                }
            }
            .area{
                img{
                    width:100%;
                    margin:-0.03333rem  0 0;
                }
                h3{
                    margin:-1.5rem 0 1.5rem;
                    color:#00A0B0;
                    font-size: 0.64rem;
                    font-weight: bold;
                }
                .areaList{
                    width:85%;
                    margin:0 auto;
                    padding-bottom:54px;
                    ul{
                        width:100%;
                        margin:0 auto;
                        li{
                            display:flex;
                            justify-content: space-between;
                            align-items: flex-start;
                            flex-direction: column;
                            margin-bottom:25px;
                            .li{
                                width:100%;
                                margin-bottom:0.42rem;
                                .li_t{
                                    text-align:left;
                                    color:#fff;
                                    font-size: 0.24rem;
                                    margin-bottom:0.3rem;
                                    display:flex;
                                    justify-content: flex-start;
                                    align-items:flex-start;
                                    line-height:0.42rem;
                                    .local{
                                        display:block;
                                        width:0.33rem;
                                        height:0.33rem;
                                        background-image:url('../img3_0/brand/dz.png');
                                        background-repeat: no-repeat;
                                        background-size:100% auto;
                                        background-position:0px 0.02rem;
                                        margin-right:0.1rem;
                                        flex-shrink: 0;
                                    }
                                }
                                .li_b{
                                    display:flex;
                                    justify-content: space-between;
                                    align-items: center;
                                    flex-wrap: wrap;
                                    .li_b_common{
                                        position:relative;
                                        color:#00A0B0;
                                        font-size:0.24rem;
                                        font-weight: bold;
                                        line-height:12px;
                                        width:50%;
                                        margin-bottom:0.4rem;
                                        &:nth-child(2n){
                                            text-align:right;
                                        }
                                        &:nth-child(2n+1){
                                            text-align:left;
                                        }
                                        .tipMsg{
                                            position:absolute;
                                            left:0.38rem;
                                            top:0.48rem;
                                            color:#00A0B0;
                                            font-size:0.24rem;
                                            transform:scale(0.6);
                                            &.tipMsg1{
                                                left:0.24rem;
                                            }
                                            &.tipMsg2{
                                                left:2.4rem;
                                            }
                                        }
                                        .tel{
                                            display:inline-block;
                                            width:0.36rem;
                                            height:0.36rem;
                                            background-image:url('../img3_0/brand/dz.png');
                                            background-repeat: no-repeat;
                                            background-size:100% auto;
                                            background-position:0px -0.36rem;
                                        }
                                        .fax{
                                            display:inline-block;
                                            width:0.36rem;
                                            height:0.36rem;
                                            background-image:url('../img3_0/brand/dz.png');
                                            background-repeat: no-repeat;
                                            background-size:100% auto;
                                            background-position:0px -0.72rem;
                                        }
                                    }
                                }
                            }
                            &:last-child{
                                .li{
                                    .li_b{
                                        .li_b_common{
                                            .tipMsg2{
                                                left:2rem;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>