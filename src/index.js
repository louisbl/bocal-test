import $ from 'jquery';
import debug from 'debug';

import RootApp from 'apps/root/RootApp';
import routes from 'apps/routes';

import Router from 'services/Router';

const dbg = debug('bocal-test:index');

$(() => {
  dbg('document ready');

  const rootApp = new RootApp({
    rootEl: 'body'
  });
  const router = new Router({
    regionManager: rootApp.rootView,
    routes: routes
  });

  rootApp.start();

  router.start();
});
