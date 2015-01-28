import Ember from 'ember';

export default Ember.Controller.extend({
  selectedChapterChanged: function(){
    var chapter = this.get('selectedChapter');
    this.transitionTo('chapter', chapter.id);
  }.observes('selectedChapter')
});
