const petitionController = require('../controllers/petitionController');

module.exports = (app) => {
    app.route('/api/petition/test').get(petitionController.getTestPetition)
}