import debug from 'debug';
import Mn from 'backbone.marionette';

import tpl from './root.hbs';

const dbg = debug('bocal-test:root-view');

export default Mn.LayoutView.extend({

  template: tpl,

  regions: {
    content: {
      selector: '#main-content'
    }
  },

  initialize() {
    dbg('initialize');
  },

  onRender() {
    dbg('onRender');
  }
});
