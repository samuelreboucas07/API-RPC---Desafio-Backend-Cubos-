const db = require('../database/connection');
const uniqid = require('uniqid');

module.exports = {

    async createUser(req, res){
        const idUser = uniqid();
        await db.get('Users')
        .push({
                id: idUser, 
                name: req.body.name, 
                email: req.body.email, 
                genre: req.body.genre
            })
        .write()
        const user = await db.get('Users')
                    .find({id: idUser})
                    .value()
        res.json({user})
    }
}