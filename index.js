let express = require('express');
var bodyParser = require('body-parser')
let app = express();
var usuarios = [{name : 'Roger', pass : "1234"},
                {name : 'Sean', pass : "321"},
               {name : 'Alberto', pass : "6969"},];
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render("login");
});

app.post('/', function (req, res) {

  for (var i = 0; i < usuarios.length; i++) {
    //usuarios[i]['name'] == req.body.name &&  ==
    if(usuarios[i]['name'] == req.body.nombre &&usuarios[i]['pass'] == req.body.pass){
      console.log("usuario correcto!!!")
      res.send('Usuario Correcto!  Nombre: ' + req.body.nombre + ' => Password: ' + req.body.pass);
    }
  }

});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
