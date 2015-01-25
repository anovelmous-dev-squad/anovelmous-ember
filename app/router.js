import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('read', { path: '/' }, function() {
        this.route('live', { path: '/' });
        this.route('chapter');
    });
    this.resource('about', {'path': '/about'});
    this.resource('sidebar', {'path': '/sidebar'});
    this.resource('archive', { path: '/archive' }, function(){

    });
});

export default Router;
