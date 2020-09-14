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
        <div class="top">
            <img src="../img3_0/brand/kv.png" alt="">
            <div class="topDesc">
                <img src="../img3_0/brand/logo.png" alt="">
                <img src="../img3_0/brand/kv-tikle.png" alt="">
            </div>
        </div>
        <div class="topImg">
            <div class="wrapper">
                <img src="../img3_0/brand/top-img.png" alt="">
            </div>
        </div>
        <div class="about">
            <div class="line"></div>
            <div class="wrapper">
                <h2>ABOUT GALAXY</h2>
                <h2>关于我们</h2>
                <div class="txt">
                    <div class="imgbox">
                        <img src="../img3_0/brand/about-img.png" alt="" class="txt-l">

                        <img src="../img3_0/brand/GALAXY.png" alt="" class="galaxy">
                    </div>
                        <br>
                        银河娱乐集团(「银娱」或「集团」)是全球首屈一指的度假城、酒店及博彩企业，于香港联合交易所上市，并为恒生指数成份股。 <br>
                        
                        <br>作为澳门三家获得博彩批给合同的营运商之一，银娱一直以成功打造崭新、触目及屡获殊荣的项目、产品及服务见称，加上「傲视世界　情繫亚洲」的服务理念，令集团表现持续傲视同侪，引领澳门市场。<br>
                        
                        <br>银娱于澳门经营三个旗舰项目：包括位于路氹、全球其中一个规模最大的综合度假城「澳门银河」；毗邻「澳门银河」独一无二的娱乐及美食街新地标「澳门百老汇」；以及位于澳门半岛、屡获殊荣的尊尚项目澳门星际酒店。
                    
                    <div style="clear:both;"></div>
                </div>
                <ul class="data">
                    <li>
                        <p>2011<span>年</span></p>
                        <p>正式开业</p>
                    </li>
                    <li>
                        <p>200<span>万</span></p>
                        <p>平方米度假城</p>
                    </li>
                    <li>
                        <p>2200<span>+</span></p>
                        <p>客房及套房</p>
                    </li>
                    <li>
                        <p>575<span>米</span></p>
                        <p>空中激流</p>
                    </li>
                    <li>
                        <p>120<span>+</span></p>
                        <p>餐厅和酒吧</p>
                    </li>
                </ul>
            </div>
            <img src="../img3_0/brand/zhuangshi-right.png" alt="" class="about_b">
        </div>
        <div class="xz">
            <!-- <img src="../img3_0/brand/xz-bg.png" alt=""> -->
            <div class="wrapper">
                <img src="../img3_0/brand/DIVELOPMENT.png" alt="" class="dev">
                <h2>品牌发展现状</h2>
                <img src="../img3_0/brand/sjx.png" alt="" class="arr">
                <p>

                    此外，集团持续积极物色海外的发展机会。于2015年7月，集团宣佈对摩纳哥公国之世界着名豪华酒店及度假村营运商「蒙地卡罗滨海度假酒店集团」（Société Anonyme des Bains de Mer et du Cercle des Étrangers à Monaco）作出策略性股权投资，双方承诺在亚太区合作发展及营运娱乐业务，当中包括但不限于综合度假城项目，并加强双方之相关业务及品牌。<br><br>

                    作为澳门的良好企业公民，银娱一直恪守承诺，肩负社会职责，致力打造澳门「世界旅游休闲中心」之定位，协助发展澳门的多元文化，与各个社会机构保持良好关系，参与及支持各类型慈善和社区活动，同时注重员工的身心健康发展(详见企业社会责任篇幅)。<br><br>

                    银娱一直推动澳门的经济适度及多元发展，持续履行企业社会责任，致力培育本澳人才，宣扬澳门本地文化和特色，积极为澳门的长远繁荣稳定作出努力。
                                                
                </p>
            </div>
        </div>
        <div class="user">
            <div class="wrapper">
                <img src="../img3_0/brand/lv.png" alt="">
                <div class="txt">
                    <h2>创始人—吕志和</h2>
                    <p>
                        澳门银河集团创始人——吕志和博士，《福布斯》世界级富豪，澳门三大博彩牌照持有人之一，坐拥市值数百亿的跨国事业王国，叱咤商界六十多年，由其始创的嘉华集团，业务遍及香港、中国内地、澳门、北美洲及东南亚，涵盖地产、酒店、娱乐休闲及建材业。
                    </p>
                </div>
            </div>
        </div>
        <div class="pla">
            <img src="../img3_0/brand/pla.png" alt="">
            <div class="imgBox">
                <img src="../img3_0/brand/1.png" alt="">
                <img src="../img3_0/brand/2.png" alt="">
                <img src="../img3_0/brand/3.png" alt="">
                <img src="../img3_0/brand/4.png" alt="">
            </div>
        </div>
        <div class="work">
            <div class="wrapper">
                <h2>旗下业务</h2>
                <h3>ABOUT US</h3>
                <div class="line"></div>
                <ul>
                    <li>
                        <img src="../img3_0/brand/flogo-1.png" alt="">
                    </li>
                    <li>
                        <img src="../img3_0/brand/flogo-2.png" alt="">
                    </li>
                    <li>
                        <img src="../img3_0/brand/flogo-3.png" alt="">
                    </li>
                    <li>
                        <img src="../img3_0/brand/flogo-4.png" alt="">
                    </li>
                    <li>
                        <img src="../img3_0/brand/flogo-5.png" alt="">
                    </li>
                    <li>
                        <img src="../img3_0/brand/flogo-6.png" alt="">
                    </li>
                    <li>
                        <img src="../img3_0/brand/flogo-7.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="contact">
            <img src="../img3_0/brand/footer-bg.png" alt="">
            <div class="wrapper">
                <div class="title">
                    <span>联系我们</span>
                    <span>CONTACT US</span>
                </div>
                <div class="line"></div>
                <div class="tel common">
                    <img src="../img3_0/brand/phone.png" alt="">
                    <span>联系电话：853-2888-0888</span>
                </div>
                <div class="address common">
                    <img src="../img3_0/brand/address.png" alt="">
                    <span>赌场地址：澳門路氹城「澳門銀河™」綜合渡假城</span>
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
        padding:0 0.4rem;
    }
    .brand{
        overflow-x:hidden;
        padding-top:@height-nav-bar;
        padding-bottom:1.17333rem;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        .top{
            position:relative;
            z-index: 1;
            img{
                width:100%;
            }
            .topDesc{
                position:absolute;
                top:50%;
                left:50%;
                transform:translateX(-50%) translateY(-50%);
                text-align:center;
                img{
                    &:first-child{
                        width:1.84rem;
                    }
                    &:last-child{
                        width:4.4rem;
                    }
                }
            }
        }
        .topImg{
            position:relative;
            z-index:2;
            margin-top:-2rem;
            .wrapper{
                display:flex;
                justify-content:space-between;
                align-items: center;
                // box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                img{
                    width:100%;
                }
            }
        }
        .about{
            position:relative;
            margin-top:195px;
            .line{
                position: absolute;
                top:0.1rem;
                left:0;
                width:50%;
                height:5px;
                background:#A37C3C;
            }
            .wrapper{
                text-align: left;
                h2{
                    font-size:0.48rem;
                    color:#000;
                    text-align:right;
                    line-height:0.28rem;
                    font-weight: bold;
                }
                .txt{
                    margin-top:-43px;
                    font-size:0.28rem;
                    color:#333;
                    line-height:0.48rem;
                    text-align: left;
                    .imgbox{
                        width:4rem;
                        float:left;
                        margin-right:0.3rem;
                        .txt-l{
                            width:4rem;
                        }
                        .galaxy{
                            width:3.57rem;
                            margin:-1rem 0 0 -0.42rem;
                        }
                    }
                }
                .data{
                    display:flex;
                    justify-content:space-between;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    width:4rem;
                    margin:0.86rem 0 0.75rem;
                    li{
                        width:50%;
                        text-align:left;
                        margin-bottom:97px;
                        &:last-child{
                            margin-bottom:0;
                        }
                        p{
                            color:#333;
                            &:first-child{
                                font-size:0.64rem;
                                font-weight: bold;
                                span{
                                    font-size:0.24rem;
                                    font-weight: bold;
                                }
                            }
                            &:last-child{
                                font-size:0.28rem;
                                margin-top:0.1rem;
                            }
                        }
                        &:nth-child(3),&:nth-child(5){
                            p{
                                &:first-child{
                                    span{
                                        font-size:42px;
                                        vertical-align: top;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .about_b{
                position:absolute;
                right:0;
                bottom:-40%;
                z-index:2;
                width:70%;
            }
        }
        .xz{
            position: relative;
            background-image:url('../img3_0/brand/xz-bg.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center;
            padding:52px 0 104px;
            // img{
            //     width:100%;
            // }
            .wrapper{
                position:relative;
                // position:absolute;
                // top:50%;
                // left:50%;
                // transform:translateX(-50%) translateY(-50%);
                z-index: 3;
                text-align:center;
                .dev{
                    width:3.5rem;
                }
                h2{
                    font-size:0.42rem;
                    color:#fff;
                    margin:15px 0 17px;
                }
                .arr{
                    width:0.3rem;
                }
                p{
                    width:100%;
                    font-size:0.28rem;
                    line-height:0.48rem;
                    color:#fff;
                    text-align:left;
                }
            }
        }
        .user{
            position:relative;
            z-index: 1;
            margin-top:-10%;
            padding:0 0.4rem;
            .wrapper{
                background:#000;
                padding:56px 0 56px 32px;
                display:flex;
                justify-content:space-between;
                align-items: center;
                box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                img{
                    width:257px;
                    flex-shrink: 0;
                    margin-right:26px;
                }
                .txt{
                    flex:1;
                    background-image:url('../img3_0/brand/02.png');
                    background-repeat: no-repeat;
                    background-size:contain;
                    background-position:center;
                    text-align:left;
                    h2{
                        display:inline-block;
                        padding:12px 9px;
                        font-size:0.32rem;
                        color:#fff;
                        background:#A37C3C;
                        margin-bottom:16px;
                    }
                    p{
                        font-size:0.28rem;
                        line-height:0.48rem;
                        color:#fff;
                        text-align:left;
                        padding-right:0.12rem;
                    }
                }
            }
        }
        .pla{
            overflow-x:hidden;
            padding:90px 0 83px;
            position:relative;
            width: 100%;
            text-align:center;
            >img{
                width:80%;
            }
            .imgBox{
                position:absolute;
                top:50%;
                left:50%;
                transform:translateX(-50%) translateY(-50%);
                // margin-left:-8%;
                display:flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: nowrap;
                img{
                    width:209px;
                    margin-right:40px;
                    &:last-child{
                        margin-right:0;
                    }
                    // &:nth-child(3){
                    //     width:38%;
                    //     box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                    // }

                    // transition:all .5s linear;
                    // &:hover{
                    //     width:30%;
                    //     box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                    //     transition:all .5s linear;
                    // }
                }
            }
        }
        .work{
            .wrapper{
                h2{
                    font-size:36px;
                    color:#000;
                    text-align:center;
                    font-weight: bold;
                }
                h3{
                    font-size:36px;
                    color:#A37C3C;
                    margin:40px 0;
                    text-align:center;
                }
                .line{
                    width:33px;
                    height:3px;
                    background:#120745;
                    margin:0 auto 50px;
                }
                ul{
                    display:flex;
                    justify-content: space-around;
                    align-items:center;
                    flex-wrap:wrap;
                    li{
                        margin-bottom:136px;
                        margin-right:60px;
                        img{
                            width:100%;
                        }
                        &:nth-child(1){
                            width:133px;
                        }
                        &:nth-child(2){
                            width:141px;
                        }
                        &:nth-child(3){
                            width:75px;
                        }
                        &:nth-child(4){
                            width:159px;
                            margin-right:0;
                        }
                        &:nth-child(5){
                            width:143px;
                        }
                        &:nth-child(6){
                            width:83px;
                        }
                        &:nth-child(7){
                            width:156px;
                            margin-right:0;
                        }
                    }
                }
            }
        }
        .contact{
            position:relative;
            img{
                width:100%;
            }
            .wrapper{
                position:absolute;
                top:50%;
                left:50%;
                transform:translateX(-50%) translateY(-50%);
                text-align:left;
                padding:0 60px;
                .title{
                    span{
                        font-size:45px;
                        color:#fff;
                        margin-right:20px;
                    }
                }
                .line{
                    width:261px;
                    height:7px;
                    background:#fff;
                    margin:27px 0 50px;
                }
                .common{
                    margin-bottom:20px;
                    img{
                        width:22px;
                        margin-right:10px;
                        vertical-align: top;
                    }
                    span{
                        font-size:27px;
                        color:#fff;
                    }
                }
            }
        }
    }
</style>