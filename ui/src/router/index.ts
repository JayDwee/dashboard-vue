import { createRouter, createWebHistory } from 'vue-router'
import AppView from '../views/AppView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppView,
      redirect: { name: 'dashboard' },
      children: [
        {
          name: 'dashboard',
          path: '',
          component: () => import('../views/DashboardView.vue'),
        },
        {
          name: 'recipes',
          path: 'recipes',
          component: () => import('../views/RecipesView.vue'),
        },
        {
          name: 'fridge',
          path: 'fridge',
          component: () => import('../views/FridgeView.vue'),
        },
        {
          name: 'plan',
          path: 'plan',
          component: () => import('../views/PlanView.vue'),
        },
        {
          name: 'list',
          path: 'list',
          component: () => import('../views/ListView.vue'),
        },
      ]
    }
  ]
})

export default router
