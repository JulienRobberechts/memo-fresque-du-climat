import { createRouter, createWebHistory } from 'vue-router';
import CarteList from '@/views/CarteList.vue';
import CarteDetails from '@/views/CarteDetails.vue';
import APropos from '@/views/APropos.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'RouteAccueil',
    component: CarteList
  },
  {
    path: '/cartes/:id',
    name: 'RouteCarteDetails',
    props: true,
    component: CarteDetails
  },
  {
    path: '/apropos',
    name: 'RouteAPropos',
    component: APropos
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
