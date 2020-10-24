const express = require('express'),
      PORT = 8080,
      defaults = require('../defaults/defaults'),
      glob = require('glob'),
      path = require('path'),
      config = require('../core/config')


exports.initExpress = () => {
    let app = express();

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