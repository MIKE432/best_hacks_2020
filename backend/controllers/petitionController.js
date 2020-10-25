
const 
    handleErrors = require('../core/errors').handleErrors,
    petitionService = require('../services/petitionService')

exports.getPetition = handleErrors(async (req, res) => {
    const petition = await petitionService.getPetition(req.params.petition_id)
    res.json(petition)
})

exports.getAllPetitions = handleErrors(async (req, res) => {
    const allPetitions = await petitionService.getAllPetitions()
    res.json(allPetitions)
})

exports.createPetition = handleErrors(async (req, res) => {
    const newPetition = await petitionService.createPetition(req.body)
    res.sendStatus(200)
})