
define(['backbone'], function(Backbone) {
  var Page = Backbone.Model.extend({
    defaults: {
      title: 'Page',
      link: '/'
    }
  });
  return Page;
});
