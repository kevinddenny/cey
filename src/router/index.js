import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import('../views/HotelView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/TourismNews.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/wild',
    name: 'wild',
    component: () => import('../views/WildLife.vue')
  },
  {
    path: '/beach',
    name: 'beach',
    component: () => import('../views/BeachView.vue')
  },
  {
    path: '/heritage',
    name: 'heritage',
    component: () => import('../views/HeritageView.vue')
  },
  {
    path: '/pilgrim',
    name: 'pilgrim',
    component: () => import('../views/PilgrimView.vue')
  },
  {
    path: '/scenic',
    name: 'scenic',
    component: () => import('../views/ScenicView.vue')
  },
  {
    path: '/adventure',
    name: 'adventure',
    component: () => import('../views/AdventureView.vue')
  },
  {
    path: '/relax',
    name: 'relax',
    component: () => import('../views/RelaxationView.vue')
  },
  {
    path: '/cultural',
    name: 'cultural',
    component: () => import('../views/CulturalView.vue')
  },
  {
    path: '/botanical',
    name: 'botanical',
    component: () => import('../views/BotanicalView.vue')
  },
  {
    path: '/offer',
    name: 'offer',
    component: () => import('../views/OfferView.vue')
  },
  {
    path: '/RegHotel',
    name: 'RegHotel',
    component: () => import('../views/RegistrationHotel.vue')
  },
  {
    path: '/RegTourist',
    name: 'RegTourist',
    component: () => import('../views/RegistrationTourist.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
