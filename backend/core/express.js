const express = require('express'),
      PORT = 8080,
      defaults = require('../defaults/defaults'),
      glob = require('glob'),
      path = require('path'),
      config = require('../core/config'),
      bodyParser = require('body-parser'),
      cors = require('cors')


exports.initExpress = () => {
    let app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
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