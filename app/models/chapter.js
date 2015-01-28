import DS from 'ember-data';

var ChapterModel = DS.Model.extend({
  title: DS.attr('string'),
  novel: DS.belongsTo('novel')
});

ChapterModel.reopenClass({
    FIXTURES: [
        {
            "id": 5015,
            "title": "Chapter One",
            "novel": 5014
        }
    ]
});

export default ChapterModel;
