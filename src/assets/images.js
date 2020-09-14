const imgs = {}
let requireImg = require.context(
  `./${process.env.VUE_APP_PROJECT_NAME + '/img3_0'}`, // 在当前目录下查找
  true, // 遍历子文件夹
  /\.(jpg|png|gif|svg|mp4)$/ // 正则匹配 以 结尾的文件
)

requireImg.keys().forEach(fileName => {
  let name = fileName.replace('./', '')
  // name = name.replace(/\//ig, "_");
  // name = name.replace(/\./ig, "_");
  name = name.substring(0, name.length - 4)
  // console.log(name, fileName)

  imgs[name] = requireImg(fileName)
})

let bImgs = {}
for (let i in imgs) {
  bImgs[i] = `url("${imgs[i]}")`
}
export default {
  imgs, bImgs
}
