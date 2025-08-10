import { createRouter, createWebHistory } from 'vue-router'
import AddTasksView from '@/views/AddTasksView.vue'
import EditTasksView from '@/views/EditTasksView.vue'

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
    {
      path: '/edit',
      name: 'edit-task',
      component: EditTasksView,
    },
  ],
})

export default router
