import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import { RouteNames } from './routes'
import HomePageEzhkovBaryshev from "@/components/pages/blogEzhkovBaryshev/pages/HomePageEzhkovBaryshev.vue";
import AddApartmentsCard from "@/components/pages/blogEzhkovBaryshev/pages/AddApartmentsCard.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/home_page_ezhkov_baryshev',
    name: RouteNames.HOMEPAGEEZHKOVBARYSHEV,
    component: HomePageEzhkovBaryshev
  },
  {
    path: '/home_page_ezhkov_baryshev/add',
    name: RouteNames.ADDAPARTMENTSCARD,
    component: AddApartmentsCard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
