import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') },
  { path: '/woodtotems/:id', name: 'Woodtotems', component: () => import('@/views/WoodtotemView.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
