const express = require('express');
const path = require('path');
let app = express();

function getTime(time){
    return {
        unixtime: time.getTime(),
        natural: time.toDateString()
    }
}

function timestamp(port,file){
    app.use('/',express.static(path.join(__dirname,file)));
    app.get('/:time',function(req,resp){
        let timequery = req.param.time;
        resp.send(getTime(timequery));
    });
    app.listen(port);
    console.log("Listening on: " + port);
}

timestamp(process.env.PORT || 3000,"index.html");
