import Ember from 'ember';

export default Ember.Controller.extend({
  isLive: function(){
    return true;
  }.property(),
  novelChapters: function(){
    return this.get('model.chapters');
  }.property('model.chapters', 'model.chapters.@each'),
  selectedChapterChanged: function(){
    var chapter = this.get('selectedChapter');
    this.transitionToRoute('chapter', chapter.get('id'));
  }.observes('selectedChapter')
});
