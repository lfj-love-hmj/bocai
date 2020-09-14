### 新增UI 
复制一份 <br>
澳门系 复制 src/assets/10006 下的文件<br>
品牌系 复制 src/assets/chashao(暗色调) src/assets/chobet(亮色调) 下的文件

### 环境变量
VUE_APP_PROJECT_NAME = <br>
名称需和 目录名 文件相同

### 项目配置
src/utils/const.js <br>
key 与 VUE_APP_PROJECT_NAME 需一样 <br>
每个项目复制一份，根据需要修改value
```
chashao: {
    title:'叉烧电竞',
    default: false,
    name: 'esports',
    // 是否有X币功能
    hasXcoin: true,
    // 注册是否有step1 新手教程指引
    hasTutorailGuide: false,
    project: '叉烧电竞',
    secName: '叉烧电竞',
    domain: 'www.x06.com'
}
```


### 开发注意
1.不要修改.vue文件里面的样式变量,不要修改.vue文件里面的样式变量,不要修改.vue文件里面的样式变量(重要的事情说3遍),可以新增样式变量，如果新增样式变量使用到了.vue文件中，要保证每个项目都要有这个变量，否则可以不用<br>
2.需要更改里面的样式通过 @import 方式引入到.vue文件，样式文件统一写到每个项目的下的styles文件夹下，若新增，请保证每个项目都有这个文件<br>

