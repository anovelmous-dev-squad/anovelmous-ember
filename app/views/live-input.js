import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'input',
  classNames: ['live-input'],
  classNameBindings: ['error'],
  error: false
});
