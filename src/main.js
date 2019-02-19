import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 * Font awesome icons we will be using. Only include what you need to reduce the bundle size
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faBook, faChevronCircleRight, faAmbulance, faMapMarkerAlt, faCommentAlt} from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faBook, faChevronCircleRight, faAmbulance, faMapMarkerAlt, faClock, faCommentAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
