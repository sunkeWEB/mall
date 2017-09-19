// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from  'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import layer from 'vue-layer'

Vue.config.productionTip = false;
Vue.prototype.$layer = layer(Vue);
/* eslint-disable no-new */
Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    loading: '/static/loading-svg/loading-bars.svg',
    attempt: 1
});
Vue.use(infiniteScroll)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
