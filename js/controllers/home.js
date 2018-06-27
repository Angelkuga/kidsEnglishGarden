define(['jquery', 'underscore', 'backbone', 'text!../../templs/home.html'], function($, _, Backbone, TplHome) {
  var homeData = new Backbone.Model({
    source: {
      lessons: [
        {
          name: 'ABC',
          ageRange: '6-8',
          videoSrc: 'http://player.youku.com/embed/XMzI1MjcwNDYzMg==',
          imgSrc: '../asset/images/lessons/abc.png'
        },
        {
          name: 'ABC song',
          ageRange: '6-8',
          videoSrc: 'http://player.youku.com/embed/XMzI1MjcxOTkyMA==',
          imgSrc: '../asset/images/lessons/abc1.png'
        }
      ]
    }
  });
  var view = Backbone.View.extend({
    className: 'main',
    model: homeData,
    initialize: function() {
    },
    events: {

    },
    render: function() {
      var data = this.model.get('source');
      var html = _.template(TplHome)(data);
      var contaier = $('.main');
      contaier.html(html);
    }
  });
  return view;
});
