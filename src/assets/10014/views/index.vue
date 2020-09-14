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
            <img src="../img3_0/brand/top_01.png" alt="" class="img1">
            <img src="../img3_0/brand/top_02.png" alt="" class="img2">
            <div class="wrapper">
                <div class="titleCommon">
                    <h2>01</h2>
                    <h3>SUN CITY GROUP</h3>
                    <div class="title">
                        <img src="../img3_0/brand/icon_title.png" alt="">
                        <h2>关于太阳城集团 </h2>
                        <img src="../img3_0/brand/icon_title.png" alt="">
                    </div>
                    <h4>GROUP PROFILE</h4>
                </div>
                <div class="desc">
                    <p>

                        太阳城集团始创于2007年。成立之初，集团主力为客户提供尊贵娱乐服务，随着业务急速发展，太阳城集团的足迹已遍及澳门众多星级酒店及度假村，更先后进驻马尼拉、首尔、仁川、金边、岘港等大城市，迈向国际！<br><br>

                        一直以来，太阳城集团坚守「多元创新，积极进取」的精神，全力开拓高端娱乐及相关产品服务，并设立全球首屈一指的尊贵会籍，为会员一站式打造极致娱乐、旅游、餐饮、购物及影视享受。时至今日，我们的业务已日趋多元化，服务范畴遍及各行各业，全力打造涵盖寰宇旅游、影视娱乐、度假村管理、顶级餐饮及奢华购物等领域的一站式综合娱乐平台。<br><br>

                        太阳城集团扎根澳门，锐意发展国际化娱乐业务，开拓更广阔市场。未来，我们将会创建更多元化的高端娱乐服务，吸纳更多尊贵会员，决心将业务扩展至全球每个角落，在国际舞台绽放耀眼光芒！
                                                    
                    </p>
                    <!-- <img src="../img3_0/brand/pho_jianjie.png" alt=""> -->
                </div>
                <ul class="list1">
                    <li>
                        <img src="../img3_0/brand/jianjie_aomen_pic.png" alt="">
                        <div class="li_l">
                            <p>
                                <span>18</span>间贵宾会
                            </p>
                            <p>
                                <span>1</span>间扑克王俱乐部
                            </p>
                        </div>
                        <div class="li_r">澳门</div>
                    </li>
                    <li>
                        <img src="../img3_0/brand/jianjie_hanguo_pic.png" alt="">
                        <div class="li_l">
                            <p>
                                <span>2</span>间贵宾会
                            </p>
                        </div>
                        <div class="li_r">韩国</div>
                    </li>
                    <li>
                        <img src="../img3_0/brand/jianjie_flb_pic.png" alt="">
                        <div class="li_l">
                            <p>
                                <span>7</span>间贵宾会
                            </p>
                            <p>
                                <span>1</span>间扑克王俱乐部
                            </p>
                        </div>
                        <div class="li_r">菲律宾</div>
                    </li>
                </ul>
                <ul class="list2">
                    <ul class="list1">
                        <li>
                            <img src="../img3_0/brand/jianjie_jbz_pic.png" alt="">
                            <div class="li_l">
                                <p>
                                    <span class="span1">1</span>
                                    <span class="span2">间</span>贵宾会
                                </p>
                            </div>
                            <div class="li_r">越南岘港</div>
                        </li>
                        <li>
                            <img src="../img3_0/brand/jianjie_jpz_pic.png" alt="">
                            <div class="li_l">
                                <p>
                                    <span class="span1">1</span>
                                    <span class="span2">间</span>贵宾会
                                </p>
                            </div>
                            <div class="li_r">柬埔寨</div>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
        <div class="user">
            <div class="wrapper">
                <div class="titleCommon">
                    <h2>02</h2>
                    <h3>SUN CITY GROUP</h3>
                    <div class="title">
                        <img src="../img3_0/brand/icon_title.png" alt="">
                        <h2>行政总裁的话 </h2>
                        <img src="../img3_0/brand/icon_title.png" alt="">
                    </div>
                    <h4>CEO'S WORDS</h4>
                </div>
                <div class="imgBox">
                    <img src="../img3_0/brand/ceo_pic.png" alt="" class="userImg">
                    <div class="desc">
                        <h2>行政总裁的话</h2>
                        <p class="p1">周焯华</p>
                        <p class="p2">太阳城集团行政总裁兼董事</p>
                    </div>
                </div>
                <h2>秉持本份 沉着应对各种挑战</h2>
                <p>
                    转眼间，太阳城集团迈向第13个年头，由一家初生之犊的普通企业，现今成为亚太区享负盛名的综合娱乐帝国，种种成果得
                    来不易。宏观2019年的全球及澳门经济状况，四方八面充满着挑战。在各种因素之下集团仍能披荆斩棘，稳步向前，站稳澳门娱乐业界之巅峰，成为本地经济支柱不可或缺的板块，全赖多年建立的企业根基作强大后盾。 工欲善其事，必先利其器。集团一直坚持追求卓越，力臻完美，更取得骄人成果。在2019年内荣获「亚洲娱乐大奖」等企业奖项；庆幸再有两家太阳城会荣获SGS QualiCert™ 颁发「7星级服务认证」；旗下太阳餐饮获得ISO 9001及HACCP国际标准认证殊荣。来年
                    我们戮力将挑战变成机遇，荣耀转化为动力，鼎力巩固业界领先地位。                   
                </p>
                <h2>精益求精 优化个人娱乐体验</h2>
                <p>
                      随着业务多元发展，2019年初太阳城集团全面革新会籍制度并创立「尊华会」。同年底为了优化客户尊贵体验，决定将「尊华会」隆重升级，把企业资源有效运用，提供更全面的综合贵宾娱乐服务。未来亦会继续将会籍功能发挥至最大效果，将不可能的化为可能，吸引更多潜在客户，为集团带来更丰厚的盈利。 集团旗下太阳旅游于去年推出了手机应用程式，提供多元、全天候的旅游贴心服务。环游世界豪华便捷，随心而行，出入境毋需顾虑，由专人设计别出心裁的深度旅游体验。来年计划推出更多独特旅游产品，打破时地限制，缔造难忘旅程。
                </p>
                <div class="titleCommon titleSpec">
                    <h2>03</h2>
                    <h3>SUN CITY GROUP</h3>
                    <div class="title">
                        <img src="../img3_0/brand/icon_title.png" alt="">
                        <h2>使命及願景 </h2>
                        <img src="../img3_0/brand/icon_title.png" alt="">
                    </div>
                    <h4>MISSION AND VISION</h4>
                </div>
                <h3>使命</h3>
                <p class="p2">
                    我們致力為客戶提供一站式的旅遊享受體驗並成為領先的酒店及度假村管理諮詢服務的提供者。
                </p>
                <h3>願景</h3>
                <p class="p2">
                    以“多元創新，積極進取”的理念，我們致力為客戶提供世界不同地點的多元化娛樂和旅遊體驗。
                </p>
            </div>
            <img src="../img3_0/brand/top_04.png" alt="">
        </div>
        <div class="groupBuss">
            <div class="wrapper">
                <div class="titleCommon">
                    <h2>04</h2>
                    <h3>SUN CITY GROUP</h3>
                    <div class="title">
                        <img src="../img3_0/brand/icon_title.png" alt="">
                        <h2>业务总类 </h2>
                        <img src="../img3_0/brand/icon_title.png" alt="">
                    </div>
                    <h4>BUSINESS CATEGORY</h4>
                </div>
                <ul class="list1">
                    <li>
                        <img src="../img3_0/brand/yewu_guibin_pic.png" alt="">
                        <div class="txt">
                            <p>贵宾服务</p>
                            <p>VIP service</p>
                        </div>
                    </li>
                    <li>
                        <img src="../img3_0/brand/yewu_yule_pic.png" alt="">
                        <div class="txt">
                            <p>影视娱乐</p>
                            <p>Film and television entertainment</p>
                        </div>
                    </li>
                    <li>
                        <img src="../img3_0/brand/yewu_canyin_pic.png" alt="">
                        <div class="txt">
                            <p>餐饮体验</p>
                            <p>Dining experience</p>
                        </div>
                    </li>
                    <li>
                        <img src="../img3_0/brand/yewu_dujia_pic.png" alt="">
                        <div class="txt">
                            <p>度假管理</p>
                            <p>Vacation management</p>
                        </div>
                    </li>
                    <li>
                        <img src="../img3_0/brand/yewu_huanqiu_pic.png" alt="">
                        <div class="txt">
                            <p>环球旅游</p>
                            <p>global tour</p>
                        </div>
                    </li>
                    <li>
                        <img src="../img3_0/brand/yewu_sechi_pic.png" alt="">
                        <div class="txt">
                            <p>奢华购物</p>
                            <p>Luxury shopping</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="banner2">
            <img src="../img3_0/brand/banner-2.png" alt="">
            <div class="wrapper">
                <p class="p1">
                    太阳城贵宾会除了致力发展澳门本地博彩业务<br>
                    更在海外设立多个贵宾会
                </p>
                <p class="p2">让客人随时随地享受到最刺激精彩的娱乐体验！</p>
            </div>
        </div>
        <div class="profess">
            <div class="wrapper">
                <div class="titleCommon">
                    <h2>05</h2>
                    <h3>SUN CITY GROUP</h3>
                    <div class="title">
                        <img src="../img3_0/brand/icon_title.png" alt="">
                        <h2>专业认证 </h2>
                        <img src="../img3_0/brand/icon_title.png" alt="">
                    </div>
                    <h4>GROUP BUSINESS</h4>
                </div>
                <ul>
                    <li><img src="../img3_0/brand/renzhen_pic-01.png" alt=""></li>
                    <li><img src="../img3_0/brand/renzhen_pic-02.png" alt=""></li>
                    <li><img src="../img3_0/brand/renzhen_pic-03.png" alt=""></li>
                </ul>
                <p>
                     太阳城集团一直以服务为本，精益求精，其中贴心和安全便捷的服务可谓不可或缺。集团除了在服务方面开创业界先河，在2013以及2018年先后通过全球最具权威性的质量验证组织SGS Qualicert™ 的国际服务认证以及更高级别的SGS Qualicert™「7星级服务认证」。在资讯安全方面同样通过ISO/IEC 27001：2013资讯保安管理国际标准认证，代表集团能够有效保护商业资讯安全，减低来自外来威胁的风险。
                </p>
            </div>
            <img src="../img3_0/brand/top_08.png" alt="">
        </div>
        <div class="pla">
            <div class="wrapper">
                <div class="titleCommon">
                    <h2>06</h2>
                    <h3>SUN CITY GROUP</h3>
                    <div class="title">
                        <img src="../img3_0/brand/icon_title.png" alt="">
                        <h2>贵宾厅分布 </h2>
                        <img src="../img3_0/brand/icon_title.png" alt="">
                    </div>
                    <h4>VIP ROOM DISTRIBUTION</h4>
                </div>
                <ul class="list">
                    <li v-for="(item,index) in plaList" :key="index">
                        <ul>
                            <li>
                                <img src="../img3_0/brand/address_icon.png" alt="">
                                <p v-html="item.name"></p>
                            </li>
                            <li v-if="!!item.address">
                                <div class="circle" v-if="item.address!==' '"></div>
                                <p v-html="item.address"></p>
                            </li>
                            <li v-if="!!item.tel1">
                                <div class="circle"></div>
                                <p>账房电话: <span v-html="item.tel1"></span></p>
                            </li>
                            <li v-if="!!item.tel2">
                                <div class="circle"></div>
                                <p>服务部电话: <span v-html="item.tel2"></span></p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bus">
            <div class="wrapper">
                <h2>集团业务</h2>
                <ul>
                    <li><img src="../img3_0/brand/logo1.png" alt=""></li>
                    <li><img src="../img3_0/brand/logo2.png" alt=""></li>
                    <li><img src="../img3_0/brand/logo3.png" alt=""></li>
                    <li><img src="../img3_0/brand/logo4.png" alt=""></li>
                    <li><img src="../img3_0/brand/logo5.png" alt=""></li>
                </ul>
                <img src="../img3_0/brand/address_gefu.png" alt="" class="serve">
                <p class="p1">24小时客户服务热线</p>
                <p class="p_com">中国内地 : +86 153 4488 6600   |   中国澳门 : +853 8891 1000</p>
                <div class="address">
                    <img src="../img3_0/brand/address_icon2.png" alt="">
                </div>
                <p class="p_com">澳门宋玉生广场263号中土大厦12楼N至P座<br>CS.MO@SUNCITY-GROUP.COM</p>
            </div>
        </div>
        <div class="footer">© 2020太阳城集团有限公司版权所有 </div>
    </div>  
