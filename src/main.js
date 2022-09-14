import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'animate.css';
import scrollanimation from './directives/scrollanimation'
import AOS from "aos"
import "aos/dist/aos.css"

Vue.directive('scrollanimattion',scrollanimation);



Vue.config.productionTip = false

import VueTyperPlugin from 'vue-typer'
Vue.use(VueTyperPlugin)

new Vue({
  router,
  vuetify,
  created(){
      AOS.init();
  },
  render: h => h(App)
}).$mount('#app')


