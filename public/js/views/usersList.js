
define(['backbone', 'marionette', 'collections/users'], function(Backbone, Marionette, Users) {
  var UserView = Marionette.ItemView.extend({
    tagName: 'tr',
    template: '#users_item_template'
  });

  var UsersList = Marionette.CompositeView.extend({
    //tagName: '',
    //className: '',
    childView: UserView,
    collection: Users,
    template: '#users_list_template',
    childViewContainer: 'tbody'
  });

  return new UsersList();
});
