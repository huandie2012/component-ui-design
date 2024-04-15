// packages/components/title/index.ts
import Title from './title.vue';

Title.install = (app) => {
  app.component(Title.name, Title);
};
export const baseTitle = Title;
export default Title;
