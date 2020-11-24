import Vue from 'vue'
import VueRouter from 'vue-router'

import selection from '../views/selection.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name: 'selection page',
        component: selection
    },
    {
        path: '/timer',
        name: 'pomodoro timer',
        component: () => import(/* webpackPrefetch: true */ '../views/timer.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router