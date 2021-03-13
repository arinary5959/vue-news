// import Vue from 'vue'
// import createRouter from 'vue-router'
import { createWebHistory, createRouter } from 'vue-router';
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView.js';
// console.log(NewsView)
// console.log(JobsView)
export const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            // path : url 정보
            // component: url주소로 갔을 때 UI(page)
            path:'/',
            redirect: '/news',
        },
        {
            path:'/news',
            name:'news',
            // component: createListView(NewsView),
            component: NewsView,
        },
        {
            path:'/ask',
            name:'ask',
            // component: createListView(AskView),
            component: AskView,
            // component: () => import('@/views/AskView'), // 컴포넌트 동적구현
        },
        {
            path:'/jobs',
            name:'jobs',
            // component: createListView(JobsView),
            component: JobsView,
            // component: () => import('@/views/JobsView'),
        },
        {
            path:'/user/:id',
            name:'user',
            component: UserView,
            // component: () => import('@/views/UserView'),
        },
        {
            path:'/item/:id',
            name:'item',
            component: ItemView,
            // component: () => import('@/views/ItemView'),
        },
    ]
});
// console.log(router)