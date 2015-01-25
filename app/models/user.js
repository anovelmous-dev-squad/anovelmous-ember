import DS from 'ember-data';

var UserModel = DS.Model.extend({
  url: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  groups: DS.hasMany('group')
});

UserModel.reopen({
  FIXTURES: [
    {
      id: 0,
      username: 'user1',
      email: 'user@seomthing.com',
      groups: []
    },
    {
      id: 1,
      username: 'user2',
      email: 'user2@something.com',
      groups: []
    }
  ]
});

export default UserModel;
