import HomeApp from 'apps/home/HomeApp';

const routes = {
  '(/)': {
    app: HomeApp,
    region: 'content',
    action: 'show'
  },
  'home(/)': {
    app: HomeApp,
    region: 'content',
    action: 'show'
  }
};

export default routes;
