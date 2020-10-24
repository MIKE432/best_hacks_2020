const db = require('../core/sequalize')

exports.getPetition = async (petitionID) => {
    const petition = await db.petitions.findOne({ where: { petitionID } });
    return petition
}