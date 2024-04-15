// navbar.js

module.exports = [{
	text: '组件',
	link: '/components/pages/InputNumber/'
},
{
	text: '文档', //text=>显示在导航栏上的文字信息
	children: [{
		text: '介绍',
		link: '/document/introduction/' //link=>路由地址显示的页面（类似于router中的component）会自动寻址到指定目录下的README.md，把它作为主入口显示出来。link字段也可以配置线上地址，点击后跳转到线上页面
	},
	{
		text: '注意事项',
		link: '/document/tips/'
	},
	]
},
{
	text: '工具箱',
	children: [{
		text: '在线编辑',
		children: [{
			text: '图片压缩',
			link: 'https://tinypng.com/'
		}, 
    {
      text: 'iconfont',
      link: 'https://www.iconfont.cn/'
    }]
	},
	{
		text: '在线服务',
		children: [{
			text: '阿里云',
			link: 'https://www.aliyun.com/'
		},
		{
			text: '腾讯云',
			link: 'https://cloud.tencent.com/'
		}]
	},
	{
		text: '博客指南',
		children: [{
			text: '掘金',
			link: 'https://juejin.im/'
		},
		{
			text: 'CSDN',
			link: 'https://blog.csdn.net/'
		}]
	}]
}]
  
  