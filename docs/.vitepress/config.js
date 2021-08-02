module.exports = {
    title: "vitePress Demo",// 网站标题
    description: 'Demo', //网站描述
    base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
    lang: 'CN', //语言
    repo: 'zhizhu-video/vitepress',
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
          repo: 'https://github.com/zhizhu-video/vitepress',
          // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
          // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
          repoLabel: 'github',      
          // 以下为可选的编辑链接选项      
          // 假如你的文档仓库和项目本身不在一个仓库：
          docsRepo: 'https://github.com/zhizhu-video/vitepress',
          // 假如文档不是放在仓库的根目录下：
          docsDir: 'docs',
          // 假如文档放在一个特定的分支下：
          docsBranch: 'main',          
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