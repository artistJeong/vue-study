import { createRouter, createWebHashHistory } from 'vue-router'
import BoardList from './components/BoardList.vue';
import BoardWrite from './components/BoardWrite.vue';

const routes: any[] = [
    { path: '/', component: BoardList },
    { path: '/write', component: BoardWrite },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;