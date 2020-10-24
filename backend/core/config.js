const
    glob = require('glob'),
    paths = require('../defaults/defaults').paths,
    path = require('path')

const getPaths = (pattern) => {
    return glob.sync(path.resolve(pattern));
}

const initConfig = () => {
    let config = {}

    config.models = getPaths(paths.models);
    config.routes = getPaths(paths.routes);

    return config;
}

module.exports = initConfig();