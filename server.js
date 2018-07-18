'use strict';

var express = require('express');
const fileUpload = require('express-fileupload');
var cors = require('cors');

// require and use "multer"...

var app = express();

app.use(cors());
app.use(fileUpload());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', (req, res) => {
 
  var file = req.files.upfile;
  
  res.json({name: file.name, type: file.mimetype, size: file.data.toString().length});
});

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
