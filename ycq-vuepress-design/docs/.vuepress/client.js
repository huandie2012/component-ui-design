import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import { defineClientConfig } from '@vuepress/client';
import BaseTitle from '../../src/components/title';

export default defineClientConfig({
  enhance({ app }) {
    // 注册组件
    app.use(Antd);
    app.component('BaseTitle', BaseTitle); //这里注册组件之后，目的是为了在组件文档库中对组件进行引用，直接在 markdown 中使用组件
  }
});

// export default defineClientConfig({
//   enhance({ app, router, siteData }) {
//     app.use(Watth5UI)
//   },
//   setup() {},
//   rootComponents: [],
// })
