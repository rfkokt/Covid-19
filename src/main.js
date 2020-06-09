import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from "bootstrap-vue"
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import vuetify from './plugins/vuetify';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
// import Chartkick from "vue-chartkick";
// import Chart from 'chart.js'
import { faSpinner, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const moment = require('moment')
require('moment/locale/id')

library.add(faSpinner,faPlay)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false
// Vue.use(Chartkick.use(Chart))
Vue.use(VueMaterial);
Vue.use(BootstrapVue);
Vue.use(require('vue-moment'), {
  moment
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
