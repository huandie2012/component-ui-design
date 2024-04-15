// sidebar.js
// export default {
//     '/api/': getAPISidebar(),
//     '/components/': getComponentsSidebar(),
//     '/guide/': getGuideSidebar(),
//   }
  
//   function getComponentsSidebar() {
//     return [
//       {
//         isGroup: true,
//         text: '组件',
//         children: [
//           {
//             text: 'title 标题',
//             link: '/components/title.md',
//           },
//           {
//             text: 'Table',
//             link: '/components/table.md',
//           },
//           {
//             text: 'Pagination',
//             link: '/components/Pagination.md',
//           },
//         ],
//       },
//     ]
//   }
  
//   function getGuideSidebar() {
//     return [
//       {
//         isGroup: true,
//         text: '指南',
//         children: [
//           { text: '介绍', link: '/guide/intro.md' },
//           { text: '快速开始', link: '/guide/installation.md' },
//         ],
//       },
//       {
//         isGroup: true,
//         text: '教程',
//         children: [
//           { text: '教程1', link: '/guide/button.md' },
//           { text: '教程2', link: '/guide/modal.md' },
//         ],
//       },
//     ]
//   }
  
//   function getAPISidebar() {
//     return [{ text: 'API参考', link: '/api/index.md' }]
//   }
  
//   export default {
//     '/guide': [
//        {
//         text: '基础',
//         collapsible: false,
//         children: [
//           {
//             text: '设计',
//             link: '/guide/design'
//           }
//         ]
//       }
//     ],
//     '/components': [
//       {
//         text: 'Basic 基础组件',
//         collapsible: false,
//         children:[]
//       },
//       {
//         text: 'Form 表单组件',
//         collapsible: false,
//         children: [
//           {
//             text: 'Input 输入框',
//             link: '/components/input'
//           },
//           {
//             text: 'Select 选择器',
//             link: '/components/select'
//           }
//         ]
//       }
//     ]
//   },
//   sidebarDepth: 1


module.exports = {
  '/components/': require('../../components/sidebar.js'),
}
  