import './init';

import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

// start the marionette inspector
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}
