# vitePress
## 创建项目
```js
mkdir vitepress-starter && cd vitepress-starter
```
## 初始化项目
```js
yarn init
```##  安装 `vitePress`
```js
yarn add --dev vitepress
```
## 创建一个docs页面
```js
mkdir docs 

echo '# Hello VitePress' > docs/index.md
（如果出现乱码，手动创建`index.md`文件）
```
## 在package.json文件添加配置
```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```
## 打开服务
```js
yarn docs:dev
```
# 其实上面的操作在vitePress官方网站 --> [vitePress](https://vitepress.vuejs.org/)

## 在Docs目录下创建一个目录 `.vitepress` 
```js
.vitepress
或用命令创建
mkdir .vitepress
```
## 在`.vitepress` 目录下创建 `config.js` 文件

## 在`config.js`文件中写入以下代码 本文件参数配置见官方地址 [vitepress->config.js](https://vitepress.vuejs.org/config/basics.html) 
``` js
module.exports = {
    title: "vitePress Demo",// 网站标题
    description: 'Demo', //网站描述
    base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
    lang: 'CN', //语言
    // repo: 'vuejs/vitepress',
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: 'img/logo.png',//图片放在public文件夹下
            },
        ],
    ],
    // 主题配置
    themeConfig: {
          // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
          repo: 'https://github.com/zhizhu-video/web',
          // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
          // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
          repoLabel: '查看源码',      
          // 以下为可选的编辑链接选项      
          // 假如你的文档仓库和项目本身不在一个仓库：
          docsRepo: 'https://github.com/zhizhu-video/web',
          // 假如文档不是放在仓库的根目录下：
          docsDir: 'docs',
          // 假如文档放在一个特定的分支下：
          docsBranch: 'master',          
          editLinks: true,
          editLinkText: '帮助我们改善此页面！',
       lastUpdated: '上次更新',
        logo: '/img/logo.png',
        //   头部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/pages/about/' },
            { text: '列表', 
            items:[
                { text: '关于1', link: '/pages/liebiao/1' },
                { text: '关于2', link: '/pages/liebiao/2' },
                { text: '外链百度', link: 'http://www.baidu.com/' }
            ]
    },
        ],
        //   侧边导航
            sidebar: {
            '/pages/': getpagesSidebar(),           
            '/': getpagesSidebar()
          }
    }
}
function getpagesSidebar() {
    return [
        {
            text:'华夏兵王',
            children:[              
             { text: '第一章', link: '/pages/one/' },
              { text: '第二章', link: '/pages/two/readme' }         
        ]
        },
        {
            text:'赘婿杨辰',
            children:[              
             { text: '简介', link: '/pages/zhuixu/' },
              { text: '第一章', link: '/pages/zhuixu/1' },
              { text: '第二章', link: '/pages/zhuixu/2' }  
        ]
        }
    ]
}
```

## vitepress 配置结束

::: tip
 最后说明一下 `yarn docs:build` 后生成的文件在 `.vitepress` 文件夹dist内
:::


# 最终配置完毕 打包
```
vitepress.zip
```
+ 直接下载源码 如下操作
```
`yarn`    -- 下载依赖

`yarn run docs:dev`   --  启动服务
```
+  <font color=Salmon>开始愉快之旅吧！</font>
# 部署到 github Pages 白票网站之旅
- 修改.github/workflows/deploy-gh_pages.yml文件
``` yml
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: vuepress-deploy
      uses: jenkey2011/vuepress-deploy@master
      env:
        ACCESS_TOKEN: ${{ secrets.AUTOPAGE }} # 自己的密匙
        TARGET_REPO: zhizhu-video/web    # 自己的仓库地址
        TARGET_BRANCH: gh-pages #这是github默认  你可以自己修改称自己的。但是在pages设置中需要修改
        BUILD_SCRIPT: yarn && yarn run docs:build
        BUILD_DIR: docs/.vitepress/dist/
        CNAME: https://vite.zhizhu.video  #这里修改成自己的 Custom domain
```
- 这里只是做个简单的介绍
# 部署 github pages and github Actions 详细说明
##  github pages 设置
1. 打开 pages 如图
- ![settings](public/setup.png)
- ![pages](public/pages.png)
- ![pages1](public/pages1.png)
- ![pages2](public/pages2.png)
2. 回到settings->pages->
- ![pages3](public/pages3.png)
- ![pages4](public/pages4.png)
- ![pages5](public/pages5.png)
3. 这里我们开始设置域名解析 根据自己的域名解析地址和我的不同
- ![cname](public/cname.png)
4. 回到settings->pages->
- ![pages6](public/pages6.png)
- ![pages7](public/pages7.png)
##  github Actions
1. 首先我们先创建一个 `ACCESS_TOKEN`
-  ![token](public/token.png)
-  ![token1](public/token1.png)
-  ![token2](public/token2.png)
-  ![token3](public/token3.png)
-  ![token4](public/token4.png)
-  ![token5](public/token5.png)
-  ![token6](public/token6.png)
2. 这个时候我们回到项目 Settings
-  ![token7](public/token7.png)
-  ![token8](public/token8.png)
-  ![token9](public/token9.png)
-  ![token10](public/token10.png)
3. 我们先 `clone https://github.com/zhizhu-video/vitepress.git ` 下来先
-  ![vite](public/vite.png)
-  ![vite](public/vite1.png)
-  ![vite](public/vite2.png)
-  ![vite](public/vite3.png)
-  ![vite](public/vite4.png)
-  ![vite](public/vite5.png)
-  ![vite](public/vite6.png)
-  ![vite](public/vite7.png)
-  ![vite](public/vite8.png)
-  ![vite](public/vite9.png)
4. 回到github desktop 准备白票( 其他推送的跳过这步 )
-  ![baipiao](public/baipiao.png)
-  ![baipiao](public/baipiao1.png)
-  ![baipiao](public/baipiao2.png)
-  ![baipiao](public/baipiao5.png)
-  ![baipiao](public/baipiao3.png)
-  ![baipiao](public/baipiao4.png)
-  ![baipiao](public/baipiao6.png)
-  ![baipiao](public/baipiao7.png)
# 结束
## vitepress + github pages + github actions 完成白票
  





