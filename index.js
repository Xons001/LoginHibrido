let express = require('express');
var bodyParser = require('body-parser')
let app = express();
var usuarios = [{name : 'roger', pass : "1234"},
                {name : 'sean', pass : "321"},
               {name : 'alberto', pass : "6969"},];
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render("login");
});

app.post('/', function (req, res) {

  for (var i = 0; i < usuarios.length; i++) {
    if(usuarios[i]['name'] == req.body.nombre && usuarios[i]['pass'] == req.body.pass){
      console.log("usuario correcto!!!")
      res.send('Usuario Correcto!  Nombre: ' + req.body.nombre + ' => Password: ' + req.body.pass);
      return;
    }
  }
  res.send("usuario incorrecto");
});

app.get('/api/login/:user/:pass', function (req, res) {

  for (var i = 0; i < usuarios.length; i++) {
    if(usuarios[i]['name'] == req.params.user && usuarios[i]['pass'] == req.params.pass){
      res.send('Usuario Correcto!  Nombre: ' + req.params.user + ' => Password: ' + req.params.pass);
      return;
    }
    res.send("usuario incorrecto");
  }
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
