const langs = require('./src/data/langs.json');
const nbCards = require('./src/data/fr/cards-fr.json').length;
const path = require('path');

const SitemapPlugin = require('sitemap-webpack-plugin').default;
const PrerenderSPAPlugin = require('@dreysolano/prerender-spa-plugin');

const withoutLang = [
  { path: '/' },
  { path: '/game/grid' },
  { path: '/game/list' },
  { path: '/game/view' },
  { path: '/collages' },
  // { path: '/canvas/circle-quiz' },
  { path: '/about' },
];

for (let k = 1; k <= nbCards; ++k) {
  withoutLang.push({ path: '/cards/' + k });
}

let paths = [];

for (const lang of langs) {
  paths = paths.concat(
    withoutLang.map((path) => {
      return { path: '/' + lang.code + path.path };
    })
  );
}

const publicPath = process.env.NODE_ENV === 'production' ? '/memo/' : '/';
module.exports = {
  publicPath,
  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: 'https://fresqueduclimat.org/' + publicPath,
        paths: paths,
        options: {
          filename: 'sitemap.xml',
          lastmod: true,
        },
      }),
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        headless: true,
        onlyProduction: true,
        maxConcurrentRoutes: 8,
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true,
        },
        routes: paths.map((path) => path.path),
        postProcess(renderedRoute) {
          console.log(renderedRoute);
          // Ignore any redirects.
          renderedRoute.route = renderedRoute.originalRoute;
          // Remove /index.html from the output path if the dir name ends with a .html file extension.
          // For example: /dist/dir/special.html/index.html -> /dist/dir/special.html
          if (renderedRoute.route.endsWith('.html')) {
            renderedRoute.outputPath = path.join(
              __dirname,
              'dist',
              renderedRoute.route
            );
          }
          return renderedRoute;
        },
      }),
    ],
  },
};
