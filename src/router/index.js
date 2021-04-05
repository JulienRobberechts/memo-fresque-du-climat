import { createRouter, createWebHistory } from 'vue-router';
import AllCards from '@/views/AllCards.vue';
import CardDetails from '@/views/CardDetails.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';
import { noScroll, scrollToCard, scrollToTop, scrollToHash } from './scroll';
import { isLinkToCardDetail, isLinkBackToCardList } from './nav';

const routes = [
  {
    path: '/',
    name: 'RouteHome',
    component: AllCards,
  },
  {
    path: '/cards/:cardNum',
    name: 'RouteCardDetails',
    props: true,
    component: CardDetails,
  },
  {
    path: '/about',
    name: 'RouteAbout',
    component: About,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];

const scrollBehavior = (to, from) => {
  if (to.hash === '#top') {
    return scrollToTop();
  }

  if (to.hash) {
    return scrollToHash(to.hash);
  }

  if (isLinkToCardDetail(to, from)) {
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
