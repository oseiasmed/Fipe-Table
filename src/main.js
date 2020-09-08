import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import './plugins/axios'
import '../src/assets/css/main.css'
import './plugins/bootstrap-vue'
import MarkTable from './components/MarkTable'
import TemplateTable from './components/TemplateTable'
import router from './router'
import store from "./store/store"

Vue.component('MarkTable',MarkTable)
Vue.component('TemplateTable',TemplateTable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
