import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import FeaturesTitle from './FeaturesTitle.vue';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-before': () => h(FeaturesTitle)
    });
  }
}
