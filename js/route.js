define(['require'], function(require) {
  return function(routePath) {
    require(['../js/controllers/' + routePath], function(Page) {
      var pageView = new Page();
      pageView.render();
    });
  }
})