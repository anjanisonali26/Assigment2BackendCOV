const Tawnhall = require('../models/Tawnhall');

class TawnhallController{
    static create(req, res, next) {
        console.log(req._userId)
        const{ 
            tawnhallName
        } = req.body;
        const{
            tawnhallName
        } = req.body;
        const tawnhall = new Tawnhall({
            _userId: req._userId,
            tawnhallName: tawnhallName,
            invadecooldown: 240,
            health: 10, 
            gold: 20,
            meat: 10, 
            energy: 10,
        })
        tawnhall.save()
        .then(function(result){
            res.status(201).send({ 
                msg: 'success welcome',
                data: result
            })
        })
        .catch(next)
    }
    static town(req, res, next){
        Tawnhall.find({
             _userId: req._userId})
             .then((tawnhalls)=>{
                 res.status(200).json({ 
                     success: true, 
                     data: tawnhalls
                 });
             });
    }
}

module.exports = TawnhallController;