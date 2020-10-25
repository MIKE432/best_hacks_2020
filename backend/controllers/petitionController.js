const 
    handleErrors = require('../core/errors').handleErrors,
    petitionService = require('../services/petitionService')

exports.getTestPetition = handleErrors(async (req, res) => {
    console.log(req.params.petition_id)
    const petition = await petitionService.getPetition(req.params.petition_id)
    res.json(petition)
})