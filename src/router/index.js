import { createRouter, createWebHistory } from 'vue-router';
import AllCards from '@/views/AllCards.vue';
import CardDetails from '@/views/CardDetails.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'RouteHome',
    component: AllCards
  },
  {
    path: '/cartes/:cardNum',
    name: 'RouteCardDetails',
    props: true,
    component: CardDetails
  },
  {
    path: '/a-propos',
    name: 'RouteAbout',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
];

const scrollBehavior = to => {
  // console.log('scrollTop', document.documentElement.scrollTop);
  // console.log('scrollBehavior', { to, from, savedPosition });

  if (to.hash) {
    // console.log(`scroll to hash of ${to.hash}`);
    return {
      el: to.hash
    };
  }

  if (to.name === 'RouteCardDetails') {
    // console.log(`scroll to top of ${to.path}`);
    return {
      top: 0
    };
  }
  // console.log(`no scroll`);
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
});

export default router;
