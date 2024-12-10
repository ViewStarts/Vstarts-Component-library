import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/lijun',
      name: 'Lijun',
      component: () => import('@/views/LiJun.vue'),
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/views/Test.vue'),
    },
  ],
})

export default router
