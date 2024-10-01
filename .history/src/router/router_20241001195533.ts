import { createRouter, createWebHistory } from 'vue-router'
// import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Woodtotem from '@/pages/Woodtotem.vue';
import 1 from '@/pages/woodtotems/1.vue';
import 2 from '@/pages/woodtotems/2.vue';
import 3 from '@/pages/woodtotems/3.vue';

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/woodtotem', name: 'Woodtotem', component: Woodtotem},
  {path: '/woodtotems/1', name: 'Woodtotems', component: 1},
  {path: '/woodtotems/2', name: 'Woodtotems', component: 2},
  {path: '/woodtotems/3', name: 'Woodtotems', component: 3},
]

export const router = createRouter({
  history: createWebHistory(),
  routes, 
})

// This will update routes at runtime without reloading the page
// if (import.meta.hot) { 
//   handleHotUpdate(router) 
// } 