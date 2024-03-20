# 快速上手

### 介绍

通过本章节你可以了解到 ycq-comp-design 的安装方法和基本使用姿势。

## 安装

### 通过 npm 安装

在现有项目中使用 Vant 时，可以通过 `npm` 进行安装：

```bash
# Vue 3 项目，安装最新版 ycq-comp-design
npm i ycq-comp-design
```

当然，你也可以通过 `yarn`、`pnpm` 或 `bun` 进行安装：

```bash
# 通过 yarn 安装
yarn add ycq-comp-design

# 通过 pnpm 安装
pnpm add ycq-comp-design

# 通过 Bun 安装
bun add ycq-comp-design
```

### 在新项目中使用

如果你需要新建一个项目，我们推荐使用 [Rsbuild](https://github.com/web-infra-dev/rsbuild)，[Vite](https://cn.vitejs.dev/) 或 [Nuxt 框架](https://nuxt.com)。

### 通过 CDN 安装

参考vant官方CDN安装方式

## 引入组件

### 方法一. 常规用法

全局注册：

```js
import { createApp } from 'vue';
// 1. 引入你需要的组件
import { Button } from 'ycq-comp-design';
// 2. 引入组件样式
import 'ycq-comp-design/lib/index.css';

const app = createApp();

// 3. 注册你需要的组件
app.use(Button);
```

ycq-comp-design 支持多种组件注册方式，除了在 app 上全局注册组件，你也可以选择其他的方式，比如局部注册。

局部注册：
```js
import { DemoButton } from 'ycq-comp-design'
export default {
  name: 'HelloWorld',
  components: {
    'demo-button': DemoButton
  },
}
```

> 提示：因为ycq-comp-design是基于Vant二次开发，而Vant 默认支持 Tree Shaking，因此你不需要配置任何插件，通过 Tree Shaking 即可移除不需要的 JS 代码，但 CSS 样式无法通过这种方式优化，如果需要按需引入 CSS 样式，请参考vant官方安装方式。

#### 3. 使用组件

完成以上两步，就可以直接在模板中使用 Vant 组件了，`unplugin-vue-components` 会解析模板并自动注册对应的组件, `@vant/auto-import-resolver` 会自动引入对应的组件样式。

```html
<template>
  <demo-button type="primary" />
</template>
```

#### 4. 引入函数组件的样式

Vant 中有个别组件是以函数的形式提供的，包括 `Toast`，`Dialog`，`Notify` 和 `ImagePreview` 组件。在使用函数组件时，`unplugin-vue-components` 无法解析自动注册组件，导致 `@vant/auto-import-resolver` 无法解析样式，因此需要手动引入样式。

```js
// demo-button
import { DemoButton } from 'vant';
import 'ycq-comp-design/es/demo-button/style';
```

你可以在项目的入口文件或公共模块中引入以上组件的样式，这样在业务代码中使用组件时，便不再需要重复引入样式了。

#### 使用提示

- 请避免同时使用「全量引入」和「按需引入」这两种引入方式，否则会导致代码重复、样式错乱等问题。
- 在使用过程中，如果你遇到组件不能导入的问题，因为 unplugin-vue-components 并不是 Vant 官方维护的插件，所以建议到 [unplugin/unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) 仓库下反馈。
- 当 `unplugin-vue-components` 的版本号 >= 0.26.0 时，对于 `webpack`、`vue-cli` 和 `rspack`，你需要使用 `ComponentsPlugin.default` 进行注册。
- `@vant/auto-import-resolver` 提供了一些配置项，请参考 [README 文档](https://github.com/youzan/vant/tree/main/packages/vant-auto-import-resolver) 来了解更多。
- 如果是样式不生效的相关问题，你可以在 Vant 仓库下反馈。

## 在框架中使用

参考vant官方文档