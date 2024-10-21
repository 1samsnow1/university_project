import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import productDetail from '../views/productDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/productDetail/:id',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/products',
      name : 'products',
      component: () => import('../views/products.vue')
    }
  ]
})

export default router
