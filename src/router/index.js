import { createRouter, createWebHistory } from 'vue-router';
import Tasks from '../views/Tasks.vue';
import Task from '../views/Task.vue';
import New from '../views/New.vue';

const routes = [
    {
        path: '/',
        name: 'Tasks',
        component: Tasks,
    },
    {
        path: '/new',
        name: 'New',
        component: New,
    },
    {
        path: '/task/:id',
        name: 'Task',
        component: () => import(/* webpackChunkName: "task" */ '../views/Task.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
