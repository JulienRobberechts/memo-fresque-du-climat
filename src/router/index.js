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

const scrollBehavior = (to, from) => {
  // console.log('scrollTop', document.documentElement.scrollTop);
  // console.log('scrollBehavior', { to, from });

  // If there is a hash, scroll to hash
  if (to.hash) {
    // console.log(`scroll to to because of hash`);
    // Top is a special hash
    if (to.hash === '#top') {
      return {
        top: 0
      };
    }
    // console.log(`scroll to hash of ${to.hash}`);
    return {
      el: to.hash
    };
  }

  // on card Detail, scroll to top
  if (to.name === 'RouteCardDetails') {
    // console.log(`scroll to top of ${to.path}`);
    return {
      top: 0
    };
  }

  // on Come back to home, scroll to the card
  if (
    from.name === 'RouteCardDetails' &&
    to.name === 'RouteHome' &&
    from.params.cardNum
  ) {
    // console.log(`scroll to top of ${to.path}`);
    return {
      el: `#carte-${from.params.cardNum}`
    };
  }

  // console.log(`no scroll`);
  return null;
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
});

export default router;
