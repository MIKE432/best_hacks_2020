const db = require('../core/sequalize')

exports.getPetition = async (id) => {
    const petition = await db.Petitions.findOne({ where: { id } });
    return petition
}