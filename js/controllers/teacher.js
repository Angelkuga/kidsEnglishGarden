define(['jquery', 'underscore', 'backbone', 'text!../../templs/teacher.html'], function($, _, Backbone, TplTeacher) {
  var teacherData = new Backbone.Model({
    source: {
      teachers: [
        {
          name: 'Angel Kuga',
          position: 'junior teacher',
          avatar: '../../asset/images/about/staff2.jpg'
        },
        {
          name: 'Auntie',
          position: 'senior teacher',
          avatar: '../../asset/images/about/staff4.jpg'
        }
      ]
    }
  });
  var view = Backbone.View.extend({
    className: 'main',
    model: teacherData,
    initialize: function() {
      this.render();
    },
    events: {

    },
    render: function() {
      var data = this.model.get('source');
      var html = _.template(TplTeacher)(data);
      var contaier = $('.main');
      contaier.html(html);
    }
  });
  return view;
});
