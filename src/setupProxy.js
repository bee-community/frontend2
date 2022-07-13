const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://sagang3.duckdns.org:81',
      changeOrigin: true,
    }),
  );
};
