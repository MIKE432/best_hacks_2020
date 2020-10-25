const 
    handleErrors = require('../core/errors').handleErrors,
    petitionService = require('../services/petitionService')

exports.getTestPetition = handleErrors(async (req, res) => {
    console.log(req.params)
    const petition = await petitionService.getPetition(1)
    res.json(petition)
})