const express = require('express');
const path = require('path');
const moment = require('moment');
let app = express();

function formatTime(time){
    let unix = null;
    let natural = null;

    if(time >= 0){
        unix = time;
        let n = moment(unix).format("MMMM DD, YYYY");
        return {
            unix: unix,
            natural: n
        }
    }
    else if(time === "" && moment.format("MMMM DD, YYYY").isValid()){
        natural = time;
        let u = moment(time,"MMMM DD, YYYY").format('X');
        return {
            unix: u,
            natural: natural
        }
    }
    else {
        return {
            unix: null,
            natural: null
        }
    }

}

function timestamp(port){

    app.use(function(req,res,next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use('/', express.static(__dirname, "/public"));

    app.get('/:time',function(req,resp){
        let timequery = req.params.time;
        resp.send(formatTime(timequery));
    });
    app.listen(port);
    console.log("Listening on: " + port);
}

timestamp(process.env.PORT || 3000);
