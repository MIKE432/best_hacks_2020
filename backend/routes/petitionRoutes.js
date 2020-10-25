const petitionController = require('../controllers/petitionController');

module.exports = (app) => {
    app.route('/api/petition/:petition_id').get(petitionController.getPetition)

    app.route('/api/petitions').get(petitionController.getAllPetitions)

    app.route('/api/petitions').post(petitionController.createPetition)
}