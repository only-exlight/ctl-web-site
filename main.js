"use strict";
let express = require('express'),
    app = express();

app.get('/', function(req,res){
    res.render('page.jade');
})

app.use(express.static(__dirname + '/static'));

app.listen(6025, function(){
    console.log('Listen port 6025');
})
