import Radio from 'backbone.radio';
import Backbone from 'backbone';
import BaseRouter from 'backbone.base-router';

export default BaseRouter.extend({

  channel: Radio.channel('router'),

  currentApp: null,

  initialize(options) {
    this.regionManager = options.regionManager;
  },

  onNavigate(routeData) {
    const linked = routeData.linked;
    const app = linked.app.getChildApp(linked.action);
    const region = this.regionManager.getRegion(linked.region);

    if (this.currentApp) {
      this.currentApp.stop();
    }

    this.currentApp = app.start({
      region, routeData
    });

    this.channel.trigger('navigate', routeData);
  },

  start(options) {
    Backbone.history.start(options);
  }
});
