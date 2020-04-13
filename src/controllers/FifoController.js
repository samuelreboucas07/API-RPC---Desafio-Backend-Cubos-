const db = require('./../database/connection');
const _ = require('loadsh');

module.exports = {

    async addToLine(req, res){
        db.get('Fifo')
        .push({
            idUser: req.body.idUser
        })
        .write()
        
        const positionUser = await db.get('Fifo').size()

        res.json({positionUser})
    },

    async findPosition (req, res) {
        const idUser = db.get('Users')
                    .find({email: req.body.email})
                    .value()
                    .id

        const position = await db.get('Fifo')
                        .findIndex({idUser: idUser}) + 1;

        res.json({position})
    },

    async showLine(req, res){
        const Fifo = await db.get('Fifo').value()
        _.forEach(Fifo, async function(value) {
            const user = await db.get('Users')
                        .find({id: value.idUser})
                        .value()
            console.log(user)
          });
          res.json({})
    }
}