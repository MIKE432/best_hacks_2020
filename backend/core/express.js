const express = require('express'),
      PORT = 8080;


exports.initExpress = () => {
    let app = express();


    app.route('/*').get((req, res) => {
        return res.send({hey: "hey"})
    })

    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}!`)
    })
}