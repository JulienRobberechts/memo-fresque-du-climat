import { createRouter, createWebHistory } from 'vue-router';
import { noScroll, scrollToCard, scrollToTop, scrollToHash } from './scroll';
import { isLinkToCardDetail, isLinkBackToCardList } from './nav';

const routes = [
  {
    path: '/',
    name: 'RouteHome',
    redirect: '/game/network',
  },
  {
    path: '/game/:view',
    name: 'RouteGame',
    props: true,
    component: () =>
      import(/* webpackChunkName: "AllCards" */ '../views/AllCards.vue'),
  },
  {
    path: '/cards/:cardNum',
    name: 'RouteCardDetails',
    props: true,
    component: () =>
      import(/* webpackChunkName: "CardDetails" */ '../views/CardDetails.vue'),
  },
  {
    path: '/collages/:layoutName?',
    name: 'CollagesView',
    props: true,
    component: () =>
      import(/* webpackChunkName: "CollagesView" */ '../views/Collages.vue'),
  },
  {
    path: '/canvas/circle-quiz',
    name: 'Canvas',
    props: true,
    component: () =>
      import(/* webpackChunkName: "Canvas" */ '../views/Canvas.vue'),
  },
  {
    path: '/about',
    name: 'RouteAbout',
    component: () =>
      import(/* webpackChunkName: "About" */ '../views/About.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'RouteHome' },
  },
];

const scrollBehavior = (to, from) => {
  if (to.hash === '#top') {
    return scrollToTop();
  }

  if (to.hash) {
    return scrollToHash(to.hash);
  }

  if (isLinkToCardDetail(to)) {
    return scrollToTop();
  }

  if (isLinkBackToCardList(to, from)) {
    return scrollToCard(from.params.cardNum);
  }

  return noScroll;
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
});

export default router;
