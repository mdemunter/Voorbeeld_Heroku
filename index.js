const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine", "ejs");

const data = require('./data/images.json');

app.get('/', function(req, res){
  res.render('home', {
      images: data.images
  });
});

app.get('/gallerij', function(req, res){
  res.render('gallerij', {
    images: data.images
  });
});

app.get('/contact', function(req, res){
  res.render('contact', {
  });
});

app.get('/detailpagina', function(req, res){
  res.render('detailpagina', {
  });
});

// heroku poort instellingen
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));