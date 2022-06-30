import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/index.scss';
import RouterTab from 'vue-router-tab';
import 'vue-router-tab/dist/lib/vue-router-tab.css';

Vue.use(ElementUI);
Vue.use(RouterTab);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
