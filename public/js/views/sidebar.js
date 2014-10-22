
define(['marionette', 'underscore', 'collections/pages'], function(Marionette, _, pages) {
  var ChildView = Marionette.ItemView.extend({
    tagName: 'li',
    template: _.template('<a href="<%= link %>"><%= title %></a>'),
    events: {
      "click a": 'navigate'
    },
    navigate: function() {
      this.$el.addClass('active').siblings('li').removeClass('active')
      console.log('navigate');
      return false;
    },
    ui: {
      li: 'a'
    }
  });
  var Sidebar = Marionette.CompositeView.extend({
    childView: ChildView,
    collection: pages,
    childViewContainer: 'ul.nav',
    template: _.template('<ul class="nav nav-pills nav-stacked"></ul>')
  });

  return new Sidebar();
});

