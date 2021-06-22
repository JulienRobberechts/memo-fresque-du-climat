import { createRouter, createWebHistory } from 'vue-router';
import { noScroll, scrollToCard, scrollToTop, scrollToHash } from './scroll';
import { isLinkToCardDetail, isLinkBackToCardList } from './nav';
import RouterView from '@/components/site/RouterView';

import { loadLanguage, DEFAULT_LOCALE } from '@/i18n';
import langs from '@/data/langs.json';
const langsArray = langs.map((lang) => lang.code);

export const routes = [
  {
    path: '',
    name: 'RouteHome',
    props: true,
    redirect: (to) => {
      const lang = to.params.lang ? to.params.lang : DEFAULT_LOCALE;
      return `/${lang}/game/grid`;
    },
  },
  {
    path: 'game/:view',
    name: 'RouteGame',
    props: true,
    component: () =>
      import(/* webpackChunkName: "AllCards" */ '../views/AllCards.vue'),
  },
  {
    path: 'cards/:cardNum',
    name: 'RouteCardDetails',
    props: true,
    component: () =>
      import(/* webpackChunkName: "CardDetails" */ '../views/CardDetails.vue'),
  },
  {
    path: 'canvas/circle-quiz',
    name: 'Canvas',
    props: true,
    component: () =>
      import(/* webpackChunkName: "Canvas" */ '../views/Canvas.vue'),
  },
  {
    path: 'about',
    name: 'RouteAbout',
    component: () =>
      import(/* webpackChunkName: "About" */ '../views/About.vue'),
  },
  {
    path: ':pathMatch(.*)*',
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

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      name: 'main',
      path: '/:lang?/',
      component: RouterView,
      beforeEnter(to, from, next) {
        const newPath = to.path.replace(/\/\//g, '/');
        if (newPath !== to.path) {
          next({ path: newPath });
          return;
        }
        const lang = to.params.lang;
        if (!langsArray.includes(lang)) {
          next({ path: '/' + DEFAULT_LOCALE + newPath });
          return;
        }
        loadLanguage(lang);
        next();
        return;
      },
      children: routes,
    },
  ],
  scrollBehavior,
});

router.beforeEach((to, from, next) => {
  if (to.params.lang !== from.params.lang) loadLanguage(to.params.lang);
  next();
});
