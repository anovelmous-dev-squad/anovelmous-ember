import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('read');
  this.route('read/live');
  this.route('chapter');
  this.route('sidebar');
});

export default Router;