</template>
<script>
import Vtabbar from "@/components/v-tabbar"
export default {
    data(){
        return {
            plaList:[
                {
                    name:'星际太阳城贵宾会',
                    address:'澳门友谊大马路星际酒店5楼',
                    tel1:'+853 8891 1668',
                    tel2:'+853 8891 1671'
                },
                {
                    name:'新葡京百家太阳城贵宾会',
                    address:'澳门新葡京娱乐场3楼贵宾区',
                    tel1:'+853 8891 1388',
                    tel2:'+853 8891 1390'
                },
                {
                    name:'美高梅太阳城贵宾会',
                    address:'澳门孙逸仙大马路澳门美高梅娱乐 场2楼1号贵宾厅',
                    tel1:'+853 8891 1688',
                    tel2:'+853 8891 1689'
                },
                {
                    name:'美高梅金星太阳城贵宾会',
                    address:'澳门孙逸仙大马路澳门美高梅娱乐<br>场2楼20-28号贵宾厅',
                    tel1:'+853 8891 1882',
                    tel2:'+853 8891 1880'
                },
                {
                    name:'凯旋门励扬太阳城贵宾会',
                    address:'澳门新口岸皇朝区城市日大马路<br>278号2楼',
                    tel1:'+853 8891 1128',
                    tel2:'+853 8891 1126'
                },
                {
                    name:'永利皇宫太阳城贵宾会',
                    address:'澳门体育馆大马路永利皇宫1楼第<br>41区',
                    tel1:'+853 8891 1968',
                    tel2:'+853 8891 1966'
                },
                {
                    name:'永利吉利太阳城贵宾会',
                    address:'澳门外港填海区仙德丽街永利娱乐<br>场第三期',
                    tel1:'+853 8891 1322'
                },
                {
                    name:'永利太阳城贵宾会',
                    address:'澳门外港填海区仙德丽街永利娱乐<br>场第一期',
                    tel1:'+853 8891 1682',
                    tel2:'+853 8891 1680'
                },
                {
                    name:'新濠天地金星太阳城贵宾会',
                    address:'澳门路凼连贯公路新濠天地皇冠度<br>假酒店2楼',
                    tel1:'+853 8891 1233',
                    tel2:'+853 2882 1230'
                },
                {
                    name:'银河太阳城贵宾会',
                    address:'「澳门银河™」综合渡假城东翼入<br>口M楼',
                    tel1:'+853 8891 1998',
                    tel2:'+853 8891 1996'
                },
                {
                    name:'银河金星太阳城贵宾会',
                    address:'「澳门银河™｣综合渡假城,西翼贵宾<br>会2楼',
                    tel1:'+853 8891 1866',
                    tel2:'+853 8891 1680'
                },
                {
                    name:'四季太阳城贵宾会',
                    address:'澳门凼仔望德圣母湾大马路四季酒<br>店百利宫4楼',
                    tel1:'+853 8891 1822',
                    tel2:'+853 8891 1820'
                },
                {
                    name:'威尼斯人太阳城贵宾会',
                    address:'澳门路凼金光大道威尼斯人度假村御<br>匾会828室',
                    tel1:'+853 8891 1833',
                    tel2:'+853 8891 1831'
                },
                {
                    name:'金沙城太阳城贵宾会',
                    address:'澳门路凼连贯公路金沙城中心御匾<br>会930室',
                    tel1:'+853 8891 1888',
                    tel2:'+853 8891 1886'
                },
                {
                    name:'新濠锋太阳城贵宾会',
                    address:'澳门凼仔广东大马路澳门新濠锋娱乐<br>场8楼',
                    tel1:'+853 8891 1088',
                    tel2:'+853 8891 1089'
                },
                {
                    name:'澳门巴黎人太阳城贵宾会',
                    address:'澳门路金光大道连贯公路巴黎人御匾<br>会三楼PIT896',
                    tel1:'+853 8891 1188',
                    tel2:'+853 8891 1190'
                },
                {
                    name:'威尼斯人扑克王俱乐部',
                    address:'澳门威尼斯人度假村酒店 澳门望德<br>圣母湾大马路路凼金光大道',
                    tel1:'+853 8891 1983',
                    tel2:'+853 2833 5500'
                },
                {
                    name:'澳门新濠影汇太阳城贵宾会',
                    address:'澳门路凼连贯公路新濠影汇巨星汇 2楼',
                    tel1:'+853 8891 1838',
                    tel2:'+853 8891 1837'
                },
                {
                    name:'马尼拉晨丽扑克王俱乐部(菲律宾)',
                    address:'Solaire Resort and Casino 1 Asean<br>Avenue Entertainment City Tambo<br>Paranaque City1701 Philippines',
                    tel1:'+632 2991880',
                    tel2:'+632 5484878'
                },
                {
                    name:'墨尔本皇冠太阳城贵宾会(澳洲)',
                    address:'8 Whiteman Street Southbank VIC<br>3006 Suncity c/o Crown Melbourne<br>Ltd., Melbourne, Australia',
                    tel1:'+61 431 360 457',
                    tel2:'+61 402 530 025<br>+61 422 100'
                },
                {
                    name:'卡卡湾度假村太阳城贵宾会(菲律宾)',
                    address:'Dugo-San Vicente Rd, Brgy. San<br>Vicente, Santa Ana, Cagayan,<br>Philippines',
                    tel1:' +63 977 1889370'
                },
                {
                    name:'马尼拉晨丽太阳城贵宾会(菲律宾)',
                    address:'3/F, VIP Room 11, Solaire Resort and<br>Casino, 1 Asean Avenue Entertainment<br>City Tambo Paranaque City 1701, Philippines',
                    tel1:'+63 2299 1388',
                    tel2:'+63 2299 1133'
                },
                {
                    name:'马尼拉晨丽东方太阳城贵宾会(菲律宾)',
                    address:'3/F, VIP Room 6, Solaire Resort and<br>Casino, 1 Asean Avenue Entertainment<br>City Tambo Paranaque City 1701, <br>Philippines',
                    tel1:'+63 2299 1888'
                },
                {
                    name:'马尼拉新濠天地金星太阳城贵宾会 (菲律宾)',
                    address:'Tower 1 City of Dreams Manila, <br>Asean Ave. Cnr Roxas Blvd. <br>Entertainment City PARANAQUE<br>#1701, BGY TAMBO. Manila',
                    tel1:'+63 2299 1288'
                },
                {
                    name:'马尼拉新濠天地东方太阳城贵宾会 (菲律宾)',
                    address:'Tower 1 City of Dreams Manila, Asean<br>Ave.Cnr Roxas Blvd. Entertainment City <br>PARANAQUE #1701,BGY TAMBO.Manila',
                    tel1:'+63 2299 1188'
                },
                {
                    name:'马尼拉索菲特太阳城娱乐场(菲律宾)',
                    address:'1/F, Sofitel Philippine Plaza Manila, <br>CCP Complex, Roxas Boulevard,<br>Pasay City 1300 NCR, Philippines',
                    tel1:'+63 2299 1366'
                },
                {
                    name:'岘港皇冠假日世纪幸运星太阳城贵 宾会(越南)',
                    address:'越南县港市，五行山郡美溪坊武元<br>甲路8号',
                    tel1:'+84 0126 788 0880'
                },
                {
                    name:'华克山庄太阳城贵宾会(韩国)',
                    address:' ',
                    tel1:'+82 2457 1777',
                    tel2:'+82 234378033'
                },
            ],
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
        src: url('../../font/DIN Condensed Bold.woff.ttf');
    }
    @font-face {
        font-family: 'newfont1';
        src: url('../../font/PingFang Medium.otf');
    }
    .wrapper{
        width:100%;
        padding:0 23px;
    }
    .brand{
        padding-top:@height-nav-bar;
        padding-bottom:@height-nav-bar;
        /deep/ .van-nav-bar{
            z-index:999 !important;
        }
        .banner{
            position:relative;
            z-index: 3;
            img{
                width:100%;
            }
        }
        .titleCommon{
            text-align:center;
            h2{
                font-size:76px;
                color:#665C65;
                margin:0 0 12px;
                font-weight: bold;
                font-family: 'newfont';
                line-height:36px;
            }
            h3{
                font-size:7px;
                color:#41363F;
                margin:0 0 65px;
                font-family: 'newfont1';
            }
            .title{
                display:flex;
                justify-content: center;
                align-items:center;
                img{
                    width:35.5px;
                    &:nth-child(1){
                        margin-right:16px;
                    }
                    &:nth-child(3){
                        margin-left:16px;
                    }
                }
                h2{
                    font-size:52px;
                    color:#FFF9B3;
                    font-weight: bold;
                    margin:0;
                }
            }
            h4{
                font-size:30px;
                color:#746973;
                margin:17px 0 90px;
                font-family: 'newfont1';
                font-weight: 500;
            }
        }
        .about{
            position:relative;
            // background-image: url('../img3_0/brand/top_01.png');
            // background-repeat:no-repeat;
            // background-size:cover;
            // background-position:center;
            background-color:#1E0F1D;
            padding:376px 0 122px;
            margin-top:-274px;
            .img1{
                position: absolute;
                top:224px;
                left:0;
                z-index: 0;
                width:100%;
            }
            .img2{
                position: absolute;
                bottom:0;
                left:0;
                z-index: 0;
                width:100%;
            }
            .wrapper{
                position:relative;
                z-index: 1;
                .desc{
                    display:flex;
                    justify-content: space-between;
                    align-items:flex-start;
                    margin-bottom:121px;
                    p{
                        font-size:24px;
                        line-height:48px;
                        color:#FFF0FF;
                        text-align:center;
                    }
                    img{
                        width:100%;
                        margin-left:64px;
                        flex-shrink: 0;
                    }
                }
                .list1{
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                    margin-bottom:30px;
                    li{
                        position:relative;
                        width:30%;
                        margin-right:5%;
                        >img{
                            width:100%;
                        }
                        &:last-child{
                            margin-right:0;
                        }
                        .li_l{
                            position:absolute;
                            left:50%;
                            bottom:29px;
                            transform:translateX(-50%);
                            p{
                                font-size:24px;
                                line-height:36px;
                                text-align:center;
                                color:#FFF0FF;
                                white-space: nowrap;
                                span{
                                    font-size:36px;
                                    color:#FFF9B3;
                                }
                            }
                        }
                        .li_r{
                            position:absolute;
                            right:15px;
                            top:22px;
                            font-size:28px;
                            color:#FFF9B3;
                        }
                    }
                }
                .list2{
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                    li{
                        position:relative;
                        width:47.5%;
                        margin-right:5%;
                        &:last-child{
                            margin-right:0;
                        }
                        .li_l{
                            position:absolute;
                            left:28px;
                            bottom:18px;
                            transform:translateX(0);
                            p{
                                font-size:24px;
                                line-height:36px;
                                color:#FFF0FF;
                                text-align:left;
                                .span1{
                                    font-size:32px;
                                    color:#FFF9B3;
                                }
                                .span2{
                                    font-size:24px;
                                    color:#FFF9B3;
                                }
                            }
                        }
                        .li_r{
                            position:absolute;
                            right:30px;
                            top:21px;
                            font-size:28px;
                            color:#FFF9B3;
                        }
                    }
                }
            }
        }
        .user{
            background-image: url('../img3_0/brand/top_03.png');
            background-size:contain;
            padding-top:95px;
            padding-bottom:67px;
            .wrapper{
                position:relative;
                z-index: 1;
                .imgBox{
                    position:relative;
                    margin-bottom:81px;
                    .userImg{
                        width:100%;
                    }
                    .desc{
                        position:absolute;
                        bottom:97px;
                        left:52px;
                        text-align:left;
                        h2{
                            font-size:52px;
                            color:#FFF9B3;
                            margin:0 0 65px;
                        }
                        .p1{
                            font-size:40px;
                            color:#fff;
                            margin:0 0 11px;
                        }
                        .p2{
                            font-size:24px;
                            color:#fff;
                        }
                    }
                }
                >h2{
                    font-size:40px;
                    color:#FFF9B3;
                    margin-bottom:39px;
                    text-align:left;
                }
                >p{
                    font-size:24px;
                    line-height: 38px;
                    color:#FFF0FF;
                    margin-bottom:103px;
                    text-align:left;
                }
                .titleSpec{
                    margin-top:64px;
                    margin-bottom:77px;
                }
                >h3{
                    font-size:40px;
                    color:#FFF9B3;
                    margin-bottom:30px;
                    text-align:center;
                }
                >.p2{
                    font-size:24px;
                    color:#FFF0FF;
                    text-align:center;
                }
            }
            >img{
                position:relative;
                z-index: 0;
                width:100%;
                display: block;
            }
        }
        .groupBuss{
            padding:284px 0 89px;
            margin-top:-152px;
            background-image: url('../img3_0/brand/top_06.png');
            background-repeat:no-repeat;
            background-size:100% auto;
            background-position:center top;
            background-color:#1A0D17;
            .wrapper{
                .list1{
                    margin:96px 0 37px;
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                    flex-wrap:wrap;
                    li{
                        position:relative;
                        width:33.33%;
                        img{
                            width:100%;
                        }
                        .txt{
                            position:absolute;
                            left:19px;
                            bottom:18px;
                            p{
                                color:#fff;
                                text-align:left;
                                &:first-child{
                                    font-size:32px;
                                    margin-bottom:15px;
                                }
                                &:last-child{
                                    font-size:12px;
                                    white-space: nowrap;
                                }
                            }
                        }
                    }
                }
                .list2{
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                    li{
                        position:relative;
                        width:50%;
                        img{
                            width:100%;
                        }
                        .txt{
                            position:absolute;
                            left:42px;
                            bottom:18px;
                            p{
                                color:#fff;
                                text-align:left;
                                &:first-child{
                                    font-size:32px;
                                    margin-bottom:15px;
                                }
                                &:last-child{
                                    font-size:16px;
                                }
                            }
                        }
                    }
                }
            }
        }
        .banner2{
            position:relative;
            >img{
                width:100%;
            }
            .wrapper{
                position: absolute;
                top:50%;
                left:50%;
                transform:translateX(-50%) translateY(-50%);
                p{
                    text-align:center;
                }
                .p1{
                    font-size:32px;
                    line-height:54px;
                    color:#FFF0FF;
                    margin-bottom:31px;
                    font-weight: bold;
                }
                .p2{
                    font-size:24px;
                    color:#FFF0FF;
                }
            }
        }
        .profess{
            padding-top:126px;
            background:#1A0D17;
            .wrapper{
                position:relative;
                z-index: 1;
                ul{
                    display:flex;
                    justify-content: space-between;
                    align-items:center;
                    margin:113px 0 70px;
                    li{
                        width:32%;
                        height:195px;
                        margin-right:2%;
                        display:flex;
                        justify-content: center;
                        align-items:center;
                        background:#280E46;
                        border-radius: 20px;
                        &:last-child{
                            margin-right:0;
                        }
                        &:nth-child(1){
                            img{
                                width:142px;
                            }
                        }
                        &:nth-child(2){
                            img{
                                width:104px;
                            }
                        }
                        &:nth-child(3){
                            img{
                                width:187px;
                            }
                        }
                    }
                }
                >p{
                    font-size:24px;
                    line-height:42px;
                    color:#fff;
                    text-align:left;
                }
            }
            >img{
                position:relative;
                z-index: 0;
                width:100%;
                margin-top:-200px;
            }
        }
        .pla{
            background-image: url('../img3_0/brand/top_09.png');
            background-size:contain;
            padding:191px 0 123px;
            margin-top:-62px;
            .list{
                margin-top:131px;
                display:flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-wrap: wrap;
                >li{
                    width:49%;
                    margin-right:2%;
                    margin-bottom:54px;
                    &:nth-child(2n){
                        margin-right:0;
                    }
                    ul{
                        li{
                            display:flex;
                            justify-content: flex-start;
                            align-items: flex-start;
                            img{
                                width:18px;
                                margin-right:17px;
                            }
                            .circle{
                                width:10px;
                                height:10px;
                                flex-shrink: 0;
                                background:#fff;
                                margin:4px;
                                margin-right:21px;
                                margin-top:8px;
                                border-radius: 50%;
                            }
                            p{
                                font-size:20px;
                                line-height:26px;
                                color:#E9E9E9;
                                text-align:left;
                                display:flex;
                                justify-content: flex-start;
                                align-items:flex-start;
                                >span{
                                    display:inline-block;
                                    font-size:26px;
                                    color:#FFF9B3;
                                    margin-left:10px;
                                }
                            }
                            &:nth-child(1){
                                margin-bottom:12px;
                                p{
                                    color:#D6D096;
                                }
                            }
                            &:nth-child(2){
                                margin-bottom:33px;
                            }
                            &:nth-child(3){
                                margin-bottom:16px;
                                .circle{
                                    margin-top:10px;
                                }
                                p{
                                    white-space: nowrap;
                                }
                            }
                            &:nth-child(4){
                                .circle{
                                    margin-top:10px;
                                }
                                p{
                                    white-space: nowrap;
                                }
                            }
                        }
                    }
                }
            }
        }
        .bus{
            background-image: url('../img3_0/brand/top_10.png');
            background-repeat:no-repeat;
            background-size:100% auto;
            background-position:center bottom;
            background-color:#281239;
            padding:61px 0 30px;
            h2{
                font-size:28px;
                color:#FFF9B3;
                text-align:center;
                font-weight: bold;
            }
            ul{
                display:flex;
                justify-content: space-between;
                align-items:center;
                margin:54px 0 120px;
                li{
                    &:nth-child(1){
                        img{
                            width:112px;
                        }
                    }
                    &:nth-child(2){
                        img{
                            width:122px;
                        }
                    }
                    &:nth-child(3){
                        img{
                            width:126px;
                        }
                    }
                    &:nth-child(4){
                        img{
                            width:115px;
                        }
                    }
                    &:nth-child(5){
                        img{
                            width:110px;
                        }
                    }
                }
            }
            .serve{
                width:30px;
                display:block;
                margin:0 auto 40px;
            }
            p{
                text-align:center;
            }
            .p1{
                font-size:28px;
                color:rgba(255, 240, 255, 0.4);
                margin:0 0 28px;
            }
            .p_com{
                font-size:24px;
                line-height:37px;
                color:#FFF0FF;
                margin-bottom:67px;
            }
            .address{
                width:50px;
                height:50px;
                background:#230F33;
                display:flex;
                justify-content: center;
                align-items:center;
                margin:0 auto 25px;
                border-radius: 50%;
                img{
                    width:23px;
                }
            }
        }
        .footer{
            padding:58px;
            text-align:center;
            font-size:28px;
            color:rgba(255, 240, 255, 0.3);
            background:#220E31;
        }
    }
</style>