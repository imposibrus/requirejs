
define(['backbone', 'models/user'], function(Backbone, User) {
  var Users = Backbone.Collection.extend({
    model: User,
    url: '/users'
  });
  var users = new Users();
  users.fetch();
  return users;
});
