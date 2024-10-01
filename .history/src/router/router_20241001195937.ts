import { createRouter, createWebHistory } from 'vue-router'
// import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Woodtotem from '@/pages/Woodtotem.vue';


const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/woodtotem', name: 'Woodtotem', component: Woodtotem},
]

export const router = createRouter({
  history: createWebHistory(),
  routes, 
})

// This will update routes at runtime without reloading the page
// if (import.meta.hot) { 
//   handleHotUpdate(router) 
// } 