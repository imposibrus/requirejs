
requirejs.config({
  baseUrl: '/js',
  paths: {
    "jquery": "/bower_components/jquery/dist/jquery"
  },
  shim: {
    "jquery.beta": ['jquery']
  }
});

//requirejs(["jquery"]);

//define(['jquery', 'mymodule','jquery.alpha','jquery.beta'], function($, mymodule,q,w,e) {
//  $('body').alpha().beta();
//  console.log(mymodule, e);
//});

define(['mymodule'], function(mymodule) {
  console.log(mymodule);
});
