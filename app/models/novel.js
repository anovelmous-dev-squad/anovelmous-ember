import DS from 'ember-data';

var NovelModel = DS.Model.extend({
  title: DS.attr('string'),
  chapters: DS.hasMany('chapter')
});

NovelModel.reopen({
  FIXTURES: [
    {
      id: 0,
      title: 'My First Novel',
      chapters: []
    },
    {
      id: 1,
      title: 'My Second Novel',
      chapters: []
    }
  ]
});

export default NovelModel;
