const petitionController = require('../controllers/petitionController');

module.exports = (app) => {
    app.route('/api/petition/:petition_id').get(petitionController.getTestPetition)
}