export default {
  name: 'ycq-comp-design',
  build: {
    css: {
      preprocessor: 'less',
      // base: 'style/global.less' //全局样式文件的路径，可以为相对路径或绝对路径，相对路径基于src目录计算
    },
    site: {
      publicPath: '/ycq-comp-design/',//===vite的build.outDir配置，部署的域名所展示的子路径
    },
    define: {
      'process.env': {}
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '/src'
        }
      ]
    },
    namedExport: false, // true=通过export * from 'xxx'导出组件内部所有模块、类型定义；false=export default from 'xxx'导出组件内部的默认模块
    configureVite(config) {//自定义vite配置，可以通过process.env.BUILD_TARGET对构建目标进行区分
      // const { BUILD_TARGET } = process.env; 
      // if(BUILD_TARGET === 'package'){}
      // if(BUILD_TARGET === 'site'){}
      // config.server.port = 3000;
      // config = {
      //   resolve: {
      //     alias: [
      //       {
      //         find: '@',
      //         replacement: path.resolve('src')
      //       }
      //     ]
      //   },
      // }

      return config;
    }
  },
  site: {
    title: 'ycq-comp-design',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    defaultLang: 'zh-CN',
    darkModeClass: 'van-theme-dark',
    lightModeClass: 'van-theme-light',
    versions: [
      {
        label: 'v1',
        link: 'https://www.baidu.com'
      }
    ],
    links: [
      {
        logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/weapp.svg',
        url: 'https://vant-contrib.gitee.io/vant-weapp/',
      },
      {
        logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/github.svg',
        url: 'https://github.com/vant-ui/vant',
      },
    ],
    headHtml: `<script>
    if (location.host === 'youzan.github.io') {
    location.href = location.href.replace('youzan.github.io', 'vant-ui.github.io');
    }
    </script>
    `,
    enableVConsole: true,
    locales: {
      'zh-CN': {
        title: 'ycq-comp-design',
        subtitle: '（适用于 Vue 3）',
        description: '轻量、可定制的移动端组件库',
        logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        langLabel: '中',
        links: [
          {
            logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/weapp.svg',
            url: 'https://vant-contrib.gitee.io/vant-weapp/',
          },
          {
            logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/github.svg',
            url: 'https://github.com/vant-ui/vant',
          },
        ],
        nav: [
          {
            title: '开发指南',
            items: [
              {
                path: 'home',
                title: '介绍',
              },
              {
                path: 'quickstart',
                title: '快速上手',
                hideSimulator: false, //是否隐藏当前右侧的手机模拟器（默认不隐藏）
              },
              {
                path: 'updatelog',
                title: '更新日志',
              },
            ],
          },
          {
            title: '基础组件',
            items: [
              {
                path: 'demo-button',
                title: 'DemoButton 按钮',
              },
            ],
          },
        ],
      },
      'en-US': {

      }
    },
    
    
  },
};
