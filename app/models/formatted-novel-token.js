import DS from 'ember-data';

export default DS.Model.extend({
  token: DS.belongsTo('token'),
  ordinal: DS.attr('integer'),
  chapter: DS.belongsTo('chapter')
});
