import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buttons from "../components/Buttons"
import Transitions from "../components/Transitions";
import OthersEleUI from "../components/OthersEleUI";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/buttons',
        name: 'Buttons',
        component: Buttons
    },
    {
        path: '/transitions',
        name: 'Transitions',
        component: Transitions
    },
    {
        path: '/othersEleUI',
        name: 'OthersEleUI',
        component: OthersEleUI
    }
]

const router = new VueRouter({
    routes
})

export default router
