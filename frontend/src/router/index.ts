import { createRouter, createWebHistory } from 'vue-router'
import AddTasksView from '@/views/AddTasksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AddTasksView,
    },
    {
      path: '/add',
      name: 'add-task',
      component: AddTasksView,
    },
  ],
})

export default router
