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
            <img src="../img3_0/brand/kv.png" alt="">
            <div class="step">
                <ul>
                    <li>
                        <p>2009<span>年</span></p>
                        <p>成立时间</p>
                    </li>
                    <li>
                        <p>20<span>亿</span></p>
                        <p>资金实力</p>
                    </li>
                    <li>
                        <p>675<span>桌</span></p>
                        <p>赌台数</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="about">
            <!-- <img src="../img3_0/brand/about-bg.png" alt=""> -->
            <div class="aboutDesc">
                <div class="about_l">
                    <div class="line"></div>
                    <h2>关于我们</h2>
                    <h3>about us</h3>
                    <p>
                        新濠天地为宾客提供千变万化的娱乐选择，务求让所有宾客也能尽情享乐。各式各样的娱乐包括时尚酒吧及酒廊、多媒体表演及令人叹为观止的水舞间》大型水上汇演，势将新
                        濠天地打造为精彩无限的娱乐世界。新濠天地的娱乐重点为面积约达448,000平方呎的大型娱乐场，设有约475张赌桌及约670部博彩游戏机。从尊贵的私人贵宾娱乐厅至充满热闹气氛和别具特色的娱乐场，新濠天地为您带来丰富的博彩及娱乐体验。     
                    </p>
                </div>
                <div class="about_r">
                    <p>A variety of entertainment options</p>
                    <p>千变万化的娱乐选择</p>
                </div>
            </div>
        </div>
        <div class="user">
            <div class="userDesc">
                <div class="user_l">
                    <img src="../img3_0/brand/xlz.png" alt="">
                    <div class="title">
                        <div class="line"></div>
                        <h2>代言人</h2>
                        <h3>SPOKESMAN</h3>
                        <div class="user_r">
                            莱昂纳多·迪卡普里奥
                            <img src="../img3_0/brand/arrow.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <p>
                
                <span></span>剧特伦斯·温特将执笔剧本，另外，新濠博亚股份拥有者澳门赌王何鸿燊之子何猷龙任制片人。<br>
                <span></span>据悉，该片将在今年澳门新濠博亚电影主题公园的开幕式上首映。该片名为《试镜》，讲述大导演斯科塞斯为拍摄一部赌博题材电影，两大影帝莱昂纳多和德尼罗为抢同一角色拼的你死我活的故事。<br>
                <span></span>影片中莱昂纳多和德尼罗前往澳门拍摄视镜，为了赢得导演亲睐，两人互放狠话，气氛剑拔弩张，而另一影帝布莱德皮特也在银屏中客串亮相。据海博网透露消息，新濠博亚博彩股份有限公司为拍摄该片总投资了7000万美元，莱昂纳多、布拉德·皮特此和德尼罗前从未在一部影片中同时出现过，这也是他们首次同台亮相。
                                            
            </p>
        </div>
        <div class="dev">
            <div class="devDesc">
                <div class="dev_l">
                    <div class="line"></div>
                    <h2>发展历史</h2>
                    <h3>DEVELOPMENT HISTORY</h3>
                    <h4>2009.6</h4>
                    <p>
                        项目第一期于2009年6月1日在澳门路凼城开幕，内设娱乐设施、夜总会、酒店、餐厅、购物商场及娱乐场等多元化设施。
                    </p>
                    <h4>2009.9</h4>
                    <p>
                        新濠天地首阶段项目包括提供约300间客房的颐居酒店和提供380间客房的迎尚酒店。而澳门君悦酒店于2009年9月29日正式开幕，设有791间客房。
                    </p>
                    <h4>2014-2016</h4>
                    <p>
                        项目于2014年至2016年进行大型改建工程。
                    </p>
                </div>
                <div class="dev_r">
                    <img src="../img3_0/brand/his-img.png" alt="">
                </div>
            </div>
        </div>
        <div class="pla">
            <div class="wrapper">
                <div class="pla_t">
                    <img src="../img3_0/brand/mzc.png" alt="">
                    <div class="txt">
                        <h2>马尼拉梦之城（City of Dreams Manila）</h2>
                        <p class="tel">电话号码： +63 2 8800 8080</p>
                        <p class="addr">
                            地址： Asean Avenue corner Roxas Boulevard Entertainment City Manila, Parañaque, 1701 Metro Manila, 菲律宾
                        </p>
                    </div>
                </div>
                <p>
                    新濠天地（马尼拉）位于马尼拉的赌场、酒店、购物及娱乐综合娱乐度假村项目－新濠天地（马尼拉）由新濠于菲律宾之附属公司经营和管理。马尼拉梦之城（City of Dreams Manila）占地6.2公顷的豪华综合度假胜地和赌场综合大楼，位于菲律宾马尼拉大都会区帕拉纳克（Parañaque）的娱乐城博彩区（Aseana Avenue）和罗哈斯大道（Roxas Boulevard）。马尼拉湾地区Entertainment City入口，新濠天地（马尼拉）设有六座酒店大楼，包括颐居、以开创潮流闻名的Nobu酒店及为商务休閒客而设的凯悦酒店，共设约950间客房，并提供世界级的博彩设施以及多层停车场。设有三项特色娱乐设施，包括全球首个以DreamWorks为灵感的家庭娱乐中心DreamPlay；设有现场表演的特色酒吧CenterPlay；以及位于Fortune Egg的世界知名夜总会品牌Pangaea 和 Chaos。
                </p>
            </div>
        </div>
        <div class="swiper">
            <h2>新濠天地</h2>
            <div class="bannerBoxContent">
                <swiper :height="250" :options="swiperOption" class="swiper-container swiper_h5">
                    <swiper-slide v-for="(item, index) in bannerList" :key="index">
                        <img :src="item"/>
                        <div class="cover"></div>
                    </swiper-slide>

                    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
                </swiper>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </div>
            <div class="sw-b">
                新濠天地呈献以奢华品味打造的创意崭新体验，结合刺激丰富的精彩娱乐、顶级酒店、云集环球美馔的食府，<br>
                当代艺术家破格力作、标志性建筑巨作，以及多个名师设计品牌，<br>
                新濠天地已成为澳门度假高级的综合娱乐休闲度假胜地。新濠天地为澳门休闲度假的不二之选，<br>
                设有全球最大型水上汇演《水舞间》以及结合餐饮及娱乐的时尚潮蒲点「苏濠」。而时尚生活特区「新濠大道」则汇集饮食、购物及娱乐于一身。              
            </div>
        </div>
        <div class="contact">
            <div class="wrapper">
                <div class="contact_t">
                    <img src="../img3_0/brand/swj-img.png" alt="">
                    <div class="txtBox">
                        <div class="txt">
                            <h2>水舞间</h2>
                            <p>
                                耗资超过20亿港元制作，《水舞间》是全球最大型以水为题的水上汇演。在可容纳约2,000名观众的水舞间剧院上演的《水舞间》，标志着新濠天地最触目的娱乐巨献，势必成为全球最具创意和最富想像力的水上汇演之一。 《水舞间》这部世界级的制作已成为炙手可热的必赏巨献，不仅获港澳旅客及海外旅客热烈追捧，赢得艺评人及观众的击节赞赏，更为集团业务带来正面的连锁效应。新濠天地的旅客人数、酒店入住率、餐厅人流，以至博彩收益，均录得显著提升。
                            </p>
                        </div>
                    </div>
                </div>
                <!-- <div class="line"></div> -->
                <div class="tel">
                    <div class="tel_l">
                        <span>联系我们</span>
                        <span>CONTACT US</span>
                    </div>
                    <div class="tel_r">
                        <span>电话：(853) 8868 6688</span>
                        <span>地址：澳门路氹城公路</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <img src="../img3_0/brand/logo1.png" alt="">
            <div class="line"></div>
            <div class="wrapper">
                <img src="../img3_0/brand/logo2.png" alt="">
                <img src="../img3_0/brand/logo3.png" alt="">
                <img src="../img3_0/brand/logo4.png" alt="">
                <img src="../img3_0/brand/logo5.png" alt="">
                <img src="../img3_0/brand/logo6.png" alt="">
                <img src="../img3_0/brand/logo7.png" alt="">
            </div>
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
                require('../img3_0/brand/swiper-1.jpg'),
                require('../img3_0/brand/swiper-2.jpg'),
                require('../img3_0/brand/swiper-3.png'),
            ],
            swiperOption: {
                slidesPerView: 'auto',
                spaceBetween: 0,
                centeredSlides: true,
                loop: true,
                loopAdditionalSlides: 100,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                //     bulletClass: 'my-bullet',
                //     bulletActiveClass: 'my-bullet-active'  
                // },
                // prevButton: ".swiper-button-prev",
                // nextButton: ".swiper-button-next",
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
<style lang="less" scoped>
    @font-face {
        font-family: 'newfont'; //自定义字体名称
        src: url('../../font/impact.ttf'); //注意引入正确位置
    }
    .wrapper{
        width:100%;
        padding:0 0.4rem;
    }
    .brand{
        overflow-x:hidden;
        padding-top:@height-nav-bar;
        padding-bottom:1.17333rem;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        background:#0F212B;
        .banner{
            position:relative;
            img{
                width:100%;
            }
            .step{
                position:absolute;
                bottom:-43.5px;
                left:50%;
                transform:translateX(-50%);
                width:100%;
                padding:0 0.4rem;
                height:87px;
                z-index:2;
                ul{
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                    height:100%;
                    background:#D7C3B4;
                    li{
                        flex:1;
                        text-align:center;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        height:100%;
                        p{
                            &:first-child{
                                font-size:31px;
                                color:#76604F;
                                margin-bottom:7px;
                                font-family: 'newfont';
                                span{
                                    font-size:18px;
                                    font-weight: bold;
                                }
                            }
                            &:last-child{
                                font-size:15px;
                                color:#76604F;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
        .about{
            position:relative;
            background-image: url('../img3_0/brand/aboutBg.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center;
            padding:148px 0 79px;
            img{
                width:100%;
            }
            .aboutDesc{
                position:relative;
                width:100%;
                padding:0 0.4rem;
                display:flex;
                justify-content: space-between;
                align-items:center;
                .about_l{
                    position:relative;
                    z-index: 2;
                    text-align:left;
                    width:7.2rem;
                    .line{
                        width:6px;
                        height:25px;
                        background:#D7C3B4;
                        margin-bottom:-12px;
                    }
                    h2{
                        font-size:0.48rem;
                        color:#D7C3B4;
                        margin:0;
                        padding-left:20px;
                        font-weight: bold;
                    }
                    h3{
                        font-size:0.32rem;
                        color:#fff;
                        margin:7px 0 30px;
                        padding-left:20px;
                        font-weight: bold;
                    }
                    p{
                        font-size:0.28rem;
                        line-height:0.48rem;
                        color:#D1D1D1;
                        padding-left:20px;
                    }

                }
                .about_r{
                    position:absolute;
                    right:0.4rem;
                    top:50%;
                    transform:translateY(-50%);
                    z-index: 1;
                    padding:30px 0 30px 146px;
                    margin-right:18px;
                    display:flex;
                    justify-content: flex-end;
                    align-items: center;
                    background:#1C1C1C;
                    p{
                        color:#444;
                        font-weight: bold;
                        &:first-child{
                            position:absolute;
                            top:50%;
                            // right:-0.8rem;
                            right:-50%;
                            font-size:0.24rem;
                            transform:rotate(90deg) translateY(-50%);
                            white-space: nowrap;
                        }
                        &:last-child{
                            width:40px;
                            font-size:0.48rem;
                            margin:0 -18px 0 0;
                        }
                    }
                }
            }
        }
        .user{
            background:#0C1E28;
            padding:32px 0 0;
            .userDesc{
                position:relative;
                width:100%;
                padding:0 0.4rem;
                display:flex;
                justify-content: space-between;
                align-items:flex-end;
                .user_l{
                    position: relative;
                    z-index: 2;
                    display:flex;
                    justify-content: space-between;
                    align-items:flex-start;
                    width:100%;
                    .title{
                        text-align:right;
                        display:flex;
                        flex-direction: column;
                        justify-content: flex-end;
                        align-items:flex-end;
                        flex:1;
                        .line{
                            width:6px;
                            height:25px;
                            background:#D7C3B4;
                            margin-bottom:-12px;
                        }
                        h2{
                            font-size:0.48rem;
                            color:#D7C3B4;
                            margin:0;
                            padding-right:20px;
                            text-align:right;
                            font-weight: bold;
                        }
                        h3{
                            font-size:0.32rem;
                            color:#fff;
                            margin:7px 0 30px;
                            padding-right:20px;
                            text-align:right;
                            font-weight: bold;
                        }
                        .user_r{
                            position:absolute;
                            right:-0.4rem;
                            z-index:1;
                            bottom:30px;
                            display:flex;
                            justify-content: flex-end;
                            align-items: center;
                            font-size:0.32rem;
                            color:#fff;
                            padding:58px 30px 72px 0;
                            text-align:right;
                            width:100%;
                            background:#313131;
                            img{
                                width:15px;
                                margin-left:22px;
                                transform:rotate(180deg);
                            }
                        }
                    }
                    img{
                        position:relative;
                        z-index: 2;
                        width:374px;
                        flex-shrink: 0;
                    }
                }
            }
            p{
                font-size:0.28rem;
                line-height:0.48rem;
                background:#1C1C1C;
                padding:80px 0.4rem 56px;
                margin-top:-30px;
                color:#D1D1D1;
                span{
                    padding-left:2em;
                }
            }
        }
        .dev{
            background-image: url('../img3_0/brand/his-bg.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center;
            padding:86px 0 109px;
            .devDesc{
                position: relative;
                width:100%;
                padding:0 0.4rem;
                display:flex;
                justify-content: space-between;
                align-items: flex-end;
                .dev_l{
                    position:relative;
                    z-index:2;
                    margin-bottom:40px;
                    width:70%;
                    flex-shrink: 0;
                    text-align:left;
                    .line{
                        width:6px;
                        height:25px;
                        background:#D7C3B4;
                        margin-bottom:-12px;
                    }
                    h2{
                        font-size:0.48rem;
                        color:#D7C3B4;
                        margin:0;
                        padding-left:20px;
                        font-weight: bold;
                    }
                    h3{
                        font-size:0.32rem;
                        color:#fff;
                        margin:7px 0 30px;
                        padding-left:20px;
                        font-weight: bold;
                    }
                    h4{
                        font-size:0.42rem;
                        color:#D7C3B4;
                        margin-bottom:10px;
                        padding-left:20px;
                        font-family: 'newfont';
                    }
                    p{
                        font-size:0.28rem;
                        color:#D1D1D1;
                        line-height:0.48rem;
                        margin-bottom:40px;
                        padding-left:20px;
                        &:nth-child(6){
                            margin-bottom:0;
                        }
                    }
                }
                .dev_r{
                    position:absolute;
                    right:0;
                    top:50%;
                    transform:translateY(-50%);
                    z-index:1;
                    width:81%;
                    flex-shrink: 0;
                    img{
                        width:100%;
                        margin-right:-20px;
                        flex-shrink: 0;
                    }
                }
            }
        }
        .pla{
            background:#0F212B;
            padding:105px 0 114px;
            .wrapper{
                width:100%;
                padding:0 0.4rem;
                .pla_t{
                    position:relative;
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                    img{
                        position:relative;
                        z-index: 1;
                        width:100%;
                    }
                    .txt{
                        position:absolute;
                        left:50%;
                        bottom:-87.5px;
                        transform:translateX(-50%);
                        z-index:2;
                        width:530px;
                        padding:25px 23px 36px 23px;
                        background:#1C1C1C;
                        text-align:left;
                        h2{
                            font-size:24px;
                            color:#fff;
                            margin-bottom:21px;
                        }
                        .addr{
                            font-size:0.24rem;
                            line-height:0.3rem;
                            color:#fff;
                            margin-top:0;
                        }
                        .tel{
                            font-size:0.24rem;
                            line-height:0.3rem;
                            color:#fff;
                            margin-top:0;
                        }
                    }
                }
                p{
                    font-size:0.28rem;
                    line-height: 0.48rem;
                    color:#D1D1D1;
                    margin-top:125px;
                    text-align:left;
                }
            }
        }
        .swiper{
            background:#000;
            padding:40px 0 88px;
            h2{
                font-size:0.48rem;
                color:#D7C3B4;
                margin-bottom:32px;
                text-align:center;
                font-weight: bold;
            }
            .bannerBoxContent{
                width:80%;
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
                            background:rgba(0,0,0,0.7);
                            z-index:2;
                        }
                        &.swiper-slide-active{
                            .cover{
                                display:none;
                            }
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
                .swiper-button-prev{
                    width: 0.32rem;
                    height: 0.48rem;
                    background: url("../img3_0/brand/aroow-l.png") no-repeat;
                    background-size: 100% 100%; 
                    margin-left:-0.76rem;
                    outline:none;
                }
                .swiper-button-next{
                    width: 0.32rem;
                    height: 0.48rem;
                    background: url("../img3_0/brand/aroow-r.png") no-repeat;
                    background-size: 100% 100%; 
                    margin-right:-0.76rem;
                    outline:none;
                }
            }
            .sw-b{
                font-size:0.28rem;
                line-height:0.48rem;
                padding:0 0.4rem;
                color:#D1D1D1;
                margin-top:52px;
                text-align:center;
            }
        }
        .contact{
            padding:114px 0 57px;
            .wrapper{
                width:100%;
                padding:0;
                .contact_t{
                    position:relative;
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                    width:100%;
                    img{
                        position:relative;
                        z-index: 1;
                        width:100%;
                    }
                    .txtBox{
                        padding:0 0.4rem;
                        position:absolute;
                        bottom:-224px;
                        left:50%;
                        transform:translateX(-50%);
                        z-index:2;
                        width:100%;
                        .txt{
                            width:100%;
                            padding:20px 32px;
                            background:#D7C3B4;
                            h2{
                                font-size:0.42rem;
                                color:#76604F;
                                margin-bottom:22px;
                                text-align:left;
                            }
                            p{
                                font-size:0.28rem;
                                line-height:0.48rem;
                                color:#76604F;
                                text-align:left;
                            }
                        }
                    }
                }
                .line{
                    width:100%;
                    height:1px;
                    background:#fff;
                    margin:254px 0 56px;
                }
                .tel{
                    margin-top:254px;
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    flex-direction: column;
                    .tel_l{
                        text-align:center;
                        margin-bottom:26px;
                        span{
                            color:#fff;
                            display:block;
                            font-weight: bold;
                            &:first-child{
                                font-size:32px;
                                margin-bottom:8px;
                            }
                            &:last-child{
                                font-size:18px;
                            }
                        }
                    }
                    .tel_r{
                        text-align:center;
                        span{
                            font-size:18px;
                            font-weight: bold;
                            &:first-child{
                                margin-right:40px;
                            }
                        }
                    }
                }
            }
        }
        .footer{
            padding:34px 0;
            background:#fff;
            text-align:center;
            >img{
                width:129px;
            }
            .line{
                width:43px;
                height:1px;
                background:#000;
                margin:14px auto 18px;
            }
            .wrapper{
                display:flex;
                justify-content: space-between;
                align-items:center;
                img{
                    flex-shrink: 0;
                    &:nth-child(1){
                        width:41px;
                    }
                    &:nth-child(2){
                        width:70px;
                    }
                    &:nth-child(3){
                        width:72px;
                    }
                    &:nth-child(4){
                        width:113px;
                    }
                    &:nth-child(5){
                        width:36px;
                    }
                    &:nth-child(6){
                        width:76px;
                    }
                }
            }
        }
    }
</style>