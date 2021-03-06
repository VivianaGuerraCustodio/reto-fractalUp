import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faPlayCircle,
  faStepForward,
  faStepBackward,
  faEllipsisV,
  faPlay,
  faVolumeOff
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import EventBus from '@/plugins/event-bus'
Vue.use(EventBus)

library.add(
  faSearch,
  faPlayCircle,
  faStepForward,
  faStepBackward,
  faEllipsisV,
  faPlay,
  faVolumeOff
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
