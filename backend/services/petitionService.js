const db = require('../core/sequalize')

exports.getPetition = async (petitionid) => {
    const petition = await db.petitions.findOne({ where: { petitionid } });
    return petition
}

exports.getAllPetitions = async () => {
    const allPetitions = await db.petitions.findAll()
    return allPetitions
}

exports.createPetition = async (petition) => {
    const createPetition = await db.petitions.create({
        title:      petition.title,
        descript:   petition.descript,
        likecount:  1,
        petitor:    petition.petitor
    })
}