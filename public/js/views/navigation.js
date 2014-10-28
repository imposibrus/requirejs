
define(['marionette', 'underscore', 'collections/pages', 'app'], function(Marionette, _, pages, App) {
  var ChildView = Marionette.ItemView.extend({
    tagName: 'li',
    onRender: function() {
      if(this.model.get('link') == document.location.pathname) {
        this.$el.addClass('active');
      }
    },
    template: _.template('<a href="<%= link %>"><%= title %></a>'),
    events: {
      "click a": 'navigate'
    },
    navigate: function() {
      App.Router.navigate(this.ui.link.attr('href'), {trigger: true});
      return false;
    },
    ui: {
      link: 'a'
    }
  });

  var SidebarNavigation = Marionette.CompositeView.extend({
    childView: ChildView,
    collection: pages,
    childViewContainer: 'ul.nav',
    template: _.template('<ul class="nav nav-pills nav-stacked"></ul>')
  });

  var Navigation = SidebarNavigation.extend({
    template: _.template($('#navigation_template').html())
  });

  var sidebar = new SidebarNavigation();
  var navigation = new Navigation();

  App.vent.on('routing:started', function() {
    App.Router.on('route', function () {
      sidebar.render();
      navigation.render();
    });
  });

  return {sidebar: sidebar, navigation: navigation};
});

