
define(['marionette', 'views/sidebar'], function(Marionette, Sidebar) {
  var App = new Marionette.Application();

  App.addRegions({
    sidebar: '#sidebar',
    main: '#main'
  });

  App.addInitializer(function() {
    App.sidebar.show(Sidebar);
  });
  App.start();
  return App;
});
