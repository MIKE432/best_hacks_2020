const express = require('express'),
      PORT = 8080,
      defaults = require('../defaults/defaults'),
      glob = require('glob'),
      path = require('path'),
      config = require('../core/config'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      db = require('./sequalize')


exports.initExpress = () => {
    let app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
          'Access-Control-Allow-Headers',
          'Content-Type'
        );
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type")
        next();
    });

    const routes = config.routes

    routes.forEach((route) => {
        require(route)(app);
    });


    app.route('/*').get((req, res) => {
        return res.send({hey: "hey"})
    })

    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}!`)
    })
}