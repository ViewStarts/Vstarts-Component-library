import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/lijun',
      name: 'lijun',
      component: () => import('../views/lijun.vue'),
    },
  ],
})

export default router
