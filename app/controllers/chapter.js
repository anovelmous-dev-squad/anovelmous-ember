import Ember from 'ember';

export default Ember.ObjectController.extend({
  novelTokens: function(){
    return this.get('model.tokens');
  }.property('model.tokens', 'model.tokens.@each')
});
