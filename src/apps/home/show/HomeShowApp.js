import {App} from 'marionette.toolkit';
import debug from 'debug';

import HomeShowComponent from './HomeShowComponent';

const dbg = debug('bocal-test:home:show');

export default App.extend({
  onStart(options) {
    dbg('onStart', options);

    const homeShowComponent = new HomeShowComponent({});
    homeShowComponent.showIn(options.region, {template: false});
  }
});
