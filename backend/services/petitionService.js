const db = require('../core/sequalize')

exports.getPetition = async (id) => {
    const petition = await db.petitions.findOne({ where: { id } });
    return petition
}