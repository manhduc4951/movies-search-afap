var express = require("express");

var app = express();

var request = require("request");

var bodyParser = require('body-parser');

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function(req, res){
      res.render('home');
});

app.get('/search', function(req, res){
      var movieName = req.query.movieName;
      if(movieName) {
            var link = 'http://www.omdbapi.com/?s=' + movieName + '&apikey=thewdb';
            link = link.replace(/ /g,"+");
            request(link, function (error, response, body) {
              //console.log('error:', error);
              //console.log('statusCode:', response && response.statusCode); 
              console.log('body:', body);
              var data = JSON.parse(body);
              if(data.Response == 'True') {
                  var movies = data.Search;
                  res.render('home',{movies:movies}); 
              } else {
                  res.render('home',{found:0}); 
              }
            });
      } else {
            res.render('home',{found:0}); 
      }
});


app.listen(process.env.PORT, process.env.IP, function(){
      console.log("Server has started");
});