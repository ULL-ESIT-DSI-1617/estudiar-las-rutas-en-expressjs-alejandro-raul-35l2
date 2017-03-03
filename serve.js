var express = require('express')
var app = express()
var path = require('path');


app.set('views', path.join(__dirname, '/gh-pages'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/gh-pages')));

app.get('/', function (req, res) {

  res.render('index', { title: 'Gitbook' });
})

var server = app.listen(8080, function() {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})