const 
    handleErrors = require('../core/errors').handleErrors,
    petitionService = require('../services/petitionService')

exports.getTestPetition = handleErrors(async (req, res) => res.json({hey: "adfjhdsjd"}))