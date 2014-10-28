
define(['marionette'], function(Marionette) {
  App = new Marionette.Application();

  App.addRegions({
    sidebar: '#sidebar',
    main: '#main',
    navigation: '#navigation',
    footer: '#footer'
  });

  App.addInitializer(function() {
    App.vent.on('routing:started', function() {
      if(!Backbone.History.started) {
        Backbone.history.start({pushState: true});
      }
    });
  });

  return App;
});
