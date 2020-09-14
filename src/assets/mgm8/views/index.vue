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
        <div class="topBanner">
            <img src="../img3_0/brand/kv.png" alt="" class="bannerImg">
            <div class="logo">
                <img src="../img3_0/brand/logo.png" alt="" class="logoImg">
                <img src="../img3_0/brand/logobg.png" alt="" class="logo-bg">
            </div>
        </div>
        <div class="line"></div>
        <div class="intro">
            <div class="wrapper">
                <h2>美高梅集团</h2>
                <p class="sec">MGM grand</p>
                <div class="intro_l">
                    <img src="../img3_0/brand/img.png" alt="">
                </div>
                <div class="intro_r">
                    <p class="txt">
                        美高梅线上娱乐品牌（MGM8.LIVE）是由美高梅中国控股有限公司自2019年12月8日正式上线的一线娱乐博彩线上产品。<br>
                        <span></span>美高梅中国控股有限公司，简称美高梅中国控股，以及美高梅中国由纽约上市的美高梅国际酒店集团，以及何鸿燊女儿何超琼在2007年组成，总部位于澳门外港新填海区孙逸仙大马路Edificio MGM Macau，香港办事处则位于香港中环干诺道中200号招商局大厦1402室。<br>
                        <span></span>其股份自2011年6月3日在香港交易所主板上市。而在上市前以招股价15.34港元定价，集资定额111.33亿港元，其中全球配售获得20倍超额认购，包括香港及国际配售。<br>
                        <span></span>澳门美高梅是美高梅金殿超濠股份有限公司于澳门首个娱乐场酒店项目，是澳门六个赌牌（三个主牌及三个副牌）之中最后一个赌牌公司正式落成的旗舰赌场酒店，也标志着澳门博彩业正式进入六分天下的局面。澳门美高梅所领之赌牌系属澳门博彩股份有限公司赌牌之副牌。<br>
                        <span></span>美高梅娱乐场第一期部分已和酒店部分共同开幕，占地20,620平方米，设有385张赌桌、888部角子机及16间私人贵宾厅（大部分由集美集团承租）；娱乐场第二期扩建部分（占地4400平方米）将会增设70张赌桌、240部角子机；并设餐厅、品牌商店、宴会厅、会议场地、夜总会场、水疗中心等，预计于2008年年中开幕。                           
                    </p>
                </div>
            </div>
        </div>
        <div class="user">
            <div class="wrapper">
                <img src="../img3_0/brand/he.png" alt="">
                <div class="userDesc">
                    <div class="title">
                        <span>何超琼</span>
                        <span>Pansy Ho Chiu-king</span>
                        <span>美高梅中国主席</span>
                    </div>
                </div>
                <p>
                    何超琼（Pansy Ho Chiu-king，1962年8月26日-），美高梅中国主席、信德集团行政主席兼董事总经理。她是澳门赌王何鸿燊与二太蓝琼缨所生的女儿，曾留学美国，修读市场及国际商业管理。掌管信德集团的策略性发展及企业管理业务。<br>
                    <span></span>现年49岁的何超琼是何鸿燊二房长女，三十多岁起就开始掌控信德集团，领导能力和商业才干超出其他兄弟姐妹，一直被外界视为何鸿燊的接班人。从她对美高梅中国的投资也可以看到这一点。   
                </p>
            </div>
        </div>
        <div class="his">
            <!-- <img src="../img3_0/brand/ss-BG.png" alt="" class="ss-bg"> -->
            <div class="his_r">
                <img src="../img3_0/brand/img2.png" alt="" class="ss-1">
            </div>
            <div class="wrapper">
                <div class="his_l">
                    <h2>在港上市</h2>
                    <p class="sec">Listing in Hong Kong</p>
                    <p class="txt">
                        美国博彩业巨头美高梅在澳门的合资公司——美高梅中国(MGM China)即将于2011年6月3日登陆香港证券交易所。根据新华海外财经报道，美高梅中国公开发售已获19倍超额认购。此次为美高梅中国首次公开募股(IPO)，路透社消息称，何超琼的身价或达50亿美元。<br>
                        <span></span>此次美高梅中国上市比较特别的是，其发售的全部股份均来自何超琼原本就持有的存量股份，并没有发行新股。若行使超额配售权，新增的1.14亿股超额股份也同样来自何超琼。因此，此次美高梅中国全部的集资额将均由其股东何超琼旗下公司所得，美高梅国际不会得到新资金。<br>
                        <span></span>资料显示，美高梅中国前身为美高梅超濠金殿，由何超琼和MGM Resorts各持有50%股权。但该公司在上市前进行重组，成立了美高梅中国，全资持有美高梅超濠金殿。重组后，何超琼在美高梅中国的持股比例由原来的50%降至约36%，上市后将进一步摊薄至最低26%；与此同时，MGM Resorts的持股比例将增至51%。据悉，这是因为美高梅中国之前在港交所聆讯时，由于两大股东控制权存在疑问，所以未通过；之后，美高梅中国补交文件阐明，美高梅国际将持股51%成为控股股东，何超琼则放弃大股东地位，持股比例降至26%，才得以通过。<br>
                        <span></span>全部来自何超琼持有的存量股份。美高梅中国公开发售已获19倍超额认购。美高梅中国预计此次香港IPO，在未行使超额配售权之前，可募得资金116.38亿港元，净募集资金约有111亿港元。招股书显示，募得资金将主要用于偿还何超琼旗下超濠金殿的借款。<br>
                        <span></span>不过，也有人不看好这类家族企业。香港一位学者表示，在香港上市的大型企业多数由家族控制，除了掌握控股权以外，家族成员也加入了管理层成为企业核心人物；过去这种拥有权和管理权不分的模式被称“欠缺制衡”，饱受争议；大股东透过控股权，加上亲属控股的管理团队可以为所欲为，决策可能不符合广大股民利益，对股东并不公平，此前的“争产大战”造成相关公司股价的大幅波动，就是很好的例子。<br>
                        <span></span>3日美高梅中国收于15.62港元，涨1.825%。                                              
                    </p>
                </div>
            </div>
        </div>
        <div class="history">
            <h2>美高梅总部历史时刻</h2>
            <h3>MGM History</h3>
            <div class="img">
                <!-- <img src="../img3_0/brand/his-bg.png" alt=""> -->
                <div class="imgDesc">
                    <img src="../img3_0/brand/1989 .png" alt="">
                    <p>转型博彩事业</p>
                    <img src="../img3_0/brand/2000.png" alt="">
                    <p>并购梦幻度假村</p>
                    <img src="../img3_0/brand/2001 .png" alt="">
                    <p>发展停滞阶段</p>
                    <img src="../img3_0/brand/2004-2005.png" alt="" class="two">
                    <p>收购曼德勒酒店</p>
                    <img src="../img3_0/brand/2019.png" alt="">
                    <p>东南亚线美高梅综合娱乐平台上</p>
                </div>
            </div>
            <div class="wrapper">
                <img src="../img3_0/brand/2019.10.16.png" alt="">
                <p>
                    2019年10月16日，黑石房地产收入信托基金（Blackstone Real Estate Income Trust）和美高梅国际酒店集团各占95%和5%股份的合资企业以42.5亿美元的价格收购百乐宫酒店，并将其以2.45亿美元的初始年租金返租给美高梅旗下的一个赌场子公司，同时还以8.25亿美元出售拉斯维加斯马戏团度假村酒店（Circus Circus）给金银岛酒店所有者菲尔•鲁芬（Phil Ruffin）的附属公司。
                </p>
                <img src="../img3_0/brand/2019.12.08.png" alt="">
                <p>
                    同年2019年12月8日，美高梅集中国部针对东南亚市场开启美高梅线上娱乐项目，为提供更好更便利的娱乐方式。顶尖的技术开发团队以及专业的运营人员配备使得该娱乐线上项目mgm8.live在短短半年内荣获亚洲线上娱乐产业超级AAA品牌排行榜第5名的好评，一年内达到万人同时在线的佳绩。
                </p>
            </div>
            <img src="../img3_0/brand/3.png" alt="" >
        </div>
        <div class="footer">
            <img src="../img3_0/brand/footerlogo.png" alt="">
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
        font-family: 'newfont'; //自定义字体名称
        src: url('../../font/SourceHanSerifCN-Heavy.otf'); //注意引入正确位置
    }
    .wrapper{
        width:100%;
        padding:0 0.4rem;
    }
    .brand{
        overflow-x:hidden;
        padding-top:@height-nav-bar;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        background:url('../img3_0/brand/bg.png');
        .topBanner{
            position:relative;
            z-index: 0;
            .bannerImg{
                width:100%;
            }
            .logo{
                position: absolute;
                top:0;
                left:50%;
                transform:translateX(-50%);
                z-index:1;
                width:210px;
                margin:0 aut0;
                .logo-bg{
                    position: relative;
                    z-index: 1;
                    width:100%;
                }
                .logoImg{
                    position:absolute;
                    top:45%;
                    left:50%;
                    transform:translateX(-50%) translateY(-50%);
                    z-index: 2;
                    width:178px;
                }
            }
        }
        .line{
            width:100%;
            height:2px;
            background:#C4903D;
        }
        .intro{
            padding:0.6rem 0 0.52rem;
            .wrapper{
                h2{
                    font-size:0.48rem;
                    color:#fff;
                    margin:0 0 0.1rem;
                    text-align: center;
                }
                .sec{
                    font-size:0.24rem;
                    color:#C5913B;
                    margin-bottom:0.36rem;
                    text-align: center;
                    font-family: 'newfont';
                    font-weight: 500;
                }
                .intro_l{
                    position:relative;
                    margin-bottom: 0.41rem;
                    img{
                        width:100%;
                    }
                }
                .intro_r{
                    width:100%;
                    .txt{
                        font-size:0.28rem;
                        line-height:0.48rem;
                        color:#fff;
                        margin-bottom:0.46rem;
                        text-align:left;
                        text-indent: 2em;
                        span{
                            padding-left: 2em;
                        }
                    }
                }
            }
        }
        .his{
            position:relative;
            background-image:url('../img3_0/brand/ssBG.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center;
            padding:0 0 194px;
            .ss-bg{
                width:100%;
            }

            .his_r{
                width:100%;
                img{
                    width:100%;
                }
            }
            .wrapper{
                // position:absolute;
                // top:50%;
                // left:50%;
                // transform:translateX(-50%) translateY(-50%);
                .his_l{
                    width:100%;
                    h2{
                        font-size:0.48rem;
                        color:#fff;
                        margin:0.7rem 0 0.14rem;
                        text-align: center;
                    }
                    .sec{
                        font-size:0.18rem;
                        color:#C5913B;
                        margin-bottom:0.5rem;
                        text-align: center;
                        font-family: 'newfont';
                        font-weight: 500;
                    }
                    .txt{
                        font-size:0.28rem;
                        line-height:0.48rem;
                        color:#AEB3CB;
                        text-align:left;
                        text-indent: 2em;
                        span{
                            padding-left: 2em;
                        }
                    }
                }
            }
        }
        .user{
            padding-bottom:0.72rem;
            .wrapper{
                position:relative;
                img{
                    width:100%;
                }
                .userDesc{
                    position:absolute;
                    top:8%;
                    right:1rem;
                    text-align:left;
                    .title{
                        margin-bottom:0.42rem;
                        span{
                            display:block;
                            &:first-child{
                                font-size:0.42rem;
                                color:#DFAC5A;
                                margin-bottom:0.43rem;
                            }
                            &:nth-child(2){
                                font-size:0.24rem;
                                color:#fff;
                            }
                            &:last-child{
                                font-size:0.28rem;
                                color:#fff;
                                margin-top:0.1rem;
                            }
                        }
                    }
                }
                p{
                    font-size:0.28rem;
                    line-height:0.48rem;
                    color:#fff;
                    text-indent:2em;
                    margin-top:0.4rem;
                    span{
                        padding-left:2em;
                    }
                }
            }
        }
        .history{
            h2{
                font-size:0.48rem;
                color:#fff;
                margin:0.91rem 0 0.14rem;
                text-align: center;
            }
            h3{
                font-size:0.18rem;
                color:#C5913B;
                margin-bottom:0.5rem;
                text-align: center;
                font-family: 'newfont';
                font-weight: 500;
            }
            .img{
                position:relative;
                background-image:url('../img3_0/brand/hisBG.png');
                background-repeat: no-repeat;
                background-size:cover;
                background-position:center;
                padding:15px 0 50px;
                .imgDesc{
                    text-align:center;
                    img{
                        width:0.7rem;
                    }
                    .two{
                        width:1.6rem;
                    }
                    p{
                        font-size:0.36rem;
                        color:#FFD99B;
                        margin-bottom: 25px;
                    }
                }
            }
            .wrapper{
                margin-top:0.8rem;
                text-align:center;
                >img{
                    width:1.58rem;
                }
                p{
                    font-size:0.28rem;
                    line-height:0.48rem;
                    text-align:center;
                    color:#fff;
                    margin-bottom:0.61rem;
                }
                
            }
            img{
                width:100%;
            }
        }
        .footer{
            background:#000;
            margin-top:-4px;
            padding:0.4rem 0;
            padding-bottom:@height-nav-bar;
            img{
                width:1.26rem;
                display:block;
                margin:0 auto;
            }
        }
    }
</style>