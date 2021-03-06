import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  baseURL: config.environment == 'development' ? config.baseURL : window.RAILS_ENV.baseURL
});

Router.map(function() {
});

export default Router;
