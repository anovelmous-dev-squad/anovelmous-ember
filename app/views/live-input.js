import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'input',
  attributeBindings: ['value'],
  classNames: ['live-input'],
  classNameBindings: ['error', 'voted', 'success', 'failure', 'nothing'],
  error: false,
  voted: false,
  success: false,
  failure: false,
  nothing: function(){
    return (this.get('error') === this.get('voted') === this.get('success') === false);
  }.property('error', 'voted', 'success'),
  keyUp: function(event){
    if(event.keyCode == 13){  // return key pressed
      if(!this.get('error')){
        this.submitVote();
        // TODO flash messages
      }
      else{
        // TODO
      }
    }
  },
  submitVote: function(){
    // TODO
  },
  validateValue: function(){
    // TODO figure out how to validate value
  }.observes('value')
});
