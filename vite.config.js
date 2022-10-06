import { defineConfig } from 'vite';
const path = require('path');
import react from '@vitejs/plugin-react';

const root = path.resolve(__dirname);
const cwd = path.resolve('./');
const pathToRoot = path.relative(cwd, root);
const HTMLandAssetsLocation = 'public';

const middleware = () => {
  return {
    name: 'middleware',
    apply: 'serve',
    configureServer(viteDevServer) {
      return () => {
        viteDevServer.middlewares.use(async (req, res, next) => {
          if (
            !req.originalUrl.endsWith('.html') &&
            !req.originalUrl.endsWith('.json') &&
            req.originalUrl !== '/'
          ) {
            // redirect all requests to index.html so our JS always gets loaded before the router takes over
            // otherwise page refreshes on paths do not properly resolve (*)
            req.url =
              '/' + pathToRoot + '/' + HTMLandAssetsLocation + '/index.html';
          } else if (req.url === '/index.html') {
            // intercept index.html request and point it to index.html in public assets
            req.url = '/' + pathToRoot + '/' + HTMLandAssetsLocation + req.url;
          }

          next();
        });
      };
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  // plugins: [react(), middleware()],
  // Adding middleware breaks storybook, removing it breaks vite dev
  plugins: [react()],
});
