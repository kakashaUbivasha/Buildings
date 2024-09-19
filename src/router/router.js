import {createRouter, createWebHistory} from "vue-router";
import Home from "../pages/Home.vue"
import dubaiInvesting from "../pages/dubaiInvesting.vue";
import buildings from "../pages/buildings.vue";
import buildingsPage from "../pages/buildingsPage.vue";
import gallery from "../pages/gallery.vue";
import allRewies from "../pages/allRewies.vue";
import blogsPage from "../pages/blogsPage.vue";
import searchResult from "../pages/searchResult.vue";
import buyingPage from "../pages/services/buyingPage.vue";
import rentAnPage from "../pages/services/rentAnPage.vue";
import rentOutPage from "../pages/services/rentOutPage.vue";
import sellPage from "../pages/services/sellPage.vue";
import evaluatePage from "../pages/services/evaluatePage.vue";
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/investing-in-dubai',
        name: 'dubai',
        component: dubaiInvesting
    },
    {
        path: '/buildings',
        name: 'buildings',
        component: buildings

    },
    {
      path: '/buildings-page',
      name: 'buildings-page',
      component: buildingsPage
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: gallery
    },
    {
        path: '/all-rewies',
        name: 'all-rewies',
        component: allRewies
    },
    {
        path: '/blog',
        name: 'blog',
        component: blogsPage
    },
    {
        path: '/search',
        name: 'search-results',
        component: searchResult
    },
    {
        path: '/buying',
        name: 'buying',
        component: buyingPage
    },
    {
        path: '/rent-an',
        name: 'rent-an',
        component: rentAnPage
    },
    {
        path: '/sell',
        name: 'sell',
        component: sellPage
    },
    {
        path: '/rent-out',
        name: 'rent-out',
        component: rentOutPage
    },
    {
        path: '/evaluate',
        name: 'evaluate',
        component: evaluatePage
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
})

export default router