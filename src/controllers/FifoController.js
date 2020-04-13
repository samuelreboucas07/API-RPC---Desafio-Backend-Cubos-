const db = require('./../database/connection');
const _ = require('lodash');

module.exports = {

    async addToLine(req, res){
        const userExistFifo = await db.get('Fifo')
                              .find({ idUser: req.body.idUser })
                              .value()
        if(!userExistFifo){
            db.get('Fifo')
            .push({
                idUser: req.body.idUser
            })
            .write()
            const positionUser = await db.get('Fifo').size()
    
            res.json({positionUser})
        }
        else{
            res.json({message: "User already registered in the queue"})
        }
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
        var fifoUsers = [];
        const fifo = await db.get('Fifo').value()
        //Does not exist join or lookup or lowdb
        await fifo.map(async function(value, index) {
            const user = await db.get('Users')
                        .find({id: value.idUser})
                        .value()
            fifoUsers.push({
                name: user.name, 
                genre: user.genre, 
                email: user.email, 
                position: index+1
            })
        });
        res.json({fifoUsers})
    },

    async filterLine(req, res){
        var fifoUsersGenre = []
        const fifo = await db.get('Fifo').value()
        await fifo.map(async function(value, index){
            const user = await db.get('Users')
                        .find({
                                id: value.idUser,
                                genre: req.body.genre
                              })
                        .value()
            fifoUsersGenre.push({
                name: user.name,
                genre: user.genre,
                email: user.email,
                position: index+1
            })
        });
        res.json({fifoUsersGenre})
    },

    async popLine(req, res){
        const idUserFirst = await db.get('Fifo[0]').value()
        
        await db.get('Fifo')
        .remove({idUser: idUserFirst.idUser})
        .write()

        const user = await db.get('Users')
                    .find({id: idUserFirst.idUser})
                    .value()  

        res.send({user})
    }
}