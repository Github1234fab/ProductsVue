import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import CardComponent from "../components/CardComponent.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView
    },
    {
      path: '/Card',
      name: 'card',
      component: CardComponent
    },
    {
      path: '/productView',
      name: 'productView',
      component: ProductView,
      props: (route) => ({
        filteredProducts: route.query.filteredProducts ? JSON.parse(route.query.filteredProducts) : []
      })
    }
  ]
})

export default router
