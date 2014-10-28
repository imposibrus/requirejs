
define(['backbone'], function(Backbone) {
  var User = Backbone.Model.extend({
    defaults: {
      name: 'anonymous',
      age: 20
    }
  });
  return User;
});
