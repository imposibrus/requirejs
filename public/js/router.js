
define(['backbone', 'app', 'views/usersList'], function(Backbone, App, UsersList) {
  return Marionette.AppRouter.extend({
    routes: {
      "": "indexPage",
      "users": "usersList",
      "posts": "postsList"
    },
    indexPage: function() {
      console.log('indexPage');
      require(['modules/footer'], function() {
        App.execute("footer:setContent", 'Footer content for index page');
      });
    },
    usersList: function() {
      App.main.show(UsersList);
      console.log('usersList');
    },
    postsList: function() {
      console.log('postsList');
    }
  });
});

