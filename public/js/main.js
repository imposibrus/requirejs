
requirejs.config({
  baseUrl: '/js',
  paths: {
    "jquery": "/bower_components/jquery/dist/jquery",
    "underscore": "/bower_components/underscore/underscore",
    "backbone": "/bower_components/backbone/backbone",
    "marionette": "/bower_components/marionette/lib/backbone.marionette",
    "bootstrap": "/bower_components/bootstrap/dist/js/bootstrap",
    "views": 'views',
    "models": 'models',
    "collections": 'collections'
  },
  shim: {
    "jquery.beta": ['jquery'],
    "bootstrap": ['jquery']
  }
});

requirejs(["bootstrap"]);

//define(['jquery', 'mymodule','jquery.alpha','jquery.beta'], function($, mymodule,q,w,e) {
//  $('body').alpha().beta();
//  console.log(mymodule, e);
//});

define(['app', 'router', 'views/navigation'], function(App, AppRouter, Navigation) {
  App.addInitializer(function() {
    App.Router = new AppRouter();
    App.sidebar.show(Navigation.sidebar);
    App.navigation.show(Navigation.navigation);
    return App.vent.trigger("routing:started");
  });
  return App.start();
});
