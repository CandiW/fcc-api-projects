const express = require('express');
let app = express();

function getTime(time){
    return {
        unixtime: time.getTime(),
        natural: time.toDateString()
    }
}

function timestamp(port){
    app.get('/',function(req,resp){
        getTime(req.query);
        resp.send(req.query);
        document.getElementById('app').innerHTML = getTime(req.query);
    });
    app.listen(port);
    console.log("Listening on: " + port);
}

timestamp(process.env.port || 3000);
