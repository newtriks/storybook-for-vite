const { createProxyMiddleware } = require('http-proxy-middleware');

function expressMiddleWare(app) {
  // Configure express instance to use proxy
  app.use('/fact', createProxyMiddleware({ target: 'https://catfact.ninja', changeOrigin: true }));
}

module.exports = expressMiddleWare;
