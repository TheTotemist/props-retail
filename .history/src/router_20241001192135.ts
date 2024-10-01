import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Woodtotem from '@/pages/Woodtotem.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes, 
})

// This will update routes at runtime without reloading the page
if (import.meta.hot) { 
  handleHotUpdate(router) 
} 