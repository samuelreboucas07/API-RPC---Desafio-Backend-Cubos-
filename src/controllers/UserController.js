const db = require('../database/connection');
const uniqid = require('uniqid');

module.exports = {

    async createUser(req, res){
        const user = await db.get('Users')
        .push({
                id: uniqid(), 
                name: req.body.name, 
                email: req.body.email, 
                genre: req.body.genre
            })
        .write()
        //Error
        res.json({user})
    }
}