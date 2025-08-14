import { createRouter, createWebHistory } from 'vue-router'
import AddTasksView from '@/views/AddTasksView.vue'
import EditTasksView from '@/views/EditTasksView.vue'
import ListTasksView from '@/views/ListTasksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: ListTasksView,
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
