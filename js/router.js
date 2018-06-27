define(['backbone', '../js/route'], function (Backbone, route) {
  var Router = Backbone.Router.extend({
    routes: {
      'page/:pageName': 'controller'
    },
    controller: function(pageName) {
      route(pageName);
    }
  });
  var router = new Router();
  return router;
})