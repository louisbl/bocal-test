/**
 * # Main Application
 *
 * Creates the root view and loads all sub-application.
 */
import debug from 'debug';
import Mn from 'backbone.marionette';
import Radio from 'backbone.radio';

import RootView from './RootView';

// Define the tag name for logs.
const dbg = debug('bocal-test:root-app');

export default Mn.Application.extend({

  initialize(options) {
    this.rootView = new RootView({
      el: options.rootEl
    });
  },

  onStart(options) {
    dbg('onStart with options: %o', options);

    this.rootView.render();
    Radio.channel('region').reply('');
  }
});
