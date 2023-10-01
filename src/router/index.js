import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      name: 'coaches',
      component: () => import('../pages/coaches/CoachesList.vue')
    },
    {
      path: '/coaches/:id',
      props: true,
      component: () => import('../pages/coaches/CoachDetail.vue'),
      children: [
        {
          path: 'contact',
          component: () => import('../pages/requests/ContactCoach.vue')
        }
      ]
    },
    {
      path: '/register',
      component: () => import('../pages/coaches/CoachRegister.vue')
    },
    {
      path: '/requests',
      component: () => import('../pages/requests/RequestsReceived.vue')
    },
    {
      path: '/:notFound(.*)',
      component: () => import('../pages/notFound/NotFound.vue')
    }
  ]
})

export default router
