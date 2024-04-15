import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import navbar from './config/navbar'
import sidebar from './config/sidebar'
// import { demoblockPlugin } from 'vuepress-plugin-demoblock-plus'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
// const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
import { path } from '@vuepress/utils'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '组件库',
  description: '基于 vuepress 的组件库文档',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
      rel: 'icon',
      href: '/img/logo.png'
    }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  theme: defaultTheme({
    logo: '/img/logo.png',
    navbar,
    sidebar,
    // sidebarDepth: 2 //侧边栏显示2级
  }),
  base: '/demo/',
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
    [ 'vuepress-plugin-demoblock-plus' ]
  ]
  // plugins: [
  //   registerComponentsPlugin({
  //     componentsDir: path.resolve(__dirname, '../../packages'), // 需要自动引入的组件所在的文件夹
  //     componentsPatterns:['**/*.vue'], // 组件格式为.vue结尾的文件
  //     // 注册组件的名称，这里因人而异，我在注册组件时，都统一加了`base`前缀，
  //     getComponentName:(filename) =>{
  //       let compName = filename.split('/')[0].toLowerCase()
  //       compName = compName.charAt(0).toUpperCase() + compName.slice(1)
  //       return `base${compName}`
  //     }
  //   })
  // ]
  // plugins: [
  //   demoblockPlugin({
  //     // locales,
  //     customClass: 'demoblock-custom',
  //     theme: 'github-light',
  //     // cssPreprocessor: 'scss',
  //     customStyleTagName: 'style lang="scss"', // style标签会解析为<style lang="scss"><style>
  //     scriptReplaces: [
  //       {
  //         searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
  //         replaceValue: 'const { defineComponent: _defineComponent } = Vue',
  //       }
  //     ],
  //   }),
  // ],
})
