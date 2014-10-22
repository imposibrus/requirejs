
define(['backbone', 'models/page'], function(Backbone, Page) {
  var Pages = Backbone.Collection.extend({
    model: Page,
    url: '/pages'
  });
  var pages = new Pages();
  pages.fetch();
  return pages;
});
