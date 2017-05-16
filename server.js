const express = require('express');
const path = require('path');
let app = express();

function getTime(time){
    return {
        unixtime: time.getTime(),
        natural: time.toDateString()
    }
}

function timestamp(port){
    app.get('/', function(req, res) {
    res.send(__dirname + 'index.html');
});
    app.get('/:time',function(req,resp){
        let timequery = req.param.time;
        resp.send(getTime(timequery));
    });
    app.listen(port);
    console.log("Listening on: " + port);
}

timestamp(process.env.PORT || 3000);
