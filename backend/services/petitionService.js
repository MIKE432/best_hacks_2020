const db = require('../core/sequalize')

exports.getPetition = async (petitionid) => {
    const petition = await db.petitions.findOne({ where: { petitionid } });
    return petition
}

exports.getAllPetitions = async () => {
    const allPetitions = await db.petitions.findAll({ order: [['likecount', 'DESC']] })
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

exports.updateLikes = async (petitionid) => {
    const updatedPetition = await db.petitions.findOne({ where: { petitionid } });
    db.petitions.update({ likecount: updatedPetition.likecount + 1}, { where: { petitionid } })
}