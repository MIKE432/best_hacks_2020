
const 
    handleErrors = require('../core/errors').handleErrors,
    petitionService = require('../services/petitionService')

exports.getTestPetition = handleErrors(async (req, res) => {
    const petition = await petitionService.getPetition(req.params.petition_id)
    res.json(petition)
})

exports.getAllPetitions = handleErrors(async (req, res) => {
    const allPetitions = await petitionService.getAllPetitions()
    res.json(allPetitions)
})