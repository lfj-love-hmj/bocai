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
            <div class="wrapper">
                <img src="../img3_0/brand/logo.png" alt="" class="logo">
            </div>
        </div>
        <div class="about">
            <div class="wrapper">
                <div class="about_l">
                    <h3>ABOUT</h3>
                    <div class="title">
                        <img src="../img3_0/brand/title-icon.png" alt="">
                        关于广东
                    </div>
                    <div class="line"></div>
                    <p>

                        海王广东集团有限公司一直扎根澳门，凭籍多年经验的管理团队，稳健的长远发展方针，加上创新务实的市场策划，令海王广东集团的广东贵宾会业务蒸蒸日上。<br><br>
                        海王广东集团有限公司于澳门贵宾会行业中市场 占有率一直名列前茅，主要业务为投资及拓展澳门贵宾会博彩中介服务，集团旗下拥有十多个极尽奢华的广东贵宾会，每间贵宾会的位置、环境及配套设施均占尽优势，设计风格亦各具特色，分布于澳门、凼仔及路凼城各间5星级酒店。<br><br>
                        「海王广东，以客为宗」-这句口号，正正代表着广东集团的经营理念及待客之道，广东贵宾会以客户的切身感受为依归，为客户提供优质、贴心的贵宾娱乐服务;这个理念，不但令广东集团口碑传遍珠三角，亦为迈向国际化莫定了稳固的基础。
                                                    
                    </p>
                </div>
                <div class="about_r">
                    <div class="bt">
                        <img src="../img3_0/brand/aroow.png" alt="">
                        代言人-吴岱融
                    </div>
                    <img src="../img3_0/brand/wu.png" alt="">
                </div>
            </div>
        </div>
        <div class="ser">
            <div class="wrapper">
                <div class="title_common">
                    <div class="title">
                        <img src="../img3_0/brand/title-icon.png" alt="">
                        <h2>尊尚服务</h2>
                        <img src="../img3_0/brand/title-icon.png" alt="">
                    </div>
                    <h3>HIGH CLASS</h3>
                </div>
                <p>廣東為您呈現多樣化的娛樂優惠，<br>不論您身在澳門何處，都為您提供最貼身的服務。</p>
                <ul>
                    <li>
                        <img src="../img3_0/brand/img1.png" alt="">
                        <p>酒店预订</p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/img2.png" alt="">
                        <p>尽情娱乐</p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/img3.png" alt="">
                        <p>交通预约</p>
                    </li>
                    <li>
                        <img src="../img3_0/brand/img4.png" alt="">
                        <p>激情表演</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="pla">
            <div class="wrapper">
                <div class="title_common">
                    <div class="title">
                        <img src="../img3_0/brand/title-icon.png" alt="">
                        <h2>服务据点</h2>
                        <img src="../img3_0/brand/title-icon.png" alt="">
                    </div>
                    <h3>SERVICE</h3>
                </div>
                <div class="pla_c">
                    <div class="img">
                        <img src="../img3_0/brand/ser-img-1.png" alt="">
                        <div class="bg"></div>
                    </div>
                    <div class="txt">
                        <div class="top">
                            <img src="../img3_0/brand/01.png" alt="">
                            <p>凯旋门酒店服务据点</p>
                        </div>
                    </div>
                </div>
                <p>
                    「凯旋门」为澳门首间汇集豪华住宅、酒店、商场及娱乐场于一身的物业项目，建筑楼高56层，以古罗马及维多利亚式作为建筑风格，并设有潮州楼，丰粥面等诸多明星食府。娱乐场位于首两层，致力为宾客带来全方位的极致享受。
                </p>
                <div class="pla_c  pla_b">
                    <div class="txt">
                        <div class="top">
                            <img src="../img3_0/brand/02.png" alt="">
                            <p>金沙广东尊贵服务据点</p>
                        </div>
                    </div>
                    <div class="img">
                        <img src="../img3_0/brand/ser-img-1(1).png" alt="">
                        <div class="bg"></div>
                    </div>
                </div>
                <p>
                    于2004年开幕的澳门金沙是世界级的酒店及综合娱乐度假胜地，拥有289间豪华套房。在闪耀夺目的金色外墙内，澳门金沙提供包罗万有的选择，由特色餐厅、室外恒温泳池、豪华水疗及美容中心、会议及宴会设施、各式博彩娱乐，以及精彩绝伦的现场表演节目。澳门金沙还设有专门接待国际特邀贵宾的御匾会，提供51间特大华丽套房，设计时尚型格，为追求生活品味的宾客提供最贴身周到的服务。
                </p>
            </div>
        </div>
        <div class="vip">
            <div class="wrapper">
                <div class="title_common">
                    <div class="title">
                        <img src="../img3_0/brand/title-icon.png" alt="">
                        <h2>贵宾会</h2>
                        <img src="../img3_0/brand/title-icon.png" alt="">
                    </div>
                    <h3>VIP CLUB</h3>
                </div>
                <ul>
                    <li v-for="(item,index) in vipList" :key="index">
                        <ul>
                            <li>
                                <img src="../img3_0/brand/title-l.png" alt="" class="arr-l arr">
                                {{item.txt1}}
                                <img src="../img3_0/brand/title-r.png" alt="" class="arr-r arr">
                            </li>
                            <li>{{item.txt2}}</li>
                            <li>{{item.txt3}}</li>
                            <li>
                                {{item.txt4}}
                                <span v-if="!!item.txt5">{{item.txt5}}</span>
                            </li>
                            <li></li>
                        </ul>
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
            vipList:[
                {
                    txt1:'MGM 广东会厅 ',
                    txt2:'美高梅娱乐场2楼11号厅',
                    txt3:'厅房数目: 2间  ·  厅会总枱数目: 10张 ',
                    txt4:'+853 6260 0007 ',
                    txt5:'+853 2878 5495（传真）'
                },
                {
                    txt1:'MGM 广东8号会',
                    txt2:'美高梅娱乐场2楼50号厅',
                    txt3:'厅房数目: 8间  ·  厅会总枱数目: 18张',
                    txt4:'+853 6260 0088',
                },
                {
                    txt1:'永利广东贵宾会',
                    txt2:'永利中场（区域13）扑克区侧及永利会餐厅内',
                    txt3:'厅房数目: 6间  ·  厅会总枱数目: 16张 ',
                    txt4:'+853 6260 0003',
                    txt5:'+853 2878 6670（传真）'
                },
                {
                    txt1:'金沙广东贵宾会',
                    txt2:'金沙娱乐场3楼',
                    txt3:'厅房数目: 1间  ·  厅会总枱数目: 9张 ',
                    txt4:'+853 6260 0002',
                    txt5:'+853 2875 7988（传真）'
                },
                {
                    txt1:'星际广东贵宾会',
                    txt2:'星际娱乐场12楼',
                    txt3:'厅房数目: 5间  ·  厅会总枱数目: 11张 ',
                    txt4:'+853 6260 0004',
                    txt5:'+853 2884 8484（传真）'
                },
                {
                    txt1:'新葡京广东贵宾会',
                    txt2:'新葡京酒店U2层',
                    txt3:'厅房数目: 4间  ·  厅会总枱数目: 9张 ',
                    txt4:'+853 6260 0001',
                    txt5:'+853 2838 8822（传真）'
                },
                {
                    txt1:'威尼斯人广东贵宾会',
                    txt2:'威尼斯人御匾会810厅',
                    txt3:'厅房数目: 4间  ·  厅会总枱数目: 11张 ',
                    txt4:'+853 6260 0006',
                    txt5:'+853 2822 6833（传真）'
                },
                {
                    txt1:'新濠广东贵宾会',
                    txt2:'新濠天地皇冠2楼金沙江厅',
                    txt3:'厅房数目: 4间  ·  厅会总枱数目: 10张 ',
                    txt4:'+853 6260 0010',
                },
                {
                    txt1:'银河广东贵宾会',
                    txt2:'银河渡假城西翼贵宾入口地下',
                    txt3:'厅房数目: 5间  ·  厅会总枱数目: 13张 ',
                    txt4:'+853 6260 0008',
                },
                {
                    txt1:'永利皇宫广东贵宾会',
                    txt2:'凼仔永利皇宫北翼二楼',
                    txt3:'厅房数目: 7间  ·  厅会总枱数目: 15张 ',
                    txt4:'+853 6260 0022',
                },
                {
                    txt1:'巴黎人广东贵宾会',
                    txt2:'凼仔巴黎人御匾会3楼',
                    txt3:'厅房数目: 5间  ·  厅会总枱数目: 9张 ',
                    txt4:'+853 6260 0066',
                },
                {
                    txt1:'凯旋门贵宾厅',
                    txt2:'凯旋门娱乐场一楼',
                    txt3:'厅房数目: 6间  ·  厅会总枱数目: 16张 ',
                    txt4:'+853 6260 0033',
                },
                {
                    txt1:'菲律宾广东AG贵宾会',
                    txt2:'菲律宾马尼拉晨丽渡假村2楼',
                    txt3:'厅会总枱数目: 13张',
                    txt4:'+63 2883 3888',
                    txt5:'澳门热线: +853 6260 0006'
                },
                {
                    txt1:'菲律宾广东星宝贵宾会',
                    txt2:'马尼拉COD皇冠酒店第二幢地面层',
                    txt3:'赌枱数目: 8张',
                    txt4:'澳门热线: +853 6260 0006'
                },
                {
                    txt1:'蓝鼎利陞广东贵宾会',
                    txt2:'韩国济州特别自治道西归浦市安德面神话历史路304支路38号',
                    txt3:'厅会总枱数目: 8张',
                    txt4:'澳门热线: +853 6311 1180'
                },
            ],
            title:'品牌'
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
        padding-bottom:1.17333rem;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        .top{
            position:relative;
            img{
                position:relative;
                z-index: 1;
                width:100%;
            }
            .wrapper{
                position: absolute;
                left:50%;
                top:30px;
                transform:translateX(-50%);
                z-index:2;
                .logo{
                    position:absolute;
                    top:0;
                    left:50%;
                    transform:translateX(-50%);
                    width:199px;
                }
            }
        }
        .about{
            background-image:url('../img3_0/brand/about-bg.png');
            background-repeat: no-repeat;
            background-size:100% auto;
            background-position:top center;
            padding:80px 0 0;
            margin-top:-60px;
            .wrapper{
                display:flex;
                justify-content: space-between;
                align-items: flex-end;
                .about_l{
                    flex:1;
                    padding-bottom:48px;
                    h3{
                        font-size:18px;
                        color:#B27B3D;
                        text-align:left;
                        margin:0;
                        padding-left:5px;
                    }
                    .title{
                        display:flex;
                        justify-content: flex-start;
                        align-items:center;
                        font-size:36px;
                        color:#B27B3D;
                        font-weight: bold;
                        img{
                            width:40px;
                            margin-right:5px;
                        }
                    }
                    .line{
                        width:100%;
                        height:1px;
                        background:#B27B3D;
                        margin:46px 0;
                    }
                    p{
                        font-size:0.28rem;
                        line-height:0.38rem;
                        color:#666;
                        text-align:left;
                    }
                }
                .about_r{
                    .bt{
                        text-align:center;
                        font-size:0.48rem;
                        color:#BD8D56;
                        margin-top:105px;
                        margin-bottom:38px;
                        img{
                            width:22px;
                            margin-right:13px;
                        }
                    }
                    img{
                        width:359px;
                    }
                }
            }
        }
        .title_common{
            text-align:center;
            .title{
                display:flex;
                justify-content: center;
                align-items: center;
                margin-bottom:10px;
                img{
                    width:40px;
                }
                h2{
                    font-size:36px;
                    font-weight: bold;
                    margin:5px;
                    color:#E4A966;
                }
            }
            h3{
                font-size:18px;
                color:#E4A966;
                text-align:center;
                font-weight: bold;
                font-family: 'newfont';
            }
        }
        .ser{
            background-image:url('../img3_0/brand/high-bg.png');
            background-repeat: no-repeat;
            background-size:cover;
            background-position:center;
            padding:91px 0 112px;
            .wrapper{
                p{
                    font-size:20px;
                    line-height:36px;
                    color:#fff;
                    margin:30px 0 45px;
                    text-align: center;
                }
                ul{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    li{
                        width:49%;
                        margin-right:2%;
                        margin-bottom: 45px;
                        &:nth-child(2n){
                            margin-right: 0;
                        }
                        img{
                            width:100%;
                        }
                        p{
                            font-size:18px;
                            color:#fff;
                            margin:31px 0 0;
                            text-align:center;
                        }
                    }
                }
            }
        }
        .pla{
            padding:80px 0 124px;
            .wrapper{
                padding:0;
            }
            .title_common{
                margin-bottom:76px;
            }
            p{
                font-size:0.28rem;
                line-height:0.48rem;
                color:#666;
                text-align:left;
                margin:53px 0.4rem 67px;
            }
            .pla_c{
                display:flex;
                justify-content: space-between;
                align-items:center;
                padding-right: 0.4rem;
                .img{
                    position:relative;
                    margin-right:70px;
                    flex-shrink: 0;
                    img{
                        position:relative;
                        z-index: 2;
                        height:310px;
                        margin-left:-190px;
                    }
                    .bg{
                        position:absolute;
                        bottom:-15px;
                        left:0;
                        z-index: 1;
                        width:375px;
                        height:100%;
                        background:#C1A05F;
                    }
                }
                .txt{
                    display:flex;
                    justify-content:center;
                    align-items: flex-end;
                    flex-direction: column;
                    .top{
                        position:relative;
                        margin-bottom:30px;
                        img{
                            width:241px;
                        }
                        p{
                            position:absolute;
                            top:50%;
                            right:0;
                            transform:translateY(-50%);
                            z-index:2;
                            font-size:0.32rem;
                            white-space: nowrap;
                            color:#B37B3C;
                            text-align:left;
                            font-weight: bold;
                            margin:0;
                        }
                    }
                }

                &.pla_b{
                    padding-left:0.4rem;
                    padding-right:0;
                    .img{
                        margin-right:0;
                        margin-left:70px;
                        img{
                            margin-right:-180px;
                            margin-left:0;
                        }
                        .bg{
                            width:370px;
                            bottom:-15px;
                            right:0;
                            left:auto;
                        }
                    }
                    .txt{
                        align-items:flex-start;
                        .top{
                            img{
                                width:281px;
                            }
                            p{
                                left:0;
                            }
                        }
                    }
                }
            }
        }
        .vip{
            background-image:url('../img3_0/brand/vip-bg.png');
            background-repeat: no-repeat;
            background-size:100% auto;
            background-position:bottom;
            background-color:#0F375C;
            padding:95px 0 80px;
            .wrapper{
                .title_common{
                    margin-bottom:81px;
                }
                >ul{
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                    flex-wrap: wrap;
                    >li{
                        width:100%;
                        margin-bottom:16px;
                        &:nth-child(3n){
                            margin-right:0;
                            border-right:none;
                        }
                        ul{
                            li{
                                display:flex;
                                justify-content: center;
                                align-items:center;
                                text-align:center;
                                .arr{
                                    width:11px;
                                    margin-right:21px;
                                }
                                .arr-r{
                                    margin-left:21px;
                                    margin-right:0;
                                }
                                .circle{
                                    width:5px;
                                    display:block;
                                    margin:3px;
                                    margin-right:24px;
                                }
                                margin-bottom:5px;
                                &:first-child{
                                    margin-bottom:13px;
                                }
                                &:nth-child(1){
                                    font-size:28px;
                                    color:#E5A965;
                                }
                                &:nth-child(2){
                                    font-size:24px;
                                    color:#FEFEFE;
                                }
                                &:nth-child(3){
                                    font-size:24px;
                                    color:#FEFEFE;
                                }
                                &:nth-child(4){
                                    font-size:24px;
                                    color:#F3B56F;
                                    span{
                                        margin-left:20px;
                                    }
                                }
                                &:nth-child(5){
                                    width:64px;
                                    height:2px;
                                    background:#AD8B62;
                                    margin:16px auto 0;
                                }
                            }
                        }
                        &:last-child{
                            ul{
                                li{
                                    &:nth-child(2){
                                        align-items: flex-start;
                                        text-align:left;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
        }
        .footer{
            width:100%;
            height:92px;
            background:#B37B3C;
            text-align: center;
            img{
                width:109px;
                margin-top:-24px;
            }
        }
    }
</style>