import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
