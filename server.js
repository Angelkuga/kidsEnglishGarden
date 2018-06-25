var express = require('express');
var hbs = require('express-hbs');
var app = express();

// 设置静态资源查找
app.use(express.static('./'));


// 设置模板引擎
app.set('view engine', 'hbs');
app.engine('hbs', hbs.express4({
  defaultLayout: __dirname + '/views/layouts/default.hbs',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}));
app.set('views', __dirname + '/views');


// 设置路由
app.get('/page/:pagename', function (req, res) {
  console.log(req.params);
  var pageName = req.params.pagename;
  res.render('page', {js: pageName});
});


// 设置服务监听端口
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(__dirname);
  console.log('app is running, listening at http://%s:%s', host, port);
});