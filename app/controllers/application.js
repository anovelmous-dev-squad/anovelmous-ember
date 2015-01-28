import Ember from 'ember';

export default Ember.ArrayController.extend({
  novels: function(){
    return this.get('model');
  }.property('model', 'model.@each'),
  selectedNovelChanged: function(){
    var novel = this.get('selectedNovel');
    this.transitionToRoute('novel', novel.id);
  }.observes('selectedNovel')
});
