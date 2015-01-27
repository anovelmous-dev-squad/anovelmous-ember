import DS from 'ember-data';

var NovelModel = DS.Model.extend({
  title: DS.attr('string'),
  chapters: DS.hasMany('chapter')
});

NovelModel.reopen({
  FIXTURES: [
    {
      id: 5014,
      title: 'My First Novel',
      chapters: [
          5015
      ]
    },
    {
      id: 1,
      title: 'My Second Novel',
      chapters: []
    }
  ]
});

export default NovelModel;
