const express = require('express');
let app = express();

function getTime(time){
    return {
        unixtime: time.getTime(),
        natural: time.toDateString()
    }
}

function timestamp(port){
    app.get('/:time',function(req,resp){
        resp.send(getTime(req.query));
    });
    app.listen(port);
    console.log("Listening on: " + port);
}

timestamp(process.env.port || 3000);
