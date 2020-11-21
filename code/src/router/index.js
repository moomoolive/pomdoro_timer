import Vue from 'vue'
import VueRouter from 'vue-router'

import selection from '../views/selection.vue'
import timer from '../views/timer.vue'

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
        component: timer
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router