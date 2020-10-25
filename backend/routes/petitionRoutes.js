const petitionController = require('../controllers/petitionController');

module.exports = (app) => {
    app.route('/api/petition/:petition_id').get(petitionController.getTestPetition)

    app.route('/api/petitions').get(petitionController.getAllPetitions)
}