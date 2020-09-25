import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import navigationColumn from '../components/NavigationColumn.vue'
import musicPlayer from '../components/MusicPlayer.vue'
import Search from '../components/SearchText.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/navigation',
    name: 'navigationColumn',
    component: navigationColumn
  },
  {
    path:'/player',
    name: 'musicPlayer',
    component: musicPlayer
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
