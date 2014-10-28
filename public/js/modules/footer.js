
define(['app'], function(App) {
  App.module('Footer', function(Footer, App, Backbone, Marionette) {

    var view = Marionette.ItemView.extend({
      el: '#footer',
      ui: {
        content: '.footer_content'
      },
      template: '#footer_template'
    });

    Footer.view = new view();

    Footer.view.render();

    App.commands.setHandler('footer:setContent', function(content) {
      Footer.view.ui.content.html(content);
    });
  });
});

