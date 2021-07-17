const langs = require('./src/data/langs.json');
const nbCards = require('./src/data/fr/cards-fr.json').length;
const path = require('path');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

const withoutLang = [
  { path: '/' },
  { path: '/game/grid' },
  { path: '/game/list' },
  { path: '/game/view' },
  { path: '/game/network' },
  { path: '/game/quiz' },
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

paths.push({ path: '/' });

const publicPath = process.env.NODE_ENV === 'production' ? '/memo' : '/';
const host =
  process.env.NODE_ENV === 'production' ? 'fresqueduclimat.org' : 'localhost';

module.exports = {
  devServer: {
    host,
  },
  publicPath,
  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: 'https://fresqueduclimat.org',
        paths: paths.map((path) => ({ path: (publicPath == '/' ? '' : publicPath) + path.path })),
        options: {
          filename: 'sitemap.xml',
          lastmod: true,
        },
      }),
    ],
  },
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: paths.map((path) => path.path),
      useRenderEvent: true,
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
      // TODO bug avec webpack 5 (voir https://www.npmjs.com/package/@dreysolano/prerender-spa-plugin)
      postProcess(renderedRoute) {
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
        } else {
          renderedRoute.outputPath = path.join(
            __dirname,
            'dist',
            renderedRoute.route,
            'index.html'
          );
        }
        return renderedRoute;
      },
    },
  },
};
