const petitionController = require('../controllers/petitionController');

module.exports = (app) => {
    app.route('/petition/test').get(petitionController.getTestPetition)
}