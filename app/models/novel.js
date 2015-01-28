import DS from 'ember-data';

var NovelModel = DS.Model.extend({
  title: DS.attr('string'),
  chapters: DS.hasMany('chapter', {
    async: true
  })
});

NovelModel.reopenClass({
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
