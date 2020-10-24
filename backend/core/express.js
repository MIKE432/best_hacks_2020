const express = require('express'),
      PORT = 8080,
      defaults = require('../defaults/defaults')


exports.initExpress = () => {
    let app = express();

    const routes = glob.sync(path.resolve(defaults.patterns.routes));

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