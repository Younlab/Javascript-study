import Vue from 'vue'
import App from './App.vue'
import NavHeader from './components/NavHeader.vue';
import GlobalComponent from './components/GlobalComponent.vue'

Vue.component('nav-header', NavHeader);
Vue.component('global-component', GlobalComponent);
new Vue({
  el: '#app',
  render: h => h(App)
})
