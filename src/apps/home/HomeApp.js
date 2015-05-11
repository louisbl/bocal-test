import {App} from 'marionette.toolkit';

import HomeShowApp from './show/HomeShowApp';

const HomeApp = App.extend({
  startAfterInitialized: true,

  childApps: {
    show: HomeShowApp
  }
});

export default new HomeApp();
